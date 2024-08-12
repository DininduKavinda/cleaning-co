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

        $response = MetaProvince::get();

        if ($response) {

            $this->provinces = $response;
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
        $this->province = $this->province->delete();
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
