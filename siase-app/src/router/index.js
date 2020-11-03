import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '../store/index'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let requiresAuth = to.matched.some(record => record.meta.userLoged),   
      requiresVisitor = to.matched.some(record =>record.meta.requiresVisitor)

  if(requiresAuth){
      if(!store.getters.loggedIn){
          next({
              name: 'Login'
          });
      }else{
          next();
      }
  }else if(requiresVisitor){
      if(store.getters.loggedIn){
          next('/home');
      }else{
          next();
      }
  }else{
      next();
  }
})


export default router