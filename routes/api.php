<?php

use App\Http\Controllers\Api\Auth\AuthController;
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
