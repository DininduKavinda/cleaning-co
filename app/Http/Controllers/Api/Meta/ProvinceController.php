<?php

namespace App\Http\Controllers\Api\Meta;

use App\Filters\Meta\ProvinceFilter;
use App\Http\Resources\Api\Meta\ProvinceResource;
use App\Models\Meta\Province;
use App\Http\Requests\StoreProvinceRequest;
use App\Http\Requests\UpdateProvinceRequest;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Api\Meta\ProvinceCollection;

class ProvinceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter = new ProvinceFilter();
        $filterItems = $filter->transform($request);
        $includeAll = $request->query('includeAll');
        $provinces = Province::where($filterItems);
        if($includeAll){
            $provinces = $provinces->with('districts');
        }
        return new ProvinceCollection($provinces->paginate(10000)->append($request->query()));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProvinceRequest $request)
    {

    }

    /**
     * Display the specified resource.
     */
    public function show(Province $province)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Province $province)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProvinceRequest $request, Province $province)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Province $province)
    {
        //
    }
}
