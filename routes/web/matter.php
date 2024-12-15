<?php

use App\Http\Controllers\Web\Core\Matter\MatterController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'core'], function () {
    Route::resource('matter_webs', MatterController::class);
})->middleware(['auth', 'verified']);
