<?php

namespace Database\Factories;

use App\Models\Meta\City;
use App\Models\Meta\Country;
use App\Models\Meta\District;
use App\Models\Meta\Province;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Client>
 */
class ClientFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
          'full_name'   => $this->faker->name(),
            'address'     => $this->faker->address(),
            'phone'       => $this->faker->phoneNumber(),
            'mobile'      => $this->faker->phoneNumber(),
            'nic'         => $this->faker->regexify('[A-Z0-9]{10}'),
            'country_id'  => Country::inRandomOrder()->first()->id,
            'province_id' => Province::inRandomOrder()->first()->id,
            'district_id' => District::inRandomOrder()->first()->id,
            'city_id'     => City::inRandomOrder()->first()->id,
            'active'      => $this->faker->boolean(90), // 90% active
        ];
    }
}
