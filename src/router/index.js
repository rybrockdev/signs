import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Signage from '../views/Signage.vue'
import Workwear from '../views/Workwear.vue'
import PDP from '../views/PDP.vue'





const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/signage',
    name: 'Signage',
    component: Signage
  },
  {
    path: '/workwear',
    name: 'Workwear',
    component: Workwear
  },
  {
    path: '/product-image',
    name: 'PDP',
    component: PDP
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
