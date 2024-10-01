<?php

namespace App\Http\Controllers\Api\Com;

use App\Filters\Com\TimecardTaskFilter;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreTimecardTaskRequest;
use App\Http\Requests\UpdateTimecardTaskRequest;
use App\Http\Resources\Api\Com\TimecardTaskCollection;
use App\Http\Resources\Api\Com\TimecardTaskResource;
use App\Models\Module\TimecardTask;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;

class TimecardTaskController extends Controller implements HasMiddleware
{
    public static function middleware(): array
    {
        return [
            new Middleware('permission:view level', only: ['indexs', 'shows']),
            new Middleware('permission:create level', only: ['creates', 'stores']),
            new Middleware('permission:update clilevelent', only: ['updates', 'edits']),
            new Middleware('permission:delete level', only: ['destroys']),
        ];
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter = new TimecardTaskFilter;
        $filterItems = $filter->transform($request);
        $includeTimecards = $request->query('includeTimecards');
        $tct = TimecardTask::where($filterItems);
        if ($includeTimecards) {
            $tct = $tct->with(['matters']);
        }

        return new TimecardTaskCollection($tct->paginate(10)->appends($request->query()));
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
    public function store(StoreTimecardTaskRequest $request)
    {
        $validatedData = $request->validated();
        $timecardTask = new TimecardTaskResource(TimecardTask::create($validatedData));

        return response()->json($timecardTask, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(TimecardTask $timecardTask, Request $request)
    {
        $includeTimecards = $request->query('includeTimecards');
        if ($includeTimecards) {
            $timecardTask = $timecardTask->with(['matters']);
        }

        return new TimecardTaskResource($timecardTask);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(TimecardTask $timecardTask)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTimecardTaskRequest $request, TimecardTask $timecardTask)
    {
        $validatedData = $request->validated();
        $timecardTask->update($validatedData);

        return response()->json(new TimecardTaskResource($timecardTask), 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TimecardTask $timecardTask)
    {
        $timecardTask->delete();

        return response()->json([], 204);
    }
}
