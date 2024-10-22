<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property int $id
 * @property string $name
 * @property int $active
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Staff> $staffs
 * @property-read int|null $staffs_count
 *
 * @method static \Database\Factories\LevelFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Level newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Level newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Level onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Level query()
 * @method static \Illuminate\Database\Eloquent\Builder|Level whereActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Level whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Level whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Level whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Level whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Level whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Level withTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Level withoutTrashed()
 *
 * @mixin \Eloquent
 */
class Level extends Model
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
}
