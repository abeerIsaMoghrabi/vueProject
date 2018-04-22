

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import wis from '@/components/wis'
import desItem from '@/components/dest/desItem'





Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
     {
      path: '/wis',
      name: 'wis',
      component: wis
    },
    {
      path: '/desItem',
      name: 'desItem',
      component: desItem
    }
  ]
})
