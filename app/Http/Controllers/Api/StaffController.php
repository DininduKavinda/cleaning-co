<?php

namespace App\Http\Controllers\Api;

use App\Filters\Staff\StaffFilter;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreStaffRequest;
use App\Http\Resources\Api\StaffCollection;
use App\Http\Resources\Api\StaffResource;
use App\Models\Staff;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class StaffController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter = new StaffFilter;
        $filterItems = $filter->transform($request);
        $includeUser = $request->query('includeUser');
        $includeLocations = $request->query('includeLocations');
        $includeAll = $request->query('includeAll');
        $staff = Staff::where($filterItems);
        if ($includeUser) {
            $staff = $staff->with(['user', 'level', 'department']);
        } elseif ($includeLocations) {
            $staff = $staff->with(['district', 'country', 'province', 'city', 'level', 'department']);
        } elseif ($includeAll) {
            $staff = $staff->with(['user', 'district', 'country', 'province', 'city', 'level', 'department']);
        }

        return new StaffCollection($staff->paginate(10)->appends($request->query()));
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
    public function store(StoreStaffRequest $request)
    {
        $validatedData = $request->validated();
        $staff = new StaffResource(Staff::create([
            'full_name' => $validatedData['full_name'],
            'first_name' => $validatedData['first_name'],
            'last_name' => $validatedData['last_name'],
            'title' => $validatedData['title'],
            'initial' => $validatedData['initial'],
            'dob' => $validatedData['dob'],
            'nic' => $validatedData['nic'],
            'mobile' => $validatedData['mobile'],
            'phone' => $validatedData['phone'],
            'address' => $validatedData['address'],
            'city_id' => $validatedData['city_id'],
            'district_id' => $validatedData['district_id'],
            'province_id' => $validatedData['province_id'],
            'country_id' => $validatedData['country_id'],
            'level_id' => $validatedData['level_id'],
            'department_id' => $validatedData['department_id'],
            'civil_status' => $validatedData['civil_status'],
            'active' => $validatedData['active'],
        ]));

        if ($staff) {
            if ($request->hasFile('image')) {
                $imageName = time().'.'.$request->image->getClientOriginalExtension();
                $request->image->move('img/profile/staff', $imageName);
                $validatedData['image'] = 'img/profile/staff'.$imageName;
            } else {
                $validatedData['image'] = null;
            }
            $user = new StaffResource(User::create([
                'reference_id' => $staff->id,
                'user_type_id' => 2,
                'name' => $validatedData['name'],
                'email' => $validatedData['email'],
                'image' => $validatedData['image'],
                'password' => bcrypt($validatedData['password']),
                'last_login' => $validatedData['last_login'],
                'active' => $validatedData['active'],
            ]));
            auth()->shouldUse('web');
            $user->syncRoles(['staff']);
            if ($user) {
                $message = 'Employee Creaeted Successfully';
            } else {
                $message = 'Error Occured When Creating User';
            }
        } else {
            $message = 'Error Occured When Creating Employee';
        }

        // $message = 'triggred';
        return response()->json([
            'message' => $message,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Staff $staff, Request $request)
    {
        $includeUser = $request->query('includeUser');
        $includeLocations = $request->query('includeLocations');
        $includeAll = $request->query('includeAll');
        if ($includeUser) {
            $staff = $staff->loadMissing(['user', 'level', 'department']);
        } elseif ($includeLocations) {
            $staff = $staff->loadMissing(['district', 'country', 'province', 'city', 'level', 'department']);
        } elseif ($includeAll) {
            $staff = $staff->loadMissing(['user', 'district', 'country', 'province', 'city', 'level', 'department']);
        }

        return new StaffResource($staff);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Staff $staff)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Staff $staff)
    {
        $validatedData = $request->all();
        $staff_id = $staff->id;
        $staffs = $staff->update([
            'full_name' => $validatedData['full_name'],
            'first_name' => $validatedData['first_name'],
            'last_name' => $validatedData['last_name'],
            'title' => $validatedData['title'],
            'initial' => $validatedData['initial'],
            'dob' => $validatedData['dob'],
            'nic' => $validatedData['nic'],
            'mobile' => $validatedData['mobile'],
            'phone' => $validatedData['phone'],
            'address' => $validatedData['address'],
            'city_id' => $validatedData['city_id'],
            'district_id' => $validatedData['district_id'],
            'province_id' => $validatedData['province_id'],
            'country_id' => $validatedData['country_id'],
            'level_id' => $validatedData['level_id'],
            'department_id' => $validatedData['department_id'],
            'civil_status' => $validatedData['civil_status'],
            'active' => $validatedData['active'],
        ]);
        if ($staffs) {
            $user = User::where('user_type_id', 2)->where('reference_id', $staff_id);
            if ($request->hasFile('image')) {
                $imageName = time().'.'.$request->image->getClientOriginalExtension();
                $request->image->move('img/profile/staff', $imageName);
                $file_path = 'img/profile/staff/'.$imageName;
                $remove_old = File::delete($user->first()->image);
                $validatedData['image'] = $file_path;
            } else {
                $validatedData['image'] = $user->first()->image;
            }
            $user->update([
                'reference_id' => $staff_id,
                'user_type_id' => 2,
                'name' => $validatedData['name'],
                'email' => $validatedData['email'],
                'image' => $validatedData['image'],
                // 'last_login' => $validatedData['last_login'],
                'active' => $validatedData['active'],
            ]);
            if ($user) {
                $message = 'Employee Created Successfully';
            } else {
                $message = 'Error Occured When Creating User';
            }
        } else {
            $message = 'Error Occured When Creating Employee';
        }

        return response()->json([
            'message' => $message,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Staff $staff)
    {
        $staff_id = $staff->id;
        $user = User::where('user_type_id', 1)->where('reference_id', $staff_id);
        if ($user) {
            $user->delete();
            $staff->delete();
            $message = 'Employee And User Deleted Successfully';
        } else {
            $message = 'An Error Occured';
        }

        return response()->json([
            'message' => $message,
        ]);
    }
}
