<?php

namespace App\Models\Module;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Timecard extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'timecard_task_id',
        'matter_id',
        'id',
        'name',
        'date',
        'type',
        'started_at',
        'ended_at',
        'time_spent',
        'charge_rate',
        'active',
    ];

    public function timecard_task()
    {
        return $this->belongsTo(TimecardTask::class);
    }

    public function matter()
    {
        return $this->belongsTo(Matter::class);
    }
}
