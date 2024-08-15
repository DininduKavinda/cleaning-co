<?php

namespace App\Livewire\Auth\Permission;

use Livewire\Component;
use Masmerise\Toaster\Toaster;
use Spatie\Permission\Models\Permission;

class CreatePermissions extends Component
{
    public $permission;

    public $name;

    public function saveData()
    {
        $this->validate([
            'name' => [
                'required',
                'string',
                'unique:permissions,name',
            ],
        ]);

        $permission = Permission::create([
            'name' => $this->name,
        ]);
        if ($permission) {
            Toaster::success('Operation Successful!');
        } else {
            Toaster::error('Error has been Occured!');
        }

        return $this->redirectRoute('permissions', navigate: true);
    }

    public function render()
    {
        return view('livewire.auth.permission.create-permissions');
    }
}
