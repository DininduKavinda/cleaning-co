<?php

namespace App\Models\Module;

use App\Models\Staff;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property int $matter_id
 * @property int $staff_id
 * @property int $id
 * @property string $geo_latitude
 * @property string $geo_longtude
 * @property int $area
 * @property string|null $permitted_on
 * @property int $active
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Module\Matter> $matter
 * @property-read int|null $matter_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, Staff> $staff
 * @property-read int|null $staff_count
 *
 * @method static \Database\Factories\Module\MatterAccessFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|MatterAccess newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|MatterAccess newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|MatterAccess onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|MatterAccess query()
 * @method static \Illuminate\Database\Eloquent\Builder|MatterAccess whereActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MatterAccess whereArea($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MatterAccess whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MatterAccess whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MatterAccess whereGeoLatitude($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MatterAccess whereGeoLongtude($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MatterAccess whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MatterAccess whereMatterId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MatterAccess wherePermittedOn($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MatterAccess whereStaffId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MatterAccess whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MatterAccess withTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|MatterAccess withoutTrashed()
 *
 * @mixin \Eloquent
 */
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
        'active',
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
