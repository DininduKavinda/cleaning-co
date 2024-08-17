<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTimecardRequest;
use App\Http\Requests\UpdateTimecardRequest;
use App\Models\Module\Timecard;

class TimecardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function store(StoreTimecardRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Timecard $timecard)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Timecard $timecard)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTimecardRequest $request, Timecard $timecard)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Timecard $timecard)
    {
        //
    }
}
