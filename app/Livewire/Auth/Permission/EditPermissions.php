<?php

namespace App\Livewire\Auth\Permission;

use App\Livewire\Forms\PermissionForm;
use Livewire\Component;
use Masmerise\Toaster\Toaster;
use Spatie\Permission\Models\Permission;

class EditPermissions extends Component
{
    public $permissionID;

    public $permission;

    public PermissionForm $form;

    public function mount($id)
    {
        $this->permissionID = $id;
        $this->permission = Permission::find($this->permissionID);
        $this->form->setData([
            'name' => $this->permission->name,
        ]);
    }

    public function saveData()
    {
        $validatedData = $this->form->validate();

        $this->permission->update([
            'name' => $validatedData['name'],
        ]);

        if ($this->permission) {
            Toaster::success('Update Successful!');
        } else {
            Toaster::error('Error has been Occured!');
        }

        return $this->redirectRoute('permissions', navigate: true);
    }

    public function updated($propertyName)
    {
        $this->validateOnly($propertyName, $this->form->rules());
    }

    public function render()
    {
        return view('livewire.auth.permission.edit-permissions');
    }
}
