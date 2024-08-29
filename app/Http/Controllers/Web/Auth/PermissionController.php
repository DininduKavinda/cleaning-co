<?php

namespace App\Http\Controllers\Web\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller implements HasMiddleware
{
    public static function middleware(): array
    {
        return [
            new Middleware('permission:view user', only: ['index']),
            new Middleware('permission:create user', only: ['create', 'store']),
            new Middleware('permission:update user', only: ['update', 'edit']),
            new Middleware('permission:delete user', only: ['destroy']),
        ];
    }
    public function index(): response
    {
        return Inertia::render('UsersPermissions/Permission/Index');
    }
    public function create(): response
    {
        return Inertia::render('UsersPermissions/Permission/Edit');
    }
    public function show(Permission $permission): response
    {
        return Inertia::render('UsersPermissions/Permission/Edit', ['permission' => $permission]);
    }
}
