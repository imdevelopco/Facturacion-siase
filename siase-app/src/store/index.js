import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  clientes: [{
    id: 1111111,
    nombre: "inri jesus",
    telefono: "123456",
    direccion: "calle 123",
    email: "inri@gmail.com"
},
{
    id: 2222222,
    nombre: "henry salazar",
    telefono: "123456",
    direccion: "calle false",
    email: "henry@gmail.com"
}]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
