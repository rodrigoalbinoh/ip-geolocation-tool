import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.ipgeolocation.io/ipgeo',
});

export default api;