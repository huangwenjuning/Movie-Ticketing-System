import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('@/pages/index'),
      redirect: '/reader',
      children: [{
        path: '/reader',
        name: 'Reader',
        component: () => import('@/pages/reader/Reader')
      },
      {
        path: '/classification',
        name: 'ClassiFication',
        component: () => import('@/pages/classification/ClassiFication')
      },
      {
        path: '/bookdesk',
        name: 'BookDesk',
        component: () => import('@/pages/bookdesk/BookDesk')
      },
      {
        path: '/mine',
        name: 'Mine',
        component: () => import('@/pages/mine/Mine')
      }]
    }
  ],
  mode: 'history'
})
