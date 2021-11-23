import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes.js'

Vue.use(Router)

const router = new Router({
  linkActiveClass: 'active',
  linkExactActiveClass: 'current',
  routes
})

router.beforeEach((to, form, next) => {
  const { meta = {} } = to
  const { title = '' } = meta
  const TITLE = title ? `${title}|我的个人github网站` : '我的个人github网站'
  document.title = TITLE
  next()
})
export default router
