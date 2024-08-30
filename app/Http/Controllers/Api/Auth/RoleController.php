<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Requests\UpdateRoleRequest;
use App\Http\Resources\Api\Auth\RoleResource;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreRoleRequest;
use App\Http\Resources\Api\Auth\RoleCollection;

class RoleController extends Controller
{

    public function index()
    {
        $roles = Role::get();
        return new RoleCollection($roles);
    }

    public function store(StoreRoleRequest $request)
    {
        $validatedData = $request->validated();

        $role = Role::create($validatedData);

        return response()->json([
            'role' => $role,
        ]);
    }

    public function show(Role $role)
    {
        return new RoleResource($role);
    }

    public function update(UpdateRoleRequest $request, Role $role)
    {
        $validatedData = $request->validated();

        $role->update($validatedData);

        return response()->json([
            'role' => new RoleResource($role),
        ]);
    }

    public function destroy(Role $role)
    {
        $role = $role->delete();
        if ($role) {
            $message = 'Successfully';
        } else {
            $message = 'An Error Occured';
        }
        return response()->json([
            'message' => $message,
        ]);
    }

    public function addPermissionToRole($roleId)
    {
        $role = Role::findOrFail($roleId);
        $rolePermissionsNames = DB::table('role_has_permissions')
            ->join('permissions', 'role_has_permissions.permission_id', '=', 'permissions.id')
            ->where('role_has_permissions.role_id', $role->id)
            ->pluck('permissions.name', 'permissions.id')
            ->all();
        $rolePermissions = DB::table('role_has_permissions')
            ->where('role_has_permissions.role_id', $role->id)
            ->pluck('role_has_permissions.permission_id', 'role_has_permissions.permission_id')
            ->all();
        return response()->json([
            'role' => $role,
            'rolePermissions' => $rolePermissions,
            'rolePermissionsNames' => $rolePermissionsNames,
        ]);
    }

    public function givePermissionToRole(Request $request, $roleId)
    {
        $request->validate([
            'permission' => 'required',
        ]);

        $role = Role::findOrFail($roleId);
        $role->syncPermissions($request->permission);

        return response()->json([
            'message' => 'Permissions added to role',
        ]);
    }
}
