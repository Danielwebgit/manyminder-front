import axios from 'axios'


const api = axios.create({
  baseURL: 'http://www.manyminder.com.test',
  headers: {
    'Content-Type': 'multipart/form-data'
  }
});

const v = api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  
  config.headers.Authorization = `${token}`;

  return config;
});

console.log(v)

export default api;
