<?php

namespace App\Livewire\Auth\Role;

use App\Livewire\Forms\RolePermissionFrom;
use Illuminate\Support\Facades\DB;
use Livewire\Attributes\Validate;
use Livewire\Component;
use Masmerise\Toaster\Toaster;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class GivePermission extends Component
{
    public $role;
    public $rolePermissions = [];
    public $permissions = [];
    public $permission;
    public RolePermissionFrom $form;
    public function mount($id)
    {
        $this->permissions = Permission::get();
        $this->role = Role::findOrFail($id);
        $this->rolePermissions = DB::table('role_has_permissions')
            ->where('role_has_permissions.role_id', $this->role->id)
            ->pluck('role_has_permissions.permission_id', 'role_has_permissions.permission_id')
            ->all();
    }
    public function saveData()
    {
        $validatedData = $this->form->validate();
        dd($validatedData);
        $this->role->syncPermissions($validatedData['permission']);

        if ($this->role) {
            Toaster::success('Operation Successful!');
        } else {
            Toaster::error('Error has been Occured!');
        }
    }
    public function render()
    {
        return view('livewire.auth.role.give-permission');
    }
}
