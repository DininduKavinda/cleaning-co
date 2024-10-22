<?php

namespace App\Models\Meta;

use App\Models\Client;
use App\Models\Staff;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property int $id
 * @property int $province_id
 * @property string $name_en
 * @property string|null $name_si
 * @property string|null $name_ta
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Meta\City> $cities
 * @property-read int|null $cities_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, Client> $clients
 * @property-read int|null $clients_count
 * @property-read \App\Models\Meta\Province $province
 * @property-read \Illuminate\Database\Eloquent\Collection<int, Staff> $staff
 * @property-read int|null $staff_count
 *
 * @method static \Illuminate\Database\Eloquent\Builder|District newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|District newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|District onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|District query()
 * @method static \Illuminate\Database\Eloquent\Builder|District whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|District whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|District whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|District whereNameEn($value)
 * @method static \Illuminate\Database\Eloquent\Builder|District whereNameSi($value)
 * @method static \Illuminate\Database\Eloquent\Builder|District whereNameTa($value)
 * @method static \Illuminate\Database\Eloquent\Builder|District whereProvinceId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|District whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|District withTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|District withoutTrashed()
 *
 * @mixin \Eloquent
 */
class District extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'province_id',
        'name_en',
        'name_si',
        'name_ta',
    ];

    public function province()
    {
        return $this->belongsTo(Province::class);
    }

    public function cities()
    {
        return $this->hasMany(City::class);
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
