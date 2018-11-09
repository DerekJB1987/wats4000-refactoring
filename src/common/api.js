// Base API Configuration
import axios from 'axios';

export const API = axios.create({
    baseURL: '//api.openweathermap/org/data/2.5/'
})
API.interceptors.request.use(function (config){ 
    //Set common parameters with each request
    config.params.APPID = '1a769bc8373b06a1395446cc060db519';
    config.params.units = 'imperial';
    return config;
}, function (error) {
    return Promise.reject(error);
});