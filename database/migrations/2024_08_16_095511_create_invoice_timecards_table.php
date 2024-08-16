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
        Schema::create('invoice_timecards', function (Blueprint $table) {
            $table->foreignId('timecard_id');
            $table->foreignId('atter_id');
            $table->foreignId('invoice_id');
            $table->id();
            $table->decimal('fee');
            $table->decimal('net_fee');
            $table->text('description');
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
        Schema::dropIfExists('invoice_timecards');
    }
};
