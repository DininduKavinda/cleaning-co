<?php

use App\Http\Controllers\Web\Auth\PermissionController;
use App\Http\Controllers\Web\Auth\RoleController;
use App\Http\Controllers\Web\ClientController;
use App\Http\Controllers\Web\StaffController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'web'], function () {
    Route::resource('clients', ClientController::class);
    Route::resource('staff', StaffController::class);
    Route::resource('permissions', PermissionController::class);
    Route::resource('roles', RoleController::class);
})->middleware(['auth', 'verified']);
