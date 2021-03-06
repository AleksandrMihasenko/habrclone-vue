import authApi from '@/api/auth';

import { setItem } from '@/utils/localStorage';


const state = {
  isSubmitting: false,
  currentUser: null,
  validationErrors: null,
  isLogIn: null,
  isLoading: false
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
  },
  getCurrentUserStart(state) {
    state.isLoading = true;
  },
  getCurrentUserSuccess(state, user) {
    state.isLoading = false;
    state.currentUser = user;
    state.isLogIn = true;
  },
  getCurrentUserFailure(state) {
    state.isLoading = false;
    state.isLogIn = false;
    state.currentUser = null;
  },
  updateCurrentUserStart() {},
  updateCurrentUserSuccess(state, payload) {
    state.currentUser = payload;
  },
  updateCurrentUserFailure() {},
  logout(state) {
    state.isLogIn = false;
    state.currentUser = null;
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
  },
  getCurrentUser(context) {
    return new Promise((resolve) => {
    
      context.commit('getCurrentUserStart');
    
      authApi.getCurrentUser()
      .then(response => {
        context.commit('getCurrentUserSuccess', response.data.user);
        resolve(response.data.user);
      })
      .catch(() => {
        context.commit('getCurrentUserFailure');
      });
    });
  },
  updateCurrentUser(context, { currentUserInfo }) {
    return new Promise((resolve) => {
      
      context.commit('updateCurrentUserStart');
      
      authApi.updateCurrentUser(currentUserInfo)
      .then(user => {
        context.commit('updateCurrentUserSuccess', user);
        resolve(user);
      })
      .catch(errors => {
        context.commit('updateCurrentUserFailure', errors.response.data.errors);
      });
    });
  },
  logout(context) {
    return new Promise(resolve => {
      setItem('accessToken', '');
      context.commit('logout');
      resolve();
    })
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
