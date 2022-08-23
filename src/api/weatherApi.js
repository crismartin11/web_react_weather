import axios from 'axios';
import { getEnvVariables } from './../helpers';

const { VITE_WEATHER_API_URL, VITE_API_KEY } = getEnvVariables();

const weatherApi = axios.create({
    baseURL:  `${VITE_WEATHER_API_URL}`
});

weatherApi.interceptors.request.use(config => {
    config.url += `&appid=${VITE_API_KEY}`;
    return config;
});

export default weatherApi;