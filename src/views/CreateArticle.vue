<template>
  <div>
    <div>Create article</div>
    <hcv-article-form v-bind:initial-values='initialValues' v-bind:is-submitting='isSubmitting' v-on:articleSubmit='submitHandler'></hcv-article-form>
  </div>
</template>

<script>
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
      },
      validationErrors: null,
      isSubmitting: false
    }
  },
  methods: {
    submitHandler(data) {
      console.log('click submit', data);
    }
  }
};
</script>

<style scoped lang='sass'>

</style>
