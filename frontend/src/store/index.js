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
    },
    SET_LISTING_SHOWGALLERY(state, {index, show}) {
      state.listings[index].showGallery = show
    }
  },
  actions: {
    async getListings({commit}, data) {
      return axios.post('http://localhost:3000/api/listings', data).then(response => {
        const result = response.data.map((listing) => ({...listing, showGallery: false}))
        console.log(result)
        commit('SET_LISTINGS', result)
      })
    },

    showGallery({commit}, data) {
      commit('SET_LISTING_SHOWGALLERY', data)
    }
  },
  modules: {
  },
  getters: {
    getListings: state => state.listings
  }
})
