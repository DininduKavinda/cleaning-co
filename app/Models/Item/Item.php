<?php

namespace App\Models\Item;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Item extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = [
        'item_type_id',
        'id',
        'name',
        'price',
        'active'
    ];
    public function item_type(){
        return $this->belongsTo(ItemType::class);
    }
    public function inventory(){
        return $this->belongsTo(Inventory::class);
    }
}
