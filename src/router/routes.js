const routes = [
  {
    path: '/',
    redirect: '/layout'
  },
  {
    name: 'layout',
    path: '/layout',
    redirect: '/home',
    component: () => import(/* webpackChunkName:"layout" */ 'views/Layout.vue'),
    children: [
      {
        name: 'home',
        path: '/home',
        component: () => import(/* webpackChunkName:"home" */ 'views/home/index'),
        meta: {
          title: '首页'
        }
      },
      {
        name: '404',
        path: '/404',
        component: () => import(/* webpackChunkName:"404" */ 'views/404.vue'),
        meta: {
          title: '提示'
        }
      }
    ]
  },
  {
    path: '*',
    redirect: '/404'
  }
]

export default routes
