<?php

namespace App\Filters\Com;

use App\Filters\ApiFilter;

class TaskFilter extends ApiFilter
{
    protected $safeParams = [
        'name' => ['like'],
        'active' => ['eq'],
    ];

    protected $columnMap = [
        'name' => 'name',
    ];
}
