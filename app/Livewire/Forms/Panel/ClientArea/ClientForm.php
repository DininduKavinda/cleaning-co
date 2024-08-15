<?php

namespace App\Livewire\Forms\Panel\ClientArea;

use Livewire\Attributes\Validate;
use Livewire\Form;

class ClientForm extends Form
{
    public $id, $image, $full_name, $name, $roles, $email, $password, $type_id, $mobile, $phone, $address, $city_id, $district_id, $province_id, $password_confirmation, $country_id, $active;

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
            'name' => ['required'],
            'roles' => ['sometimes'],
            'email' => ['required'],
            'image' => ['sometimes'],
            'password' => ['sometimes','confirmed'],
            'password_confirmation' => ['sometimes'],
            'type_id' => ['required'],
            'full_name' => ['required', 'max:225'],
            'mobile' => ['required', 'max:225'],
            'phone' => ['required', 'max:225'],
            'address' => ['required', 'max:225'],
            'city_id' => ['required', 'max:225'],
            'district_id' => ['required', 'max:225'],
            'province_id' => ['required', 'max:225'],
            'country_id' => ['required', 'max:225'],
            'active' => ['required'],
        ];
    }
}
