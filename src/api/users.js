import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

export const getUsers = async () => await axios.get(`${url}/user`);

export const login = async (email, password) => await axios.post(`${url}/login`, { email: email, password: password }); 