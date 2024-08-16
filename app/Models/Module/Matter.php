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
    public function invoice(){
        return $this->hasOne(Invoice::class);
    }
     public function invoice_timecard()
    {
        return $this->hasMany(InvoiceTimecard::class);
    }
}
