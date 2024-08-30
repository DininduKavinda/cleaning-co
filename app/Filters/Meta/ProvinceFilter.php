<?php

namespace App\Filters\Meta;

use App\Filters\ApiFilter;

class ProvinceFilter extends ApiFilter
{
    protected $safeParams = [
        'name_en' => ['like'],
        'name_si' => ['like'],
        'name_ta' => ['like'],
        'status_id' => ['eq'],
        'country_id' => ['eq'],
    ];

    protected $columnMap = [
        'country_id' => 'country_id',
    ];
}
