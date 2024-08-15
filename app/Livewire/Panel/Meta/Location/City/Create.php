<?php

namespace App\Livewire\Panel\Meta\Location\City;

use App\Livewire\Forms\Panel\meta\Location\City\CityForm;
use App\Models\Meta\City;
use App\Models\Meta\District;
use Livewire\Component;
use Masmerise\Toaster\Toaster;

class Create extends Component
{
    public CityForm $form;

    public $city;

    public $cityArray;

    public $cityID;

    public $districts;

    public function editData($id)
    {
        $this->cityID = $id;
        $this->city = City::find($id);
        $this->cityArray = json_decode($this->city, true);
        $this->form->setData($this->cityArray);
    }

    public function mount($id = null)
    {
        $this->districts = District::get();
        if ($id != '') {
            $this->editData($id);
        }
    }

    public function saveData()
    {
        $validatedData = $this->form->validate();

        if (! empty($this->cityID)) {
            $this->city = $this->city->update($validatedData);
        } else {
            $this->city = City::create($validatedData);
        }

        if ($this->city) {
            Toaster::success('Operation Successful!');
        } else {
            Toaster::error('Error has been Occured!');
        }

        return $this->redirectRoute('location.city', navigate: true);
    }

    public function render()
    {
        return view('livewire.panel.meta.location.city.create');
    }
}
