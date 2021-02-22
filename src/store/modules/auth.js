import authApi from '@/api/auth';

import { setItem } from '@/utils/localStorage';


const state = {
  isSubmitting: false,
  currentUsers: null,
  validationErrors: null,
  isLogIn: null
};

const mutations = {
  registerStart(state) {
    state.isSubmitting = true;
    state.validationErrors = null;
  },
  registerSuccess(state, user) {
    state.isSubmitting = false;
    state.currentUsers = user;
    state.isLogIn = true;
  },
  registerFailure(state, user) {
    state.isSubmitting = false;
    state.validationErrors = user;
  }
};

const actions = {
  register(context, credentials) {
    return new Promise(resolve => {
      
      context.commit('registerStart');
      
      authApi.register(credentials)
        .then(response => {
          context.commit('registerSuccess', response.data.user);
          setItem('accessToken', response.data.user.token);
          resolve(response.data.user);
        })
        .catch(errors => {
          console.log(errors);
          context.commit('registerFailure', errors.response.data.errors);
        });
      
    });
  }
};

export default {
  state,
  mutations,
  actions
};
