<?php

namespace App\Models\Module;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property int $id
 * @property string $name
 * @property string $rate
 * @property int $rate_type
 * @property int $active
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Module\Timecard> $timecards
 * @property-read int|null $timecards_count
 *
 * @method static \Database\Factories\Module\TimecardTaskFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|TimecardTask newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|TimecardTask newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|TimecardTask onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|TimecardTask query()
 * @method static \Illuminate\Database\Eloquent\Builder|TimecardTask whereActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TimecardTask whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TimecardTask whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TimecardTask whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TimecardTask whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TimecardTask whereRate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TimecardTask whereRateType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TimecardTask whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TimecardTask withTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|TimecardTask withoutTrashed()
 *
 * @mixin \Eloquent
 */
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
