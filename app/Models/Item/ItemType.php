<?php

namespace App\Models\Item;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ItemType extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = [
        'name',
        'id',
        'active'
    ];
    public function item(){
        return $this->hasMany(Item::class);
    }
}
