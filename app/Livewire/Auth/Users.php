<?php

namespace App\Livewire\Auth;

use App\Models\User;
use Livewire\Attributes\On;
use Livewire\Component;
use Masmerise\Toaster\Toaster;

class Users extends Component
{
    public $users;
    public function deleteUser($id)
    {
        $user = User::findOrFail($id);
        if ($user->delete()) {
            Toaster::success('Operation Successful!');
        } else {
            Toaster::error('An error has occurred!');
        }
    }
    public function render()
    {

        $this->users = User::get();
        return view('livewire.auth.users');
    }
}
