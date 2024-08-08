<?php

namespace App\Livewire\Forms;

use Livewire\Form;

class RoleForm extends Form
{
    public function setData(array $role)
    {
        foreach ($role as $key => $value) {
            if (property_exists($this, $key)) {
                $this->{$key} = $value;
            }
        }
    }

    public function rules()
    {
        return [
            'name' => ['required', 'string', 'max:255'],
        ];
    }
}
