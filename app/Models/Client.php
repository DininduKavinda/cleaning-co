<?php

namespace App\Models;

use App\Models\Invoice\Invoice;
use App\Models\Meta\City;
use App\Models\Meta\Complain;
use App\Models\Meta\Country;
use App\Models\Meta\District;
use App\Models\Meta\Province;
use App\Models\Module\Matter;
use App\Models\Module\MatterDocument;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * 
 *
 * @property int $id
 * @property string $full_name
 * @property string $address
 * @property string $phone
 * @property string $mobile
 * @property string $nic
 * @property int $country_id
 * @property int $province_id
 * @property int $district_id
 * @property int $city_id
 * @property int $active
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read City $city
 * @property-read \Illuminate\Database\Eloquent\Collection<int, Complain> $complains
 * @property-read int|null $complains_count
 * @property-read Country $country
 * @property-read District $district
 * @property-read \Illuminate\Database\Eloquent\Collection<int, Invoice> $invoice
 * @property-read int|null $invoice_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, MatterDocument> $matter_documents
 * @property-read int|null $matter_documents_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, Matter> $matters
 * @property-read int|null $matters_count
 * @property-read Province $province
 * @property-read \App\Models\User|null $user
 * @method static \Database\Factories\ClientFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Client newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Client newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Client onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Client query()
 * @method static \Illuminate\Database\Eloquent\Builder|Client whereActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Client whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Client whereCityId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Client whereCountryId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Client whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Client whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Client whereDistrictId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Client whereFullName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Client whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Client whereMobile($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Client whereNic($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Client wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Client whereProvinceId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Client whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Client withTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Client withoutTrashed()
 * @mixin \Eloquent
 */
class Client extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'id',
        'nic',
        'full_name',
        'mobile',
        'phone',
        'address',
        'country_id',
        'province_id',
        'district_id',
        'city_id',
        'active',
    ];

    public function user()
    {
        return $this->hasOne(User::class, 'reference_id');
    }

    public function city()
    {
        return $this->belongsTo(City::class);
    }

    public function district()
    {
        return $this->belongsTo(District::class);
    }

    public function province()
    {
        return $this->belongsTo(Province::class);
    }

    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    public function matters()
    {
        return $this->hasMany(Matter::class);
    }

    public function matter_documents()
    {
        return $this->hasMany(MatterDocument::class);
    }

    public function complains()
    {
        return $this->hasMany(Complain::class);
    }

    public function invoice()
    {
        return $this->hasMany(Invoice::class);
    }
}
