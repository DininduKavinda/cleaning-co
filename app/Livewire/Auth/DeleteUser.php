<?php

namespace App\Livewire\Auth;

use App\Models\User;
use Livewire\Component;
use Masmerise\Toaster\Toaster;

class DeleteUser extends Component
{
    public function deleteUser($id){
        $user = User::findOrFail($id);
        $user->delete();
        if ($user) {
            Toaster::success('Operation Successful!');
        } else {
            Toaster::error('Error has been Occured!');
        }
    }
    public function render()
    {
        return view('livewire.auth.delete-user');
    }
}
