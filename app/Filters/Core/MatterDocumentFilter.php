<?php

namespace App\Filters\Core;

use App\Filters\ApiFilter;

class MatterDocumentFilter extends ApiFilter
{
    protected $safeParams = [
        'matter_id' => ['eq'],
        'client_id' => ['eq'],
        'staff_id' => ['eq'],
        'id' => ['eq'],
        'active' => ['eq'],
    ];

    protected $columnMap = [
        'active' => 'active',
    ];
}
