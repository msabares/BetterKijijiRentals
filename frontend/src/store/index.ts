import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listings: []
  },
  mutations: {
    SET_LISTINGS(state, data) {
      state.listings = data
    }
  },
  actions: {
    async getListings({commit}, data) {
      return axios.post('http://localhost:3000/api/listings', data).then(response => {
        //commit('SET_LISTINGD', response.data)
        console.log(response.data)
      })
    }
  },
  modules: {
  }
})
