<template>
  <div class='tags-list'>
    <div v-if='tags.length' class='tags-list_wrap'>
      <span class='tags-list_wrap_item' v-for='tag in tags' v-bind:key='tag'>{{ tag }}</span>
    </div>
    <div v-else class='tags-list_wrap'>
      <span class='tags-list_wrap_item'>Нет тега</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HcvTagsList',
  props: {
    tags: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped lang='sass'>
  .tags-list
    display: flex
    color: $base-text
    font-size: 10px
    &_wrap
      &_item
        color: #aaa
        padding: 2px 4px 3px
        border: 1px solid #aaa
        border-radius: 4px
</style>
