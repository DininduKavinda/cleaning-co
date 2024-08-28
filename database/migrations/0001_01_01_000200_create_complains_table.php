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
        Schema::create('complains', function (Blueprint $table) {
            $table->foreign('staff_id')->references('id')->on('staff');
            $table->foreign('client_id')->references('id')->on('clients');
            $table->foreign('matter_id')->references('id')->on('matters');
            $table->foreignId('matter_id')->nullable();
            $table->foreignId('client_id')->nullable();
            $table->foreignId('staff_id')->nullable();
            $table->id();
            $table->text('description');
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
        Schema::dropIfExists('complains');
    }
};
