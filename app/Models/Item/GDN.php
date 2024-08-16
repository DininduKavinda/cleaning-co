<?php

namespace App\Models\Item;

use App\Models\Module\Matter;
use App\Models\Staff;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

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
