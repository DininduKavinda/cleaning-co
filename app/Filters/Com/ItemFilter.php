<?php

namespace App\Filters\Com;

use App\Filters\ApiFilter;

class ItemFilter extends ApiFilter
{
    protected $safeParams = [
        'item_type_id' => ['eq'],
        'name' => ['like'],
        'price' => ['eq', 'gt', 'lt'],
        'active' => ['eq'],
    ];

    protected $columnMap = [
        'name' => 'name',
    ];
}
