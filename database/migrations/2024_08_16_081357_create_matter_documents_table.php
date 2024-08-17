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
        Schema::create('matter_documents', function (Blueprint $table) {
            $table->foreignId('matter_id');
            $table->foreignId('client_id')->nullable();
            $table->foreignId('staff_id')->nullable();
            $table->id();
            $table->string('document');
            $table->string('file_name');
            $table->tinyInteger('status');
            $table->text('notes');
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
        Schema::dropIfExists('matter_documents');
    }
};
