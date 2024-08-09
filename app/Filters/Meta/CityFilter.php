<?php

namespace App\Filters\Meta;

use Illuminate\Http\Request;
use App\Filters\ApiFilter;

class CityFilter extends ApiFilter
{
    protected $safeParams = [
        'name_en' => ['eq', 'like'],
        'name_si' => ['like'],
        'name_ta' => ['like'],
        'status_id' => ['eq'],
        'district_id' => ['eq'],
    ];
    protected $columnMap = [
        'district_id' => 'district_id',
    ];
}
