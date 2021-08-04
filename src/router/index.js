import Vue from 'vue'
import VueRouter from 'vue-router'
import Basics from '../views/Basics.vue'
import Collateral from '../views/Collateral.vue'
import Charge from '../views/Charge.vue'
import PoolConstruction from '../views/PoolConstruction.vue'
import review from '../views/review.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Basics',
    component: Basics
  },
  {
    path: '/Collateral',
    name: 'Collateral',
    component: Collateral
  },
  {
    path: '/Charge',
    name: 'Charge',
    component: Charge
  },
  {
    path: '/PoolConstruction',
    name: 'PoolConstruction',
    component: PoolConstruction
  },
  {
    path: '/review',
    name: 'review',
    component: review
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
