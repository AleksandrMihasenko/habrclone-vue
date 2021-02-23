import axios from '@/api/axios';

//get user info from conduit.productionready.io
const register = credentials => {
  return axios.post('/users', { user: credentials });
};

const login = credentials => {
  return axios.post('/users/login', { user: credentials });
}

export default {
  register,
  login
};
