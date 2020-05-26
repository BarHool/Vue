<template>
  <div>
  <h1>hello home!</h1>
  <Footer></Footer>
  </div>
</template>

<script>
  import Footer from "./Footer"; // 引入组件
    export default {
        name: "Home",
      components:{
          // 详细写法 'footer' : Footer
          Footer
      }

    }
</script>

<style scoped>

</style>
