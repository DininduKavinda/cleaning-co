<?php

namespace App\Livewire\Auth\Role;

use App\Livewire\Forms\RoleForm;
use Livewire\Component;
use Masmerise\Toaster\Toaster;
use Spatie\Permission\Models\Role;

class EditRoles extends Component
{
    public $roleID;

    public $role;

    public RoleForm $form;

    public function mount($id)
    {
        $this->roleID = $id;
        $this->role = Role::find($id);
        $this->form->setData([
            'name' => $this->role->name,
        ]);
    }

    public function saveData()
    {
        $validatedData = $this->form->validate();

        $this->role->update([
            'name' => $validatedData['name'],
        ]);

        if ($this->role) {
            Toaster::success('Update Successful!');
        } else {
            Toaster::error('Error has been Occured!');
        }

        return $this->redirectRoute('roles', navigate: true);
    }

    public function updated($propertyName)
    {
        $this->validateOnly($propertyName, $this->form->rules());
    }

    public function render()
    {
        return view('livewire.auth.role.edit-roles');
    }
}
