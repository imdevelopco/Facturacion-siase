import axios from 'axios';
//import VueJwtDecode from 'vue-jwt-decode';


export default {
  namespaced: true,

  getters: {
    getRoute(state, getters, rootState) {
      return rootState.routeAPI
    }
  },
  mutations: {

    //logout
    destroyToken(state, getters, rootState) {
      rootState.token = null;
    },
  },
  actions: {
    async retrieveToken(context, credentials) {

      try {
        let response = await axios.post(this.getters.getRoute + "/login", {
          usuario: credentials.user,
          pwd: credentials.pwd
        });
        const token = response.data
        sessionStorage.setItem('token', token);
        return response;

      } catch (error) {
        if (error.response.status == 400) {
          alert("Credenciales incorrectas, intenta de nuevo");
          return error.response;
        } else if (error.response) {
          alert("Problemas internos")
          return error.response;
        }
      }
    },

    destroyToken(context) {
      if (context.getters.loggedIn) {
        localStorage.removeItem('token')
        context.commit('destroyToken')
      }
    }
  }
};

