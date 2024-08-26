<?php

namespace App\Filters\Com;

use App\Filters\ApiFilter;

class DepartmentFilter extends ApiFilter
{
    protected $safeParams = [
        'name' => ['like'],
        'active' => ['eq'],
    ];

    protected $columnMap = [
        'name' => 'name',
    ];
}
