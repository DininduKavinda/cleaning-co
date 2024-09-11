<?php

namespace App\Http\Controllers\Web\Core\Matter;

use App\Http\Controllers\Controller;
use App\Models\Module\Matter;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Inertia\Inertia;
use Inertia\Response;

class MatterController extends Controller implements HasMiddleware
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
        return Inertia::render('Core/Matter/Index');
    }
    public function create(): response
    {
        return Inertia::render('Core/Matter/Edit');
    }
    public function show(Matter $matter): response
    {
        return Inertia::render('Core/Matter/Edit', ['matter' => $matter]);
    }
}
