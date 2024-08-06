import './bootstrap';
import '../css/app.css';
import 'flowbite';
import '../../vendor/masmerise/livewire-toaster/resources/js';


document.addEventListener('DOMContentLoaded', () => {
    console.log('dom loaded');
 })
document.addEventListener('livewire:navigated', () => {
   console.log('navigated');
   initFlowbite();
})
