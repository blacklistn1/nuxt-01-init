<template>
  <div>
    <h3 class="text-3xl">Route param is: {{ $route.params.id }}</h3>
  </div>
</template>

<script>
export default {

  mounted() {
    console.log(this.$route.query);
  }
}
</script>

<style scoped>

</style>
