<template>
  <div>
    <hcv-navbar></hcv-navbar>

    <router-view></router-view>
  </div>
</template>

<script>
import HcvNavbar from '@/components/Navbar';

export default {
  name: 'HcvApp',
  components: { HcvNavbar }
};
</script>
