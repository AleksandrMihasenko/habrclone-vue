<template>
  <div class='container'>
    <div class='row'>
      <form v-on:submit.prevent='submitHandler' class='card-auth col s6 offset-s3'>
        <div class='card-auth_content'>
          <span class='card-auth_content_title'>Регистрация</span>

          <div class='card-auth_content_field input-field'>
            <label for='email'>Email</label>
            <input id='email' type='text'>
          </div>

          <div class='card-auth_content_field input-field'>
            <label for='name'>Имя</label>
            <input id='name' type='text'>
          </div>

          <div class='card-auth_content_field input-field'>
            <label for='password'>Пароль</label>
            <input id='password' type='password'>
          </div>

          <p>
            <label>
              <input type='checkbox'>
              <span>С правилами согласен</span>
            </label>
          </p>

          <div>
            <button class='card-auth_content_btn btn waves-effect waves-light'>
              Зарегистрироваться
              <i class='material-icons right'>send</i>
            </button>

          </div>
        </div>
      </form>
    </div>

    <div class='row'>
      <div class='card-link col s6 offset-s3'>
        <p class='center'>
          Уже зарегистрированы?
<!--          <router-link v-bind='{name: "login"}'>Войдите</router-link>-->
        </p>
      </div>
    </div>
  </div>


</template>


<script>
export default {
  name: 'HcvRegister',
  methods: {
    submitHandler() {
      console.log('click');
    },
    increaseCounter() {
      this.$store.commit('increment')
    }
  }
};
</script>

<style scoped lang='sass'>

.card-auth
  margin-top: 100px
  background-color: $clear

  &_content
    padding: 40px 30px

    &_title
      display: block
      color: $base-text
      font-size: 22px
      font-weight: 700
      margin-bottom: 40px

    &_field
      margin-bottom: 30px

    &_btn
      width: 100%
      margin-top: 60px
      height: 50px

.card-link
  margin-top: 15px
  background-color: aliceblue
  height: 50px
</style>
