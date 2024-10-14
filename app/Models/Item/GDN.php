<?php

namespace App\Models\Item;

use App\Models\Module\Matter;
use App\Models\Staff;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * 
 *
 * @property int $item_id
 * @property Staff|null $approved_by
 * @property int $despatched_by
 * @property int|null $matter_id
 * @property int $id
 * @property string $notes
 * @property int $qty
 * @property int $active
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Item\Item $item
 * @property-read Matter|null $matter
 * @property-read Staff|null $returned_by
 * @method static \Database\Factories\Item\GDNFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|GDN newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|GDN newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|GDN onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|GDN query()
 * @method static \Illuminate\Database\Eloquent\Builder|GDN whereActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GDN whereApprovedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GDN whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GDN whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GDN whereDespatchedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GDN whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GDN whereItemId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GDN whereMatterId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GDN whereNotes($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GDN whereQty($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GDN whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GDN withTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|GDN withoutTrashed()
 * @mixin \Eloquent
 */
class GDN extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'item_id',
        'approved_by',
        'returned_by',
        'matter_id',
        'id',
        'notes',
        'qty',
        'active',
    ];

    public function item()
    {
        return $this->belongsTo(Item::class);
    }

    public function approved_by()
    {
        return $this->belongsTo(Staff::class, 'approved_by');
    }

    public function returned_by()
    {
        return $this->belongsTo(Staff::class, 'returned_by');
    }

    public function matter()
    {
        return $this->belongsTo(Matter::class);
    }
}
