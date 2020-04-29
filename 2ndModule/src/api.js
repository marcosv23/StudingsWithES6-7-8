import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/repos',
 /* baseURL will be a initial directory 
   for API REST requests*/
});

export default api;