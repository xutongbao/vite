export default [
  {
    path: '/',
    redirect: '/light/login'
  },
  {
    path: "/light/login",
    component: () => import("../views/light/login/Login.vue"),
  },
  {
    path: '/light/index',
    component: () => import('../views/light/index/Index.vue'),
    children: [
      {
        path: '/light/index/home',
        component: () => import('../views/light/index/home/Home.vue')
      }
    ]
  }
]