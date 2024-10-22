<?php

namespace App\Models\Invoice;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property int $id
 * @property string $name
 * @property string $description
 * @property string $amount
 * @property int $active
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Invoice\Invoice> $invoice
 * @property-read int|null $invoice_count
 *
 * @method static \Database\Factories\Invoice\InvoiceDeductionFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|InvoiceDeduction newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|InvoiceDeduction newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|InvoiceDeduction onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|InvoiceDeduction query()
 * @method static \Illuminate\Database\Eloquent\Builder|InvoiceDeduction whereActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|InvoiceDeduction whereAmount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|InvoiceDeduction whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|InvoiceDeduction whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|InvoiceDeduction whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|InvoiceDeduction whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|InvoiceDeduction whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|InvoiceDeduction whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|InvoiceDeduction withTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|InvoiceDeduction withoutTrashed()
 *
 * @mixin \Eloquent
 */
class InvoiceDeduction extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'id',
        'name',
        'description',
        'amount',
        'active',
    ];

    public function invoice()
    {
        return $this->hasMany(Invoice::class);
    }
}
