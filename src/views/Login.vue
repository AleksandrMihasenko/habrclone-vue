<template>
  <div class='container'>
    <div class='row'>
      <form v-on:submit.prevent='submitHandler' class='card-auth col s6 offset-s3'>
        <div class='card-auth_content'>
          <span class='card-auth_content_title'>Вход</span>

          <div class='card-auth_content_field input-field'>
            <label for='email'>Email</label>
            <input v-model.trim='email'
                   v-bind:class='{ invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email) }'
                   id='email' type='text'>

            <span class='invalid-error'
                  v-if='($v.email.$dirty && !$v.email.required)'>Поле email должно быть заполнено.</span>
            <span class='invalid-error'
                  v-else-if='($v.email.$dirty && !$v.email.email)'>Email должен быть корректным.</span>
            <span class='invalid-error' v-if='validationErrors["email or password"]'>Некорректный email.</span>
          </div>

          <div class='card-auth_content_field input-field'>
            <label for='password'>Пароль</label>
            <input v-model.trim='password'
                   v-bind:class='{ invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength) }'
                   id='password' type='password'>

            <span class='invalid-error' v-if='($v.password.$dirty && !$v.password.required)'>Поле password должно быть заполнено.</span>
            <span class='invalid-error' v-else-if='($v.password.$dirty && !$v.password.minLength)'>Поле должно содержать минимум {{ $v.password.$params.minLength.min
              }} символов. Сейчас {{ password.length }}</span>
            <span class='invalid-error' v-if='validationErrors["email or password"]'>Некорректный пароль.</span>
          </div>

          <div>
            <button v-bind:disabled='isSubmitting' class='card-auth_content_btn btn waves-effect waves-light'>
              Войти
              <i class='material-icons right'>send</i>
            </button>
          </div>
        </div>
      </form>
    </div>

    <div class='row'>
      <div class='card-link col s6 offset-s3'>
        <p class='center'>
          Не зарегистрированы?
          <router-link v-bind:to='{ name: "register" }'>Зарегистрируйтесь</router-link>
        </p>
      </div>
    </div>
  </div>
</template>


<script>
import { email, required, minLength } from 'vuelidate/lib/validators';

export default {
  name: 'HcvLogin',
  data() {
    return {
      email: '',
      password: '',
      validationErrors: {}
    };
  },
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(8) }
  },
  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      })
      .then(() => {
        this.$router.push({ name: 'globalFeed' });
      })
      .catch(error => {
        this.validationErrors = error;
        console.log(error);
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
