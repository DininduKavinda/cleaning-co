<?php

namespace Database\Factories\Module;

use App\Models\Module\Matter;
use App\Models\Staff;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Module\MatterAccess>
 */
class MatterAccessFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'geo_latitude'  => $this->faker->latitude(),
            'geo_longtude'  => $this->faker->longitude(),
            'area'          => $this->faker->numberBetween(1, 100), 
            'permitted_on'  => $this->faker->optional()->date(),
            'active'        => $this->faker->boolean(90),
            'matter_id'     => Matter::factory(),
            'staff_id'      => Staff::factory(),
        ];
    }
}
