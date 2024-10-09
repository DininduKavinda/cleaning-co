<?php

namespace Database\Seeders;

use App\Models\Client;
use App\Models\User;
use Illuminate\Database\Seeder;

class ClientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        Client::factory()->count(20)->create()->each(function ($client) {

            User::create([
                'reference_id' => $client->id,
                'user_type_id' => 2,
                'name' => $client->full_name,
                'email' => fake()->unique()->safeEmail(),
                'password' => bcrypt('password'),
                'active' => $client->active,
                'last_login' => now(),
            ])->syncRoles('user');
        });
    }
}
