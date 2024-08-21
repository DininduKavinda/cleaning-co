<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('staff', function (Blueprint $table) {
            $table->foreignId('level_id');
            $table->foreignId('country_id');
            $table->foreignId('province_id');
            $table->foreignId('district_id');
            $table->foreignId('city_id');
            $table->foreignId('department_id');
            $table->id();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('nic');
            $table->string('titile');
            $table->string('initial');
            $table->string('full_name');
            $table->date('dob');
            $table->string('address');
            $table->string('mobile');
            $table->string('phone');
            $table->string('civil_status');
            $table->tinyInteger('active');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('staff');
    }
};
