<?php

namespace Database\Factories\Item;

use App\Models\Item\ItemType;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Item\Item>
 */
class ItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'item_type_id' => ItemType::factory(),
            'name' => $this->faker->word(),
            'price' => $this->faker->randomFloat(2, 10, 500), 
            'active' => $this->faker->boolean(80),
        ];
    }
}
