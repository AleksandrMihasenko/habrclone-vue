<template>
    <div class='feed-links'>
      <div class='feed-links_item' v-if='isLogIn'>
        <router-link class='feed-links_item_link' v-bind:to='{ name: "userFeed" }' v-bind:class='{ active: routName === "userFeed" }'>любимые статьи</router-link>
      </div>

      <div class='feed-links_item'>
        <router-link class='feed-links_item_link' v-bind:to='{ name: "globalFeed" }' v-bind:class='{ active: routName === "globalFeed" }'>все статьи</router-link>
      </div>

      <div class='feed-links_item' v-if='tagName'>
        <router-link class='feed-links_item_link' v-bind:to='{ name: "tagFeed" }' v-bind:class='{ active: routName === "tag" }'>#{{ tagName }}</router-link>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'HcvFeedLinks',
  props: {
    tagName: {
      type: String,
      required: false
    }
  },
  computed: {
    ...mapGetters({
      isLogIn: 'isLogIn'
    }),
    routName() {
      return this.$route.name;
    }
  }
};
</script>

<style scoped lang='sass'>
  .feed-links
    display: flex
    flex-wrap: wrap
    padding-bottom: 10px
    margin-bottom: 50px
    border-bottom: 1px solid $base-text
    &_item
      margin-right: 15px
      &:not(.feed-links_item:last-child):after
        content: ''
        padding-left: 15px
        border-right: 2px solid $base-text
      &_link
        color: $base-text
        font-size: 24px
        transition: all .25s ease-in-out
        &:hover
          color: $link-color
          opacity: .9
        &.active
          color: $link-color
          background-color: transparent
          padding-bottom: 12px
          border-bottom: 4px solid $link-color

</style>
