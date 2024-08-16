<?php

namespace App\Models\Meta;

use App\Models\Client;
use App\Models\Module\Matter;
use App\Models\Staff;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Complain extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'matter_id',
        'client_id',
        'staff_id',
        'id',
        'description',
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
