<?php

namespace App\Http\Controllers\Api;

use App\Filters\Clients\ClientsFilter;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreClientRequest;
use App\Http\Requests\UpdateClientRequest;
use App\Http\Resources\Api\ClientCollection;
use App\Http\Resources\Api\ClientResource;
use App\Models\Client;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Support\Facades\File;

class ClientController extends Controller  implements HasMiddleware
{
    public static function middleware(): array
    {
        return [
            new Middleware('permission:view client', only: ['index', 'show']),
            new Middleware('permission:create client', only: ['create', 'store']),
            new Middleware('permission:update client', only: ['update', 'edit']),
            new Middleware('permission:delete client', only: ['destroy']),
        ];
    }
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
            $clients = $clients->with(['district', 'country', 'province', 'city']);
        } elseif ($includeAll) {
            $clients = $clients->with(['user','district', 'country', 'province', 'city']);
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
        $validatedData = $request->validated();
        $client =  new ClientResource(Client::create([
            'name' => $validatedData['full_name'],
            'nic' => $validatedData['nic'],
            'mobile' => $validatedData['mobile'],
            'phone' => $validatedData['phone'],
            'address' => $validatedData['address'],
            'city_id' => $validatedData['city_id'],
            'district_id' => $validatedData['district_id'],
            'province_id' => $validatedData['province_id'],
            'country_id' => $validatedData['country_id'],
            'active' => $validatedData['active'],
        ]));

        if ($client) {
            if ($request->hasFile('image')) {
                $imageName = time() . '.' . $request->image->getClientOriginalExtension();
                $request->image->move('img/profile/client', $imageName);
                $validatedData['image'] = 'img/profile/client' . $imageName;
            } else {
                $validatedData['image'] = null;
            }
            $user = new ClientResource(User::create([
                'reference_id' => $client->id,
                'user_type_id' => 1,
                'name' => $validatedData['name'],
                'email' => $validatedData['email'],
                'image' => $validatedData['image'],
                'password' => bcrypt($validatedData['password']),
                'last_login' => $validatedData['last_login'],
                'active' => $validatedData['active'],
            ]));
            if ($user) {
                $message = 'Client Creaeted Successfully';
            } else {
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
    public function show(Client $client, Request $request)
    {
        $includeUser = $request->query('includeUser');
        $includeLocations = $request->query('includeLocations');
        $includeAll = $request->query('includeAll');
        if ($includeUser) {
            $client = $client->loadMissing(['user']);
        } elseif ($includeLocations) {
            $client = $client->loadMissing(['district', 'country', 'province', 'city']);
        } elseif ($includeAll) {
            $client = $client->loadMissing(['user', 'district', 'country', 'province', 'city']);
        }
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

        $validatedData = $request->validated();
        $client_id = $client->id;
        $clients = $client->update([
            'name' => $validatedData['full_name'],
            'nic' => $validatedData['nic'],
            'mobile' => $validatedData['mobile'],
            'phone' => $validatedData['phone'],
            'address' => $validatedData['address'],
            'city_id' => $validatedData['city_id'],
            'district_id' => $validatedData['district_id'],
            'province_id' => $validatedData['province_id'],
            'country_id' => $validatedData['country_id'],
            'active' => $validatedData['active'],
        ]);
        if ($clients) {
            $user = User::where('user_type_id', 1)->where('reference_id', $client_id);
            if ($request->hasFile('image')) {
                $imageName = time() . '.' . $request->image->getClientOriginalExtension();
                $request->image->move('img/profile/client', $imageName);
                $file_path = 'img/profile/client/' . $imageName;
                $remove_old = File::delete($user->first()->image);
                $validatedData['image'] = $file_path;
            } else {
                $validatedData['image'] = $user->first()->image;
            }
            $user->update([
                'reference_id' => $client_id,
                'user_type_id' => 1,
                'name' => $validatedData['name'],
                'email' => $validatedData['email'],
                'image' => $validatedData['image'],
                'active' => $validatedData['active'],
            ]);
            if ($user) {
                $message = 'Client Created Successfully';
            } else {
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
     * Remove the specified resource from storage.
     */
    public function destroy(Client $client)
    {
        $client_id = $client->id;
        $user = User::where('user_type_id', 1)->where('reference_id', $client_id);
        if ($user) {
            $user->delete();
            $client->delete();
            $message = 'Client And User Deleted Successfully';
        } else {
            $message = 'An Error Occured';
        }
        return response()->json([
            'message' => $message,
        ]);
    }
}
