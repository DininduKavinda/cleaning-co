<?php

namespace App\Livewire\Auth;

use App\Livewire\Forms\UserForm;
use App\Models\User;
use Livewire\Component;
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
        $this->userID= $id;
        $this->user = User::find($id);
        $this->roles = Role::pluck('name', 'name')->all();
        $this->userRoles = $this->user->roles->pluck('name', 'name')->all();
    }
    public function saveData()
    {
        $validatedData = $this->form->validate();
        dd([$this->userID, $validatedData ]);
        // $id = $this->form->id;

        // $validatedData = $this->form->validate();

        // User::find($id)->update($validatedData);
        // User::find($id)->syncRoles($validatedData->roles);
    }
    public function updated($propertyName)
    {
        $this->validateOnly($propertyName);
    }
    public function render()
    {
        return view('livewire.auth.edit-user');
    }
}
