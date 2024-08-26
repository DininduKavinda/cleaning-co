<?php

namespace App\Filters\Com;

use App\Filters\ApiFilter;

class TimecardTaskFilter extends ApiFilter
{
    protected $safeParams = [
        'name' => ['like'],
        'rate' => ['eq'],
        'active' => ['eq'],
    ];

    protected $columnMap = [
        'name' => 'name',
    ];
}
