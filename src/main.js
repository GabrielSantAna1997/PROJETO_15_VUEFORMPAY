import Vue from 'vue'
import App from './App.vue'
import store from './store'
import i18n from './i18n';
import 'bootstrap/dist/css/bootstrap.css'

import 'bootstrap-icons/font/bootstrap-icons.css'; 


Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  i18n,
  store, 
}).$mount('#app')
