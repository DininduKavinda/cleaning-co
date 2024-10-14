<?php

namespace Database\Factories\Module;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Module\TimecardTask>
 */
class TimecardTaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->word(),
            'rate' => $this->faker->randomFloat(2, 10, 100),
            'rate_type' => $this->faker->numberBetween(1, 2),
            'active' => $this->faker->boolean(80),
        ];
    }
}
