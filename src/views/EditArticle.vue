<template>
  <div>
    <hcv-loading v-if='isLoading'></hcv-loading>
    <hcv-article-form v-if='initialValues' v-bind:initial-values='initialValues' v-bind:is-submitting='isSubmitting' v-on:articleSubmit='submitHandler'></hcv-article-form>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import HcvLoading from '@/components/Loading';
import HcvArticleForm from '@/components/ArticleForm';

export default {
  name: 'HcvEditArticle',
  components: { HcvArticleForm, HcvLoading },
  computed: {
    ...mapState({
      isSubmitting: state => state.editArticle.isSubmitting,
      isLoading: state => state.editArticle.isLoading,
      article: state => state.editArticle.article
    }),
    initialValues() {
      if (!this.article) {
        return null;
      }

      return {
        title: this.article.title,
        description: this.article.description,
        body: this.article.body,
        tagList: this.article.tagList
      }
    }
  },
  mounted() {
    this.$store.dispatch('getEditArticle', { slug: this.$route.params.slug })
  },
  methods: {
    submitHandler(newArticle) {
      const slug = this.$route.params.slug;

      this.$store.dispatch('updateArticle', { newArticle, slug })
        .then(article => {
          this.$router.push({ name: 'article', params: { slug: article.slug } })
        })
    }
  }
};
</script>

<style scoped lang='sass'>

</style>
