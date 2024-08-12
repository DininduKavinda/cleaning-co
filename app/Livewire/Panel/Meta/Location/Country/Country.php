<?php

namespace App\Livewire\Panel\Meta\Location\Country;

use App\Models\Meta\Country as MetaCountry;
use Livewire\Component;
use Illuminate\Support\Facades\Http;
use Masmerise\Toaster\Toaster;

class Country extends Component
{
    public $countries = [];
    public $api;

    public function getData()
    {

        $response = MetaCountry::get();

        if ($response) {

            $this->countries = $response;
        } else {

            $this->countries = [];
        }
    }

    public function mount()
    {
        $this->getData();
    }

    public function deleteData($id)
    {

        $response = MetaCountry::find($id);

        if ($response) {

            Toaster::success('Delete Successfully');
        } else {

            Toaster::error('An Error Occured');
        }
    }
    public function render()
    {
        $this->getData();
        return view('livewire.panel.meta.location.country.country');
    }
}
