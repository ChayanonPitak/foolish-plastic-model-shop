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
            return redirect("http://127.0.0.1:3000/");
        endif;
        $user = Auth::getProvider()->retrieveByCredentials($credentails);
        Auth::login($user);
        $token = $request->user()->createToken($request->username);
        $user->remember_token = $token->plainTextToken;
        $user->save();
        return $user->remember_token;
    }
}
