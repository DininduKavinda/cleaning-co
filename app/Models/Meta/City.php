<?php

namespace App\Models\Meta;

use App\Models\Client;
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

    public function client()
    {
        return $this->hasMany(Client::class);
    }
}
