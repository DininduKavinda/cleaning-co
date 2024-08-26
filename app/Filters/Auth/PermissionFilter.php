<?php

namespace App\Filters\Auth;

use App\Filters\ApiFilter;

class PermissionFilter extends ApiFilter
{
    protected $safeParams = [
        'id' => ['eq'],
        'name' => ['like'],
        'guard_name' => ['eq'],
    ];

    protected $columnMap = [
        'name' => 'name',
    ];
}
