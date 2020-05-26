import Vue from "vue";
import comments from "./comments";

new Vue({
  // elements元素标签
  el:"#comments",
  // 映射成标签<XXX>,例：在<div> <comments></comments> /div>
  components:{
    // 详细写法
    // 'comments: comments'

    // 略写
    comments
  },

  // 对应的是vue文件中的template标签
  template: '<comments/>'
})
