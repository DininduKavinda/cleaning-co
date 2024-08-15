<?php

namespace Database\Seeders;

use App\Models\Meta\City;
use Illuminate\Database\Seeder;

class CitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $content = file_get_contents(storage_path('data/cities.json'));
        $cities = json_decode($content, true);
        foreach ($cities as $city) {
            City::create($city);
        }
    }
}
