<?php

namespace App\Livewire\Forms\Panel\meta\Location\City;

use Livewire\Attributes\Validate;
use Livewire\Form;

class CityForm extends Form
{
    public $id;
    public $name_en;
    public $district_id;
    public $name_si;
    public $postcode;

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
            'district_id' => 'required',
            'name_si' => 'sometimes',
            'postcode' => 'required'
        ];
    }
}
