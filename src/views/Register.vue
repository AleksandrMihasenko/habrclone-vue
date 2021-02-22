<template>
  <div class='container'>
    <div class='row'>
      <form v-on:submit.prevent='submitHandler' class='card-auth col s6 offset-s3'>
        <div class='card-auth_content'>
          <span class='card-auth_content_title'>Регистрация</span>

          <div class='card-auth_content_field input-field'>
            <label for='email'>Email</label>
            <input v-model='email' id='email' type='text'>
          </div>

          <div class='card-auth_content_field input-field'>
            <label for='username'>Имя</label>
            <input v-model='username' id='username' type='text'>
          </div>

          <div class='card-auth_content_field input-field'>
            <label for='password'>Пароль</label>
            <input v-model='password' id='password' type='password'>
          </div>

          <p>
            <label>
              <input v-model='check' type='checkbox'>
              <span>С правилами согласен</span>
            </label>
          </p>

          <div>
            <button v-bind:disabled='isSubmitting' class='card-auth_content_btn btn waves-effect waves-light'>
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
  data() {
    return {
      email: '',
      username: '',
      password: '',
      check: false
    }
  },
  methods: {
    submitHandler() {
      this.$store.dispatch('register', {
        email: this.email,
        username: this.username,
        password: this.password
      })
      .then(user => {
        console.log('register was success', user);
        this.$router.push({ name: 'home' })
      });
    }
  },
  computed: {
    isSubmitting() {
      return this.$store.state.auth.isSubmitting;
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
  background-color: $clear
  height: 50px

.btn-disabled
  opacity: .7
</style>
