import axios from 'axios';

const API_URL = 'http://localhost:5000/api/userauth/';

const signup = (userData) => {
    return axios.post(API_URL + 'signup', userData);
};

const login = (userData) => {
    return axios.post(API_URL + 'login', userData);
};

const getAllUsers = () => {
    return axios.get(API_URL + 'users'); // Assuming 'all' is the endpoint for fetching all users
};

export default { signup, login, getAllUsers };
