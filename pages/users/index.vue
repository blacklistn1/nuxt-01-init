<template>
  <div>
    <h1 class="text-5xl font-bold">User page: {{ msg }}</h1>
    <input type="text" v-model="id" class="border border-gray-300 text-lg p-2">
    <button @click="loadUser" class="p-3 bg-gray-300">Load user</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello',
      id: '',
    }
  },
  methods: {
    loadUser() {
      this.$router.push('/users/' + this.id)
    }
  }
}
</script>

<style scoped lang="postcss">

</style>
