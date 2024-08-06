<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:6|confirmed',
            'password_confirmation' => 'required|same:password'
        ]);
        $data = $request->all();
        User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' =>  bcrypt($data['password'])
        ]);
        $user = User::where('email', $data['email'])->first();
        return response()->json([
            'status' => true,
            'message' => "User registered Successfully",
            'data' => [],
            'userId' => $user->id,
        ]);
    }
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);
        $user = User::where('email', $request->email)->first();
        if (!empty($user)) {
            if (Hash::check($request->password, $user->password)) {
                $token = $user->createToken('mytoken')->accessToken;
                return response()->json([
                    'status' => true,
                    'message' => "User logged in Successfully",
                    'token' => $token,
                    'data' => [
                        'user_id' => $user->id,
                        'user_name' => $user->name,
                        'user_email' => $user->email
                    ]
                ]);
            } else {
                return response()->json([
                    'status' => false,
                    'message' => "Invalid Password",
                    'data' => []
                ]);
            }
        } else {
            return response()->json([
                'status' => false,
                'message' => "User not found",
                'data' => []
            ]);
        }
    }
    public function profile()
    {
        $userData = auth()->user();
        return response()->json([
            'status' => true,
            'message' => "User logged in Successfully",
            'data' => $userData,
            'id' => auth()->user()->id,
        ]);
    }
    public function logout()
    {
        $token = auth()->user()->token();
        $token->revoke();
        return response()->json([
            'status' => true,
            'message' => "User logged out Successfully",
            'data' => []
        ]);
    }
    public function checkToken()
    {
        return response()->json([
            'status' => true,
            'message' => 'Authorized'
        ]);
    }
}
