<?php

use App\Http\Controllers\Api\Auth\AuthController;
use App\Http\Controllers\Api\ClientController;
use App\Http\Controllers\Api\Meta\CityController;
use App\Http\Controllers\Api\Meta\CountryController;
use App\Http\Controllers\Api\Meta\DistrictController;
use App\Http\Controllers\Api\Meta\ProvinceController;
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
    Route::get('/check-token', [AuthController::class, 'checkToken']);
});

Route::group(['prefix' => 'location'], function () {
    Route::apiResource('countries', CountryController::class);
    Route::apiResource('provinces', ProvinceController::class);
    Route::apiResource('districts', DistrictController::class);
    Route::apiResource('cities', CityController::class);
});
Route::apiResource('clients', ClientController::class);
