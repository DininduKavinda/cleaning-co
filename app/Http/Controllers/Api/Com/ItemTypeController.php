<?php

namespace App\Http\Controllers\Api\Com;

use App\Http\Requests\StoreItemTypeRequest;
use App\Http\Requests\UpdateItemTypeRequest;
use App\Models\Item\ItemType;
use App\Http\Controllers\Controller;
use App\Http\Resources\Api\Com\ItemTypeCollection;
use App\Http\Resources\Api\Com\ItemTypeResource;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;

class ItemTypeController extends Controller implements HasMiddleware
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
        $includeItems = $request->query('includeItems');
        $task = ItemType::whereNotNull('id');
        if ($includeItems) {
            $task = $task->with(['items']);
        }
        return new ItemTypeCollection($task->paginate(10)->appends($request->query()));
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
    public function store(StoreItemTypeRequest $request)
    {
        $validatedData = $request->validated();
        $itemType = new ItemTypeResource(ItemType::create($validatedData));
        return response()->json($itemType, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(ItemType $itemType)
    {
        return new ItemTypeResource($itemType);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ItemType $itemType)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateItemTypeRequest $request, ItemType $itemType)
    {
        $validatedData = $request->validated();
        $itemType->update($validatedData);
        return new ItemTypeResource($itemType);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ItemType $itemType)
    {
        $itemType->delete();
        return response()->json(['message' => 'Item type deleted successfully'], 204);
    }
}
