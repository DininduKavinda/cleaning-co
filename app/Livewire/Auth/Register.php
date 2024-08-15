<?php

namespace App\Livewire\Auth;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Livewire\Attributes\Title;
use Livewire\Attributes\Validate;
use Livewire\Component;
use Masmerise\Toaster\Toaster;
use Spatie\Permission\Models\Role;

#[Title('Register - Moodle Panel')]
class Register extends Component
{
    #[Validate('required|string|min:3|max:250')]
    public $name;

    #[Validate('required|email|max:250|unique:users,email')]
    public $email;

    #[Validate('required|string|min:8|confirmed')]
    public $password;

    public $roles;

    public $password_confirmation;

    public function register()
    {
        $this->validate();

        $user = User::create([
            'name' => $this->name,
            'email' => $this->email,
            'password' => Hash::make($this->password),
        ]);

        $user->syncRoles($this->roles);

        if ($user) {

            Toaster::success('Operation Successful!');
        } else {
            Toaster::error('Error has been Occured!');
        }

        return $this->redirectRoute('users', navigate: true);
    }

    public function render()
    {
        $this->roles = Role::pluck('name', 'name')->all();

        return view('livewire.auth.register');
    }
}
