import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [], 
    edit: false,
    editId: "",
  },
  getters: {
    getData: state => state.data,
    getEdit: state => state.edit,
    getEditId: state => state.editId,
    getDataById: state => state.data.find(post => post._id === state.editId)
  },
  mutations: {
    changeData: (state, change) => state.data = change,
    changeEdit: (state) => state.edit = !state.edit,
    changeEditId: (state, change) => state.editId = change,
  },
  actions: {
    postBlog: async (_, payload) => await fetch('http://localhost:5000/api/posts', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(payload)}),
    getBlogs: async (context) => {
      const request = await fetch('http://localhost:5000/api/posts', {method: 'GET'})
      const data = await request.json()
      context.commit("changeData", data)
    },
    patchBlog: async (_, payload) => {
      console.log(payload.id) 
      await fetch('http://localhost:5000/api/posts/' + payload.id, { method: 'PATCH', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(payload)})
    },
    deleteBlog: async (_, payload) => await fetch('http://localhost:5000/api/posts/' + payload , {method: 'DELETE'}),
    editMode: (context, payload) => {
      context.commit('changeEdit') 
      context.commit('changeEditId', payload)
    }
  },
  modules: {
  }
})
