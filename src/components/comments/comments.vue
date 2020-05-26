<template>
  <Add/>
  <List/>
</template>

<script>
  import Add from "./components/comments/Add.vue"
  import List from "./components/comments/List.vue"

  export default {
    name: "comments",
    components: {
      Add,
      List
    }
  }
</script>

<style scoped>
  button {
    display: inline-block;
    width: 80px;
    height: 40px;
    margin: 10px 20px;
    border: solid 1px deeppink;
    border-radius: 20px;
    background: mediumpurple;
    color: white;
  }
  #comments {
    width: 80%;
    border: solid 1px darkslateblue;
    border-radius: 20px;
  }
  #comments div {
    width: 40%;
    display: inline-block;
    border: solid 1px darkslateblue;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 20px;
    margin: 0 20px;
  }
  #comments div li {
    margin: 20px;
  }
  #comments div input {
    height: 40px;
    border-radius: 20px;
    outline: none;
    padding: 0 10px;
  }
</style>
