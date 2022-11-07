<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cart;
use App\Models\User;
use App\Models\Product;
use Illuminate\Support\Facades\DB;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    public function cart($token)
    {
        $user = User::where('remember_token', $token)->first();
        $products = Cart::where('userId', $user->id);
        return $products;
    }

    public function removeFromCart($token, $productCode)
    {
        $user = User::where('remember_token', $token)->first();
        $product = Product::find($productCode);
        $cartProduct = Cart::where('userId', $user->id)->where('productCode', $productCode)->first();
        DB::transaction(function () use ($product, $cartProduct) {
            $product->quantityInStock = $product->quantityInStock + $cartProduct->quantity;
            $product->save();
            $cartProduct->delete();
        });
        return response('Transaction Success', 200);
    }

    public function addToCart(Request $request)
    {
        $token = $request->token;
        $productCode = $request->productCode;
        $user = User::where('remember_token', $token)->first();
        if ($user == null) response('User not found', 400);
        $product = Product::find($productCode);
        $cartProduct = Cart::where('userId', $user->id)->where('productCode', $productCode)->first();
        DB::transaction(function () use ($user, $product, $cartProduct) {
            if($cartProduct != null) {
                $cartProduct->quantity = $cartProduct->quantity+1;
                $cartProduct->save();
                } else {
                $cart = new Cart();
                $cart->userId = $user->id;
                $cart->productCode = $product->productCode;
                $cart->quantity = 1;
                $cart->save();
                }
                $product->quantityInStock = $product->quantityInStock-1 ;
                $product->save();
        });
        return response('Transaction Success', 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
