<?php

namespace Database\Seeders;

use App\Models\Module\MatterAccess;
use Illuminate\Database\Seeder;

class MatterAccessSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        MatterAccess::factory()->count(100)->create();
    }
}
