<?php

namespace App\Models\Module;

use App\Models\Invoice\InvoiceTimecard;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * 
 *
 * @property int $timecard_task_id
 * @property int $matter_id
 * @property int $id
 * @property string $name
 * @property string $date
 * @property string $type
 * @property string $started_at
 * @property string $ended_time
 * @property string $time_spent
 * @property string $charge_rate
 * @property int $active
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, InvoiceTimecard> $invoice_timecard
 * @property-read int|null $invoice_timecard_count
 * @property-read \App\Models\Module\Matter $matter
 * @property-read \App\Models\Module\TimecardTask $timecard_task
 * @method static \Database\Factories\Module\TimecardFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Timecard newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Timecard newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Timecard onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Timecard query()
 * @method static \Illuminate\Database\Eloquent\Builder|Timecard whereActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Timecard whereChargeRate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Timecard whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Timecard whereDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Timecard whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Timecard whereEndedTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Timecard whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Timecard whereMatterId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Timecard whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Timecard whereStartedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Timecard whereTimeSpent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Timecard whereTimecardTaskId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Timecard whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Timecard whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Timecard withTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Timecard withoutTrashed()
 * @mixin \Eloquent
 */
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

    public function invoice_timecard()
    {
        return $this->hasMany(InvoiceTimecard::class);
    }
}
