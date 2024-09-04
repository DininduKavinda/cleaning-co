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
        'nic' => ['like'],
        'city_id' => ['eq'],
        'district_id' => ['eq'],
        'province_id' => ['eq'],
        'country_id' => ['eq'],
        'active' => ['eq'],
    ];

    protected $columnMap = [
        'name' => 'name',
    ];
}
