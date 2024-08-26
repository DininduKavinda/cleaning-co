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
            $table->foreign('task_id')->references('id')->on('tasks');
            $table->foreign('client_id')->references('id')->on('clients');
            $table->foreign('staff_id')->references('id')->on('staff');
            $table->foreign('approved_by')->references('id')->on('staff');
            $table->foreign('department_id')->references('id')->on('departments');
            $table->foreignId('task_id');
            $table->foreignId('client_id');
            $table->foreignId('staff_id');
            $table->foreignId('approved_by');
            $table->foreignId('department_id');
            $table->id();
            $table->string('code');
            $table->string('name');
            $table->string('description');
            $table->date('started_at');
            $table->date('ended_at');
            $table->string('map_latitude')->nullable();
            $table->string('map_longitude')->nullable();
            $table->tinyInteger('status');
            $table->tinyInteger('active')->nullable();
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
