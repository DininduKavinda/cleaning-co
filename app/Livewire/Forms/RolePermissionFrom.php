<?php

namespace App\Livewire\Forms;

use Livewire\Attributes\Validate;
use Livewire\Form;

class RolePermissionFrom extends Form
{
    public $permission = [];
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
            'permission' => 'required|array',
        ];
    }
}
