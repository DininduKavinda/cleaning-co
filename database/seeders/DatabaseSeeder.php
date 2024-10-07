<?php

namespace Database\Seeders;

use App\Models\Department;
use App\Models\Item\ItemType;
use App\Models\Level;
use App\Models\Module\Task;
use App\Models\Module\TimecardTask;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => '1234',
        ]);
        User::factory()->create([
            'name' => 'Root User',
            'email' => 'root@admin.com',
            'password' => '1234',
        ]);

        $this->call([
            CountrySeeder::class,
            ProvinceSeeder::class,
            DistrictSeeder::class,
            CitySeeder::class,
            UserRolePermissionSeeder::class,
            UserTypeSeeder::class,
            ClientSeeder::class,
            StaffSeeder::class,
            MatterSeeder::class,
            MatterAccessSeeder::class,
            MatterDocumentSeeder::class,
            TimecardSeeder::class,
        ]);

        // Seed departments
        Department::factory()->count(10)->create();

        // Seed levels
        Level::factory()->count(10)->create();

        // Seed tasks
        Task::factory()->count(10)->create();

        // Seed timecard tasks
        TimecardTask::factory()->count(10)->create();

        // Seed item types and items
        ItemType::factory()
            ->hasItems(5)
            ->count(10)
            ->create();
    }
}
