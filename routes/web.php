<?php

use App\Livewire\Auth\EditUser;
use App\Livewire\Auth\Login;
use App\Livewire\Auth\Logout;
use App\Livewire\Auth\Register;
use App\Livewire\Auth\Role\CreateRoles;
use App\Livewire\Auth\Role\EditRoles;
use App\Livewire\Auth\Role\Roles;
use App\Livewire\Auth\Users;
use App\Livewire\Panel\Dashboard;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
Route::group(['middleware' => 'guest'], function () {
    Route::get('/login', Login::class)->name('login');
});
Route::group(['middleware' => 'auth'], function () {
    Route::get('/dashboard', Dashboard::class)->name('dashboard');
    Route::get('auth/logout', Logout::class)->name('logout');

    Route::get('auth/register', Register::class)->name('register')->middleware('permission:create user');
    Route::get('userManagement/users', Users::class)->name('users')->middleware('permission:view user');
    Route::get('userManagement/editUser/{id}', EditUser::class)->name('editUser')->middleware('permission:update user');

    Route::get('userManagement/roles', Roles::class)->name('roles')->middleware('permission:view role');
    Route::get('userManagement/createRoles', CreateRoles::class)->name('createRoles')->middleware('permission:create role');
    Route::get('userManagement/editRoles/{id}', EditRoles::class)->name('editRoles')->middleware('permission:update role');
});


Route::resource('permissions', App\Http\Controllers\PermissionController::class);
Route::get('permissions/{permissionId}/delete', [App\Http\Controllers\PermissionController::class, 'destroy']);

Route::resource('roles', App\Http\Controllers\RoleController::class);
Route::get('roles/{roleId}/delete', [App\Http\Controllers\RoleController::class, 'destroy']);
Route::get('roles/{roleId}/give-permissions', [App\Http\Controllers\RoleController::class, 'addPermissionToRole']);
Route::put('roles/{roleId}/give-permissions', [App\Http\Controllers\RoleController::class, 'givePermissionToRole']);

Route::resource('users', App\Http\Controllers\UserController::class);
Route::get('users/{userId}/delete', [App\Http\Controllers\UserController::class, 'destroy']);
