<?php

namespace Database\Seeders;

use App\Models\Meta\Province;
use Illuminate\Database\Seeder;

class ProvinceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $provinces = [
            ['country_id' => 61, 'name_en' => 'Western', 'name_si' => 'බස්නාහිර', 'name_ta' => 'மேல்'],
            ['country_id' => 61, 'name_en' => 'Central', 'name_si' => 'මධ්‍යම', 'name_ta' => 'மத்திய'],
            ['country_id' => 61, 'name_en' => 'Southern', 'name_si' => 'දකුණු', 'name_ta' => 'தென்'],
            ['country_id' => 61, 'name_en' => 'North Western', 'name_si' => 'වයඹ', 'name_ta' => 'வட மேல்'],
            ['country_id' => 61, 'name_en' => 'Sabaragamuwa', 'name_si' => 'සබරගමුව', 'name_ta' => 'சபரகமுவ'],
            ['country_id' => 61, 'name_en' => 'Eastern', 'name_si' => 'නැගෙනහිර', 'name_ta' => 'கிழக்கு'],
            ['country_id' => 61, 'name_en' => 'Uva', 'name_si' => 'ඌව', 'name_ta' => 'ஊவா'],
            ['country_id' => 61, 'name_en' => 'North Central', 'name_si' => 'උතුරු මැද', 'name_ta' => 'வட மத்திய'],
            ['country_id' => 61, 'name_en' => 'Northern', 'name_si' => 'උතුරු', 'name_ta' => 'வட'],
        ];
        Province::insert($provinces);
    }
}
