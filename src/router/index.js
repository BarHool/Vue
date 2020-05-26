import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home";
import Search from "../components/Search";
import User from "../components/User";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      // 使根重定向到home
      redirect: '/home'
    },
    {
      path: '/home',
      // 路由名称
      name: 'Home',
      component: Home
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
