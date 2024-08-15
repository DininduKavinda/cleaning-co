<?php

namespace App\Filters\Clients;

use App\Filters\ApiFilter;

class ClientsFilter extends ApiFilter
{
    protected $safeParams = [
        'full_name' => ['like'],
        'address' => ['like'],
        'phone' => ['eq'],
        'mobile' => ['eq'],
        'post_code' => ['eq'],
        'city_id' => ['eq'],
        'district_id' => ['eq'],
        'province_id' => ['eq'],
        'status_id' => ['eq'],
    ];

    protected $columnMap = [
        'full_name' => 'full_name',
    ];
}
