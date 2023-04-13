// import Vue from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'

// Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/HomePage.vue') // set home as path '/'
  },
  {
    path: '/addtrip',
    name: 'Add Trip',
    component: () => import('../components/AddTrip.vue') // set home as path '/'
  },
  {
    path: '/updatetrip',
    name: 'Edit Trip',
    component: () => import('../components/EditTrip.vue') // set home as path '/'
  }

]


const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })


export default router
