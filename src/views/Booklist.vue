<template>
  <div class="layout container mx-auto py-12 px-4">
    <List :books="books"></List>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import List from '../components/List.vue';

const headers = {
  accept: 'application/json',
  'Content-Type': 'application/json',
};
export default {
  name: 'Booklist',
  components: {
    List,
  },
  data() {
    return {
      books: [],
    };
  },
  methods: {
    getBooks() {
      const vm = this;
      const api = 'https://fe-interview-api.unnotech.com/books';
      this.$http.get(api, { headers }).then((res) => {
        vm.books = res.data;
      });
    },
  },
  created() {
    this.getBooks();
  },
};
</script>
