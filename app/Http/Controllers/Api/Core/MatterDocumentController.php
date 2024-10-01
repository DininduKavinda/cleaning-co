<?php

namespace App\Http\Controllers\Api\Core;

use App\Filters\Core\MatterDocumentFilter;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreMatterDocumentRequest;
use App\Http\Requests\UpdateMatterDocumentRequest;
use App\Http\Resources\Api\Core\MatterDocumentCollection;
use App\Http\Resources\Api\Core\MatterDocumentResource;
use App\Models\Module\MatterDocument;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;

class MatterDocumentController extends Controller implements HasMiddleware
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
    public function index()
    {
        $filter = new MatterDocumentFilter;
        $filterItems = request()->transform($filter);
        $includeMatter = request()->query('includeMatter');
        $mD = MatterDocument::where($filterItems);
        if ($includeMatter) {
            $mD = $mD->with(['matter', 'client', 'staff']);
        }

        return new MatterDocumentCollection($mD->paginate(10)->appends(request()->query()));
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
    public function store(StoreMatterDocumentRequest $request)
    {
        $validatedData = $request->validated();
        $matter = MatterDocument::create($validatedData);

        return response()->json(['data' => $matter], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(MatterDocument $matterDocument)
    {
        $includeMatter = request()->query('includeMatter');
        if ($includeMatter) {
            $matterDocument = $matterDocument->with(['matter', 'client', 'staff']);
        }

        return new MatterDocumentResource($matterDocument);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(MatterDocument $matterDocument)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMatterDocumentRequest $request, MatterDocument $matterDocument)
    {
        $validatedData = $request->validated();
        $matterDocument->update($validatedData);

        return response()->json(['data' => $matterDocument], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(MatterDocument $matterDocument)
    {
        $matterDocument->delete();

        return response()->json(['message' => 'Deleted Successfully'], 204);
    }
}
