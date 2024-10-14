<?php

namespace Database\Factories\Module;

use App\Models\Module\Matter;
use App\Models\Module\TimecardTask;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Module\Timecard>
 */
class TimecardFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $startTime = $this->faker->dateTimeBetween('-1 month', 'now');
        $endTime = (clone $startTime)->modify('+'.$this->faker->numberBetween(1, 8).' hours');

        return [
            'name' => $this->faker->sentence(2),
            'date' => $startTime->format('Y-m-d'),
            'type' => $this->faker->randomElement(['Regular', 'Overtime', 'Holiday']),
            'started_at' => $startTime->format('Y-m-d H:i:s'),
            'ended_time' => $endTime->format('Y-m-d H:i:s'),
            'time_spent' => $this->faker->randomFloat(2, 1, 12), // Hours spent
            'charge_rate' => $this->faker->randomFloat(2, 50, 200), // Rate per hour or flat
            'active' => $this->faker->boolean(90),
            'timecard_task_id' => TimecardTask::inRandomOrder()->first()->id,
            'matter_id' => Matter::inRandomOrder()->first()->id,
        ];
    }
}
