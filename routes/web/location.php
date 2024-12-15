<?php

use App\Http\Controllers\Web\MetaData\Location\CityController;
use App\Http\Controllers\Web\MetaData\Location\CountryController;
use App\Http\Controllers\Web\MetaData\Location\DistrictController;
use App\Http\Controllers\Web\MetaData\Location\ProvinceController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'location'], function () {
    Route::resource('countrie_webs', CountryController::class);
    Route::resource('province_webs', ProvinceController::class);
    Route::resource('district_webs', DistrictController::class);
    Route::resource('citie_webs', CityController::class);
})->middleware(['auth', 'verified']);
