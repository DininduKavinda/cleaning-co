<?php

namespace Database\Seeders;

use App\Models\Meta\District;
use Illuminate\Database\Seeder;

class DistrictSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $districts =
            [
                [
                    'province_id' => 6,
                    'name_en' => 'Ampara',
                    'name_si' => 'අම්පාර',
                    'name_ta' => 'அம்பாறை',
                ],
                [
                    'province_id' => 8,
                    'name_en' => 'Anuradhapura',
                    'name_si' => 'අනුරාධපුරය',
                    'name_ta' => 'அனுராதபுரம்',
                ],
                [
                    'province_id' => 7,
                    'name_en' => 'Badulla',
                    'name_si' => 'බදුල්ල',
                    'name_ta' => 'பதுளை',
                ],
                [
                    'province_id' => 6,
                    'name_en' => 'Batticaloa',
                    'name_si' => 'මඩකලපුව',
                    'name_ta' => 'மட்டக்களப்பு',
                ],
                [
                    'province_id' => 1,
                    'name_en' => 'Colombo',
                    'name_si' => 'කොළඹ',
                    'name_ta' => 'கொழும்பு',
                ],
                [
                    'province_id' => '3',
                    'name_en' => 'Galle',
                    'name_si' => 'ගාල්ල',
                    'name_ta' => 'காலி',
                ],
                [
                    'province_id' => 1,
                    'name_en' => 'Gampaha',
                    'name_si' => 'ගම්පහ',
                    'name_ta' => 'கம்பஹா',
                ],
                [
                    'province_id' => 3,
                    'name_en' => 'Hambantota',
                    'name_si' => 'හම්බන්තොට',
                    'name_ta' => 'அம்பாந்தோட்டை',
                ],
                [
                    'province_id' => 9,
                    'name_en' => 'Jaffna',
                    'name_si' => 'යාපනය',
                    'name_ta' => 'யாழ்ப்பாணம்',
                ],
                [
                    'province_id' => 1,
                    'name_en' => 'Kalutara',
                    'name_si' => 'කළුතර',
                    'name_ta' => 'களுத்துறை',
                ],
                [
                    'province_id' => 2,
                    'name_en' => 'Kandy',
                    'name_si' => 'මහනුවර',
                    'name_ta' => 'கண்டி',
                ],
                [
                    'province_id' => 5,
                    'name_en' => 'Kegalle',
                    'name_si' => 'කෑගල්ල',
                    'name_ta' => 'கேகாலை',
                ],
                [
                    'province_id' => 9,
                    'name_en' => 'Kilinochchi',
                    'name_si' => 'කිලිනොච්චිය',
                    'name_ta' => 'கிளிநொச்சி',
                ],
                [
                    'province_id' => 4,
                    'name_en' => 'Kurunegala',
                    'name_si' => 'කුරුණෑගල',
                    'name_ta' => 'குருணாகல்',
                ],
                [
                    'province_id' => 9,
                    'name_en' => 'Mannar',
                    'name_si' => 'මන්නාරම',
                    'name_ta' => 'மன்னார்',
                ],
                [
                    'province_id' => 2,
                    'name_en' => 'Matale',
                    'name_si' => 'මාතලේ',
                    'name_ta' => 'மாத்தளை',
                ],
                [
                    'province_id' => 3,
                    'name_en' => 'Matara',
                    'name_si' => 'මාතර',
                    'name_ta' => 'மாத்தறை',
                ],
                [
                    'province_id' => 7,
                    'name_en' => 'Monaragala',
                    'name_si' => 'මොණරාගල',
                    'name_ta' => 'மொணராகலை',
                ],
                [
                    'province_id' => 9,
                    'name_en' => 'Mullaitivu',
                    'name_si' => 'මුලතිව්',
                    'name_ta' => 'முல்லைத்தீவு',
                ],
                [
                    'province_id' => 2,
                    'name_en' => 'Nuwara Eliya',
                    'name_si' => 'නුවර එළිය',
                    'name_ta' => 'நுவரேலியா',
                ],
                [
                    'province_id' => 8,
                    'name_en' => 'Polonnaruwa',
                    'name_si' => 'පොළොන්නරුව',
                    'name_ta' => 'பொலன்னறுவை',
                ],
                [
                    'province_id' => 4,
                    'name_en' => 'Puttalam',
                    'name_si' => 'පුත්තලම',
                    'name_ta' => 'புத்தளம்',
                ],
                [
                    'province_id' => 5,
                    'name_en' => 'Ratnapura',
                    'name_si' => 'රත්නපුර',
                    'name_ta' => 'இரத்தினபுரி',
                ],
                [

                    'province_id' => 6,
                    'name_en' => 'Trincomalee',
                    'name_si' => 'ත්‍රිකුණාමලය',
                    'name_ta' => 'திருகோணமலை',
                ],
                [

                    'province_id' => 9,
                    'name_en' => 'Vavuniya',
                    'name_si' => 'වව්නියාව',
                    'name_ta' => 'வவுனியா',
                ],
            ];
        District::insert($districts);
    }
}
