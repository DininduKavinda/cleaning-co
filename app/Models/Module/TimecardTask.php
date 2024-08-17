<?php

namespace App\Models\Module;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TimecardTask extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'id',
        'name',
        'rate',
        'rate_type',
        'active',
    ];

    public function timecards()
    {
        return $this->hasMany(TimeCard::class);
    }
}
