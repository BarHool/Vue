<template>
  <div id="app">
    <h2>{{welcome}}</h2>
    <a href="#/home">Home</a>
    <a href="#/search">Search</a>
    <a href="#/user">User</a>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="text">文字按钮</el-button>
<!--    展示路由-->
    <router-view/>

  </div>
</template>

<script>

// 相当于网页中的new Vue({
//                  el:XXX,
//                  data{},
//                  methods{},
//                  components{}
//              })

export default {
  // ES6的默认输出，引用文件时返回函数
  // 通过import 【重新指定名称】 from 【文件路径】（免去知道引用函数的引用名）
  // name指模块名

  name: 'App',
  data : function(){
    return{
      welcome: 'hello world!---App'
    }
  },
  components: {
    // 相当于 "comments"(指定引用标签名) : Comments(组件的模板对象)
    // 组件名 ： {template ；'<h1>123</h1>'}

  }
}
</script>

<style>
h2{
  color: coral;
}
</style>
