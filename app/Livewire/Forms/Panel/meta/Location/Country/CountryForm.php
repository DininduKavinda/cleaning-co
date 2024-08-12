<?php

namespace App\Livewire\Forms\Panel\meta\Location\Country;

use Livewire\Attributes\Validate;
use Livewire\Form;

class CountryForm extends Form
{
    public $id;
    public $country_name;
    public $iso_code;
    public $phone_code;

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
            'country_name' => 'required',
            'iso_code' => 'required',
            'phone_code' => 'required',
        ];
    }
}
