<?php

namespace App\Models\Module;

use App\Models\Staff;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class MatterAccess extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = [
        'matter_id',
        'staff_id',
        'id',
        'geo_latitude',
        'geo_longtude',
        'area',
        'permitted_on',
        'active'
    ];
    public function matter()
    {
        return $this->hasMany(Matter::class);
    }
    public function staff()
    {
        return $this->hasMany(Staff::class);
    }
}
