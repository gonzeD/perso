<?php

namespace App\Models\Reminder;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Reminder extends Model
{
  protected $guarded = [];
  protected $hidden = [];
  protected $with = [];

      use SoftDeletes;
}
