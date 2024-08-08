<?php

namespace App\Livewire\Auth;

use App\Livewire\Forms\UserForm;
use App\Models\User;
use Livewire\Component;
use Masmerise\Toaster\Toaster;
use Spatie\Permission\Models\Role;

class EditUser extends Component
{
    public $user;
    public $roles;
    public $userRoles;
    public $userID;
    public UserForm $form;

    public function mount($id)
    {
        $this->userID = $id;
        $this->user = User::find($id);
        $this->roles = Role::pluck('name', 'name')->all();
        $this->userRoles = $this->user->roles->pluck('name')->all();
        $this->form->setData([
            'name' => $this->user->name,
            'email' => $this->user->email,
            'roles' => $this->userRoles,
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
        return view('livewire.auth.edit-user', [
            'roles' => $this->roles,
            'userRoles' => $this->userRoles,
        ]);
    }
}
