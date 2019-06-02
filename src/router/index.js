import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import showcars from '@/components/ShowCars'
import register from '@/components/Register'
<<<<<<< HEAD
import profile from '../components/Profile'
import factor2 from '@/components/twofactorpage.vue'
import chat from '@/components/chat.vue'
=======
import profile from '@/components/Profile'
import addCars from '@/components/AddCars'
>>>>>>> 92b6ee50049abd1fc09e1c87c2c405edf15f2cb3

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Login },
    { path: '/login', component: Login },
    { path: '/showcars', component: showcars},
    { path: '/register', component: register},
    { path: '/profile', component: profile},
<<<<<<< HEAD
    { path: '/2factor', component: factor2 },
    { path: '/chat', component: chat },
=======
    { path: '/addcars', component: addCars},
>>>>>>> 92b6ee50049abd1fc09e1c87c2c405edf15f2cb3

    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
})
router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('token');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
})

