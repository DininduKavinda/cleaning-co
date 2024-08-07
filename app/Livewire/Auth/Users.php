<?php

namespace App\Livewire\Auth;

use App\Models\User;
use Livewire\Component;

class Users extends Component
{
    public $users;
    public function render()
    {
        $this->users = User::get();
        return view('livewire.auth.users');
    }
}
