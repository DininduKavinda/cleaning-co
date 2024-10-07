<?php

namespace Database\Seeders;

use App\Models\Module\Timecard;
use Illuminate\Database\Seeder;

class TimecardSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Timecard::factory()->count(200)->create();
    }
}
