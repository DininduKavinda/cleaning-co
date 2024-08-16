<?php

namespace App\Models;

use App\Models\Module\Matter;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Department extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'id',
        'name',
        'active',
    ];

    public function staffs()
    {
        return $this->hasMany(Staff::class);
    }

    public function matters()
    {
        return $this->hasMany(Matter::class);
    }
}
