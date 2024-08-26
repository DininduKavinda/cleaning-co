<?php

namespace App\Http\Controllers\Api\Meta;

use App\Filters\Meta\DistrictFilter;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreDistrictRequest;
use App\Http\Requests\UpdateDistrictRequest;
use App\Http\Resources\Api\Meta\DistrictCollection;
use App\Http\Resources\Api\Meta\DistrictResource;
use App\Models\Meta\District;
use Illuminate\Http\Request;

class DistrictController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter = new DistrictFilter;
        $filterItems = $filter->transform($request);
        $includeStaff = request()->query('includeStaff');
        $includeClients = request()->query('includeClients');
        $includeCities = request()->query('includeCities');
        $includeProvince = request()->query('includeProvince');
        $includeAll = $request->query('includeAll');
        $districts = District::where($filterItems);
        if ($includeAll) {
            $districts = $districts->with(['cities', 'province', 'staff', 'clients']);
        } elseif ($includeStaff) {
            $districts = $districts->with(['staff']);
        } elseif ($includeClients) {
            $districts = $districts->with(['clients']);
        } elseif ($includeCities) {
            $districts = $districts->with(['cities']);
        } elseif ($includeProvince) {
            $districts = $districts->with(['province']);
        }
        return new DistrictCollection($districts->paginate(10)->appends($request->query()));
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
        $validatedData = $request->validated();
        return new DistrictResource(District::create($validatedData));
    }

    /**
     * Display the specified resource.
     */
    public function show(District $district)
    {
        $includeStaff = request()->query('includeStaff');
        $includeClients = request()->query('includeClients');
        $includeCities = request()->query('includeCities');
        $includeProvince = request()->query('includeProvince');
        $includeAll = request()->query('includeAll');
        if ($includeAll) {
            $districts = $district->loadMissing(['cities', 'province', 'staff', 'clients']);
        } elseif ($includeStaff) {
            $districts = $district->loadMissing(['staff']);
        } elseif ($includeClients) {
            $districts = $district->loadMissing(['clients']);
        } elseif ($includeCities) {
            $districts = $district->loadMissing(['cities']);
        } elseif ($includeProvince) {
            $districts = $district->loadMissing(['province']);
        }
        return new DistrictResource($district);
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
        $validatedData = $request->validated();
        $district->update($validatedData);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(District $district)
    {
        $district = $district->delete();
        if ($district) {
            $message = 'success';
        } else {
            $message = 'error';
        }
        return response()->json([
            'message' => $message,
        ]);
    }
}
