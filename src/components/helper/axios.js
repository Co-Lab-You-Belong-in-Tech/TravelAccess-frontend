import axios from 'axios';

const baseURL = process.env.REACT_APP_BACKEND_URL;
const headers = {};
if (localStorage.token) {
  headers.Authorization = `Bearer ${JSON.parse(localStorage.token)}`;
}
const axiosInstance = axios.create({
  baseURL,
  headers,
});

export default axiosInstance;
