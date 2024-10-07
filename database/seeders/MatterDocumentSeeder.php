<?php

namespace Database\Seeders;

use App\Models\Module\MatterDocument;
use Illuminate\Database\Seeder;

class MatterDocumentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        MatterDocument::factory()->count(150)->create();
    }
}
