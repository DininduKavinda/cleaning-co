<?php

namespace Database\Seeders;

use App\Models\UserType;
use Illuminate\Database\Seeder;

class UserTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user_types =
            [
                [
                    'id' => 1,
                    'name' => 'client',
                ],
                [
                    'id' => 2,
                    'name' => 'staff',
                ],
            ];
        UserType::insert($user_types);
    }
}
