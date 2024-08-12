<?php

namespace App\Livewire\Panel\Meta\Location\District;

use App\Models\Meta\District as MetaDistrict;
use Illuminate\Support\Facades\Http;
use Livewire\Component;
use Masmerise\Toaster\Toaster;

class District extends Component
{
    public $districts = [];
    public $api;
    public $district;

    public function getData()
    {

        $this->api = env('APP_API_URL');

        $response = Http::get($this->api . "location/districts");

        if ($response->successful()) {

            $this->districts = json_decode($response->body(), true);
        } else {

            $this->districts = [];
        }
    }

    public function mount()
    {
        $this->getData();
    }

    public function deleteData($id)
    {
        $this->district = MetaDistrict::find($id);
        $this->district = $this->district->delete();
        if ($this->district) {
            Toaster::success('Delete Successfully');
        } else {
            Toaster::error('An Error Occured');
        }
    }

    public function render()
    {
        $this->getData();
        return view('livewire.panel.meta.location.district.district');
    }
}
