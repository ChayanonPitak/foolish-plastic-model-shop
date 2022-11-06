<?php

namespace App\Http\Controllers;

use IIluminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\LoginRequest;

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
        $user->remember_token = Str::random(60);
        return $user;
    }
}
