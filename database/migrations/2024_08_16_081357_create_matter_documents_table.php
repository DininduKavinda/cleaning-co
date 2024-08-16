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
            $table->foreignId('uploaded_by');
            $table->id();
            $table->string('document');
            $table->string('file_name');
            $table->tinyInteger('status');
            $table->text('notes');
            $table->tinyIncrements('active');
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
