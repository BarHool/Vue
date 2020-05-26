<template>
  <div>
    <h3>hello user!</h3>
    <table border="1">
      <tr>
        <td>id</td>
        <td>name</td>
        <td>age</td>
        <td>control</td>
      </tr>
      <tr v-for="(user, id) in users">
        <td>{{user.id}}</td>
        <td>{{user.name}}</td>
        <td>{{user.age}}</td>
        <td>
          <button>delete</button>
          <button>update</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "User",
    data: function () {
      return {
        users: [
          {id: 1, name: 'jack', age: 12},
          {id: 2, name: 'tom', age: 45},
          {id: 3, name: 'white', age: 22},
          {id: 4, name: 'green', age: 14}
        ]
      }
    }
  }
</script>

<style scoped>
table{
  border: solid 1px burlywood;
}
</style>
