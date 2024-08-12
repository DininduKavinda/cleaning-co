<?php

namespace App\Livewire\Panel\Meta\Location\Province;

use App\Models\Meta\Province as MetaProvince;
use Illuminate\Support\Facades\Http;
use Livewire\Component;
use Masmerise\Toaster\Toaster;

class Province extends Component
{
    public $provinces = [];
    public $api;
    public $province;

    public function getData()
    {

        $this->api = env('APP_API_URL');

        $response = Http::get($this->api . "location/provinces");

        if ($response->successful()) {

            $this->provinces = json_decode($response->body(), true);
        } else {

            $this->provinces = [];
        }
    }

    public function mount()
    {
        $this->getData();
    }

    public function deleteData($id)
    {
        $this->province = MetaProvince::find($id);
        $this->province->delete();
        if ($this->province) {
            Toaster::success('Delete Successfully');
        } else {
            Toaster::error('An Error Occured');
        }
    }
    public function render()
    {
        $this->getData();
        return view('livewire.panel.meta.location.province.province');
    }
}
