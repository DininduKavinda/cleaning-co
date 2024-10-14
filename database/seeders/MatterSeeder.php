<?php

namespace Database\Seeders;

use App\Models\Module\Matter;
use Illuminate\Database\Seeder;

class MatterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Matter::factory()->count(30)->create();
    }
}
