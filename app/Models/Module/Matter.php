<?php

namespace App\Models\Module;

use App\Models\Client;
use App\Models\Department;
use App\Models\Invoice\Invoice;
use App\Models\Invoice\InvoiceTimecard;
use App\Models\Item\GDN;
use App\Models\Item\GRN;
use App\Models\Meta\Complain;
use App\Models\Staff;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property int $task_id
 * @property int $client_id
 * @property int $staff_id
 * @property int $approved_by
 * @property int $department_id
 * @property int $id
 * @property string $code
 * @property string $name
 * @property string $description
 * @property string $started_at
 * @property string $ended_at
 * @property string|null $map_latitude
 * @property string|null $map_longitude
 * @property int $status
 * @property int $active
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, GDN> $GDN
 * @property-read int|null $g_d_n_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, GRN> $GRN
 * @property-read int|null $g_r_n_count
 * @property-read Staff $approved
 * @property-read Client $client
 * @property-read \Illuminate\Database\Eloquent\Collection<int, Complain> $complains
 * @property-read int|null $complains_count
 * @property-read Department $department
 * @property-read Invoice|null $invoice
 * @property-read \Illuminate\Database\Eloquent\Collection<int, InvoiceTimecard> $invoice_timecard
 * @property-read int|null $invoice_timecard_count
 * @property-read \App\Models\Module\MatterAccess|null $matter_access
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Module\MatterDocument> $matter_documents
 * @property-read int|null $matter_documents_count
 * @property-read Staff $staff
 * @property-read \App\Models\Module\Task $task
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Module\Timecard> $timecards
 * @property-read int|null $timecards_count
 *
 * @method static \Database\Factories\Module\MatterFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Matter newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Matter newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Matter onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Matter query()
 * @method static \Illuminate\Database\Eloquent\Builder|Matter whereActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Matter whereApprovedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Matter whereClientId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Matter whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Matter whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Matter whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Matter whereDepartmentId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Matter whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Matter whereEndedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Matter whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Matter whereMapLatitude($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Matter whereMapLongitude($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Matter whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Matter whereStaffId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Matter whereStartedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Matter whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Matter whereTaskId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Matter whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Matter withTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Matter withoutTrashed()
 *
 * @mixin \Eloquent
 */
class Matter extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'task_id',
        'client_id',
        'staff_id',
        'approved_by',
        'department_id',
        'id',
        'code',
        'name',
        'map_longitude',
        'map_latitude',
        'description',
        'started_at',
        'ended_at',
        'status',
        'active',
    ];

    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    public function staff()
    {
        return $this->belongsTo(Staff::class);
    }

    public function approved()
    {
        return $this->belongsTo(Staff::class, 'approved_by');
    }

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function task()
    {
        return $this->belongsTo(Task::class);
    }

    public function matter_access()
    {
        return $this->belongsTo(MatterAccess::class);
    }

    public function timecards()
    {
        return $this->hasMany(TimeCard::class);
    }

    public function matter_documents()
    {
        return $this->hasMany(MatterDocument::class);
    }

    public function GRN()
    {
        return $this->hasMany(GRN::class);
    }

    public function GDN()
    {
        return $this->hasMany(GDN::class);
    }

    public function complains()
    {
        return $this->hasMany(Complain::class);
    }

    public function invoice()
    {
        return $this->hasOne(Invoice::class);
    }

    public function invoice_timecard()
    {
        return $this->hasMany(InvoiceTimecard::class);
    }
}
