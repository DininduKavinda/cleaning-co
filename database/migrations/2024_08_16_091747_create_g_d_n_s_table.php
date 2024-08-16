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
        Schema::create('g_d_n_s', function (Blueprint $table) {
            $table->foreignId('item_id');
            $table->foreignId('approved_by')->nullable();
            $table->foreignId('despatched_by');
            $table->foreignId('matter_id')->nullable();
            $table->id();
            $table->text('notes');
            $table->integer('qty');
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
        Schema::dropIfExists('g_d_n_s');
    }
};
