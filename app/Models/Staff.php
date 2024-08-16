<?php

namespace App\Models;

use App\Models\Meta\City;
use App\Models\Module\Matter;
use App\Models\Module\MatterAccess;
use App\Models\Module\MatterDocument;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Staff extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable =[
        'level_id',
        'city_id',
        'department_id',
        'id',
        'first_name',
        'last_name',
        'nic',
        'titile',
        'initial',
        'full_name',
        'dob',
        'address',
        'mobile',
        'phone',
        'civil_status',
        'active',
    ];
    public function department(){
        return $this->belongsTo(Department::class);
    }
    public function level(){
        return $this->belongsTo(Level::class);
    }
    public function city(){
        return $this->belongsTo(City::class);
    }
     public function matters(){
        return $this->hasMany(Matter::class);
    }
     public function approved(){
        return $this->hasMany(Matter::class,'approved_by');
    }
    public function matter_access(){
        return $this->hasMany(MatterAccess::class);
    }
    public function matter_documents(){
        return $this->hasMany(MatterDocument::class);
    }
}
