<?php

namespace App\Livewire\Panel\Meta\Location\District;

use App\Livewire\Forms\Panel\meta\Location\District\DistrictForm;
use App\Models\Meta\District;
use App\Models\Meta\Province;
use Livewire\Component;
use Masmerise\Toaster\Toaster;

class Create extends Component
{
    public DistrictForm $form;
    public $district;
    public $districtArray;
    public $districtID;
    public $provinces;
    public function editData($id)
    {
        $this->districtID = $id;
        $this->district = District::find($id);
        $this->districtArray = json_decode($this->district, true);
        $this->form->setData($this->districtArray);
    }
    public function mount($id = null)
    {
        $this->provinces = Province::get();
        if ($id != "") {
            $this->editData($id);
        }
    }
    public function saveData()
    {
        $validatedData = $this->form->validate();

        if (!empty($this->provinceID)) {
            $this->district =  $this->district->update($validatedData);
        } else {
            $this->district = District::create($validatedData);
        }

        if ($this->district) {
            Toaster::success('Operation Successful!');
        } else {
            Toaster::error('Error has been Occured!');
        }

        return $this->redirectRoute('location.district', navigate: true);
    }
    public function render()
    {
        return view('livewire.panel.meta.location.district.create');
    }
}
