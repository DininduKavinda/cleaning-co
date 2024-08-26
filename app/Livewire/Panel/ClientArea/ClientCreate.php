<?php

namespace App\Livewire\Panel\ClientArea;

use App\Livewire\Forms\Panel\ClientArea\ClientForm;
use App\Models\Client;
use App\Models\Meta\City;
use App\Models\Meta\Country;
use App\Models\Meta\District;
use App\Models\Meta\Province;
use App\Models\User;
use App\Models\UserType;
use Illuminate\Support\Facades\File;
use Livewire\Component;
use Livewire\WithFileUploads;
use Masmerise\Toaster\Toaster;
use Spatie\Permission\Models\Role;

class ClientCreate extends Component
{
    public ClientForm $form;

    public $clientID;

    public $clientArray;

    public $client;

    public $user, $users;

    public $roles;

    public $districts = [];

    public $provinces = [];

    public $cities = [];

    public $countries;

    public $userTypes = [];
    public $reference_id;

    use WithFileUploads;

    public function mount($id = null)
    {
        $this->countries = Country::all();
        $this->userTypes = UserType::all();
        $this->roles = Role::pluck('name', 'name')->all();
        if (! empty($id)) {
            $this->editData($id);
        }
    }

    public function editData($id)
    {
        $this->clientID = $id;

        $this->client = Client::find($id);

        $this->reference_id = $id;

        $this->user = User::where('reference_id', $id)->where('user_type_id', 1)->first();

        $this->users = $this->user;

        $this->roles = $this->user->roles->pluck('name')->all();

        $clientArray = $this->client->toArray();

        $clientArray['full_name'] = $clientArray['name'];

        unset($clientArray['name']);

        $mergedArray = array_merge($clientArray, $this->user->toArray(), $this->roles);

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

        if (! empty($this->clientID)) {
            $this->updateData($validatedData);
        } else {
            $this->createData($validatedData);
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

    public function createData($validatedData)
    {
        if ($validatedData['image']) {
            $name = md5($validatedData['image'] . microtime()) . '.' . $validatedData['image']->extension();
            $filePath = $validatedData['image']->storeAs(path: 'storage/user_images', name: $name);
        } else {
            $filePath = null;
        }

        $this->client = Client::create([
            'name' => $validatedData['full_name'],
            'mobile' => $validatedData['mobile'],
            'phone' => $validatedData['phone'],
            'address' => $validatedData['address'],
            'city_id' => $validatedData['city_id'],
            'district_id' => $validatedData['district_id'],
            'province_id' => $validatedData['province_id'],
            'country_id' => $validatedData['country_id'],
            'nic' => $validatedData['nic'],
            'active' => $validatedData['active'],
        ]);

        $reference_id = $this->client->id;

        $user = User::create([
            'reference_id' => $reference_id,
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => bcrypt($validatedData['password']),
            'user_type_id' => $validatedData['user_type_id'],
            'image' => $filePath,
        ]);
        $user->syncRoles($validatedData['roles']);
    }
    public function updateData($validatedData)
    {
        $this->client = $this->client->update([
            'name' => $validatedData['full_name'],
            'mobile' => $validatedData['mobile'],
            'phone' => $validatedData['phone'],
            'address' => $validatedData['address'],
            'city_id' => $validatedData['city_id'],
            'district_id' => $validatedData['district_id'],
            'province_id' => $validatedData['province_id'],
            'country_id' => $validatedData['country_id'],
            'nic' => $validatedData['nic'],
            'active' => $validatedData['active'],
        ]);

        if ($validatedData['image'] != $this->user->image) {
            File::delete($this->user->image);
            $name = md5($validatedData['image'] . microtime()) . '.' . $validatedData['image']->extension();
            $filePath = $validatedData['image']->storeAs(path: 'storage/user_images', name: $name);
        } else {
            $filePath = $this->user->image;
        }

        $this->user = $this->user->update([
            'reference_id' => $this->reference_id,
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => bcrypt($validatedData['password']),
            'user_type_id' => $validatedData['user_type_id'],
            'image' => $filePath,
        ]);
        $this->users->syncRoles($validatedData['roles']);
    }

    public function render()
    {
        return view('livewire.panel.client-area.client-create');
    }
}
