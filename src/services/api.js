import axios from 'axios';

const api = axios.create({
  baseURL: 'https://nne-backend.herokuapp.com/',
});

export default api;
