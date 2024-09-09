<?php

namespace App\Http\Controllers\Web\MetaData;

use App\Http\Controllers\Controller;
use App\Models\Level;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Inertia\Inertia;
use Inertia\Response;

class LevelController extends Controller implements HasMiddleware
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
        return Inertia::render('Meta/Level/Index');
    }
    public function create(): Response
    {
        return Inertia::render('Meta/Level/Edit');
    }
    public function show(Level $level): Response
    {
        return Inertia::render('Meta/Level/Edit', ['level' => $level]);
    }
}
