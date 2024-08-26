<?php

namespace App\Models\Meta;

use App\Models\Client;
use App\Models\Staff;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Province extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'country_id',
        'name_en',
        'name_si',
        'name_ta',
    ];

    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    public function districts()
    {
        return $this->hasMany(District::class);
    }

    public function clients()
    {
        return $this->hasMany(Client::class);
    }

    public function staffs()
    {
        return $this->hasMany(Staff::class);
    }
}
