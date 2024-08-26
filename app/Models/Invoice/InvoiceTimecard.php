<?php

namespace App\Models\Invoice;

use App\Models\Module\Matter;
use App\Models\Module\Timecard;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class InvoiceTimecard extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'timecard_id',
        'matter_id',
        'invoice_id',
        'id',
        'fee',
        'net_fee',
        'description',
        'active',
    ];

    public function timecard()
    {
        return $this->belongsTo(Timecard::class);
    }

    public function matter()
    {
        return $this->belongsTo(Matter::class);
    }

    public function invoice()
    {
        return $this->belongsTo(Invoice::class);
    }
}
