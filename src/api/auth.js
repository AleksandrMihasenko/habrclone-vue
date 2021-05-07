import axios from '@/api/axios';

//get user info from conduit.productionready.io
const register = credentials => {
  return axios.post('/users', { user: credentials });
};

const login = credentials => {
  return axios.post('/users/login', { user: credentials });
};

const getCurrentUser = () => {
  return axios.get('/user');
};

const updateCurrentUser = currentUserInfo => {
  return axios.put('/user', { user: currentUserInfo })
    .then(response => response.data.user);
};

export default {
  register,
  login,
  getCurrentUser,
  updateCurrentUser
};
