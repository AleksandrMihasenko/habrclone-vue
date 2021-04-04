<template>
  <div class='container'>
    <div class='row feed'>
      <div class='feed_title'>All articles</div>

      <div class='col s12 feed_content'>
        <div class='col s8 feed_content_articles'>
          <hcv-feed v-bind:api-url='apiUrl'></hcv-feed>
        </div>

        <div class='col s4'>
          <hcv-tags></hcv-tags>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HcvFeed from '@/components/Feed';
import HcvTags from '@/components/Tags';
import M from 'materialize-css';

export default {
  name: 'HcvGlobalFeed',
  data() {
    return {
      apiUrl: '/articles'
    }
  },
  components: { HcvFeed, HcvTags },
  mounted() {
    M.AutoInit();
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
</style>
