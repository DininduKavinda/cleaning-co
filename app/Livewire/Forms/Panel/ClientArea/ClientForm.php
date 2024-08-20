<?php

namespace App\Livewire\Forms\Panel\ClientArea;

use Livewire\Form;

class ClientForm extends Form
{
    public $id;

    public $image;

    public $full_name;

    public $name;

    public $roles;

    public $email;

    public $password;

    public $user_type_id;

    public $mobile;

    public $phone;

    public $address;

    public $city_id;

    public $district_id;

    public $province_id;

    public $password_confirmation;

    public $country_id;
    public $nic;
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
            'name' => ['required'],
            'roles' => ['sometimes'],
            'email' => ['required'],
            'image' => ['required','image','max:1024'],
            'password' => ['sometimes', 'confirmed'],
            'password_confirmation' => ['sometimes'],
            'user_type_id' => ['required'],
            'full_name' => ['required', 'max:225'],
            'mobile' => ['required', 'max:225'],
            'phone' => ['required', 'max:225'],
            'address' => ['required', 'max:225'],
            'city_id' => ['required', 'max:225'],
            'district_id' => ['required', 'max:225'],
            'province_id' => ['required', 'max:225'],
            'country_id' => ['required', 'max:225'],
            'nic' => ['required'],
            'active' => ['required'],
        ];
    }
}
