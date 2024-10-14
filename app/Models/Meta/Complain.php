<?php

namespace App\Models\Meta;

use App\Models\Client;
use App\Models\Module\Matter;
use App\Models\Staff;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * 
 *
 * @property int|null $matter_id
 * @property int|null $client_id
 * @property int|null $staff_id
 * @property int $id
 * @property string $description
 * @property int $active
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read Client|null $client
 * @property-read Matter|null $matter
 * @property-read Staff|null $staff
 * @method static \Database\Factories\Meta\ComplainFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Complain newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Complain newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Complain onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Complain query()
 * @method static \Illuminate\Database\Eloquent\Builder|Complain whereActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Complain whereClientId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Complain whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Complain whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Complain whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Complain whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Complain whereMatterId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Complain whereStaffId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Complain whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Complain withTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Complain withoutTrashed()
 * @mixin \Eloquent
 */
class Complain extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'matter_id',
        'client_id',
        'staff_id',
        'id',
        'description',
        'active',
    ];

    public function matter()
    {
        return $this->belongsTo(Matter::class);
    }

    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    public function staff()
    {
        return $this->belongsTo(Staff::class);
    }
}
