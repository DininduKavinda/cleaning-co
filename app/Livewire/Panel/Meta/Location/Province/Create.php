<?php

namespace App\Livewire\Panel\Meta\Location\Province;

use App\Livewire\Forms\Panel\meta\Location\Province\ProvinceForm;
use App\Models\Meta\Country;
use App\Models\Meta\Province;
use Livewire\Component;
use Masmerise\Toaster\Toaster;

class Create extends Component
{
    public ProvinceForm $form;

    public $province;

    public $provinceArray;

    public $provinceID;

    public $countries;

    public function editData($id)
    {
        $this->provinceID = $id;
        $this->province = Province::find($id);
        $this->provinceArray = json_decode($this->province, true);
        $this->form->setData($this->provinceArray);
    }

    public function mount($id = null)
    {
        $this->countries = Country::get();
        if ($id != '') {
            $this->editData($id);
        }
    }

    public function saveData()
    {
        $validatedData = $this->form->validate();

        if (! empty($this->provinceID)) {
            $this->province = $this->province->update($validatedData);
        } else {
            $this->province = Province::create($validatedData);
        }

        if ($this->province) {
            Toaster::success('Operation Successful!');
        } else {
            Toaster::error('Error has been Occured!');
        }

        return $this->redirectRoute('location.province', navigate: true);
    }

    public function render()
    {
        return view('livewire.panel.meta.location.province.create');
    }
}
