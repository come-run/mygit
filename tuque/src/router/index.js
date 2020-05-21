import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Admin from '@/pages/Admin'
import Car from '@/pages/Car'
import Products from '@/pages/Create'
import Edit from '@/pages/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      children:[
        {
          path: '',
          name: 'Products',
          component: Products
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          component: Edit
        }
      ]
    },
    {
      path: '/car',
      name: 'Car',
      component: Car
    }
  ]
})
