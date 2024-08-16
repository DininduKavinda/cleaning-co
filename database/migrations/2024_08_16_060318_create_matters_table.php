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
        Schema::create('matters', function (Blueprint $table) {
            $table->foreignId('task_id');
            $table->foreignId('client_id');
            $table->foreignId('staff_id');
            $table->foreignId('approved_by');
            $table->foreignId('department_id');
            $table->id();
            $table->string('code');
            $table->string('description');
            $table->date('started_at');
            $table->date('ended_at');
            $table->tinyInteger('status');
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
        Schema::dropIfExists('matters');
    }
};