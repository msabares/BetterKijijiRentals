import Vue from 'vue'
import App from './App.vue'
import store from './store'

//#region Buefy 
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Buefy)
//#endregion

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
