<?php

namespace App\Http\Controllers\Api\Meta;

use App\Filters\Meta\DistrictFilter;
use App\Http\Resources\Api\Meta\DistrictCollection;
use App\Http\Resources\Api\Meta\DistrictResource;
use App\Models\Meta\District;
use App\Http\Requests\StoreDistrictRequest;
use App\Http\Requests\UpdateDistrictRequest;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DistrictController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter = new DistrictFilter();
        $filterItems = $filter->transform($request);
        $includeAll = $request->query('includeAll');
        $districts = District::where($filterItems);
        if($includeAll){
            $districts= $districts->with(['cities']);
        }
        return new DistrictCollection($districts->paginate(20000)->appends($request->query()));
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
    public function store(StoreDistrictRequest $request)
    {
        return new DistrictResource(District::create($request->all()));
    }

    /**
     * Display the specified resource.
     */
    public function show(District $district)
    {
        // $includeAll = request()->query('includeAll');
        // if($includeAll){
        //     return new DistrictResource($district->loadMissing(['cities','status']));
        // }
        // return new DistrictResource($district);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(District $district)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDistrictRequest $request, District $district)
    {
        $district->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(District $district)
    {
        $district->delete();
    }
}
