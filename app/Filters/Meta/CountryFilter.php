<?php

namespace App\Filters\Meta;

use App\Filters\ApiFilter;

class CountryFilter extends ApiFilter
{
    protected $safeParams = [
        'country_name' => ['eq', 'like'],
        'iso_code' => ['like'],
        'phone_code' => ['eq', ['gt'], ['lt']],
        'status_id' => ['eq'],
        'user_id' => ['eq'],
        'currency_id' => ['eq'],
    ];

    protected $columnMap = [
        'country_name' => 'country_name',
    ];
}
