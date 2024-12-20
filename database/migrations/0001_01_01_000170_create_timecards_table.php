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
        Schema::create('timecards', function (Blueprint $table) {
            $table->foreign('timecard_task_id')->references('id')->on('timecard_tasks');
            $table->foreign('matter_id')->references('id')->on('matters');
            $table->foreignId('timecard_task_id');
            $table->foreignId('matter_id');
            $table->id();
            $table->string('name');
            $table->date('date');
            $table->string('type');
            $table->dateTime('started_at');
            $table->dateTime('ended_time');
            $table->decimal('time_spent');
            $table->decimal('charge_rate');
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
        Schema::dropIfExists('timecards');
    }
};
