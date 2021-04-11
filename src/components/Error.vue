<template>
  <div class='error'>{{ message }}</div>
</template>

<script>
export default {
  name: 'HcvError',
  props: {
    message: {
      type: String,
      required: false,
      default: 'Ошибка при загрузке данных'
    }
  }
};
</script>

<style scoped lang='sass'>
  .error
    text-align: center
</style>
