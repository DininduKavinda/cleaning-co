<?php

use App\Http\Controllers\Web\Auth\PermissionController;
use App\Http\Controllers\Web\Auth\RoleController;
use App\Http\Controllers\Web\Auth\UsersController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'users_permissions'], function () {
    Route::resource('user_webs', UsersController::class);
    Route::resource('permission_webs', PermissionController::class);
    Route::resource('role_webs', RoleController::class);
})->middleware(['auth', 'verified']);
