<?php

namespace App\Livewire\Forms;

use Livewire\Attributes\Validate;
use Livewire\Form;

class UserForm extends Form
{
    public function setData(array $users)
    {
        foreach ($users as  $key => $value) {
            if (property_exists($this, $key)) {
                $this->{$key} = $value;
            }
        }
    }

    public function rules()
    {
        return [
            'name' => ['required','string|max:255'],
            'password' => 'nullable|string|min:8|max:20',
            'roles' => 'required'
        ];
    }
}
