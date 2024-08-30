<?php

use App\Http\Controllers\Api\Auth\AuthController;
use App\Http\Controllers\Api\Auth\PermissionController;
use App\Http\Controllers\Api\Auth\RoleController;
use App\Http\Controllers\Api\Auth\UserController;
use App\Http\Controllers\Api\ClientController;
use App\Http\Controllers\Api\Meta\CityController;
use App\Http\Controllers\Api\Meta\CountryController;
use App\Http\Controllers\Api\Meta\DistrictController;
use App\Http\Controllers\Api\Meta\ProvinceController;
use App\Http\Controllers\Api\Com\DepartmentController;
use App\Http\Controllers\Api\Com\ItemController;
use App\Http\Controllers\Api\Com\ItemTypeController;
use App\Http\Controllers\Api\Com\LevelController;
use App\Http\Controllers\Api\Com\TaskController;
use App\Http\Controllers\Api\Com\TimecardTaskController;
use App\Http\Controllers\Api\Com\UserTypeController;
use App\Http\Controllers\Api\Core\MatterController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:api');

Route::group(['prefix' => 'auth'], function () {
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);
});
Route::group(['middleware' => ['auth:api']], function () {
    Route::get('profile', [AuthController::class, 'profile']);
    Route::get('logout', [AuthController::class, 'logout']);
    Route::get('check-token', [AuthController::class, 'checkToken']);


    Route::group(['prefix' => 'location'], function () {
        Route::apiResource('countries', CountryController::class);
        Route::apiResource('provinces', ProvinceController::class);
        Route::apiResource('districts', DistrictController::class);
        Route::apiResource('cities', CityController::class);
    });


    Route::group(['prefix' => 'web'], function () {
        Route::apiResource('clients', ClientController::class);
        Route::apiResource('staff', ClientController::class);
    });


    Route::group(['prefix' => 'common'], function () {
        Route::apiResource('departments', DepartmentController::class);
        Route::apiResource('levels', LevelController::class);
        Route::apiResource('tasks', TaskController::class);
        Route::apiResource('timecardTasks', TimecardTaskController::class);
        Route::apiResource('itemTypes', ItemTypeController::class);
        Route::apiResource('items', ItemController::class);
        Route::apiResource('userTypes', UserTypeController::class);
    });

    Route::group(['prefix' => 'core'], function () {
        Route::apiResource('matters', MatterController::class);
    });

    Route::group(['prefix' => 'admin'], function () {
        Route::apiResource('users', UserController::class);
        Route::apiResource('roles', RoleController::class);
        Route::apiResource('permissions', PermissionController::class);
        Route::get('addPermissionToRole/{id}', [RoleController::class, 'addPermissionToRole']);
        Route::post('givePermissionToRole/{id}', [RoleController::class, 'givePermissionToRole']);
    });

});

