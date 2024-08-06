<?php

use App\Livewire\Auth\Login;
use App\Livewire\Auth\Logout;
use App\Livewire\Auth\Register;
use App\Livewire\Panel\Dashboard;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
Route::group(['middleware' => 'guest'], function () {
    Route::get('/login', Login::class)->name('login');
});
Route::group(['middleware' => 'auth'], function () {
    Route::get('/register', Register::class)->name('register');
    Route::get('/dashboard', Dashboard::class)->name('dashboard');
    Route::get('/logout', Logout::class)->name('logout');
});
