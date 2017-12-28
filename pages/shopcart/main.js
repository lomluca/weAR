import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import Vuetify from 'vuetify'
import '../../node_modules/vuetify/dist/vuetify.min.css'
 
Vue.use(ElementUI)
Vue.use(Vuetify)

new Vue({
  el: '#app',
  render: h => h(App)
})
