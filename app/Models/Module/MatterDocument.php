<?php

namespace App\Models\Module;

use App\Models\Client;
use App\Models\Staff;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property int $matter_id
 * @property int|null $client_id
 * @property int|null $staff_id
 * @property int $id
 * @property string $document
 * @property string $file_name
 * @property int $status
 * @property string $notes
 * @property int $active
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read Client|null $client
 * @property-read \App\Models\Module\Matter $matter
 * @property-read Staff|null $staff
 *
 * @method static \Database\Factories\Module\MatterDocumentFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|MatterDocument newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|MatterDocument newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|MatterDocument onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|MatterDocument query()
 * @method static \Illuminate\Database\Eloquent\Builder|MatterDocument whereActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MatterDocument whereClientId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MatterDocument whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MatterDocument whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MatterDocument whereDocument($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MatterDocument whereFileName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MatterDocument whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MatterDocument whereMatterId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MatterDocument whereNotes($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MatterDocument whereStaffId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MatterDocument whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MatterDocument whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MatterDocument withTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|MatterDocument withoutTrashed()
 *
 * @mixin \Eloquent
 */
class MatterDocument extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'id',
        'matter_id',
        'document',
        'file_name',
        'status',
        'client_id',
        'staff_id',
        'notes',
        'active',
    ];

    public function matter()
    {
        return $this->belongsTo(Matter::class);
    }

    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    public function staff()
    {
        return $this->belongsTo(Staff::class);
    }
}
