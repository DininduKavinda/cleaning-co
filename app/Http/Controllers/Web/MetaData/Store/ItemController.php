<?php

namespace App\Http\Controllers\Web\MetaData\Store;

use App\Http\Controllers\Controller;
use App\Models\Item\Item;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Inertia\Inertia;
use Inertia\Response;

class ItemController extends Controller implements HasMiddleware
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
        return Inertia::render('Meta/Store/Item/Index');
    }

    public function create(): Response
    {
        return Inertia::render('Meta/Store/Item/Edit');
    }

    public function show(Item $item): Response
    {
        return Inertia::render('Meta/Store/Item/Edit', ['item' => $item]);
    }
}
