// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueQrcodeReader from "vue-qrcode-reader";
import App from './App'
import { router } from './router'
import NavBar from '@/components/templates/NavBar'
import Login from '@/components/Login'
import showcars from '@/components/ShowCars'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Profile from '@/components/Profile'
import register from '@/components/Register'
// import chat from '@/components/chat.vue'


Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)
Vue.use(VueQrcodeReader)


Vue.component('NavBar', NavBar);
Vue.component('login', Login);
Vue.component('showcars', showcars);
Vue.component('profile', Profile);
Vue.component('register', register);
// Vue.component('chat', chat);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
