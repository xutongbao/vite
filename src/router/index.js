import { createRouter, createWebHistory, createWebHashHistory } from "vue-router"
import light from './light'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...light],
})

export default router
