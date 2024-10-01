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
        $includeStaff = request()->query('includeStaff');
        $includeClients = request()->query('includeClients');
        $includeProvinces = request()->query('includeProvinces');
        $includeAll = request()->query('includeAll');
        $countries = Country::where($filterItems);
        if ($includeAll) {
            $countries = $countries->with(['staffs', 'clients', 'provinces']);
        } elseif ($includeStaff) {
            $countries = $countries->with(['staffs']);
        } elseif ($includeClients) {
            $countries = $countries->with(['clients']);
        } elseif ($includeProvinces) {
            $countries = $countries->with(['provinces']);
        }

        return new CountryCollection($countries->paginate(10)->appends($request->query()));
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
        $validatedData = $request->validated();

        return new CountryResource(Country::create($validatedData));
    }

    /**
     * Display the specified resource.
     */
    public function show(Country $country)
    {
        $includeStaff = request()->query('includeStaff');
        $includeClients = request()->query('includeClients');
        $includeProvinces = request()->query('includeProvinces');
        $includeAll = request()->query('includeAll');
        if ($includeAll) {
            $country = $country->loadMissing(['staffs', 'clients', 'provinces']);
        } elseif ($includeStaff) {
            $country = $country->loadMissing(['staffs']);
        } elseif ($includeClients) {
            $country = $country->loadMissing(['clients']);
        } elseif ($includeProvinces) {
            $country = $country->loadMissing(['provinces']);
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
        $validatedData = $request->validated();
        $country->update($validatedData);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Country $country)
    {
        $country->delete();
        if ($country) {
            $message = 'success';
        } else {
            $message = 'error';
        }

        return response()->json([
            'message' => $message,
        ]);
    }
}
