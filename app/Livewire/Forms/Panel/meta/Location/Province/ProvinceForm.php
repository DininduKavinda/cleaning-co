<?php

namespace App\Livewire\Forms\Panel\meta\Location\Province;

use Livewire\Attributes\Validate;
use Livewire\Form;

class ProvinceForm extends Form
{
    public $id;
    public $name_en;
    public $country_id;
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
            'country_id' => 'required',
            'name_si' => 'sometimes',
            'name_ta' => 'sometimes'
        ];
    }
}
