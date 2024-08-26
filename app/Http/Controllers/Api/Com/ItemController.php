<?php

namespace App\Http\Controllers\Api\Com;

use App\Filters\Com\ItemFilter;
use App\Http\Requests\StoreItemRequest;
use App\Http\Requests\UpdateItemRequest;
use App\Models\Item\Item;
use App\Http\Controllers\Controller;
use App\Http\Resources\Api\Com\ItemCollection;
use App\Http\Resources\Api\Com\ItemResource;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;

class ItemController extends Controller implements HasMiddleware
{
    public static function middleware(): array{
        return [
            new Middleware('permission:view perhmission', only: ['indexs']),
            new Middleware('permission:create perhmission', only: ['creates', 'stores']),
            new Middleware('permission:update permhission', only: ['updates', 'edits']),
            new Middleware('permission:delete permihssion', only: ['destroys'])
        ];
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter = new ItemFilter;
        $filterItems = $filter->transform($request);
        $includeItemType = $request->query('include_item_type');
        $item = Item::where($filterItems);
        if($includeItemType){
            $item = $item->with(['itemType']);
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
        $includeItemType = request()->query('include_item_type');
        if($includeItemType){
            $item = $item->loadMissing(['itemType']);
        }
        new ItemResource($item);
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
