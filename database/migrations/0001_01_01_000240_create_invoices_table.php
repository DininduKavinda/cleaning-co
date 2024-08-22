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
        Schema::create('invoices', function (Blueprint $table) {
            $table->foreign('invoice_deduction_id')->references('id')->on('invoice_deductions');
            $table->foreign('client_id')->references('id')->on('clients');
            $table->foreign('matter_id')->references('id')->on('matters');
            $table->foreignId('client_id');
            $table->foreignId('invoice_deduction_id');
            $table->foreignId('matter_id');
            $table->id();
            $table->string('code');
            $table->decimal('VAT');
            $table->decimal('NBT');
            $table->decimal('WHT');
            $table->decimal('subtotal');
            $table->decimal('deductions');
            $table->decimal('total');
            $table->date('date');
            $table->date('due_date');
            $table->tinyInteger('paid');
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
        Schema::dropIfExists('invoices');
    }
};
