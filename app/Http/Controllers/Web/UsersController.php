<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Inertia\Inertia;
use Inertia\Response;

class UsersController extends Controller implements HasMiddleware
{
    public static function middleware(): array
    {
        return [
            new Middleware('permission:view user', only: ['index']),
            new Middleware('permission:create user', only: ['creates', 'stores']),
            new Middleware('permission:update user', only: ['updates', 'edits']),
            new Middleware('permission:delete user', only: ['destroys']),
        ];
    }
    public function index(): response
    {
        
        return Inertia::render('UsersPermissions/User/User');
    }
}
