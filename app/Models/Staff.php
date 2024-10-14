<?php

namespace App\Models;

use App\Models\Item\GDN;
use App\Models\Item\GRN;
use App\Models\Meta\City;
use App\Models\Meta\Complain;
use App\Models\Meta\Country;
use App\Models\Meta\District;
use App\Models\Meta\Province;
use App\Models\Module\Matter;
use App\Models\Module\MatterAccess;
use App\Models\Module\MatterDocument;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * 
 *
 * @property int $level_id
 * @property int $country_id
 * @property int $province_id
 * @property int $district_id
 * @property int $city_id
 * @property int $department_id
 * @property int $id
 * @property string $first_name
 * @property string $last_name
 * @property string $nic
 * @property string $title
 * @property string $initial
 * @property string $full_name
 * @property string $dob
 * @property string $address
 * @property string $mobile
 * @property string $phone
 * @property string $civil_status
 * @property int $active
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, GDN> $GDN_approve
 * @property-read int|null $g_d_n_approve_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, GDN> $GDN_despatch
 * @property-read int|null $g_d_n_despatch_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, GRN> $GRN_approve
 * @property-read int|null $g_r_n_approve_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, GRN> $GRN_return
 * @property-read int|null $g_r_n_return_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, Matter> $approved
 * @property-read int|null $approved_count
 * @property-read City $city
 * @property-read \Illuminate\Database\Eloquent\Collection<int, Complain> $complains
 * @property-read int|null $complains_count
 * @property-read Country $country
 * @property-read \App\Models\Department $department
 * @property-read District $district
 * @property-read \App\Models\Level $level
 * @property-read \Illuminate\Database\Eloquent\Collection<int, MatterAccess> $matter_access
 * @property-read int|null $matter_access_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, MatterDocument> $matter_documents
 * @property-read int|null $matter_documents_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, Matter> $matters
 * @property-read int|null $matters_count
 * @property-read Province $province
 * @property-read \App\Models\User|null $user
 * @method static \Database\Factories\StaffFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Staff newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Staff newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Staff onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Staff query()
 * @method static \Illuminate\Database\Eloquent\Builder|Staff whereActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Staff whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Staff whereCityId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Staff whereCivilStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Staff whereCountryId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Staff whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Staff whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Staff whereDepartmentId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Staff whereDistrictId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Staff whereDob($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Staff whereFirstName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Staff whereFullName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Staff whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Staff whereInitial($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Staff whereLastName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Staff whereLevelId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Staff whereMobile($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Staff whereNic($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Staff wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Staff whereProvinceId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Staff whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Staff whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Staff withTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Staff withoutTrashed()
 * @mixin \Eloquent
 */
class Staff extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'level_id',
        'country_id',
        'province_id',
        'district_id',
        'city_id',
        'department_id',
        'id',
        'first_name',
        'last_name',
        'nic',
        'title',
        'initial',
        'full_name',
        'dob',
        'address',
        'mobile',
        'phone',
        'civil_status',
        'active',
    ];

    public function user()
    {
        return $this->hasOne(User::class, 'reference_id');
    }

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function level()
    {
        return $this->belongsTo(Level::class);
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

    public function approved()
    {
        return $this->hasMany(Matter::class, 'approved_by');
    }

    public function matter_access()
    {
        return $this->hasMany(MatterAccess::class);
    }

    public function matter_documents()
    {
        return $this->hasMany(MatterDocument::class);
    }

    public function GRN_approve()
    {
        return $this->hasMany(GRN::class, 'approved_by');
    }

    public function GDN_approve()
    {
        return $this->hasMany(GDN::class, 'approved_by');
    }

    public function GRN_return()
    {
        return $this->hasMany(GRN::class, 'returened_by');
    }

    public function GDN_despatch()
    {
        return $this->hasMany(GDN::class, 'despatched_by');
    }

    public function complains()
    {
        return $this->hasMany(Complain::class);
    }
}
