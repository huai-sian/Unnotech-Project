<template>
  <div class="detail p-10 shadow rounded bg-white mt-5 flex justify-between">
    <div class="flex flex-col">
      <div class="flex mb-6">
        <p class="text-lg mr-6">價格</p>
        <div>
          <button type="button" data-quantity="minus" data-field="quantity"
            @click.prevent="changenum('price', -1)" class="px-3 mx-3 bg-red-500">
            <i class="fa fa-minus" aria-hidden="true"></i>
          </button>
          <input type="number" v-model="price" min='1' @change="changeAmount('price', price)"
            class="w-20 border-solid border-4 border-light-blue-500">
          <button type="button" data-quantity="minus" data-field="quantity"
            @click.prevent="changenum('price', +1)" class="px-3 mx-3 bg-red-500">
            <i class="fa fa-plus" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div class="flex">
        <p class="text-lg mr-6">數量</p>
        <div>
          <button type="button" data-quantity="minus" data-field="quantity"
            @click.prevent="changenum('count', -1)" class="px-3 mx-3 bg-red-500">
            <i class="fa fa-minus white" aria-hidden="true"></i>
          </button>
          <input type="number" v-model="count" min='1' @change="changeAmount('count', count)"
            class="w-20 border-solid border-4 border-light-blue-500">
          <button type="button" data-quantity="minus" data-field="quantity"
            @click.prevent="changenum('count', +1)" class="px-3 mx-3 bg-red-500">
            <i class="fa fa-plus" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="self-end">
      <button type="button" @click.prevent.once="submit(id)" class="bg-red-500 p-3 rounded text-lg"
      >確認修改</button>
    </div>
  </div>
</template>

<script>

const headers = {
  accept: 'application/json',
  'Content-Type': 'application/json',
};

export default {
  name: 'Detail',
  data() {
    return {
      id: '',
      bookData: '',
      count: '',
      price: '',
    };
  },
  methods: {
    getSinglebook(id) {
      const vm = this;
      const api = `https://fe-interview-api.unnotech.com/profile/${id}`;
      vm.$http.get(api, { headers }).then((res) => {
        vm.bookData = res.data;
        vm.count = vm.bookData.count;
        vm.price = vm.bookData.price;
      });
    },
    changenum(cat, num) {
      this[cat] += num;
      if (this[cat] <= 1) {
        this[cat] = 1;
      }
    },
    changeAmount(cat, num) {
      if (num <= 1) {
        this[cat] = 1;
      } else {
        this[cat] = num;
      }
    },
    submit(id) {
      const vm = this;
      const api = `https://fe-interview-api.unnotech.com/profile/${id}`;
      vm.$http.patch(api, { price: vm.price, count: vm.count }, { headers }).then((res) => {
        console.log(res);
      });
    },
  },
  created() {
    this.id = this.$route.params.id;
    this.getSinglebook(this.id);
  },
};
</script>

<style>
  .detail i {
    color: white;
  }
  .detail button {
    color: white;
  }
</style>
