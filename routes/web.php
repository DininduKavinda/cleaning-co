<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Web\Auth\PermissionController;
use App\Http\Controllers\Web\Auth\RoleController;
use App\Http\Controllers\Web\Auth\UsersController;
use App\Http\Controllers\Web\ClientController;
use App\Http\Controllers\Web\StaffController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::group(['prefix'=>'users_permissions'], function () {
    Route::resource('users',UsersController::class);
    Route::resource('permissions',PermissionController::class);
    Route::resource('roles', RoleController::class);
})->middleware('auth');

Route::group(['prefix'=>'web'], function () {
    Route::resource('clients',ClientController::class);
    Route::resource('staff', StaffController::class);
    Route::resource('permissions',PermissionController::class);
    Route::resource('roles', RoleController::class);
})->middleware('auth');

require __DIR__ . '/auth.php';
