<?php

namespace App\Livewire\Forms\Panel\meta\Location\District;

use Livewire\Form;

class DistrictForm extends Form
{
    public $id;

    public $name_en;

    public $province_id;

    public $name_si;

    public $name_ta;

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
            'id' => 'sometimes',
            'name_en' => 'required',
            'province_id' => 'required',
            'name_si' => 'sometimes',
            'name_ta' => 'sometimes',
        ];
    }
}
