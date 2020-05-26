<template>
  <div>{{date}}</div>

</template>

<script>
  export default {
    name: "Footer",
    data: function () {
      return {
        date: new Date(),
      }
    }
  }
</script>

<style scoped>

</style>
