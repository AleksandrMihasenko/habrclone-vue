import article from '@/api/article';

const state = {
  isSubmitting: false,
  validationErrors: null,
  isLoading: false,
  article: null
}

const mutations = {
  updateArticleStart(state) {
    state.isSubmitting = true;
  },
  updateArticleSuccess(state) {
    state.isSubmitting = false;
  },
  updateArticleFailure(state, payload) {
    state.isSubmitting = false;
    state.validationErrors = payload;
  },
  getEditArticleStart(state) {
    state.isLoading = true;
  },
  getEditArticleSuccess(state, payload) {
    state.isLoading = false;
    state.article = payload;
  },
  getEditArticleFailure(state) {
    state.isLoading = false;
  }
}

const actions = {
  updateArticle(context, { slug, newArticle }) {
    return new Promise(resolve => {
      context.commit('updateArticleStart');
      article.updateArticle(slug, newArticle)
        .then(article => {
          context.commit('updateArticleSuccess', article);
          resolve(article);
        })
        .catch(errors => {
          context.commit('updateArticleFailure', errors.response.data.errors);
        })
    })
  },
  getEditArticle(context, { slug }) {
    return new Promise(resolve => {
      context.commit('getEditArticleStart');
      article.getArticle(slug)
      .then(article => {
        context.commit('getEditArticleSuccess', article);
        resolve(article);
      })
      .catch(errors => {
        context.commit('getEditArticleFailure', errors);
      })
    })
  }
}

export default {
  state,
  mutations,
  actions
}
