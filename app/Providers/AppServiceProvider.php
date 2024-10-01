<?php

namespace App\Providers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {

        Inertia::share([
            'permissions' => function () {
                /**
                 * @var User $user
                 */
                $user = Auth::user();

                if ($user) {
                    // Fetch all permission names from the 'permissions' table
                    $allPermissions = Permission::pluck('name');

                    // Dynamically check if the user has each permission
                    $userPermissions = $allPermissions->mapWithKeys(function ($permission) use ($user) {
                        return [$permission => $user->can($permission)];
                    });

                    return $userPermissions->toArray();
                }

                // If no user is authenticated, return false for all permissions
                return Permission::pluck('name')->mapWithKeys(function ($permission) {
                    return [$permission => false];
                })->toArray();
            },
        ]);
    }
}
