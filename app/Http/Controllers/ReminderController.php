<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Validator;
use Illuminate\Pagination\Paginator;
use DB;

use App\Models\Reminder\Reminder;

class ReminderController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
  public function __construct()
  {
  }

  public function get(Request $r)
  {
    return Reminder::all();
  }

  public function delete(Request $r,$id)
  {
    return Reminder::findOrFail($id)->delete();
  }

  public function create(Request $r)
  {
    $this->validate(request(),[
        'title'=>'required',
        'frequency' => 'required'
    ]);
    return Reminder::create($r->all());
  }

  public function update(Request $r,$id)
  {
    return Reminder::update($id,$r->all());
  }

}
