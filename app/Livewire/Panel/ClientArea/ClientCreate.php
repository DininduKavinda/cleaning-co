<?php

namespace App\Livewire\Panel\ClientArea;

use App\Livewire\Forms\Panel\ClientArea\ClientForm;
use App\Livewire\Forms\UserForm;
use App\Models\Client;
use App\Models\Meta\City;
use App\Models\Meta\Country;
use App\Models\Meta\District;
use App\Models\Meta\Province;
use App\Models\User;
use Livewire\Component;
use Masmerise\Toaster\Toaster;
use Spatie\Permission\Models\Role;

class ClientCreate extends Component
{
    public ClientForm $form;
    public $clientID;
    public $clientArray;
    public $client;
    public $user;
    public $roles;
    public $districts = [];
    public $provinces = [];
    public $cities = [];
    public $countries;

    public function mount($id = null)
    {
        $this->countries = Country::all();
        $this->roles = Role::pluck('name', 'name')->all();
        if (!empty($id)) {
            $this->editData($id);
        }
    }

    public function editData($id)
    {
        $this->clientID = $id;

        $this->client = Client::find($id);

        $this->user = User::find($this->client->user_id);

        $mergedArray = array_merge($this->client->toArray(), $this->user->toArray());

        $this->clientArray = $mergedArray;

        $this->form->setData($this->clientArray);

        $this->loadDependencies();
    }

    public function updatedFormCountryId($countryId)
    {
        $this->provinces = Province::where('country_id', $countryId)->get();
        $this->districts = [];
        $this->cities = [];
        $this->form->province_id = null;
        $this->form->district_id = null;
        $this->form->city_id = null;
    }

    public function updatedFormProvinceId($provinceId)
    {
        $this->districts = District::where('province_id', $provinceId)->get();
        $this->cities = [];
        $this->form->district_id = null;
        $this->form->city_id = null;
    }

    public function updatedFormDistrictId($districtId)
    {
        $this->cities = City::where('district_id', $districtId)->get();
        $this->form->city_id = null;
    }

    public function saveData()
    {
        $validatedData = $this->form->validate();

        if (!empty($this->clientID)) {

            $this->client = $this->client->update([
                'full_name' => $validatedData['full_name'],
                'image' => $validatedData['image'],
                'mobile' => $validatedData['mobile'],
                'phone' => $validatedData['phone'],
                'address' => $validatedData['address'],
                'city_id' => $validatedData['city_id'],
                'district_id' => $validatedData['district_id'],
                'province_id' => $validatedData['province_id'],
                'country_id' => $validatedData['country_id'],
                'active' => $validatedData['active'],
            ]);

            $this->user = $this->user->update([
                'name' => $validatedData['name'],
                'email' => $validatedData['email'],
                'type_id' => $validatedData['type_id'],
                'image' => $validatedData['image'],
            ]);
        } else {

            $user = User::create([
                'name' => $validatedData['name'],
                'email' => $validatedData['email'],
                'password' => bcrypt($validatedData['password']),
                'type_id' => $validatedData['type_id'],
                'image' => $validatedData['image'],
            ]);

            $user->syncRoles($validatedData['roles']);

            $this->client = Client::create([
                'user_id' => $user->id,
                'full_name' => $validatedData['full_name'],
                'image' => $validatedData['image'],
                'mobile' => $validatedData['mobile'],
                'phone' => $validatedData['phone'],
                'address' => $validatedData['address'],
                'city_id' => $validatedData['city_id'],
                'district_id' => $validatedData['district_id'],
                'province_id' => $validatedData['province_id'],
                'country_id' => $validatedData['country_id'],
                'active' => $validatedData['active'],
            ]);
        }

        if ($this->client) {
            Toaster::success('Operation Successful');
        } else {
            Toaster::error('Operation Failed');
        }

        return $this->redirectRoute('clients');
    }
    private function loadDependencies()
    {
        if ($this->form->country_id) {
            $this->provinces = Province::where('country_id', $this->form->country_id)->get();
        }

        if ($this->form->province_id) {
            $this->districts = District::where('province_id', $this->form->province_id)->get();
        }

        if ($this->form->district_id) {
            $this->cities = City::where('district_id', $this->form->district_id)->get();
        }
    }

    public function render()
    {
        return view('livewire.panel.client-area.client-create');
    }
}
