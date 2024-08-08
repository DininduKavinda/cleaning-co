<?php

namespace App\Livewire\Auth\Role;

use Livewire\Component;
use Masmerise\Toaster\Toaster;
use Spatie\Permission\Models\Role;

class Roles extends Component
{
    public $roles;
    public function deleteRole($id)
    {
        $role = Role::find($id);
        $role->delete();
        if ($role) {
            Toaster::success('Operation Successful!');
        } else {
            Toaster::error('Error has been Occured!');
        }
    }
    public function render()
    {
        $this->roles = Role::get();
        return view('livewire.auth.role.roles');
    }
}
