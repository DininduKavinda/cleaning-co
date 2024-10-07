<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, HasRoles, Notifiable, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'reference_id',
        'user_type_id',
        'id',
        'name',
        'email',
        'password',
        'image',
        'last_login',
        'active',
    ];

    public function user_type()
    {
        return $this->belongsTo(UserType::class);
    }

    public function clients()
    {
        return $this->belongsTo(Client::class, 'reference_id')->where('user_type_id', "=", 1);
    }

    public function staffs()
    {
        return $this->belongsTo(Staff::class, 'reference_id')->where('user_type_id', "=", 2);
    }

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function client()
    {
        return $this->hasOne(Client::class);
    }

    public function createUser($user, $validatedData, $request, $type)
    {
        if ($request->hasFile('image')) {
            $imageName = time() . '.' . $request->image->getClientOriginalExtension();
            $request->image->move('img/profile/client', $imageName);
            $validatedData['image'] = 'img/profile/client/' . $imageName;
        } else {
            $validatedData['image'] = null;
        }

        $user = self::create([
            'reference_id' => $user->id,
            'user_type_id' => $type,
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'image' => $validatedData['image'],
            'password' => bcrypt($validatedData['password']),
            'last_login' => $validatedData['last_login'],
            'active' => $validatedData['active'],
        ]);

        if($type == 1){
            $role = 'user';
        }else{
            $role = 'staff';
        }

        auth()->shouldUse('web');
        $user->syncRoles([$role]);

        return $user;
    }
    
}
