import axios from 'axios';

const baseURL = import.meta.env.VITE_BACKEND_URL;
const headers = {};
if (localStorage.getItem('token')) {
  headers.Authorization = `Bearer ${JSON.parse(localStorage.token)}`;
}
const axiosInstance = axios.create({
  baseURL,
  headers,
});

export default axiosInstance;
