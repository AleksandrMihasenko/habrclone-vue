import tagsApi from '@/api/tags';

const state = {
  data: null,
  isLoading: false,
  error: null
};

const mutations = {
  getTagsStart(state) {
    state.isLoading = true;
    state.data = null;
  },
  getTagsSuccess(state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  getTagsFailure(state) {
    state.isLoading = false;
  }
};

const actions = {
  getTags(context) {
    return new Promise(resolve => {
      context.commit('getTagsStart');
      tagsApi.getTags()
      .then(tags => {
        context.commit('getTagsSuccess', tags);
        resolve(tags);
      })
      .catch(() => {
        context.commit('getTagsFailure');
      });
    });
  }
};

export default {
  state,
  mutations,
  actions
};
