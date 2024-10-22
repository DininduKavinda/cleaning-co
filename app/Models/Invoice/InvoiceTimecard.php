<?php

namespace App\Models\Invoice;

use App\Models\Module\Matter;
use App\Models\Module\Timecard;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property int $timecard_id
 * @property int $matter_id
 * @property int $invoice_id
 * @property int $id
 * @property string $fee
 * @property string $net_fee
 * @property string $description
 * @property int $active
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Invoice\Invoice $invoice
 * @property-read Matter $matter
 * @property-read Timecard $timecard
 *
 * @method static \Database\Factories\Invoice\InvoiceTimecardFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|InvoiceTimecard newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|InvoiceTimecard newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|InvoiceTimecard onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|InvoiceTimecard query()
 * @method static \Illuminate\Database\Eloquent\Builder|InvoiceTimecard whereActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|InvoiceTimecard whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|InvoiceTimecard whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|InvoiceTimecard whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|InvoiceTimecard whereFee($value)
 * @method static \Illuminate\Database\Eloquent\Builder|InvoiceTimecard whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|InvoiceTimecard whereInvoiceId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|InvoiceTimecard whereMatterId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|InvoiceTimecard whereNetFee($value)
 * @method static \Illuminate\Database\Eloquent\Builder|InvoiceTimecard whereTimecardId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|InvoiceTimecard whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|InvoiceTimecard withTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|InvoiceTimecard withoutTrashed()
 *
 * @mixin \Eloquent
 */
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
