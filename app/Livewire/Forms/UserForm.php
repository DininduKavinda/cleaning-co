<?php

namespace App\Livewire\Forms;

use Livewire\Form;

class UserForm extends Form
{
    public $name;

    public $email;

    public $password;

    public $roles = [];

    public function setData(array $user)
    {
        foreach ($user as $key => $value) {
            if (property_exists($this, $key)) {
                $this->{$key} = $value;
            }
        }
    }

    public function rules()
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'password' => 'nullable|string|min:8|max:20',
            'email' => ['required', 'email'],
            'roles' => 'required|array',
        ];
    }
}
