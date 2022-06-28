<template>
  <div class="w-1/3 mt-6 mx-auto">
    <button class="bg-gray-200 p-6" @click="showProducts">Show Products</button>
  </div>
</template>

<script>
export default {
  methods: {
    showProducts() {
      this.$router.push({ name: 'products' })
    },
  },
  validate(input) {
    console.log(input);
    return true;
  }
}
</script>
