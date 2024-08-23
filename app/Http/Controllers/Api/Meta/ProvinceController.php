<?php

namespace App\Http\Controllers\Api\Meta;

use App\Filters\Meta\ProvinceFilter;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProvinceRequest;
use App\Http\Requests\UpdateProvinceRequest;
use App\Http\Resources\Api\Meta\ProvinceCollection;
use App\Http\Resources\Api\Meta\ProvinceResource;
use App\Models\Meta\Province;
use Illuminate\Http\Request;

class ProvinceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter = new ProvinceFilter;
        $filterItems = $filter->transform($request);
        $includeStaff = request()->query('includeStaff');
        $includeClients = request()->query('includeClients');
        $includeDistricts = request()->query('includeDistricts');
        $includeCountry = request()->query('includeCountry');
        $includeAll = $request->query('includeAll');
        $provinces = Province::where($filterItems);
        if ($includeAll) {
            $provinces = $provinces->with(['districts', 'staffs', 'clients', 'country']);
        } elseif ($includeStaff) {
            $provinces = $provinces->with(['staffs']);
        } elseif ($includeClients) {
            $provinces = $provinces->with(['clients']);
        } elseif ($includeDistricts) {
            $provinces = $provinces->with(['districts']);
        } elseif ($includeCountry) {
            $provinces = $provinces->with(['country']);
        }
        return new ProvinceCollection($provinces->paginate(10)->append($request->query()));
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
        $validatedData = $request->validated();
        return new ProvinceResource(Province::create($validatedData));
    }

    /**
     * Display the specified resource.
     */
    public function show(Province $province)
    {
        $includeStaff = request()->query('includeStaff');
        $includeClients = request()->query('includeClients');
        $includeDistricts = request()->query('includeDistricts');
        $includeCountry = request()->query('includeCountry');
        $includeAll = request()->query('includeAll');
        if ($includeAll) {
            $provinces = $province->loadMissing(['districts', 'staffs', 'clients', 'country']);
        } elseif ($includeStaff) {
            $provinces = $province->loadMissing(['staffs']);
        } elseif ($includeClients) {
            $provinces = $province->loadMissing(['clients']);
        } elseif ($includeDistricts) {
            $provinces = $province->loadMissing(['districts']);
        } elseif ($includeCountry) {
            $provinces = $province->loadMissing(['country']);
        }
        return new ProvinceResource($province);
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
        $validatedData = $request->validated();
        $province->update($validatedData);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Province $province)
    {
        $province->delete();
        if($province){
            $message = 'success';
        }else{
            $message = 'error';
        }
        return response()->json([
            'message' => $message,
        ]);
    }
}
