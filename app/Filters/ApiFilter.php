<?php

namespace App\Filters;

use Illuminate\Http\Request;

class ApiFilter
{
    protected $safeParams = [];

    protected $columnMap = [];

    protected $operatorMap = [
        'eq' => '=',
        'gt' => '>',
        'lt' => '<',
        'like' => 'like',
        'in' => 'in',
        'not in' => 'not in',
        'between' => 'between',
        'not between' => 'not between',
        'is null' => 'is null',
        'is not null' => 'is not null',
        'lte' => '<=',
        'gte' => '>=',
    ];

    public function transform(Request $request)
    {
        $eloQuery = [];
        foreach ($this->safeParams as $param => $operators) {
            $query = $request->query($param);
            if (!isset($query)) {
                continue;
            }
            $column = $this->columnMap[$param] ?? $param;
            foreach ($operators as $operator) {
                $value = $query[$operator];

                if ($operator === 'like') {
                    $value = "%{$value}%";
                }

                $eloQuery[] = [$column, $this->operatorMap[$operator], $value];
            }
        }

        return $eloQuery;
    }
}
