<?php

namespace App\Models\Item;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Inventory extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = [
        'item_id',
        'id',
        'status',
        'notes',
        'physical_location',
        'active'
    ];
    public function item(){
        return $this->hasOne(Item::class);
    }
}
