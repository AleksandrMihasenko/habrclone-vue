<template>
  <div class='container'>
    <div class='row'>
      <form class='article-form col s12'>
        <div class='article-form_title input-field'>
          <label for='title'></label>
          <input v-model='title' class='article-input' placeholder='Название статьи' id='title' type='text'>
        </div>

        <div class='article-form_descr input-field'>
          <label for='descr'></label>
          <input v-model='description' class='article-input' placeholder='О чем эта статья?' id='descr' type='text'>
        </div>

        <div class='article-form_body input-field'>
          <label for='body'></label>
          <textarea v-model='body' class='materialize-textarea' placeholder='Напишите вашу статью' id='body'></textarea>
        </div>

        <div class='article-form_tags input-field'>
          <label for='tags'></label>
          <input v-model='tagList' class='article-input' placeholder='Введите теги' id='tags' type='text'>
        </div>

        <a v-bind:disable='isSubmitting' v-on:click='submitHandler' class='article-form_btn waves-effect waves-light btn'><i class='material-icons left'>border_color</i>Опубликовать</a>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HcvArticleForm',
  props: {
    initialValues: {
      type: Object,
      required: true
    },
    isSubmitting: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      title: this.initialValues.title,
      description: this.initialValues.description,
      body: this.initialValues.body,
      tagList: this.initialValues.tagList.join(' ')
    };
  },
  methods: {
    submitHandler() {
      const form = {
        title: this.title,
        description: this.description,
        body: this.body,
        tagList: this.tagList.split(' ')
      };
      this.$emit('articleSubmit', form);
    }
  }
};
</script>

<style scoped lang='sass'>
  .article-form
    display: flex
    flex-direction: column
    margin-top: 30px
    .input-field
      margin-top: 0
      margin-bottom: 15px
      .article-input
        border-radius: 4px
        padding: 0 25px
        border: 1px solid $form-border
        box-sizing: border-box
    &_body
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
      padding: 2px 20px 4px
      border-radius: 3px
      transition: all .25s ease-out
      &:hover
        background-color: #303b44
        opacity: .9
</style>
