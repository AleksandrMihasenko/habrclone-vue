<template>
  <div class='col s12 articles'>
    <div v-if='isLoading'>Loading...</div>

    <div v-if='error'>Error</div>

    <div v-if='data'>
      <div class='articles_preview' v-for='(article, index) in data.articles' v-bind:key='index'>
        <div class='articles_preview_info'>
          <router-link v-bind:to='{name: "userProfile", params: { slug: article.author.username }}'><span class='articles_preview_info_nickname'>{{ article.author.username }}</span></router-link>
          <span class='articles_preview_info_date'>{{ article.createdAt }}</span>
        </div>

        <router-link v-bind:to='{name: "article", params: { slug: article.slug }}' class='articles_preview_title'>{{ article.title }}</router-link>

        <div class='articles_preview_tags'>{{ article.tagList }}</div>

        <div class='articles_preview_descr'>{{ article.description }}</div>

        <router-link v-bind:to='{name: "article", params: { slug: article.slug }}' class='articles_preview_link'>Читать дальше</router-link>

        <div class='articles_preview_likes'></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'HcvFeed',
  props: {
    apiUrl: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState({
      isLoading: state => state.feed.isLoading,
      data: state => state.feed.data,
      error: state => state.feed.error
    })
  },
  mounted() {
    this.$store.dispatch('getFeed', { apiUrl: this.apiUrl });
  }
};
</script>

<style scoped>

</style>
