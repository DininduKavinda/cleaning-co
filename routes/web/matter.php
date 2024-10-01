<?php

use App\Http\Controllers\Web\Core\Matter\MatterController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'core'], function () {
    Route::resource('matters', MatterController::class);
})->middleware(['auth', 'verified']);
