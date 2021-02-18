import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import App from './App.vue'
import store from './store'

//#region Buefy 
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Buefy)
//#endregion

//#region Axios
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
//#endregion

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
