<?php

namespace Database\Factories\Module;

use App\Models\Client;
use App\Models\Module\Matter;
use App\Models\Staff;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Module\MatterDocument>
 */
class MatterDocumentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'document'   => $this->faker->word() . '.pdf',
            'file_name'  => $this->faker->lexify('document_????.pdf'),
            'status'     => $this->faker->numberBetween(1, 3), 
            'notes'      => $this->faker->sentence(),
            'active'     => $this->faker->boolean(90),
            'matter_id'  => Matter::factory(),
            'client_id'  => Client::factory(),
            'staff_id'   =>  Staff::factory(),
        ];
    }
}
