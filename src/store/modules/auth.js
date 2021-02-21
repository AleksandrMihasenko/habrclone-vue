import authApi from '@/api/auth';


const state = {
  isSubmitting: false
};

const mutations = {
  registerStart(state) {
    state.isSubmitting = true;
  },
  registerSuccess(state) {
    state.isSubmitting = false;
  },
  registerFailure(state) {
    state.isSubmitting = false;
  }
};

const actions = {
  register(context, credentials) {
    return new Promise(resolve => {
      context.commit('registerStart');
      
      authApi.register(credentials)
        .then(response => {
          console.log('success', response);
          context.commit('registerSuccess', response.data.user);
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
