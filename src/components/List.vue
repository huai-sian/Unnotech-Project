<template>
  <div class="list shadow-md rounded p-3 bg-white flex
    overflow-scroll flex-nowrap flex-col md:flex-row">
    <div v-for="book in books" :key="book.id" class="
      shadow rounded p-3 bg-white cursor-pointer mx-3 single-card my-3 md:my-0"
      @click="$router.push({ name: 'Detail', params: { id: book.id } });
        beClicked = book.id"
        :class="{ 'active': beClicked === book.id }">
      <Bookcard :book="book"></Bookcard>
    </div>
  </div>
</template>

<script>
import Bookcard from './Bookcard.vue';

export default {
  name: 'List',
  components: {
    Bookcard,
  },
  props: ['books'],
  data() {
    return {
      beClicked: '',
    };
  },
};
</script>

<style>
  .active {
    background-color: #F2FBEF;
  }
  .list {
    flex-wrap: nowrap;
  }
  .list > div {
    min-width: 280px;
  }
</style>
