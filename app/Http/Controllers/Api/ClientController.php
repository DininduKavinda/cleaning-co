<?php

namespace App\Http\Controllers\Api;

use App\Filters\Clients\ClientsFilter;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreClientRequest;
use App\Http\Requests\UpdateClientRequest;
use App\Http\Resources\Api\ClientCollection;
use App\Http\Resources\Api\ClientResource;
use App\Http\Resources\UserResource;
use App\Models\Client;
use App\Models\User;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter = new ClientsFilter;
        $filterItems = $filter->transform($request);
        $includeUser = $request->query('includeUser');
        $includeLocations = $request->query('includeLocations');
        $includeAll = $request->query('includeAll');
        $clients = Client::where($filterItems);
        if ($includeUser) {
            $clients = $clients->with(['user']);
        } elseif ($includeLocations) {
            $clients = $clients->with(['district']);
            $clients = $clients->with(['country']);
            $clients = $clients->with(['province']);
            $clients = $clients->with(['city']);
        } elseif ($includeAll) {
            $clients = $clients->with(['user']);
            $clients = $clients->with(['district']);
            $clients = $clients->with(['country']);
            $clients = $clients->with(['province']);
            $clients = $clients->with(['city']);
        }
        return new ClientCollection($clients->paginate(10)->appends($request->query()));
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
    public function store(StoreClientRequest $request)
    {

        $client =  new ClientResource(Client::create([
            'name' => $request->name,
            'nic' => $request->nic,
            'mobile' => $request->mobile,
            'phone' => $request->phone,
            'address' => $request->address,
            'city_id' => $request->city_id,
            'district_id' => $request->district_id,
            'province_id' => $request->province_id,
            'country_id' => $request->country_id,
            'active' => $request->active,
        ]));

        if ($client) {
            $user = new UserResource(User::create([
                'reference_id' => $request->reference_id,
                'user_type_id' => $request->user_type_id,
                'id' => $request->id,
                'name' => $request->full_name,
                'email' => $request->email,
                'image' => $request->image,
                'last_login' => $request->last_login,
                'active' => $request->active,
            ]));
            if ($user) {
                $message = 'Client Creaeted Successfully';
            }
            else{
                $message = 'Error Occured When Creating User';
            }
        } else {
            $message = 'Error Occured When Creating Client';
        }

        return response()->json([
            'message' => $message,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Client $client)
    {
        return new ClientResource($client);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Client $client)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateClientRequest $request, Client $client)
    {
        $client->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Client $client)
    {
        $client->delete();
    }
}
