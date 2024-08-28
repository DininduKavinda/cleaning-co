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
            $table->foreign('timecard_id')->references('id')->on('timecards');
            $table->foreign('matter_id')->references('id')->on('matters');
            $table->foreign('invoice_id')->references('id')->on('invoices');
            $table->foreignId('timecard_id');
            $table->foreignId('matter_id');
            $table->foreignId('invoice_id');
            $table->id();
            $table->decimal('fee');
            $table->decimal('net_fee');
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
        Schema::dropIfExists('invoice_timecards');
    }
};
