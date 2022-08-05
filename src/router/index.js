import Vue from 'vue'
import VueRouter from 'vue-router'
import Shows from '../views/Shows.vue'
import Loading from './../Loading.vue'
import TicketCompra from './../components/TicketCompra.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'loading',
    component: Loading
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/shows',
    name:'shows',
    component: () => import('../views/Shows.vue')
  },
  {
    path: '/compras',
    name:'compras',
    component: () => import('../views/Compras.vue')
  },
  {
    path: '/christian',
    name:'christian',
    component: () => import('../views/Christian.vue')
  },
  {
    path: '/comic',
    name:'comic',
    component: () => import('../views/ComicCon.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
