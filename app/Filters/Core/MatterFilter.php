<?php

namespace App\Filters\Core;

use App\Filters\ApiFilter;

class MatterFilter extends ApiFilter
{
    protected $safeParams = [
        'task_id' => ['eq'],
        'client_id' => ['eq'],
        'staff_id' => ['eq'],
        'approved_by' => ['eq'],
        'department_id' => ['eq'],
        'id' => ['eq'],
        'name'=>['like'],
        'code' => ['eq'],
        'description' => ['like'],
        'started_at' => ['eq','gt','lt'],
        'ended_at' => ['eq','gt','lt'],
        'status' => ['eq'],
        'active' => ['eq'],
    ];

    protected $columnMap = [
        'name' => 'name',
    ];
}
