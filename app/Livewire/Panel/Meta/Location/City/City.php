<?php

namespace App\Livewire\Panel\Meta\Location\City;

use App\Models\Meta\City as MetaCity;
use Livewire\Component;
use Masmerise\Toaster\Toaster;

class City extends Component
{
    public $cities;

    public $api;

    public $city;

    public function getData()
    {

        $data = MetaCity::get();

        if ($data) {

            $this->cities = $data;
        } else {

            $this->cities = [];
        }
    }

    public function mount()
    {
        $this->getData();
    }

    public function deleteData($id)
    {
        $this->city = MetaCity::find($id);
        $this->city = $this->city->delete();
        if ($this->city) {
            Toaster::success('Delete Successfully');
        } else {
            Toaster::error('An Error Occured');
        }
    }

    public function render()
    {
        $this->getData();

        return view('livewire.panel.meta.location.city.city');
    }
}
