import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.105:8000', 
    withCredentials: false,
    headers: { 
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },  
})

export default api;


