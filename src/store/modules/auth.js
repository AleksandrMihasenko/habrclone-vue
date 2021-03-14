import authApi from '@/api/auth';

import { setItem } from '@/utils/localStorage';


const state = {
  isSubmitting: false,
  currentUser: null,
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
    state.currentUser = user;
    state.isLogIn = true;
  },
  registerFailure(state, user) {
    state.isSubmitting = false;
    state.validationErrors = user;
  },
  loginStart(state) {
    state.isSubmitting = true;
    state.validationErrors = null;
  },
  loginSuccess(state, user) {
    state.isSubmitting = false;
    state.currentUser = user;
    state.isLogIn = true;
  },
  loginFailure(state, user) {
    state.isSubmitting = false;
    state.validationErrors = user;
  }
};

const getters = {
  currentUser: state => {
    return state.currentUser;
  },
  isLogIn: state => {
    return Boolean(state.isLogIn);
  },
  isAnonymous: state => {
    return state.isLogIn === false;
  }
}

const actions = {
  register(context, credentials) {
    return new Promise((resolve, reject) => {
      
      context.commit('registerStart');
      
      authApi.register(credentials)
      .then(response => {
        context.commit('registerSuccess', response.data.user);
        setItem('accessToken', response.data.user.token);
        resolve(response.data.user);
      })
      .catch(errors => {
        context.commit('registerFailure', errors.response.data.errors);
        reject(errors.response.data.errors);
      });
      
    });
  },
  login(context, credentials) {
    return new Promise((resolve, reject) => {
      
      context.commit('loginStart');
      
      authApi.login(credentials)
      .then(response => {
        context.commit('loginSuccess', response.data.user);
        setItem('accessToken', response.data.user.token);
        resolve(response.data.user);
      })
      .catch(errors => {
        console.log(errors);
        context.commit('loginFailure', errors.response.data.errors);
        reject(errors.response.data.errors);
      });
      
    });
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
