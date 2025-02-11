import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

// Donor APIs
export const fetchDonors = () => API.get('/donors');
export const searchDonors = (query) => API.get(`/donors/search?${query}`);
export const createDonor = (donorData) => API.post('/donors', donorData);

// User APIs
export const loginUser = (userData) => API.post('/users/login', userData);
export const registerUser = (userData) => API.post('/users/signup', userData);
