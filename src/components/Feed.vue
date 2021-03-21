<template>
  <div>Feed {{ apiUrl }}</div>
</template>

<script>
export default {
  name: 'HcvFeed',
  props: {
    apiUrl: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>

</style>
