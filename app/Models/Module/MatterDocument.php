<?php

namespace App\Models\Module;

use App\Models\Client;
use App\Models\Staff;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

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
        'active'
    ];
    public function matter(){
        return $this->belongsTo(Matter::class);
    }
    public function client(){
        return $this->belongsTo(Client::class);
    }
    public function staff(){
        return $this->belongsTo(Staff::class);
    }
}
