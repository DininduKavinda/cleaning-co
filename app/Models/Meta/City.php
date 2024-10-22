<?php

namespace App\Models\Meta;

use App\Models\Client;
use App\Models\Staff;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property int $id
 * @property int $district_id
 * @property string $name_en
 * @property string|null $name_si
 * @property string|null $name_ta
 * @property int|null $postcode
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, Client> $clients
 * @property-read int|null $clients_count
 * @property-read \App\Models\Meta\District $district
 * @property-read \Illuminate\Database\Eloquent\Collection<int, Staff> $staff
 * @property-read int|null $staff_count
 *
 * @method static \Illuminate\Database\Eloquent\Builder|City newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|City newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|City onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|City query()
 * @method static \Illuminate\Database\Eloquent\Builder|City whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|City whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|City whereDistrictId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|City whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|City whereNameEn($value)
 * @method static \Illuminate\Database\Eloquent\Builder|City whereNameSi($value)
 * @method static \Illuminate\Database\Eloquent\Builder|City whereNameTa($value)
 * @method static \Illuminate\Database\Eloquent\Builder|City wherePostcode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|City whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|City withTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|City withoutTrashed()
 *
 * @mixin \Eloquent
 */
class City extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'district_id',
        'name_en',
        'name_si',
        'name_ta',
        'postcode',
    ];

    public function district()
    {
        return $this->belongsTo(District::class);
    }

    public function clients()
    {
        return $this->hasMany(Client::class);
    }

    public function staff()
    {
        return $this->hasMany(Staff::class);
    }
}
