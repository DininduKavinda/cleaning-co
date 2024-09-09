<?php

namespace App\Models\Meta;

use App\Models\Client;
use App\Models\Staff;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class District extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'province_id',
        'name_en',
        'name_si',
        'name_ta',
    ];

    public function province()
    {
        return $this->belongsTo(Province::class);
    }

    public function cities()
    {
        return $this->hasMany(City::class);
    }

    public function clients()
    {
        return $this->hasMany(Client::class);
    }

    public function staff()
    {
        return $this->hasMany(Staff::class);
    }
}
