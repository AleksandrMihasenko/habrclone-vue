<template>
  <div class='container'>
    <div class='row feed'>
      <div class='col s12 feed_content'>
        <div class='col s12 m8 feed_content_articles'>
          <hcv-feed-links v-bind:tag-name='tagName'></hcv-feed-links>

          <hcv-feed v-bind:api-url='apiUrl'></hcv-feed>
        </div>

        <div class='col s12 m4'>
          <hcv-tags></hcv-tags>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HcvFeed from '@/components/Feed';
import HcvTags from '@/components/Tags';
import HcvFeedLinks from '@/components/FeedLinks';
import M from 'materialize-css';

export default {
  name: 'HcvUserFeed',
  components: { HcvFeed, HcvTags, HcvFeedLinks },
  mounted() {
    M.AutoInit();
  },
  computed: {
    tagName() {
      return this.$route.params.slug;
    },
    apiUrl() {
      return `/articles?tag=${this.tagName}`;
    }
  }
};


</script>

<style scoped lang='sass'>
.feed
  min-height: 60vh
  .col
    padding: 0
  &_title
    font-size: 36px
    color: $base-text
    margin-top: 35px
  .col.feed_content
    display: flex
    height: 100%
    margin-top: 55px
    &_articles
      width: 75%
      min-height: 100%
      margin-right: 20px
    &_tags
      width: 25%
      height: 300px
      margin-left: 20px
      padding: 20px
      background-color: #dedede
      border-radius: 6px

@media (max-width: 400px)
  .feed
    .col.feed_content
      display: flex
      flex-direction: column-reverse
      &_articles
        width: 100%
        margin: 30px 0
</style>
