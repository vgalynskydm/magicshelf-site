import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Catalog from '@/components/catalog/Index'
import Detail from '@/components/catalog/Detail'
import Basket from '@/components/Basket'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: Catalog
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/basket',
      name: 'basket',
      component: Basket
    }
  ]
})
