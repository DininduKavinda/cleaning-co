<?php

namespace App\Http\Controllers\Api\Auth;

use App\Filters\Auth\UserFilter;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserCollection;

class UserController extends Controller
{

    public function index(Request $request)
    {
        $filter = new UserFilter;
        $filterItems = $filter->transform($request);
        $includeStaff = $request->query('includeSatff');
        $includeClient = $request->query('includeClient');
        $includeAll = $request->query('includeAll');
        $user = User::where($filterItems);
        if ($includeStaff) {
            $user = $user->with(['staffs', 'user_type']);
        } elseif ($includeClient) {
            $user = $user->with(['clients', 'user_type']);
        } elseif ($includeAll) {
            $user = $user->with(['staffs', 'clients', 'user_type']);
        }
        return new UserCollection($user->paginate(10)->appends($request->query()));
    }


    public function create()
    {

        // $roles = Role::pluck('name', 'name')->all();

        // return view('role-permission.user.create', ['roles' => $roles]);
    }

    public function store(StoreUserRequest $request)
    {
        $validatedData = $request->validated();

        $user = User::create($validatedData);

        $user->syncRoles($validatedData['roles']);

        return response()->json([
            'user' => $user,
        ]);
    }

    public function show(Request $request, User $user)
    {
        $includeStaff = $request->query('includeSatff');
        $includeClient = $request->query('includeClient');
        $includeAll = $request->query('includeAll');
        if ($includeStaff) {
            $user = $user->loadMissing(['staffs', 'user_type', 'roles']);
        } elseif ($includeClient) {
            $user = $user->loadMissing(['clients', 'user_type', 'roles']);
        } elseif ($includeAll) {
            $user = $user->loadMissing(['staffs', 'clients', 'user_type', 'roles']);
        } else {
            $user = $user->loadMissing('roles');
        }
        return new UserResource($user);
    }

    public function update(UpdateUserRequest $request, User $user)
    {
        $validatedData = $request->validated();

        $user->update($validatedData);

        $user->syncRoles([$validatedData['roles'], 'web']);

        return response()->json([
            'user' => new UserResource($user),
        ]);
    }


    public function destroy(User $user)
    {
        $user = $user->delete();
        if ($user) {
            $message = 'Successfully';
        } else {
            $message = 'An Error Occured';
        }
        return response()->json([
            'message' => $message,
        ]);
    }
}
