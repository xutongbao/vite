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
        component: () => import('../views/light/index/home/Home.vue'),
        meta: {
          header: '小米书城'
        }
      },
      {
        path: '/light/index/my_books',
        component: () => import('../views/light/index/myBooks/myBooks.vue'),
        meta: {
          header: '书包'
        }        
      },
      {
        path: '/light/index/me',
        component: () => import('../views/light/index/me/Me.vue'),
        meta: {
          header: '个人中心'
        }        
      },            
    ]
  }
]