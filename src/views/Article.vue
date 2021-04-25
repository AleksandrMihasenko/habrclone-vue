<template>
  <div>
    <div class='row'>
      <div class='col s10 offset-s1 article'>
        <hcv-loading class='article_loader' v-if='isLoading'>Loading...</hcv-loading>

        <hcv-error v-if='error'></hcv-error>

        <div v-if='article'>
          <div class='article_descr_info'>
            <router-link class='article_descr_info_nickname __link' v-bind:to='{name: "userProfile", params: { slug: article.author.username }}'>
              {{ article.author.username }}
            </router-link>
            <span class='article_descr_info_date'>{{ article.createdAt }}</span>
          </div>

          <div class='article_descr_control' v-if='isAuthor'>
            <router-link class='article_descr_control_edit __btn' v-bind:to='{ name: "editArticle", params: { slug: article.slug } }'>
              <i class="material-icons">border_color</i>
              Редактировать
            </router-link>
            <button class='article_descr_control_delete __btn' v-on:click='deleteArticle'>
              <i class="material-icons">delete</i>
              Удалить
            </button>
          </div>

          <div class='article_descr_title'>
            {{ article.title }}
          </div>

          <div class='article_descr_tags'>
            <span>{{ article.tagList }}</span>
          </div>

          <div class='article_descr_text'>{{ article.body }}</div>

          <div class='article_descr_likes'></div>

          <div class='article_descr_tags'>
            <span>{{ article.tagList }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
import HcvLoading from '@/components/Loading';
import HcvError from '@/components/Error';

export default {
  name: 'HcvArticle',
  components: { HcvLoading, HcvError },
  computed: {
    ...mapState({
      isLoading: state => state.article.isLoading,
      error: state => state.article.error,
      article: state => state.article.data
    }),
    ...mapGetters({
      currentUser: 'currentUser'
    }),
    isAuthor() {
      if (!this.currentUser || !this.article) {
        return false;
      }
      return this.currentUser.username === this.article.author.username;
    }
  },
  mounted() {
    this.$store.dispatch('getArticle', { slug: this.$route.params.slug });
  },
  methods: {
    deleteArticle() {
      this.$store.dispatch('deleteArticle', { slug: this.$route.params.slug })
      .then(() =>
        this.$router.push({ name: 'globalFeed' })
      );
    }
  }
};
</script>

<style scoped lang='sass'>
  .col.article
    padding: 50px 0px
    .article_loader
      margin-top: 15%
      margin-left: 10%
    .__link
      display: inline-block
      text-decoration: none
      transition: all .25s ease-in-out
      &:hover
        opacity: .9
    .article_descr
      margin-bottom: 70px
      &_info
        margin-bottom: 10px
        &_nickname
          font-size: 15px
          margin-right: 15px
          color: $link-color
        &_date
          font-size: 13px
      &_control
        margin: 20px 0px 30px
        .__btn
          display: inline-flex
          align-items: center
          padding: 4px 24px 6px
          border-radius: 4px
          cursor: pointer
          transition: all .25s ease-in-out
        &_edit
          border: 1px solid $link-color
          margin-right: 15px
          color: $link-color
          &:hover
            background-color: $btn-color
            border: 1px solid $btn-color
            color: $clear
        &_delete
          color: $clear
          background-color: $base-text
          &:hover
            opacity: .9
      &_title
        font-size: 38px
        color: $base-text
      &_tags
        font-size: 12px
        color: #5e6973
        margin-bottom: 30px
        span
          margin-right: 10px
      &_text
        font-size: 16px
        line-height: 1.4
        color: $base-text
        margin-bottom: 30px
</style>
