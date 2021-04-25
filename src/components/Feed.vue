<template>
  <div>
    <hcv-loading v-if='isLoading'>Loading...</hcv-loading>

    <div v-else class='col s12 articles'>
      <div v-if='data'>
        <div class='articles_preview' v-for='(article, index) in data.articles' v-bind:key='index'>
          <div class='articles_preview_info'>
            <router-link class='articles_preview_info_nickname __link'
                         v-bind:to='{name: "userProfile", params: { slug: article.author.username }}'>
              {{ article.author.username }}
            </router-link>
            <span class='articles_preview_info_date'>{{ article.createdAt }}</span>
          </div>

          <router-link v-bind:to='{name: "article", params: { slug: article.slug }}'
                       class='articles_preview_title __link'>
            {{ article.title }}
          </router-link>

          <div class='articles_preview_tags'>
            <span>
              <hcv-tags-list v-bind:tags='article.tagList'></hcv-tags-list>
            </span>
          </div>

          <div class='articles_preview_descr'>{{ article.description }}</div>

          <router-link v-bind:to='{name: "article", params: { slug: article.slug }}' class='articles_preview_btn'>Читать
            дальше
          </router-link>

          <div class='articles_preview_likes'></div>
        </div>

        <hcv-pagination
          v-bind:total='data.articlesCount'
          v-bind:limit='limit'
          v-bind:current-page='currentPage'
          v-bind:url='baseUrl'
        ></hcv-pagination>
      </div>
    </div>

    <hcv-error v-if='error'></hcv-error>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import HcvPagination from '@/components/Pagination';
import HcvLoading from '@/components/Loading';
import HcvError from '@/components/Error';
import HcvTagsList from '@/components/TagsList'
import { limit } from '@/utils/vars';
import { stringify, parseUrl } from 'query-string';

export default {
  name: 'HcvFeed',
  data() {
    return {
      limit,
      url: '/'
    };
  },
  props: {
    apiUrl: {
      type: String,
      required: true
    }
  },
  components: {
    HcvLoading,
    HcvPagination,
    HcvError,
    HcvTagsList
  },
  computed: {
    ...mapState({
      isLoading: state => state.feed.isLoading,
      data: state => state.feed.data,
      error: state => state.feed.error
    }),
    currentPage() {
      return Number(this.$route.query.page || '1');
    },
    baseUrl() {
      return this.$route.path;
    },
    offset() {
      return this.currentPage * limit - limit;
    }
  },
  watch: {
    currentPage() {
      this.fetchFeed();
    }
  },
  mounted() {
    this.fetchFeed();
  },
  methods: {
    fetchFeed() {
      const clearUrl = parseUrl(this.apiUrl);
      const clearParams = stringify({ limit, offset: this.offset, ...clearUrl.query });
      const apiWithParams = `${clearUrl.url}?${clearParams}`;

      this.$store.dispatch('getFeed', { apiUrl: apiWithParams });
    }
  }
};
</script>

<style scoped lang='sass'>
.articles
  font-family: "-apple-system", BlinkMacSystemFont, "Segoe UI", Arial, sans-serif

  .__link
    display: inline-block
    text-decoration: none
    transition: all .25s ease-in-out

    &:hover
      opacity: .9

  .articles_preview
    margin-bottom: 70px

    &_info
      margin-bottom: 10px

      &_nickname
        font-size: 15px
        margin-right: 15px
        color: $link-color

      &_date
        font-size: 13px

    &_title
      font-size: 38px
      color: $base-text

    &_tags
      font-size: 12px
      color: #5e6973
      margin-bottom: 30px

      span
        margin-right: 10px

    &_descr
      font-size: 16px
      line-height: 1.4
      color: $base-text
      margin-bottom: 30px

    &_btn
      display: inline-block
      padding: 10px
      color: $link-color
      border: 1px solid $btn-color
      border-radius: 5px
      transition: all .25s ease-in-out

      &:hover
        background-color: $btn-color
        color: $clear
</style>
