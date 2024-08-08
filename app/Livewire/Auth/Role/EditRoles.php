<?php

namespace App\Livewire\Auth\Role;

use Livewire\Component;
use Spatie\Permission\Models\Role;

class EditRoles extends Component
{

    public $roleID;
    public $role;
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

        $this->user->update([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
        ]);

        $this->user->syncRoles($validatedData['roles']);

        if ($this->user) {
            Toaster::success('Update Successful!');
        } else {
            Toaster::error('Error has been Occured!');
        }

        return $this->redirectRoute('users', navigate: true);
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
