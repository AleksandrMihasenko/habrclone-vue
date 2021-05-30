<template>
  <div>
    <hcv-navbar v-if='!isMobile'></hcv-navbar>

    <hcv-navbar-mobile v-if='isMobile'></hcv-navbar-mobile>

    <router-view></router-view>
  </div>
</template>

<script>
import HcvNavbar from '@/components/Navbar';
import HcvNavbarMobile from '@/components/NavbarMobile';
import { defineMobile } from '@/utils/defineMobile';

export default {
  name: 'HcvApp',
  data() {
    return {
      isMobileMenuOpen: false,
    }
  },
  components: { HcvNavbar, HcvNavbarMobile },
  computed: {
    isMobile() {
      return defineMobile;
    }
  }
};
</script>
