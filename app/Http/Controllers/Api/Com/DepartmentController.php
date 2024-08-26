<?php

namespace App\Http\Controllers\Api\Com;

use App\Filters\Com\DepartmentFilter;
use App\Http\Requests\StoreDepartmentRequest;
use App\Http\Requests\UpdateDepartmentRequest;
use App\Http\Resources\Api\Com\DepartmentCollection;
use App\Http\Resources\Api\Com\DepartmentResource;
use App\Models\Department;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use App\Http\Controllers\Controller;

class DepartmentController extends Controller implements HasMiddleware
{
    public static function middleware(): array
    {
        return [
            new Middleware('permission:view department', only: ['indexs', 'shows']),
            new Middleware('permission:create department', only: ['creates', 'stores']),
            new Middleware('permission:update clidepartmentent', only: ['updates', 'edits']),
            new Middleware('permission:delete department', only: ['destroys']),
        ];
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter = new DepartmentFilter;
        $filterItems = $filter->transform($request);
        $includeStaff = $request->query('includeSatff');
        $department = Department::where($filterItems);
        if ($includeStaff) {
            $department = $department->with(['staffs']);
        }
        return new DepartmentCollection($department->paginate(10)->appends($request->query()));
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
    public function store(StoreDepartmentRequest $request)
    {
        $validatedData = $request->validated();
        $create = new DepartmentResource(Department::create($validatedData));
        if ($create) {
            $message = 'success';
        } else {
            $message = 'error';
        }
        return response()->json([
            'message' => $message
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Department $department, Request $request)
    {
        $includeStaff = $request->query('includeSatff');
        if ($includeStaff) {
            $department = $department->loadMissing(['staffs']);
        }
        return new DepartmentResource($department);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Department $department)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDepartmentRequest $request, Department $department)
    {
        $validatedData = $request->validated();
        $update = $department->update($validatedData);
        if ($update) {
            $message = 'success';
        } else {
            $message = 'error';
        }
        return response()->json([
            'message' => $message
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Department $department)
    {
        $department = $department->delete();
        if ($department) {
            $message = 'Successfully';
        } else {
            $message = 'An Error Occured';
        }
        return response()->json([
            'message' => $message,
        ]);
    }
}
