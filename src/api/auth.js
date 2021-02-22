import axios from '@/api/axios';

//get user info from conduit.productionready.io
const register = credentials => {
  return axios.post('/users', { user: credentials });
};

export default {
  register
};
