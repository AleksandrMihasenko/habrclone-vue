import axios from 'axios';

const getUrl = slug => `/articles/${slug}/favorite`;

const addLike = slug => {
  const url = getUrl(slug);
  
  return axios
    .post(url)
    .then(response => response.data.article)
}

const removeLike = slug => {
  const url = getUrl(slug);
  
  return axios
  .delete(url)
  .then(response => response.data.article)
}

export default {
  addLike,
  removeLike
}
