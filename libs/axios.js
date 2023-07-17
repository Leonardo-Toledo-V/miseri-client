import Axios from 'axios';

const axios = Axios.create({
    method: 'post',
    maxBodyLength: Infinity,
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json'
    },
});

export default axios;