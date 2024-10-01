<?php

use App\Http\Controllers\Web\Auth\PermissionController;
use App\Http\Controllers\Web\Auth\RoleController;
use App\Http\Controllers\Web\Auth\UsersController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'users_permissions'], function () {
    Route::resource('users', UsersController::class);
    Route::resource('permissions', PermissionController::class);
    Route::resource('roles', RoleController::class);
})->middleware(['auth', 'verified']);
