import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    data: ""
  },
  getters: {
  },
  mutations: {
    fillData(state, fill){
      state.data = fill
    }
  },
  actions: {
    
    async getData({commit}){           
    // await axios.get( ' https://restcountries.com/v3.1/name/Argentina')
     await axios.get( 'https://countriesnow.space/api/v0.1/countries/codes')
      .then(response =>  {const datos = response.data
        commit('fillData', datos)})
        .catch(error => {throw new Error(error)});
           
    }
  },
  modules: {
  }
})
