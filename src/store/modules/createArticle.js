import article from '@/api/article';

const state = {
  isSubmitting: false,
  validationErrors: null
}

const mutations = {
  createArticleStart(state) {
    state.isSubmitting = true;
  },
  createArticleSuccess(state) {
    state.isSubmitting = false;
  },
  createArticleFailure(state, payload) {
    state.isSubmitting = false;
    state.validationErrors = payload;
  }
}

const actions = {
  createArticle(context, { newArticle }) {
    return new Promise(resolve => {
      context.commit('createArticleStart');
      article.createArticle(newArticle)
        .then(article => {
          context.commit('createArticleSuccess', article);
          resolve(article);
        })
        .catch(errors => {
          context.commit('createArticleFailure', errors.response.data.errors);
        })
    })
  }
}

export default {
  state,
  mutations,
  actions
}
