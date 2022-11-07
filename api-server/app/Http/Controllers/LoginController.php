<?php

namespace App\Http\Controllers;

use IIluminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\LoginRequest;
use App\Models\User;

class LoginController extends Controller
{
    public function login(LoginRequest $request)
    {
        $credentails = $request->getCredentials();
        if (!Auth::validate($credentails)) :
            return response()->json([
                'error' => 'Invalid credentials'
            ], 401);
        endif;
        $user = Auth::getProvider()->retrieveByCredentials($credentails);
        Auth::login($user);
        $token = sha1(rand());
        $user->remember_token = $token;
        $user->save();
        return response()->json([
            'token' => $user->remember_token
        ], 200);
    }
}
