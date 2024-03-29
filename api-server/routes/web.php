<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\CustomerController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\ProductController;

use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CartController;
use App\Http\Middleware\VerifyCsrfToken;


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

// Route::withoutMiddleware([VerifyCsrfToken::class])->group(function () {
// Route::resource('customers', CustomerController::class);
// Route::resource('employees', EmployeeController::class);

Route::group(['namespace' => 'App\Http\Controllers'], function () {
    Route::group(['middleware' => ['guest']], function () {
        /**
         * Register Routes
         */

        /**
         * Login Routes
         */
    });
    Route::group(['middleware' => ['auth']], function () {
        /**
         * Logout Routes
         */
        Route::get('/logout', 'LogoutController@perform');
    });
});

Route::middleware(['cors'])->group(function () {
    Route::resource('customers', CustomerController::class);
    Route::resource('employees', EmployeeController::class);
    Route::resource('product', ProductController::class);
    Route::resource('cart', CartController::class);
    Route::post('/login', [LoginController::class, 'login']);
    Route::post('/register', [RegisterController::class, 'register']);
    Route::post('/cart/add-to-cart', [CartController::class, "addToCart"]);
    Route::delete('/cart/remove-from-cart', [CartController::class, "removeFromCart"]);
    Route::delete('/decrease', [CartController::class, 'decreaseOnCart']);
    Route::get('/cart', [CartController::class, "cart"]);
    Route::get('/search/{name}', [ProductController::class, "search"]);
});
// Route::controller(UserController::class)->group(function () {
//     Route::get('/users/{id}', 'show');
//     Route::post('/users', 'store');
// });
// });

Route::get('/token', function () {
    return csrf_token();
});
