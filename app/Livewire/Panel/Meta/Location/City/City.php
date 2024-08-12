<?php

namespace App\Livewire\Panel\Meta\Location\City;

use App\Livewire\Forms\Panel\meta\Location\City\CityForm;
use App\Models\Meta\City as MetaCity;
use App\Models\Meta\District;
use Illuminate\Support\Facades\Http;
use Livewire\Component;
use Masmerise\Toaster\Toaster;

class City extends Component
{
    public $cities = [];
    public $api;
    public $city;

    public function getData()
    {

        $this->api = env('APP_API_URL');

        $response = Http::get($this->api . "location/cities");

        if ($response->successful()) {

            $this->cities = json_decode($response->body(), true);
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
