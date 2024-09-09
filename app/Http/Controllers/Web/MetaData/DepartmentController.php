<?php

namespace App\Http\Controllers\Web\MetaData;

use App\Http\Controllers\Controller;
use App\Models\Department;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Inertia\Inertia;
use Inertia\Response;

class DepartmentController extends Controller implements HasMiddleware
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
    public function index(): Response
    {
        return Inertia::render('Meta/Department/Index');
    }
    public function create(): Response
    {
        return Inertia::render('Meta/Department/Edit');
    }
    public function show(Department $department): Response
    {
        return Inertia::render('Meta/Department/Edit', ['department' => $department]);
    }
}
