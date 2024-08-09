<?php

namespace App\Filters\Meta;

use Illuminate\Http\Request;
use App\Filters\ApiFilter;

class ProvinceFilter extends ApiFilter
{
    protected $safeParams = [
        'name_en' => ['eq', 'like'],
        'name_si' => ['like'],
        'name_ta' => ['like'],
        'status_id' => ['eq'],
        'country_id' => ['eq'],
    ];
    protected $columnMap = [
        'country_id' => 'country_id',
    ];
}
