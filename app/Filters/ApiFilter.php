<?php

namespace App\Filters;

use Illuminate\Http\Request;

class ApiFilter{
    protected $safeParams = [];
    protected $columnMap =[];
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
    public function transform(Request $request){
        $eloQuery =[];
        foreach($this->safeParams as $parm =>$operators){
            $query = $request->query($parm);
            if(!isset($query)){
                continue;
            }
            $column = $this->columnMap[$parm] ?? $parm;
            foreach ($operators as $operator){
                $eloQuery[] = [$column, $this->operatorMap[$operator], $query[$operator]];
            }
        }
        return $eloQuery;
    }
}

