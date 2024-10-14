<?php

namespace App\Models\Item;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * 
 *
 * @property int $item_type_id
 * @property int $id
 * @property string $name
 * @property string $price
 * @property int $active
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Item\GDN> $GDN
 * @property-read int|null $g_d_n_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Item\GRN> $GRN
 * @property-read int|null $g_r_n_count
 * @property-read \App\Models\Item\Inventory|null $inventory
 * @property-read \App\Models\Item\ItemType $item_type
 * @method static \Database\Factories\Item\ItemFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Item newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Item newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Item onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Item query()
 * @method static \Illuminate\Database\Eloquent\Builder|Item whereActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item whereItemTypeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item wherePrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item withTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Item withoutTrashed()
 * @mixin \Eloquent
 */
class Item extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'item_type_id',
        'id',
        'name',
        'price',
        'active',
    ];

    public function item_type()
    {
        return $this->belongsTo(ItemType::class);
    }

    public function inventory()
    {
        return $this->belongsTo(Inventory::class);
    }

    public function GRN()
    {
        return $this->hasMany(GRN::class);
    }

    public function GDN()
    {
        return $this->hasMany(GDN::class);
    }
}
