<?php

use App\Http\Controllers\Web\MetaData\DepartmentController;
use App\Http\Controllers\Web\MetaData\LevelController;
use App\Http\Controllers\Web\MetaData\Store\ItemController;
use App\Http\Controllers\Web\MetaData\Store\ItemTypeController;
use App\Http\Controllers\Web\MetaData\TaskController;
use App\Http\Controllers\Web\MetaData\TimecardTaskController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'meta'], function () {
    Route::resource('department_webs', DepartmentController::class);
    Route::resource('level_webs', LevelController::class);
    Route::resource('task_webs', TaskController::class);
    Route::resource('timecardTask_webs', TimecardTaskController::class);
    Route::resource('itemType_webs', ItemTypeController::class);
    Route::resource('item_webs', ItemController::class);
})->middleware(['auth', 'verified']);
