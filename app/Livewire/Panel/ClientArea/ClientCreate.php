<?php

namespace App\Livewire\Panel\ClientArea;

use App\Livewire\Forms\Panel\ClientArea\ClientForm;
use App\Models\Client;
use App\Models\Meta\City;
use App\Models\Meta\Country;
use App\Models\Meta\District;
use App\Models\Meta\Province;
use Livewire\Component;
use Masmerise\Toaster\Toaster;
use Spatie\Permission\Models\Role;

class ClientCreate extends Component
{
    public ClientForm $form;
    public $clientID;
    public $clientArray;
    public $client;
    public $roles;
    public $districts = [];
    public $provinces = [];
    public $cities = [];
    public $countries;

    public function mount($id = null)
    {
        $this->countries = Country::all();
        $this->roles = Role::get();
        if (!empty($id)) {
            $this->editData($id);
        }
    }

    public function editData($id)
    {
        $this->clientID = $id;
        $this->client = Client::find($id);
        $this->clientArray = json_decode($this->client, true);
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
            $this->client->update($validatedData);
        } else {
            $this->client = Client::create($validatedData);
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
