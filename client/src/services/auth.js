import axios from 'axios';

export let token = null;

const setToken = (newToken) => {
  token = newToken;
};

const login = async (credentials) => {
  const response = await axios.post(`/api/login`, credentials);
  return response.data;
};

const signup = async (enteredData) => {
  const response = await axios.post(`/api/signup`, enteredData);
  return response.data;
};

const authService = { setToken, login, signup };

export default authService;