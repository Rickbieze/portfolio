<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});

Route::get('/home', function () {
    return view('home');
});

Route::get('/competenties', function () {
    return view('competenties');
});

Route::get('/jsgame', function () {
    return view('jsgame');
});

Route::get('/jsgamedemo', function () {
    return view('jsgamedemo');
});

Route::get('/projectSnake', function () {
    return view('projectSnake');
});