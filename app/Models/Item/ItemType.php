<?php

namespace App\Models\Item;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * 
 *
 * @property int $id
 * @property string $name
 * @property int $active
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Item\Item> $items
 * @property-read int|null $items_count
 * @method static \Database\Factories\Item\ItemTypeFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|ItemType newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ItemType newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ItemType onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|ItemType query()
 * @method static \Illuminate\Database\Eloquent\Builder|ItemType whereActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemType whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemType whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemType whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemType whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemType whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemType withTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|ItemType withoutTrashed()
 * @mixin \Eloquent
 */
class ItemType extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'id',
        'active',
    ];

    public function items()
    {
        return $this->hasMany(Item::class);
    }
}
