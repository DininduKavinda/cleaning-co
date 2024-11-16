import axios from 'axios';

window.axios = axios;


window.axios.defaults.headers.common['X-Requested-With'] = 'XMLhttpsRequest';

document.addEventListener('DOMContentLoaded', () => {
    console.log('dom loaded');

});
