<template>
  <div>
    <hcv-loading v-if='isLoading'></hcv-loading>

    <div v-else class='tags'>
      <div v-if='tags' class='tags_list'>
        <router-link class='tags_list_item' v-for='tag in tags' v-bind:key='tag' v-bind:to='{ name: "tag", params: {slug: tag} }'>
          {{ tag }}
        </router-link>
      </div>
    </div>

    <hcv-error v-if='error'></hcv-error>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import HcvLoading from '@/components/Loading';
import HcvError from '@/components/Error';

export default {
  name: 'HcvTags',
  components: { HcvLoading, HcvError },
  computed: {
    ...mapState({
      isLoading: state => state.tags.isLoading,
      error: state => state.tags.error,
      tags: state => state.tags.data
    })
  },
  mounted() {
    this.$store.dispatch('getTags');
  }
};
</script>

<style scoped lang='sass'>
.tags
  padding: 20px
  background-color: #dedede
  border-radius: 6px
  &_list
    display: flex
    flex-wrap: wrap
    &_item
      display: inline-block
      background-color: $base-bg
      border: 1px solid $base-text
      border-radius: 6px
      margin: 4px 2px
      padding: 2px 4px
      color: $base-text
      transition: all .25s ease-in-out
      &:hover
        background-color: $tags-bg
</style>
