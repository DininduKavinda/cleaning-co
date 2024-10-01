<?php

namespace App\Http\Controllers\Api\Com;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserTypeRequest;
use App\Http\Requests\UpdateUserTypeRequest;
use App\Http\Resources\Api\Com\UserTypeCollection;
use App\Http\Resources\Api\Com\UserTypeResource;
use App\Models\UserType;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;

class UserTypeController extends Controller implements HasMiddleware
{
    public static function middleware(): array
    {
        return [
            new Middleware('permission:view level', only: ['indexs', 'shows']),
            new Middleware('permission:create level', only: ['creates', 'stores']),
            new Middleware('permission:update clilevelent', only: ['updates', 'edits']),
            new Middleware('permission:delete level', only: ['destroys']),
        ];
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $includeUsers = $request->query('includeUsers');
        $uT = UserType::whereNotNull('id');
        if ($includeUsers) {
            $uT = $uT->with(['users']);
        }

        return new UserTypeCollection($uT->paginate(10)->appends($request->query()));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserTypeRequest $request)
    {
        $validatedData = $request->validated();
        $itemType = new UserTypeResource(UserType::create($validatedData));

        return response()->json($itemType, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(UserType $userType)
    {
        return new UserTypeResource($userType);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(UserType $userType)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserTypeRequest $request, UserType $userType)
    {
        $validatedData = $request->validated();
        $userType->update($validatedData);

        return new UserTypeResource($userType);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserType $userType)
    {
        $userType->delete();

        return response()->json(['message' => 'userType deleted successfully'], 204);
    }
}
