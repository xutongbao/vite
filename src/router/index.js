import { createRouter, createWebHistory, createWebHashHistory } from "vue-router"
import light from './light'
import Store from '../store'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...light],
})

router.beforeEach((to, from, next) => {
  if (to.meta.header) {
    Store.commit({ type: 'setLightState', key: 'header', value: to.meta.header })
  }
  next()
})

export default router
