<?php

namespace App\Filters\Staff;

use App\Filters\ApiFilter;

class StaffFilter extends ApiFilter
{
    protected $safeParams = [
        'level_id' => ['eq'],
        'country_id' => ['eq'],
        'province_id' => ['eq'],
        'district_id' => ['eq'],
        'city_id' => ['eq'],
        'department_id' => ['eq'],
        'first_name' => ['like'],
        'last_name' => ['like'],
        'nic' => ['eq'],
        'titile' => ['eq'],
        'initial' => ['like'],
        'full_name' => ['like'],
        'dob' => ['eq'],
        'address' => ['eq'],
        'mobile' => ['eq'],
        'phone' => ['eq'],
        'civil_status' => ['eq'],
        'active' => ['eq'],
    ];

    protected $columnMap = [
        'name' => 'name',
    ];
}
