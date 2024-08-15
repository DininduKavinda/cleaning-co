<?php

namespace App\Filters\Meta;

use App\Filters\ApiFilter;

class DistrictFilter extends ApiFilter
{
    protected $safeParams = [
        'name_en' => ['eq', 'like'],
        'name_si' => ['like'],
        'name_ta' => ['like'],
        'status_id' => ['eq'],
        'province_id' => ['eq'],
    ];

    protected $columnMap = [
        'province_id' => 'province_id',
    ];
}
