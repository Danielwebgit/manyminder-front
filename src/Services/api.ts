import axios from 'axios'


const api = axios.create({
  baseURL: 'https://danielsystemdev.com',
  headers: {
    'Content-Type': 'multipart/form-data'
  }
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
 
  config.headers.Authorization = `${token}`;

  return config;
});

export default api;
