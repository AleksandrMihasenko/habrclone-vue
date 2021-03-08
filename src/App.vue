<template>
  <div>
    <component :is='layout'></component>
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout';
import AuthLayout from '@/layouts/AuthLayout';

export default {
  name: 'HcvApp',
  components: { MainLayout, AuthLayout },
  computed: {
    layout() {
      return (this.$route.meta.layout || 'auth') + '-layout';
    }
  }
}
</script>

<style lang='sass'>
body
  background-color: $base-bg
</style>
