<?php

namespace App\Models\Invoice;

use App\Models\Client;
use App\Models\Module\Matter;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Invoice extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'client_id',
        'invoice_deduction_id',
        'matter_id',
        'id',
        'code',
        'VAT',
        'NBT',
        'WHT',
        'subtotal',
        'deductions',
        'total',
        'date',
        'date_due',
        'paid',
        'status',
        'active',
    ];

    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    public function invoice_deduction()
    {
        return $this->belongsTo(InvoiceDeduction::class);
    }

    public function matter()
    {
        return $this->belongsTo(Matter::class);
    }

    public function invoice_timecard()
    {
        return $this->hasMany(InvoiceTimecard::class);
    }
}
