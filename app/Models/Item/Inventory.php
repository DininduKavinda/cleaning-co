<?php

namespace App\Models\Item;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property int $item_id
 * @property int $id
 * @property int $status
 * @property string $notes
 * @property string|null $physical_location
 * @property int $active
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Item\Item|null $item
 *
 * @method static \Database\Factories\Item\InventoryFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Inventory newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Inventory newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Inventory onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Inventory query()
 * @method static \Illuminate\Database\Eloquent\Builder|Inventory whereActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Inventory whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Inventory whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Inventory whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Inventory whereItemId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Inventory whereNotes($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Inventory wherePhysicalLocation($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Inventory whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Inventory whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Inventory withTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Inventory withoutTrashed()
 *
 * @mixin \Eloquent
 */
class Inventory extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'item_id',
        'id',
        'status',
        'notes',
        'physical_location',
        'active',
    ];

    public function item()
    {
        return $this->hasOne(Item::class);
    }
}
