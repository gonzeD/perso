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
      Schema::create('reminders', function (Blueprint $table) {
          $table->id();
          $table->text('title');
          $table->text('frequency');
          $table->text('data')->nullable();
          $table->timestamp('last_sent')->nullable();
          $table->timestamps();
          $table->softDeletes();
      });
      Schema::create('sent_mails', function (Blueprint $table) {
        $table->id();
        $table->longText("email");
        $table->longText("subject");
        $table->longText("body");
        $table->timestamps();
      });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};
