<?php

namespace App\Http\Controllers\Web\MetaData;

use App\Http\Controllers\Controller;
use App\Models\Module\TimecardTask;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Inertia\Inertia;
use Inertia\Response;

class TimecardTaskController extends Controller implements HasMiddleware
{
    public static function middleware(): array
    {
        return [
            new Middleware('permission:view user', only: ['index']),
            new Middleware('permission:create user', only: ['create', 'store']),
            new Middleware('permission:update user', only: ['update', 'edit']),
            new Middleware('permission:delete user', only: ['destroy']),
        ];
    }

    public function index(): Response
    {
        return Inertia::render('Meta/TimecardTasks/Index');
    }

    public function create(): Response
    {
        return Inertia::render('Meta/TimecardTasks/Edit');
    }

    public function show(TimecardTask $timecardTask): Response
    {
        return Inertia::render('Meta/TimecardTasks/Edit', ['timecardTask' => $timecardTask]);
    }
}
