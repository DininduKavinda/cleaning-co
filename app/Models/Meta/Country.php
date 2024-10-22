<?php

namespace App\Models\Meta;

use App\Models\Client;
use App\Models\Staff;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property int $id
 * @property string $country_name
 * @property string $iso_code
 * @property string $phone_code
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, Client> $clients
 * @property-read int|null $clients_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Meta\Province> $provinces
 * @property-read int|null $provinces_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, Staff> $staffs
 * @property-read int|null $staffs_count
 *
 * @method static \Illuminate\Database\Eloquent\Builder|Country newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Country newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Country onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Country query()
 * @method static \Illuminate\Database\Eloquent\Builder|Country whereCountryName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Country whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Country whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Country whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Country whereIsoCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Country wherePhoneCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Country whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Country withTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Country withoutTrashed()
 *
 * @mixin \Eloquent
 */
class Country extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'id',
        'country_name',
        'iso_code',
        'phone_code',
    ];

    public function provinces()
    {
        return $this->hasMany(Province::class);
    }

    public function clients()
    {
        return $this->hasMany(Client::class);
    }

    public function staffs()
    {
        return $this->hasMany(Staff::class);
    }
}
