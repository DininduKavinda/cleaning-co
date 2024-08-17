import axios from 'axios';
import ConfirmationDialog from './ConfirmationDialog';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
