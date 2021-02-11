import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: []
  },
  getters: {
    getData: state => state.data,
  },
  mutations: {
    changeData: (state, change) => state.data = change
  },
  actions: {
    postBlog: async (_, payload) => await fetch('http://localhost:5000/api/posts', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(payload)}),
    getBlogs: async (context) => {
      const request = await fetch('http://localhost:5000/api/posts', {method: 'GET'})
      const data = await request.json()
      context.commit("changeData", data)
    },
    

  },
  modules: {
  }
})
