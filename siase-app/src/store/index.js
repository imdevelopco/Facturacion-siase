import Vue from 'vue'
import Vuex from 'vuex'
import moduleLogin from './modules/login'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routeAPI: 'localhost:5000',
    token: null,
  clientes: [
    {
    id: 1111111,
    nombre: "inri jesus",
    telefono: "555555comprarlo",
    direccion: "calle 123",
    email: "inri@gmail.com"
    },
    {
    id: 2222222,
    nombre: "henry salazar",
    telefono: "000000robaron",
    direccion: "calle false",
    email: "henry@gmail.com"
    }
  ],
  facturas: [
    {
      id: 1,
      nombre: 'don paco',
      fecha: '17-03-20',
      total: '500 lukas'
    },
    {
      id: 2,
      nombre: 'don luis',
      fecha: '18-03-20',
      total: '1 palo'
    }
  ]

  },
  mutations: {
  },
  actions: {
  },
  modules: {
    moduleLogin : moduleLogin,
  }
})
