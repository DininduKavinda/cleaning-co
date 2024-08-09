<?php

namespace App\Livewire\Panel\Meta;

use Livewire\Component;
use Illuminate\Support\Facades\Http;

class Country extends Component
{
    public $countries = [];

    public function getData()
    {
        $response = Http::get('http://cleaning-co.test/api/location/countries');


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

    public function render()
    {
        return view('livewire.panel.meta.country');
    }
}
