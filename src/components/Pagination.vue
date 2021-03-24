<template>
  <ul class="pagination">
    <li v-on:click='clickPrev' class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
    <li v-for='page in pages' v-bind:key='page' class="waves-effect" v-bind:class='[ currentPage === page ? "active" : "waves-effect" ]'>
      <router-link v-bind:to='{ path: url, query: { page: page } }'>{{ page }}</router-link>
    </li>
    <li v-on:click='clickNext' class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
  </ul>
</template>

<script>
import { rangeArray } from '@/utils/utils';

export default {
  name: 'HcvPagination',
  props: {
    total: {
      type: Number,
      required: true
    },
    limit: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  methods: {
    clickPrev() {
      console.log(this.currentPage);
    },
    clickNext() {
      console.log(this.currentPage);
    }
  },
  computed: {
    pages() {
      const countPages = Math.ceil(this.total / this.limit);
      return rangeArray(1, countPages);
    }
  }
};
</script>

<style scoped lang='sass'>
  .pagination li:hover
    color: $clear
    background-color: #d1dbe9
  .pagination li.active
    background-color: #303b44
    &:hover
      opacity: .9

</style>
