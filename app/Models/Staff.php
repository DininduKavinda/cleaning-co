<?php

namespace App\Models;

use App\Models\Item\GDN;
use App\Models\Item\GRN;
use App\Models\Meta\City;
use App\Models\Meta\Complain;
use App\Models\Meta\Country;
use App\Models\Meta\District;
use App\Models\Meta\Province;
use App\Models\Module\Matter;
use App\Models\Module\MatterAccess;
use App\Models\Module\MatterDocument;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Staff extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'level_id',
        'country_id',
        'province_id',
        'district_id',
        'city_id',
        'department_id',
        'id',
        'first_name',
        'last_name',
        'nic',
        'title',
        'initial',
        'full_name',
        'dob',
        'address',
        'mobile',
        'phone',
        'civil_status',
        'active',
    ];
    public function user()
    {
        return $this->hasOne(User::class,'reference_id');
    }

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function level()
    {
        return $this->belongsTo(Level::class);
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

    public function approved()
    {
        return $this->hasMany(Matter::class, 'approved_by');
    }

    public function matter_access()
    {
        return $this->hasMany(MatterAccess::class);
    }

    public function matter_documents()
    {
        return $this->hasMany(MatterDocument::class);
    }

    public function GRN_approve()
    {
        return $this->hasMany(GRN::class, 'approved_by');
    }

    public function GDN_approve()
    {
        return $this->hasMany(GDN::class, 'approved_by');
    }

    public function GRN_return()
    {
        return $this->hasMany(GRN::class, 'returened_by');
    }

    public function GDN_despatch()
    {
        return $this->hasMany(GDN::class, 'despatched_by');
    }

    public function complains()
    {
        return $this->hasMany(Complain::class);
    }
}
