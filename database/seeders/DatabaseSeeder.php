<?php

namespace Database\Seeders;

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
        ]);
    }
}
