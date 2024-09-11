<?php

namespace App\Http\Controllers\Api\Com;

use App\Http\Requests\StoreItemTypeRequest;
use App\Http\Requests\UpdateItemTypeRequest;
use App\Models\Item\ItemType;
use App\Http\Controllers\Controller;
use App\Http\Resources\Api\Com\ItemTypeCollection;
use App\Http\Resources\Api\Com\ItemTypeResource;
use Illuminate\Http\Request;

class ItemTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $includeItems = $request->query('includeAll');
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
