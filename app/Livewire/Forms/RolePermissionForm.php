<?php

namespace App\Livewire\Forms;

use Livewire\Form;

class RolePermissionForm extends Form
{
    public $permission = [];

    public function setData(array $data)
    {
        foreach ($data as $key => $value) {
            if (property_exists($this, $key)) {
                $this->{$key} = $value;
            }
        }
    }

    public function rules()
    {
        return [
            'permission' => 'required|array',
        ];
    }
}
