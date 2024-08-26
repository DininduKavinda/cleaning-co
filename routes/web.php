<?php

use App\Livewire\Auth\EditUser;
use App\Livewire\Auth\Login;
use App\Livewire\Auth\Logout;
use App\Livewire\Auth\Permission\CreatePermissions;
use App\Livewire\Auth\Permission\EditPermissions;
use App\Livewire\Auth\Permission\Permissions;
use App\Livewire\Auth\Register;
use App\Livewire\Auth\Role\CreateRoles;
use App\Livewire\Auth\Role\EditRoles;
use App\Livewire\Auth\Role\GivePermission;
use App\Livewire\Auth\Role\Roles;
use App\Livewire\Auth\Users;
use App\Livewire\Panel\ClientArea\Client;
use App\Livewire\Panel\ClientArea\ClientCreate;
use App\Livewire\Panel\Dashboard;
use App\Livewire\Panel\Meta\Location\City\City;
use App\Livewire\Panel\Meta\Location\City\Create as CityCreate;
use App\Livewire\Panel\Meta\Location\Country\Country;
use App\Livewire\Panel\Meta\Location\Country\Create;
use App\Livewire\Panel\Meta\Location\District\Create as DistrictCreate;
use App\Livewire\Panel\Meta\Location\District\District;
use App\Livewire\Panel\Meta\Location\Province\Create as ProvinceCreate;
use App\Livewire\Panel\Meta\Location\Province\Province;
use Illuminate\Support\Facades\Route;

Route::get('/mapbox', function () {
    return view('mapbox');
});
Route::get('/', function () {
    return view('welcome');
});
Route::group(['middleware' => 'guest'], function () {
    Route::get('/login', Login::class)->name('login');
});
Route::group(['middleware' => 'auth'], function () {
    Route::get('/dashboard', Dashboard::class)->name('dashboard');
    Route::get('auth/logout', Logout::class)->name('logout');

    Route::group(['prefix' => 'userManagement'], function () {

        Route::get('register', Register::class)->name('register')->middleware('permission:create user');
        Route::get('users', Users::class)->name('users')->middleware('permission:view user');
        Route::get('editUser/{id}', EditUser::class)->name('editUser')->middleware('permission:update user');

        Route::get('roles', Roles::class)->name('roles')->middleware('permission:view role');
        Route::get('createRoles', CreateRoles::class)->name('createRoles')->middleware('permission:create role');
        Route::get('editRoles/{id}', EditRoles::class)->name('editRoles')->middleware('permission:update role');

        Route::get('rolePermissions/{id}', GivePermission::class)->name('rolePermissions')->middleware('permission:create role');

        Route::get('permissions', Permissions::class)->name('permissions')->middleware('permission:view permission');
        Route::get('createPermissions', CreatePermissions::class)->name('createPermissions')->middleware('permission:create permission');
        Route::get('editPermissions/{id}', EditPermissions::class)->name('editPermissions')->middleware('permission:update permission');
    });
    Route::group(['prefix' => 'location'], function () {
        Route::get('country', Country::class)->name('location.country')->middleware('permission:view location');
        Route::get('country/create', Create::class)->name('location.country.create')->middleware('permission:create location');
        Route::get('country/update/{id}', Create::class)->name('location.country.update')->middleware('permission:update location');

        Route::get('province', Province::class)->name('location.province')->middleware('permission:view location');
        Route::get('province/create', ProvinceCreate::class)->name('location.province.create')->middleware('permission:create location');
        Route::get('province/update/{id}', ProvinceCreate::class)->name('location.province.update')->middleware('permission:update location');

        Route::get('district', District::class)->name('location.district')->middleware('permission:view location');
        Route::get('district/create', DistrictCreate::class)->name('location.district.create')->middleware('permission:create location');
        Route::get('district/update/{id}', DistrictCreate::class)->name('location.district.update')->middleware('permission:update location');

        Route::get('city', City::class)->name('location.city')->middleware('permission:view location');
        Route::get('city/create', CityCreate::class)->name('location.city.create')->middleware('permission:create location');
        Route::get('city/update/{id}', CityCreate::class)->name('location.city.update')->middleware('permission:update location');
    });
    Route::group(['prefix' => 'clientArea'], function () {
        Route::get('client', Client::class)->name('clients')->middleware('permission:view client');
        Route::get('client/create', ClientCreate::class)->name('client.create')->middleware('permission:create client');
        Route::get('client/update/{id}', ClientCreate::class)->name('client.update')->middleware('permission:update client');
    });
});

Route::resource('permissions', App\Http\Controllers\PermissionController::class);
Route::get('permissions/{permissionId}/delete', [App\Http\Controllers\PermissionController::class, 'destroy']);

Route::resource('roles', App\Http\Controllers\RoleController::class);
Route::get('roles/{roleId}/delete', [App\Http\Controllers\RoleController::class, 'destroy']);
Route::get('roles/{roleId}/give-permissions', [App\Http\Controllers\RoleController::class, 'addPermissionToRole']);
Route::put('roles/{roleId}/give-permissions', [App\Http\Controllers\RoleController::class, 'givePermissionToRole']);

Route::resource('users', App\Http\Controllers\UserController::class);
Route::get('users/{userId}/delete', [App\Http\Controllers\UserController::class, 'destroy']);
