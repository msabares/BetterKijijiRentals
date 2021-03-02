import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//#region dayjs
import VueDayjs from 'vue-dayjs-plugin'
Vue.use(VueDayjs)
//#endregion

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
  router,
  store,
  render: h => h(App)
}).$mount('#app')
