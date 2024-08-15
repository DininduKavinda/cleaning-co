<?php

namespace App\Http\Controllers\Api\Meta;

use App\Filters\Meta\CountryFilter;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCountryRequest;
use App\Http\Requests\UpdateCountryRequest;
use App\Http\Resources\Api\Meta\CountryCollection;
use App\Http\Resources\Api\Meta\CountryResource;
use App\Models\Meta\Country;
use Illuminate\Http\Request;

class CountryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter = new CountryFilter;
        $filterItems = $filter->transform($request);
        $countries = Country::where($filterItems);

        return new CountryCollection($countries->paginate(20000)->appends($request->query()));
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
    public function store(StoreCountryRequest $request)
    {
        return new CountryResource(Country::create($request->all()));
    }

    /**
     * Display the specified resource.
     */
    public function show(Country $country)
    {
        $includeUsers = request()->query('includeUsers');
        if ($includeUsers) {
            return new CountryResource($country->loadMissing(['users', 'status', 'currency']));
        }

        return new CountryResource($country);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Country $country)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCountryRequest $request, Country $country)
    {
        $country->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Country $country)
    {
        $country->delete();

        return response()->json([
            'message' => 'succesfully Deleted',
        ]);
    }
}
