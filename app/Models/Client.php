<?php

namespace App\Models;

use App\Models\Invoice\Invoice;
use App\Models\Meta\City;
use App\Models\Meta\Complain;
use App\Models\Meta\Country;
use App\Models\Meta\District;
use App\Models\Meta\Province;
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
        'country_id',
        'province_id',
        'district_id',
        'city_id',
        'active',
    ];

    public function user()
    {
        return $this->hasOne(User::class,'reference_id');
    }

    public function city()
    {
        return $this->belongsTo(City::class);
    }
    public function district()
    {
        return $this->belongsTo(District::class);
    }
    public function province()
    {
        return $this->belongsTo(Province::class);
    }
    public function country()
    {
        return $this->belongsTo(Country::class);
    }
    public function matters()
    {
        return $this->hasMany(Matter::class);
    }

    public function matter_documents()
    {
        return $this->hasMany(MatterDocument::class);
    }

    public function complains()
    {
        return $this->hasMany(Complain::class);
    }

    public function invoice()
    {
        return $this->hasMany(Invoice::class);
    }
}
