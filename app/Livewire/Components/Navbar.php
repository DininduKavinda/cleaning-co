<?php

namespace App\Livewire\Components;

use Livewire\Component;

class Navbar extends Component
{
    public $authUser;

    public function mount()
    {
        $this->authUser = auth()->user();
    }

    public function dashboard()
    {
        $this->redirectRoute('dashboard');
    }

    public function render()
    {
        return view('livewire.components.navbar');
    }
}
