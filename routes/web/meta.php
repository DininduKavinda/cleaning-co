<?php

use App\Http\Controllers\Web\MetaData\DepartmentController;
use App\Http\Controllers\Web\MetaData\LevelController;
use App\Http\Controllers\Web\MetaData\Store\ItemController;
use App\Http\Controllers\Web\MetaData\Store\ItemTypeController;
use App\Http\Controllers\Web\MetaData\TaskController;
use App\Http\Controllers\Web\MetaData\TimecardTaskController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'meta'], function () {
    Route::resource('departments', DepartmentController::class);
    Route::resource('levels', LevelController::class);
    Route::resource('tasks', TaskController::class);
    Route::resource('timecardTasks', TimecardTaskController::class);
    Route::resource('itemTypes', ItemTypeController::class);
    Route::resource('items', ItemController::class);
})->middleware(['auth', 'verified']);
