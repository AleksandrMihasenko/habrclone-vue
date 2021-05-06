<template>
  <hcv-article-form v-bind:initial-values='initialValues' v-bind:is-submitting='isSubmitting' v-on:articleSubmit='submitHandler'></hcv-article-form>
</template>

<script>
import { mapState } from 'vuex';
import HcvArticleForm from '@/components/ArticleForm';

export default {
  name: 'HcvCreateArticle',
  components: { HcvArticleForm },
  data() {
    return {
      initialValues: {
        title: '',
        description: '',
        body: '',
        tagList: []
      }
    }
  },
  computed: {
    ...mapState({
      isSubmitting: state => state.createArticle.isSubmitting
    })
  },
  methods: {
    submitHandler(newArticle) {
      this.$store.dispatch('createArticle', { newArticle })
        .then(article => {
          this.$router.push({ name: 'article', params: { slug: article.slug } })
        })
    }
  }
};
</script>

<style scoped lang='sass'>

</style>
