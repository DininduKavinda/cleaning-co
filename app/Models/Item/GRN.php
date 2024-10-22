<?php

namespace App\Models\Item;

use App\Models\Module\Matter;
use App\Models\Staff;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property int $item_id
 * @property Staff|null $approved_by
 * @property Staff $returned_by
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
 *
 * @method static \Database\Factories\Item\GRNFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|GRN newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|GRN newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|GRN onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|GRN query()
 * @method static \Illuminate\Database\Eloquent\Builder|GRN whereActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GRN whereApprovedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GRN whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GRN whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GRN whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GRN whereItemId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GRN whereMatterId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GRN whereNotes($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GRN whereQty($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GRN whereReturnedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GRN whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GRN withTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|GRN withoutTrashed()
 *
 * @mixin \Eloquent
 */
class GRN extends Model
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
