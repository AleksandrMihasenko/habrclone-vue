<template>
  <div class='container'>
    <div class='row'>
      <form v-on:submit.prevent='submitHandler' class='card-auth col s6 offset-s3'>
        <div class='card-auth_content'>
          <span class='card-auth_content_title'>Регистрация</span>

          <div class='card-auth_content_field input-field'>
            <label for='email'>Email</label>
            <input v-model.trim='email'
                   v-bind:class='{ invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email) }'
                   id='email' type='text'>

            <span class='invalid-error'
                  v-if='($v.email.$dirty && !$v.email.required)'>Поле email должно быть заполнено.</span>
            <span class='invalid-error'
                  v-else-if='($v.email.$dirty && !$v.email.email)'>Email должен быть корректным.</span>
            <span class='invalid-error' v-if='validationErrors.email'>Эта почта уже занята.</span>
          </div>

          <div class='card-auth_content_field input-field'>
            <label for='username'>Имя</label>
            <input v-model='username'
                   v-bind:class='{ invalid: ($v.username.$dirty && !$v.username.required) || ($v.username.$dirty && !$v.username.minLength) }'
                   id='username' type='text'>

            <span class='invalid-error' v-if='($v.username.$dirty && !$v.username.required)'>Поле username должно быть заполнено.</span>
            <span class='invalid-error' v-else-if='($v.username.$dirty && !$v.username.minLength)'>Поле должно содержать минимум {{ $v.username.$params.minLength.min
              }} символов. Сейчас {{ username.length }}</span>
            <span class='invalid-error' v-if='validationErrors.username'>Это имя уже занято.</span>
          </div>

          <div class='card-auth_content_field input-field'>
            <label for='password'>Пароль</label>
            <input v-model.trim='password'
                   v-bind:class='{ invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength) }'
                   id='password' type='password'>

            <span class='invalid-error' v-if='($v.password.$dirty && !$v.password.required)'>Поле password должно быть заполнено.</span>
            <span class='invalid-error' v-else-if='($v.password.$dirty && !$v.password.minLength)'>Поле должно содержать минимум {{ $v.password.$params.minLength.min
              }} символов. Сейчас {{ password.length }}</span>
          </div>

          <p>
            <label>
              <input v-model='checkbox' type='checkbox'>
              <span>С правилами согласен</span>

              <br>
              <span class='invalid-error' v-if='!checkbox'>Необходимо принять соглашение</span>
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
          <router-link v-bind:to='{ name: "login" }'>Войдите</router-link>
        </p>
      </div>
    </div>
  </div>


</template>

<script>
import { email, required, minLength } from 'vuelidate/lib/validators';

export default {
  name: 'HcvRegister',
  data() {
    return {
      email: '',
      username: '',
      password: '',
      checkbox: false,
      validationErrors: {}
    };
  },
  validations: {
    email: { email, required },
    username: { required, minLength: minLength(5) },
    password: { required, minLength: minLength(8) },
    checkbox: { checked: value => value }
  },
  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      this.$store.dispatch('register', {
        email: this.email,
        username: this.username,
        password: this.password
      })
      .then(user => {
        console.log('register was success', user);
        this.$router.push({ name: 'home' });
      })
      .catch(error => {
        this.validationErrors = error;
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

.invalid-error
  color: $error-color
  font-size: 12px
</style>
