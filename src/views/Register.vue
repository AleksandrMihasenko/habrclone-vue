<template>
  <div class='container'>
    <div class='row section'>
      <form class='offset-l3 col l6' v-on:submit.prevent='submitHandler'>
        <div class='card lighten-2'>
          <div class='card-content'>
            <span class='grey-text text-darken-2'>Вход</span>

            <div class='row'>
              <div class='input-field col s12'>
                <input id='email' type='email' class='validate'>
                <label class='grey-text text-darken-2' for='email'>E-mail</label>
              </div>
            </div>

            <div class='row'>
              <div class='input-field col s12'>
                <input id='password' type='password' class='validate'>
                <label class='grey-text text-darken-2' for='password'>Пароль</label>
              </div>
            </div>

            <button class='col s12 btn waves-effect waves-light blue darken-3' type='submit' name='action'>
              <router-link v-bind:to="{name: 'login'}">Войти</router-link>
            </button>
            <div class='card-action'>
              <p>
                <a href='#' class='blue-text text-darken-2'>
                  <router-link v-bind:to="{name: 'login'}">Не зарегистрированы?</router-link>
                </a>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HcvRegister',
  methods: {
    submitHandler() {
      console.log('click');
    }
  }
};
</script>

<style>

</style>
