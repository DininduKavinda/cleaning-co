<?php

namespace Database\Seeders;

use App\Models\Staff;
use App\Models\User;
use Illuminate\Database\Seeder;

class StaffSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Staff::factory()->count(20)->create()->each(function ($staff) {

            User::create([
                'reference_id' => $staff->id,
                'user_type_id' => 1,
                'name' => $staff->full_name,
                'email' => fake()->unique()->safeEmail(),
                'password' => bcrypt('password'),
                'active' => $staff->active,
                'last_login' => now(),
            ])->syncRoles('staff');
        });
    }
}
