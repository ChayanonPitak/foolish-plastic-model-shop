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

    public function cart(Request $request)
    {
        $token = $request->token;
        $user = User::where('remember_token', $token)->first();
        $products = Cart::where('userId', $user->id);
        return $products->get();
    }

    public function removeFromCart(Request $request)
    {
        $token = $request->token;
        $productCode = $request->productCode;
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
        $quantity = $request->quantity;
        $user = User::where('remember_token', $token)->first();
        if ($user == null) return response()->json([
            'error' => 'User not found'
        ], 400);
        $product = Product::find($productCode);
        $cartProduct = Cart::where('userId', $user->id)->where('productCode', $productCode)->first();
        if ($product->quantityInStock - $quantity < 0) return response()->json([
                'error' => 'Product in stock is not enough'
            ], 400);
        DB::transaction(function () use ($user, $product, $cartProduct, $quantity) {
            if($cartProduct != null) {
                $cartProduct->quantity = $cartProduct->quantity + $quantity;
                $cartProduct->save();
                } else {
                $cart = new Cart();
                $cart->userId = $user->id;
                $cart->productCode = $product->productCode;
                $cart->quantity = $quantity;
                $cart->save();
                }
                $product->quantityInStock = $product->quantityInStock - $quantity;
                $product->save();
        });
        return response()->json([
            'status' => 'OK'
        ], 200);
    }

    public function decreaseOnCart(Request $request)
    {
        $token = $request->token;
        $productCode = $request->productCode;
        $user = User::where('remember_token', $token)->first();
        $product = Product::where('productCode', $productCode)->first();
        $cartProduct = Cart::where('userId', $user->id)->where('productCode', $productCode)->first();
        DB::transaction(function () use ($product, $cartProduct) {
            $product->quantityInStock = $product->quantityInStock + 1;
            $product->save();
            $cartProduct->quantity = $cartProduct->quantity - 1;
            $cartProduct->save();
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
