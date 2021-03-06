<template>
  <div class="card flex flex-col items-center">
    <img :src="book.image" :alt="book.name" class="w-40 p-4">
    <h3>{{ book.name }}</h3>
  </div>
</template>

<script>
export default {
  name: 'Bookcard',
  props: ['book'],
};
</script>
