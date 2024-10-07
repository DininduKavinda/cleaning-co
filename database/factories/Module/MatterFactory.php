<?php

namespace Database\Factories\Module;

use App\Models\Client;
use App\Models\Department;
use App\Models\Module\Task;
use App\Models\Staff;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Module\Matter>
 */
class MatterFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'code'            => strtoupper($this->faker->unique()->bothify('MAT-####')),
            'name'            => $this->faker->sentence(3),
            'description'     => $this->faker->sentence(20),
            'started_at'      => $this->faker->date(),
            'ended_at'        => $this->faker->dateTimeBetween('now', '+1 year')->format('Y-m-d'),
            'map_latitude'    => $this->faker->latitude(),
            'map_longitude'   => $this->faker->longitude(),
            'status'          => $this->faker->numberBetween(1, 5),
            'active'          => $this->faker->boolean(90),
            'task_id'         => Task::factory(),
            'client_id'       => Client::factory(),
            'staff_id'        => Staff::factory(),
            'approved_by'     => Staff::factory(),
            'department_id'   => Department::factory(),
        ];
    }
}
