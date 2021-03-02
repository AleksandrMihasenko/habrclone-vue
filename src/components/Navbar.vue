<template>
<div class="navbar-fixed">
  <nav>
    <div class="nav-wrapper">
      <router-link v-bind:to='{name: "home"}' class="brand-logo">Habr clone</router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><router-link v-bind:to='{name: "home"}' active-class="active" exact>Главная страница</router-link></li>

        <template v-if="isLogIn">
          <li><router-link v-bind:to='{name: "createArticle"}'>Новая статья</router-link></li>
          <li><router-link v-bind:to='{name: "settings"}'>Настройки</router-link></li>
          <li><router-link v-bind:to='{name: "userProfile, params: {slug: currentUser.username}"}'>{{ currentUser.username }}</router-link></li>
        </template>

        <template v-if="!isLogIn">
          <li><router-link v-bind:to='{name: "login"}'>Войти</router-link></li>
          <li><router-link v-bind:to='{name: "register"}'>Зарегистрироваться</router-link></li>
        </template>
      </ul>
    </div>
  </nav>
</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'HcvNavbar',
  computed: {
    ...mapState({
      currentUser: state => state.auth.currentUsers,
      isLogIn: state => state.auth.isLogIn
      })
  }
}
</script>