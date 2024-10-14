<?php

namespace Database\Factories;

use App\Models\Department;
use App\Models\Level;
use App\Models\Meta\City;
use App\Models\Meta\Country;
use App\Models\Meta\District;
use App\Models\Meta\Province;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Staff>
 */
class StaffFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $firstName = $this->faker->firstName();
        $lastName = $this->faker->lastName();

        return [
            'first_name' => $firstName,
            'last_name' => $lastName,
            'nic' => $this->faker->regexify('[A-Z0-9]{10}'),
            'title' => $this->faker->title(),
            'initial' => strtoupper(Str::random(1)),
            'full_name' => $firstName.' '.$lastName,
            'dob' => $this->faker->date('Y-m-d', '-20 years'),
            'address' => $this->faker->address(),
            'mobile' => $this->faker->phoneNumber(),
            'phone' => $this->faker->phoneNumber(),
            'civil_status' => $this->faker->randomElement(['Single', 'Married', 'Divorced', 'Widowed']),
            'level_id' => Level::inRandomOrder()->first()->id,
            'country_id' => Country::inRandomOrder()->first()->id,
            'province_id' => Province::inRandomOrder()->first()->id,
            'district_id' => District::inRandomOrder()->first()->id,
            'city_id' => City::inRandomOrder()->first()->id,
            'department_id' => Department::inRandomOrder()->first()->id,
            'active' => $this->faker->boolean(90),
        ];
    }
}
