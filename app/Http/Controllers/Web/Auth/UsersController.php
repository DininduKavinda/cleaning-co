<?php

namespace App\Http\Controllers\Web\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\User;
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
            new Middleware('permission:create user', only: ['create', 'store']),
            new Middleware('permission:update user', only: ['update', 'edit']),
            new Middleware('permission:delete user', only: ['destroy']),
        ];
    }

    public function index(): response
    {

        return Inertia::render('UsersPermissions/User/Index');
    }

    public function create(): response
    {
        return Inertia::render('UsersPermissions/User/Edit');
    }

    public function store(StoreUserRequest $request): Response
    {
        $validatedData = $request->validated();

        $user = User::create($validatedData);

        $user->syncRoles($validatedData['roles']);

        return Inertia::render('UsersPermissions/User/Index');
    }

    public function update(UpdateUserRequest $request, User $user): response
    {
        $validatedData = $request->validated();

        $user->update($validatedData);

        $user->syncRoles($validatedData['roles']);

        return Inertia::render('UsersPermissions/User/Index');
    }

    public function show(User $user): response
    {
        return Inertia::render('UsersPermissions/User/Edit', ['user' => $user]);
    }
}
