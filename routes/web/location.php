<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Web\MetaData\Location\CityController;
use App\Http\Controllers\Web\MetaData\Location\CountryController;
use App\Http\Controllers\Web\MetaData\Location\DistrictController;
use App\Http\Controllers\Web\MetaData\Location\ProvinceController;

Route::group(['prefix'=>'location'], function () {
    Route::resource('countries',CountryController::class);
    Route::resource('provinces', ProvinceController::class);
    Route::resource('districts',DistrictController::class);
    Route::resource('cities', CityController::class);
})->middleware(['auth', 'verified']);
