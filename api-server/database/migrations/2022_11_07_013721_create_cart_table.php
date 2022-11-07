<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('carts', function (Blueprint $table) {
            $table->id();
            $table->bigInteger("userId")->length(20)->unsigned();
            $table->string("productCode", 15)->collation("latin1_swedish_ci");
            $table->smallInteger("quantity")->length(6);
            $table->foreign("userId")->references("id")->on("users")->onDelete("cascade");
            $table->foreign("productCode")->references("productCode")->on("products")->onDelete("cascade");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cart');
    }
};
