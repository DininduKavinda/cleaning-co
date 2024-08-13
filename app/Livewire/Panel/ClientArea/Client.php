<?php

namespace App\Livewire\Panel\ClientArea;

use App\Models\Client as ModelsClient;
use Livewire\Component;
use Masmerise\Toaster\Toaster;

class Client extends Component
{
    public $clients;
    public $users;
    public function getData()
    {

        $response = ModelsClient::get();

        if ($response) {

            $this->clients = $response;
        } else {

            $this->clients = [];
        }
    }

    public function deleteData($id)
    {

        $response = ModelsClient::find($id);

        if ($response) {

            $this->clients = $response->delete();

            if ($this->clients) {

                Toaster::success('Operation Success');

            } else {

                Toaster::error("Operation Failed");

            }

        } else {

            Toaster::error('No Client Found');

        }

    }
    public function render()
    {

        $this->getData();

        return view('livewire.panel.client-area.client');

    }
}
