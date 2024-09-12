<?php

namespace App\Http\Controllers\Api\Core;

use App\Filters\Core\MatterFilter;
use App\Http\Requests\StoreMatterRequest;
use App\Http\Requests\UpdateMatterRequest;
use App\Http\Resources\Api\Core\MatterCollection;
use App\Http\Resources\Api\Core\MatterResource;
use App\Models\Module\Matter;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Module\MatterDocument;

class MatterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter = new MatterFilter;
        $filterItems = $filter->transform($request);
        $includeTask = $request->query('includeTask');
        $includeClient = $request->query('includeClient');
        $includeStaff = $request->query('includeStaff');
        $includeApproved = $request->query('includeApprove');
        $includeDepartment = $request->query('includeDepartment');
        $includeTimecard = $request->query('includeTimecard');
        $includeAccess = $request->query('includeMatterAccess');
        $includeAll = $request->query('includeAll');
        $matters = Matter::where($filterItems);
        if ($includeAll) {
            $matters = $matters->with(['task', 'client', 'staff', 'department', 'timecards', 'approved', 'matter_documents', 'matter_access']);
        } elseif ($includeTask) {
            $matters = $matters->with(['task']);
        } elseif ($includeClient) {
            $matters = $matters->with(['client']);
        } elseif ($includeStaff) {
            $matters = $matters->with(['staff']);
        } elseif ($includeDepartment) {
            $matters = $matters->with(['department']);
        } elseif ($includeTimecard) {
            $matters = $matters->with(['timecards']);
        } elseif ($includeApproved) {
            $matters = $matters->with(['approved']);
        } elseif ($includeAccess) {
            $matters = $matters->with(['matter_access']);
        }
        return new MatterCollection($matters->paginate(10)->appends($request->query()));
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
    public function store(StoreMatterRequest $request)
    {
        $validatedData = $request->validated();
        $matter = Matter::create($validatedData);
        if ($matter) {
            if ($request->hasFile('document')) {
                $imageName = time() . '.' . $request->document->getClientOriginalExtension();
                $request->document->move('document/matter', $imageName);
                $validatedData['document'] = 'document/matter' . $imageName;
            } else {
                $validatedData['document'] = null;
            }
            $validatedData['matter_id'] = $matter->id;
            $matterDoc = MatterDocument::create($validatedData);
            if ($matterDoc) {
                return response()->json(['data' => $matterDoc], 201);
            }
        }


        return response()->json(['data' => $matter], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Matter $matter, Request $request)
    {
        $includeTask = $request->query('includeTask');
        $includeClient = $request->query('includeClient');
        $includeStaff = $request->query('includeStaff');
        $includeApproved = $request->query('includeApprove');
        $includeDepartment = $request->query('includeDepartment');
        $includeTimecard = $request->query('includeTimecard');
        $includeAccess = $request->query('includeMatterAccess');
        $includeAll = $request->query('includeAll');
        if ($includeAll) {
            $matter = $matter->loadMissing(['task', 'client', 'staff', 'department', 'timecards', 'approved', 'matter_documents', 'matter_access']);
        } elseif ($includeTask) {
            $matter = $matter->loadMissing(['task']);
        } elseif ($includeClient) {
            $matter = $matter->loadMissing(['client']);
        } elseif ($includeStaff) {
            $matter = $matter->loadMissing(['staff']);
        } elseif ($includeDepartment) {
            $matter = $matter->loadMissing(['department']);
        } elseif ($includeTimecard) {
            $matter = $matter->loadMissing(['timecards']);
        } elseif ($includeApproved) {
            $matter = $matter->loadMissing(['approved']);
        } elseif ($includeAccess) {
            $matter = $matter->loadMissing(['matter_access']);
        }
        return new MatterResource($matter);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Matter $matter)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMatterRequest $request, Matter $matter)
    {
        $validatedData = $request->validated();
        $matter->update($validatedData);
        return response()->json(['data' => $matter], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Matter $matter)
    {
        $matter->delete();
        return response()->json(['message' => 'Successfully deleted'], 204);
    }
}
