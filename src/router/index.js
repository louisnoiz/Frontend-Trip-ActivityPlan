// import Vue from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'

// Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/HomePage.vue')
  },
  {
    path: '/addtrip',
    name: 'Add Trip',
    component: () => import('../components/AddTrip.vue')
  },
  {
    path: '/updatetrip',
    name: 'Edit Trip',
    component: () => import('../components/EditTrip.vue')
  },
  {
    path: '/tripdetail',
    name: 'Trip Detail',
    component: () => import('../components/TripDetail.vue')
  }

]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })


export default router
