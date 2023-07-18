import Axios from 'axios';

const axios = Axios.create({
    maxBodyLength: Infinity,
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json'
    },
});


export default axios;