<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('survey', function () {
    return view('survey');
});

Route::get('quiz', function () {
    return view('quiz');
});
