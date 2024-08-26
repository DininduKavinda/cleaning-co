<?php

namespace App\Filters\Clients;

use App\Filters\ApiFilter;

class ClientsFilter extends ApiFilter
{
    protected $safeParams = [
        'name' => ['like'],
        'address' => ['like'],
        'phone' => ['eq'],
        'mobile' => ['eq'],
        'nic' => ['eq'],
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
