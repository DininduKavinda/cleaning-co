<?php

use App\Http\Controllers\Web\Auth\PermissionController;
use App\Http\Controllers\Web\Auth\RoleController;
use App\Http\Controllers\Web\ClientController;
use App\Http\Controllers\Web\StaffController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'web'], function () {
    Route::resource('client_webs', ClientController::class);
    Route::resource('staff_web', StaffController::class);
    Route::resource('permission_webs', PermissionController::class);
    Route::resource('role_webs', RoleController::class);
})->middleware(['auth', 'verified']);
