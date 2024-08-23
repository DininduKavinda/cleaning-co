<?php

namespace App\Models\Meta;

use App\Models\Client;
use App\Models\Staff;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class City extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'district_id',
        'name_en',
        'name_si',
        'name_ta',
        'postcode',
    ];

    public function district()
    {
        return $this->belongsTo(District::class);
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
