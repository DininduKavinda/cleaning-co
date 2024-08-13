<?php

namespace App\Livewire\Forms\Panel\ClientArea;

use Livewire\Attributes\Validate;
use Livewire\Form;

class ClientForm extends Form
{
    public $id;
    public $full_name;
    public $mobile;
    public $phone;
    public $address;
    public $city_id;
    public $district_id;
    public $province_id;
    public $country_id;
    public $active;

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
            'id' => ['required', 'max:225'],
            'full_name' => ['required', 'max:225'],
            'mobile' => ['required', 'max:225'],
            'phone' => ['required', 'max:225'],
            'address' => ['required', 'max:225'],
            'city_id' => ['required', 'max:225'],
            'district_id' => ['required', 'max:225'],
            'province_id' => ['required', 'max:225'],
            'country_id' => ['required', 'max:225'],
            'active' => ['required', 'max:225'],
        ];
    }
}
