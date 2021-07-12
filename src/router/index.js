import Vue from 'vue'
import Router from 'vue-router'

const originalPush = Router.prototype.push
  Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

import routes from './routes'

Vue.use(Router)

const router = new Router({
  routes,
  // mode:"history"
})

router.beforeEach((to, from, next) => {
  // 控制title
  if(to.meta.name){
    document.title = to.meta.name;
  }
  // 路由权限
  let auth = false
  to.matched.forEach(({meta}) => {
    if (typeof meta.auth === 'boolean') {
      auth = meta.auth
    }
  })
  // if (auth && !localStorage['token']) {
  //   return next({name: 'start'})
  // }
  return next()
})

export default router