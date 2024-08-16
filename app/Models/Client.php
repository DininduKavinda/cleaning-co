<?php

namespace App\Models;

use App\Models\Meta\City;
use App\Models\Module\Matter;
use App\Models\Module\MatterDocument;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Client extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'id',
        'nic',
        'name',
        'mobile',
        'phone',
        'address',
        'city_id',
        'active',
    ];

    public function user()
    {
        return $this->belongTo(User::class);
    }

    public function city()
    {
        return $this->belongsTo(City::class);
    }
    public function matters(){
        return $this->hasMany(Matter::class);
    }
    public function matter_documents(){
        return $this->hasMany(MatterDocument::class);
    }
}
