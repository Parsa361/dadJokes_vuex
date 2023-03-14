import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const url = 'https://icanhazdadjoke.com/'
const headers = { Accept: 'application/json' }

const store = new Vuex.Store({
  state: {
    currentJoke: '',
    allJokes: [],
  },
  mutations: {
    setCurrentJoke(state, payload) {
      state.currentJoke = payload
      state.allJokes.push(payload)
    }
  },
  actions: {
    async setCurrentJoke(state) {
      const joke = await fetch(url, {headers})
      const j = await joke.json()
      state.commit('setCurrentJoke', j.joke)
    }
  },
  getters: {
    getCurrentJoke(state) {
      return state.currentJoke
    },
    getAllJokes(state) {
      return state.allJokes
    }
  }
})

export default store