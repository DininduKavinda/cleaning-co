<?php

namespace App\Http\Controllers\Api\Com;

use App\Filters\Com\LevelFilter;
use App\Http\Requests\StoreLevelRequest;
use App\Http\Requests\UpdateLevelRequest;
use App\Http\Resources\Api\Com\LevelCollection;
use App\Http\Resources\Api\Com\LevelResource;
use App\Models\Level;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use App\Http\Controllers\Controller;

class LevelController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter = new LevelFilter;
        $filterItems = $filter->transform($request);
        $includeStaff = $request->query('includeSatff');
        $level = Level::where($filterItems);
        if ($includeStaff) {
            $level = $level->with(['staffs']);
        }
        return new LevelCollection($level->paginate(10)->appends($request->query()));
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
    public function store(StoreLevelRequest $request)
    {
        $validatedData = $request->validated();
        $create = new LevelResource(Level::create($validatedData));
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
    public function show(Level $level, Request $request)
    {
        $includeStaff = $request->query('includeSatff');
        if ($includeStaff) {
            $level = $level->loadMissing(['staffs']);
        }
        return new LevelResource($level);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Level $level)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateLevelRequest $request, Level $level)
    {
        $validatedData = $request->validated();
        $update = $level->update($validatedData);
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
    public function destroy(Level $level)
    {
        $level = $level->delete();
        if ($level) {
            $message = 'Successfully';
        } else {
            $message = 'An Error Occured';
        }
        return response()->json([
            'message' => $message,
        ]);
    }
}
