<template>
  <div>
    <i v-if='!isFavorited' v-on:click='submitHandler' class='like material-icons left'>favorite_border</i>
    <i v-else v-on:click='submitHandler' class='like material-icons left'>favorite</i>
  </div>
</template>

<script>
export default {
  name: 'HcvLikes',
  props: {
    isLiked: {
      type: Boolean,
      required: true
    },
    articleSlug: {
      type: String,
      required: true
    },
    likesCount: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      isFavorited: this.isLiked,
      favoritesCount: this.likesCount
    }
  },
  methods: {
    submitHandler() {
      this.$store.dispatch('addLike', { slug: this.articleSlug, isLiked: this.isFavorited })
      if (this.isFavorited) {
        this.favoritesCount = this.favoritesCount - 1;
      } else {
        this.favoritesCount = this.favoritesCount + 1;
      }
      this.isFavorited = !this.isFavorited;
    }
  }
};
</script>

<style scoped lang='sass'>
  .like
    cursor: pointer
    opacity: 1
    color: $base-text
    font-size: 22px
    &:hover
      opacity: .9
</style>
