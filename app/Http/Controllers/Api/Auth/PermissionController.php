<?php

namespace App\Http\Controllers\Api\Auth;

use App\Filters\Auth\PermissionFilter;
use App\Http\Resources\Api\Auth\PermissionCollection;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Spatie\Permission\Models\Permission;
use App\Http\Controllers\Controller;
use App\Http\Requests\StorePermissionRequest;
use App\Http\Requests\UpdatePermissionRequest;
use App\Http\Resources\Api\Auth\PermissionResource;
use App\Http\Resources\UserResource;

class PermissionController extends Controller
{

    public function index(Request $request)
    {
        $filter = new PermissionFilter;
        $filterItems = $filter->transform($request);
        $permissions = Permission::where($filterItems)->paginate(10);
        return new PermissionCollection($permissions);
    }


    public function create()
    {
        //
    }

    public function store(StorePermissionRequest $request)
    {
        $validatedData = $request->validated();

        $permission = Permission::create($validatedData);

        return response()->json([
            'permission' => $permission,
        ]);
    }

    public function show(Permission $permission)
    {
        return new UserResource($permission);
    }

    public function update(UpdatePermissionRequest $request, Permission $permission)
    {
        $validatedData = $request->validated();

        $permission->update($validatedData);

        return response()->json([
            'permission' => new PermissionResource($permission),
        ]);
    }

    public function destroy(Permission $permission)
    {
        $permission = $permission->delete();
        if ($permission) {
            $message = 'Successfully';
        } else {
            $message = 'An Error Occured';
        }
        return response()->json([
            'message' => $message,
        ]);
    }
}
