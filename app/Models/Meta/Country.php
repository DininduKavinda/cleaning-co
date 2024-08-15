<?php

namespace App\Models\Meta;

use App\Models\Client;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Country extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'id',
        'country_name',
        'iso_code',
        'phone_code',
    ];

    public function provinces()
    {
        return $this->hasMany(Province::class);
    }

    public function client()
    {
        return $this->hasMany(Client::class);
    }
}
