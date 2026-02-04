import axios from "axios";

const BASE_URL = 'https://backend-vs1n.onrender.com/+-';

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type' : 'application/json'
    },
});

export default api;
