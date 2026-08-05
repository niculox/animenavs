import axios from "axios";

const api = axios.create({
    baseURL : "https://animenavs.onrender.com"
});

export default api;
