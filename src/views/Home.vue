<template>
  <div class="row">
    <div class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <i class="material-icons prefix">textsms</i>
          <input type="text" id="autocomplete-input" class="autocomplete">
          <label for="autocomplete-input">Autocomplete</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import M from 'materialize-css';
export default {
  name: 'Home',
  mounted() {
    M.AutoInit()
  }
};


</script>

<style>

</style>
