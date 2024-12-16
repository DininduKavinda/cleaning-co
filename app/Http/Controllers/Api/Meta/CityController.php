<?php

namespace App\Http\Controllers\Api\Meta;

use App\Filters\Meta\CityFilter;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCityRequest;
use App\Http\Requests\UpdateCityRequest;
use App\Http\Resources\Api\Meta\CityCollection;
use App\Http\Resources\Api\Meta\CityResource;
use App\Models\Meta\City;
use Illuminate\Http\Request;
 
class CityController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter = new CityFilter;
        $filterItems = $filter->transform($request);
        $includeStaff = request()->query('includeStaff');
        $includeClients = request()->query('includeClients');
        $includeDistrict = request()->query('includeDistrict');
        $includeAll = $request->query('includeAll');
        $cities = City::where($filterItems);
        if ($includeStaff) {
            $cities = $cities->with(['staff']);
        } elseif ($includeClients) {
            $cities = $cities->with(['clients']);
        } elseif ($includeDistrict) {
            $cities = $cities->with(['district']);
        }
        if ($includeAll) {
            $cities = $cities->with(['staff', 'clients', 'district']);
        }

        return new CityCollection($cities->paginate(10)->appends($request->query()));
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
    public function store(StoreCityRequest $request)
    {
        $validatedData = $request->validated();

        return new CityResource(City::create($validatedData));
    }

    /**
     * Display the specified resource.
     */
    public function show(City $city)
    {
        $includeStaff = request()->query('includeStaff');
        $includeClients = request()->query('includeClients');
        $includeDistrict = request()->query('includeDistrict');
        $includeAll = request()->query('includeAll');
        if ($includeStaff) {
            $city = $city->loadMissing(['staff']);
        } elseif ($includeClients) {
            $city = $city->loadMissing(['clients']);
        } elseif ($includeDistrict) {
            $city = $city->loadMissing(['district']);
        }

        return new CityResource($city);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(City $city) {}

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCityRequest $request, City $city)
    {
        $validatedData = $request->validated();
        $city->update($validatedData);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(City $city)
    {
        $city = $city->delete();
        if ($city) {
            $message = 'success';
        } else {
            $message = 'error';
        }

        return response()->json([
            'message' => $message,
        ]);
    }
}
