<?php

namespace App\Livewire\Panel\Meta\Location\Country;

use App\Livewire\Forms\Panel\meta\Location\Country\CountryForm;
use App\Models\Meta\Country;
use Livewire\Component;
use Masmerise\Toaster\Toaster;

class Create extends Component
{
    public CountryForm $form;
    public $country;
    public $countryArray;
    public $countryID;
    public function editData($id)
    {
        $this->countryID = $id;
        $this->country = Country::find($id);
        $this->countryArray = json_decode($this->country, true);
        $this->form->setData($this->countryArray);
    }
    public function mount($id = null)
    {
        if ($id != "") {
            $this->editData($id);
        }
    }
    public function saveData()
    {
        $validatedData = $this->form->validate();

        if (!empty($this->countryID)) {
            $this->country =  $this->country->update($validatedData);
        } else {
            $this->country = Country::create($validatedData);
        }

        if ($this->country) {
            Toaster::success('Operation Successful!');
        } else {
            Toaster::error('Error has been Occured!');
        }

        return $this->redirectRoute('location.country', navigate: true);
    }
    public function render()
    {
        return view('livewire.panel.meta.location.country.create');
    }
}
