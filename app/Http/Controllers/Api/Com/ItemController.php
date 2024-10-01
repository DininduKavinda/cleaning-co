<?php

namespace App\Http\Controllers\Api\Com;

use App\Filters\Com\ItemFilter;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreItemRequest;
use App\Http\Requests\UpdateItemRequest;
use App\Http\Resources\Api\Com\ItemCollection;
use App\Http\Resources\Api\Com\ItemResource;
use App\Models\Item\Item;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter = new ItemFilter;
        $filterItems = $filter->transform($request);
        $includeItemType = $request->query('includeAll');
        $item = Item::where($filterItems);
        if ($includeItemType) {
            $item = $item->with(['item_type']);
        }

        return new ItemCollection($item->paginate(10)->appends($request->query()));
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
    public function store(StoreItemRequest $request)
    {
        $validatedData = $request->validated();
        $item = Item::create($validatedData);

        return response()->json(['data' => $item], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Item $item)
    {
        $includeItemType = request()->query('includeAll');
        if ($includeItemType) {
            $item = $item->loadMissing(['item_type']);
        }

        return new ItemResource($item);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Item $item)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateItemRequest $request, Item $item)
    {
        $validatedData = $request->validated();
        $item->update($validatedData);

        return response()->json(['data' => $item], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Item $item)
    {
        $item->delete();

        return response()->json(['message' => 'Item deleted successfully'], 204);
    }
}
