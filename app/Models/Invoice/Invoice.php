<?php

namespace App\Models\Invoice;

use App\Models\Client;
use App\Models\Module\Matter;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property int $client_id
 * @property int $invoice_deduction_id
 * @property int $matter_id
 * @property int $id
 * @property string $code
 * @property string $VAT
 * @property string $NBT
 * @property string $WHT
 * @property string $subtotal
 * @property string $deductions
 * @property string $total
 * @property string $date
 * @property string $due_date
 * @property int $paid
 * @property int $status
 * @property int $active
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read Client $client
 * @property-read \App\Models\Invoice\InvoiceDeduction $invoice_deduction
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Invoice\InvoiceTimecard> $invoice_timecard
 * @property-read int|null $invoice_timecard_count
 * @property-read Matter $matter
 *
 * @method static \Database\Factories\Invoice\InvoiceFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Invoice newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Invoice newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Invoice onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Invoice query()
 * @method static \Illuminate\Database\Eloquent\Builder|Invoice whereActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Invoice whereClientId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Invoice whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Invoice whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Invoice whereDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Invoice whereDeductions($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Invoice whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Invoice whereDueDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Invoice whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Invoice whereInvoiceDeductionId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Invoice whereMatterId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Invoice whereNBT($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Invoice wherePaid($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Invoice whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Invoice whereSubtotal($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Invoice whereTotal($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Invoice whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Invoice whereVAT($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Invoice whereWHT($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Invoice withTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Invoice withoutTrashed()
 *
 * @mixin \Eloquent
 */
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
