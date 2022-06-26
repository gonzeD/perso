<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ReminderController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'prefix' => 'reminder',
    "middleware"=>"api"
], function ($router) {
  Route::put('/{id}', [ReminderController::class,"update"]);
  Route::post('/', [ReminderController::class,"create"]);
  Route::delete('/{id}', [ReminderController::class,"delete"]);
  Route::get('/', [ReminderController::class,"get"]);
});
