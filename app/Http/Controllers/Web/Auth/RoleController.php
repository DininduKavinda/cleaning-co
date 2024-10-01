<?php

namespace App\Http\Controllers\Web\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\Permission\Models\Role;

class RoleController extends Controller implements HasMiddleware
{
    public static function middleware(): array
    {
        return [
            new Middleware('permission:view role', only: ['index']),
            new Middleware('permission:create role', only: ['create', 'store']),
            new Middleware('permission:update role', only: ['update', 'edit']),
            new Middleware('permission:delete role', only: ['destroy']),
        ];
    }

    public function index(): Response
    {
        return Inertia::render('UsersPermissions/Role/Index');
    }

    public function create(): response
    {
        return Inertia::render('UsersPermissions/Role/Edit');
    }

    public function show(Role $role): response
    {
        return Inertia::render('UsersPermissions/Role/Edit', ['role' => $role]);
    }

    public function edit(Role $role): response
    {
        return Inertia::render('UsersPermissions/Role/GivePermission', ['role' => $role]);
    }
}
