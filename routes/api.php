<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ItemController;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// route::get('/items',  [ItemController::class, 'index']);

// route::prefix('/item')->group(function () {
//     route::PUT('/{id}', [ItemController::class, 'update']);
//     route::delete('/{id}', [ItemController::class, 'destroy']);
// });



route::apiResource('/items', ItemController::class);
