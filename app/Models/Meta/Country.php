<?php

namespace App\Models\Meta;

use App\Models\Client;
use App\Models\Staff;
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

    public function clients()
    {
        return $this->hasMany(Client::class);
    }

    public function staffs()
    {
        return $this->hasMany(Staff::class);
    }
}
