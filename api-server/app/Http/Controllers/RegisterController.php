<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Requests\RegisterRequest;

class RegisterController extends Controller
{
    /**
     * Handle account registration request
     * 
     * @param RegisterRequest $request
     * 
     * @return \Illuminate\Http\Response
     */
    public function register(RegisterRequest $request)
    {
        $user = User::create($request->validated());
        if ($user) : return response()->json([
            'status' => 'OK'
        ], 200); endif;
        return response()->json([
            'error' => 'Failed, Please cleck the credential'
        ], 401);
    }
}
