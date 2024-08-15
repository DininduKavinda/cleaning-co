<?php

namespace App\Livewire\Auth\Permission;

use Livewire\Component;
use Masmerise\Toaster\Toaster;
use Spatie\Permission\Models\Permission;

class Permissions extends Component
{
    public $permissions;

    public $permission;

    public function deletePermission($id)
    {
        $this->permission = Permission::find($id);
        $this->permission->delete();
        if ($this->permission) {
            Toaster::success('Operation Successful!');
        } else {
            Toaster::error('Error has been Occured!');
        }
    }

    public function render()
    {
        $this->permissions = Permission::get();

        return view('livewire.auth.permission.permissions');
    }
}
