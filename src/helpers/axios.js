import axios from 'axios';

const baseURL = "";
let headers = {};

if(localStorage.token){
    headers.Authorization = ''
}

const axiosInstance = axios.create(
    {
        baseUrl : baseURL,
        headers,
    })