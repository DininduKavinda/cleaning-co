<?php

namespace App\Models;

use App\Models\Meta\City;
use App\Models\Meta\Country;
use App\Models\Meta\District;
use App\Models\Meta\Province;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Client extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id',
        'id',
        'full_name',
        'mobile',
        'phone',
        'address',
        'city_id',
        'district_id',
        'province_id',
        'country_id',
        'active',
    ];

    public function user()
    {
        return $this->belongTo(User::class);
    }

    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    public function district()
    {
        return $this->belongsTo(District::class);
    }

    public function city()
    {
        return $this->belongsTo(City::class);
    }

    public function province()
    {
        return $this->belongsTo(Province::class);
    }
}
