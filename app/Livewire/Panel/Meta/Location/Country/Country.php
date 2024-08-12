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
    public $country;

    public function getData()
    {

        $this->api = env('APP_API_URL');

        $response = Http::get($this->api . "location/countries");

        if ($response->successful()) {

            $this->countries = json_decode($response->body(), true);
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
        $this->country = MetaCountry::find($id);
        $this->country->delete();
        if ($this->country) {
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
