import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/Homepage.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import BookPage from '../components/BookPage.vue'
import Category from '../components/Category.vue'

const routes = [
  {
    path:'/Category',
    name: Category,
    component: Category
  },
  {
    path:'/BookPage',
    name:'BookPage',
    component: BookPage
  },
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/About',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
