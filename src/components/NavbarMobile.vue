<template>
  <div>
    <div class='navbar_mobile'>
      <nav>
        <div class='navbar_mobile_wrapper'>
          <router-link v-bind:to='{ name: "globalFeed" }' class='navbar_mobile_wrapper_brand-logo'>Habr clone</router-link>
          <div class='navbar_mobile_wrapper_hamburger' v-on:click='hamburgerHandler'>
            <i v-if='!isMobileMenuOpen' class="large material-icons">dehaze</i>
            <i v-else class="large material-icons">close</i>
          </div>
          <ul v-bind:class='{__open: isMobileMenuOpen}' class='navbar_mobile_wrapper_links'>
            <li>
              <router-link v-bind:to='{ name: "globalFeed" }' active-class='active' exact>Главная страница</router-link>
            </li>

            <template v-if='isLogIn'>
              <li>
                <router-link v-bind:to='{ name: "createArticle" }' active-class='active'>Новая статья</router-link>
              </li>
              <li>
                <router-link v-bind:to='{ name: "settings" }' active-class='active'>Настройки</router-link>
              </li>
              <li>
                <router-link v-bind:to='{ name: "userProfile", params: { slug: currentUser.username }}'>
                  {{ currentUser.username }}
                </router-link>
              </li>
            </template>

            <template v-if='isAnonymous'>
              <li>
                <router-link v-bind:to='{name: "login"}'>Войти</router-link>
              </li>
              <li>
                <router-link v-bind:to='{name: "register"}'>Зарегистрироваться</router-link>
              </li>
            </template>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'HcvNavbarMobile',
  data() {
    return {
      isMobileMenuOpen: false
    }
  },
  computed: {
    ...mapGetters({
      currentUser: 'currentUser',
      isLogIn: 'isLogIn',
      isAnonymous: 'isAnonymous'
    }),
  },
  methods: {
    hamburgerHandler() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }
  }
};
</script>

<style lang='sass'>
@media (max-width: 400px)
  .navbar_mobile
    &_wrapper
      position: relative
      background-color: #303b44
      &_brand-logo
        margin-left: 11%
        font-size: 38px
      &_hamburger
        position: absolute
        top: 0
        right: 20px
      &_links
        flex-direction: column
        width: 100%
        height: 100vh
        padding-top: 50px
        position: absolute
        transform: translateX(-100%)
        background-color: $base-text
        z-index: 1
        opacity: 0
        transition: all .6s ease-out
        li
          a
            font-size: 24px
            padding: 20px 30px
        &.__open
          opacity: .95
          transform: translateX(0)
</style>
