<?php

namespace App\Http\Controllers\Web\MetaData\Location;

use App\Http\Controllers\Controller;
use App\Models\Meta\Country;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Inertia\Inertia;
use Inertia\Response;

class CountryController extends Controller implements HasMiddleware
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
        return Inertia::render('Meta/Location/Country/Index');
    }
    public function create(): response
    {
        return Inertia::render('Meta/Location/Country/Edit');
    }
    public function show(Country $country): response
    {
        return Inertia::render('Meta/Location/Country/Edit',['country' => $country]);
    }
}
