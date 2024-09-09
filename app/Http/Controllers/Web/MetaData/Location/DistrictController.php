<?php

namespace App\Http\Controllers\Web\MetaData\Location;

use App\Http\Controllers\Controller;
use App\Models\Meta\District;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Inertia\Inertia;
use Inertia\Response;

class DistrictController extends Controller implements HasMiddleware
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
        return Inertia::render('Meta/Location/District/Index');
    }
    public function create(): response
    {
        return Inertia::render('Meta/Location/District/Edit');
    }
    public function show(District $district): response
    {
        return Inertia::render('Meta/Location/District/Edit',['district' => $district]);
    }
}
