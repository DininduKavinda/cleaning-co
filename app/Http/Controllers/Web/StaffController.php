<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Staff;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Inertia\Inertia;
use Inertia\Response;

class StaffController extends Controller implements HasMiddleware
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
        return Inertia::render('Staff/Index');
    }

    public function create(): response
    {
        return Inertia::render('Staff/Edit');
    }

    public function show(Staff $staff): response
    {
        return Inertia::render('Staff/Edit', ['staff' => $staff]);
    }
}
