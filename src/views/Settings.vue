<template>
  <div v-if='currentUser' class='container'>
    <div class='row'>
      <form class='settings-form offset-m2 col s12 m8'>
        <h1 class='settings-form_title'>Настройки пользователя</h1>

        <div class='settings-form_username input-field'>
          <label for='username'></label>
          <input v-model='form.username' class='settings-input' placeholder='Имя пользователя' id='username' type='text'>
        </div>

        <div class='settings-form_bio input-field'>
          <label for='bio'></label>
          <textarea v-model='form.bio' class='materialize-textarea' placeholder='Напишите немного о Вас' id='bio'></textarea>
        </div>

        <div class='settings-form_email input-field'>
          <label for='email'></label>
          <input v-model='form.email' class='settings-input' placeholder='Адрес почты?' id='email' type='text'>
        </div>

        <div class='settings-form_password input-field'>
          <label for='password'></label>
          <input v-model='form.password' class='settings-input' placeholder='Новый пароль' id='password' type='password'>
        </div>

        <a v-bind:disable='isSubmitting' v-on:click='submitHandler' class='settings-form_btn waves-effect waves-light btn'><i class='material-icons left'>edit</i>Обновить настройки</a>

        <a v-bind:disable='isSubmitting' v-on:click='submitHandlerLogOut' class='settings-form_btn __logout waves-effect waves-light btn'><i class='material-icons left'>input</i>Разлогиниться</a>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'HcvSettings',
  computed: {
    ...mapState({
      isSubmitting: state => state.settings.isSubmitting,
      validationErrors: state => state.settings.validationErrors
    }),
    ...mapGetters({
      currentUser: 'currentUser'
    }),
    form() {
      return {
        username: this.currentUser.username,
        bio: this.currentUser.bio,
        email: this.currentUser.email,
        password: ''
      }
    }
  },
  methods: {
    submitHandler() {
      this.$store.dispatch('updateCurrentUser', { currentUserInfo: this.form });
    },
    submitHandlerLogOut() {
      this.$store.dispatch('logout')
        .then(() => {
          this.$router.push({ name: 'globalFeed' })
        });
    }
  }
};
</script>

<style scoped lang='sass'>
.settings-form
  display: flex
  flex-direction: column
  margin-top: 30px
  &_title
    text-align: center
    font-size: 38px
    margin-bottom: 40px
  .input-field
    margin-top: 0
    margin-bottom: 15px
    .settings-input
      border-radius: 4px
      padding: 0 25px
      border: 1px solid $form-border
      box-sizing: border-box
  &_bio
    .materialize-textarea
      border-radius: 4px
      padding: 15px 25px
      border: 1px solid $form-border
      min-height: 150px
  &_btn
    align-self: flex-end
    display: inline-block
    width: auto
    height: auto
    background-color: #303b44
    padding: 2px 15px 4px
    border-radius: 3px
    transition: all .25s ease-out
    &:hover
      background-color: #303b44
      opacity: .9
    &.__logout
      align-self: flex-start
      margin-top: 15px
      font-size: 10px
      padding: 0 8px
      i
        font-size: 12px
</style>
