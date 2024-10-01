<?php

namespace App\Filters\Auth;

use App\Filters\ApiFilter;

class UserFilter extends ApiFilter
{
    protected $safeParams = [
        'reference_id' => ['eq'],
        'user_type_id' => ['eq'],
        'id' => ['eq'],
        'name' => ['like'],
        'email' => ['like'],
        'last_login' => ['eq', 'lt', 'gt'],
        'active' => ['eq'],
    ];

    protected $columnMap = [
        'name' => 'name',
    ];
}
