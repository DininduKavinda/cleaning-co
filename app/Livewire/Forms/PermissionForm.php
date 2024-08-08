<?php

namespace App\Livewire\Forms;

use Livewire\Form;

class PermissionForm extends Form
{
    public $name;
    public function setData(array $permission)
    {
        foreach ($permission as $key => $value) {
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
