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
        Schema::create('matter_accesses', function (Blueprint $table) {
            $table->foreign('matter_id')->references('id')->on('matters');
            $table->foreign('staff_id')->references('id')->on('staff');
            $table->foreignId('matter_id');
            $table->foreignId('staff_id');
            $table->id();
            $table->string('geo_latitude');
            $table->string('geo_longtude');
            $table->integer('area');
            $table->date('permitted_on')->nullable();
            $table->tinyInteger('active')->default('1');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('matter_accesses');
    }
};
