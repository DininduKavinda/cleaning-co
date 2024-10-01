<?php

namespace App\Http\Controllers\Api\Com;

use App\Filters\Com\TaskFilter;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Http\Resources\Api\Com\TaskCollection;
use App\Http\Resources\Api\Com\TaskResource;
use App\Models\Module\Task;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;

class TaskController extends Controller implements HasMiddleware
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
        $filter = new TaskFilter;
        $filterItems = $filter->transform($request);
        $includeStaff = $request->query('includeMatters');
        $task = Task::where($filterItems);
        if ($includeStaff) {
            $task = $task->with(['matters']);
        }

        return new TaskCollection($task->paginate(10)->appends($request->query()));
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
    public function store(StoreTaskRequest $request)
    {
        $validatedData = $request->validated();
        $create = new TaskResource(TasK::create($validatedData));
        if ($create) {
            $message = 'success';
        } else {
            $message = 'error';
        }

        return response()->json([
            'message' => $message,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task, Request $request)
    {
        $includeStaff = $request->query('includeMatters');
        if ($includeStaff) {
            $task = $task->loadMissing(['matters']);
        }

        return new TaskResource($task);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTaskRequest $request, Task $task)
    {
        $validatedData = $request->validated();
        $update = $task->update($validatedData);
        if ($update) {
            $message = 'success';
        } else {
            $message = 'error';
        }

        return response()->json([
            'message' => $message,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        $task = $task->delete();
        if ($task) {
            $message = 'Successfully';
        } else {
            $message = 'An Error Occured';
        }

        return response()->json([
            'message' => $message,
        ]);
    }
}
