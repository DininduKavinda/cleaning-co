<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{
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
