import likes from '@/api/likes';


const mutations = {
  addLikeStart() {},
  addLikeSuccess() {},
  addLikeFailure() {}
}

const actions = {
  addLike(context, { slug, isLiked }) {
    return new Promise(resolve => {
      context.commit('addLikeStart');
      const promise = isLiked ? likes.removeLike(slug) : likes.addLike(slug);
      
      promise
        .then(article => {
        context.commit('addLikeSuccess', article);
        resolve(article);
        })
        .catch(() => {
          context.commit('addLikeFailure');
        })
    })
  }
}

export default {
  mutations,
  actions
}
