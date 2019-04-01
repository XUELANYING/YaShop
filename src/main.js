import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/store'
import Observer from './Observer';

Vue.config.productionTip = false
Vue.prototype.Observer = Observer;

new Vue({
  router,
    store,
  render: h => h(App)
}).$mount('#app')
