import Axios from 'axios';
import Cookies from 'js-cookie';


const axios = Axios.create({
    maxBodyLength: Infinity,
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json'
    },
});

export default axios;