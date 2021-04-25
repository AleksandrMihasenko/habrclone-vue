<template>
  <div class='navbar-fixed'>
    <nav>
      <div class='nav-wrapper'>
        <router-link v-bind:to='{name: "globalFeed"}' class='brand-logo'>Habr clone</router-link>
        <ul id='nav-mobile' class='right hide-on-med-and-down'>
          <li>
            <router-link v-bind:to='{name: "globalFeed"}' active-class='active' exact>Главная страница</router-link>
          </li>

          <template v-if='isLogIn'>
            <li>
              <router-link v-bind:to='{name: "createArticle"}' active-class='active'>Новая статья</router-link>
            </li>
            <li>
              <router-link v-bind:to='{name: "settings"}' active-class='active'>Настройки</router-link>
            </li>
            <li>
              <router-link v-bind:to='{name: "userProfile, params: {slug: currentUser.username}"}'>
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
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'HcvNavbar',
  computed: {
    ...mapGetters({
      currentUser: 'currentUser',
      isLogIn: 'isLogIn',
      isAnonymous: 'isAnonymous'
    })
  }
};
</script>

<style lang='sass'>
.nav-wrapper
  background-color: #303b44
  .active
    background-color: #29333b
  .brand-logo
    left: 1%
</style>
