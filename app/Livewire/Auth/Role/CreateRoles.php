<?php

namespace App\Livewire\Auth\Role;

use Livewire\Attributes\Validate;
use Livewire\Component;
use Masmerise\Toaster\Toaster;
use Spatie\Permission\Models\Role;

class CreateRoles extends Component
{
    #[Validate([
        'required',
        'string',
        'unique:roles,name',
    ])]
    public $name;

    public function saveData()
    {
        $this->validate();
        $role = Role::create([
            'name' => $this->name,
        ]);
        if ($role) {

            Toaster::success('Operation Successful!');
        } else {
            Toaster::error('Error has been Occured!');
        }

        return $this->redirectRoute('roles', navigate: true);
    }

    public function render()
    {
        return view('livewire.auth.role.create-roles');
    }
}
