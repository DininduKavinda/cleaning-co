<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Web\Auth\PermissionController;
use App\Http\Controllers\Web\Auth\RoleController;
use App\Http\Controllers\Web\Auth\UsersController;
use App\Http\Controllers\Web\ClientController;
use App\Http\Controllers\Web\MetaData\DepartmentController;
use App\Http\Controllers\Web\MetaData\LevelController;
use App\Http\Controllers\Web\MetaData\Location\CityController;
use App\Http\Controllers\Web\MetaData\Location\CountryController;
use App\Http\Controllers\Web\MetaData\Location\DistrictController;
use App\Http\Controllers\Web\MetaData\Location\ProvinceController;
use App\Http\Controllers\Web\MetaData\Store\ItemTypeController;
use App\Http\Controllers\Web\MetaData\TaskController;
use App\Http\Controllers\Web\MetaData\TimecardTaskController;
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
})->middleware(['auth', 'verified']);

Route::group(['prefix'=>'web'], function () {
    Route::resource('clients',ClientController::class);
    Route::resource('staff', StaffController::class);
    Route::resource('permissions',PermissionController::class);
    Route::resource('roles', RoleController::class);
})->middleware(['auth', 'verified']);

Route::group(['prefix'=>'location'], function () {
    Route::resource('countries',CountryController::class);
    Route::resource('provinces', ProvinceController::class);
    Route::resource('districts',DistrictController::class);
    Route::resource('cities', CityController::class);
})->middleware(['auth', 'verified']);


Route::group(['prefix'=>'meta'], function () {
    Route::resource('departments',DepartmentController::class);
    Route::resource('levels', LevelController::class);
    Route::resource('tasks', TaskController::class);
    Route::resource('timecardTasks', TimecardTaskController::class);
    Route::resource('itemTypes', ItemTypeController::class);
})->middleware(['auth', 'verified']);

require __DIR__ . '/auth.php';
