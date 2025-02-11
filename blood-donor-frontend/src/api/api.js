import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_Backend;

const API = axios.create({ baseURL: `${apiUrl}/api` });

// Donor APIs
export const fetchDonors = () => API.get('/donors');
export const searchDonors = (query) => API.get(`/donors/search?${query}`);
export const createDonor = (donorData) => API.post('/donors', donorData);

// User APIs
export const loginUser = (userData) => API.post('/users/login', userData);
export const registerUser = (userData) => API.post('/users/signup', userData);
