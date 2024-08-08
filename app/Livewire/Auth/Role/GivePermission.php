<?php

namespace App\Livewire\Auth\Role;

use App\Livewire\Forms\RolePermissionForm;
use Livewire\Component;
use Masmerise\Toaster\Toaster;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class GivePermission extends Component
{
    public $role;
    public $rolePermissions = [];
    public $permissions = [];
    public RolePermissionForm $form;

    public function mount($id)
    {
        $this->role = Role::findOrFail($id);
        $this->permissions = Permission::all();
        $this->rolePermissions = $this->role->permissions->pluck('name')->toArray();

        $this->form->setData([
            'permission' => $this->rolePermissions,
        ]);
    }

    public function saveData()
    {
        $validatedData = $this->form->validate();

        $this->role->syncPermissions($validatedData['permission']);

        if ($this->role) {
            Toaster::success('Operation Successful!');
        } else {
            Toaster::error('An error has occurred!');
        }
    }

    public function render()
    {
        return view('livewire.auth.role.give-permission');
    }
}
