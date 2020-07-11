import axios from 'axios';

const moduleLogin = {
  state: {

  },
  mutations: {
    retrieveToken(state,token){
      state.token = token;
    },
    setZoomMap(state, zoom){
      state.googleMapSetting.zoom = zoom;
    },
    //logout
    destroyToken(state){
      state.token = null;
      state.userPermision = null;
    },
  },
  actions: {
    async retrieveToken(context, url,credentials){
      try{
          let response = await axios.post(this.state.routeAPI + "/login",{
          user: credentials.user, 
          pwd: credentials.pwd });
          //const token = response.data.token
          console.log("[Debug] la respuesta del login:", response.data)      
      }catch(error){
         if (error.response.status == 400) {
          alert("Credenciales incorrectas, intenta de nuevo");
          console.log(error.response);
         } else if(error.response){
          alert("Problemas internos")
         } 
         console.log(error);
         
      }
    },

    destroyToken(context){
      if(context.getters.loggedIn){
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.removeItem('canAdd')
        localStorage.removeItem('name')
        context.commit('destroyToken') 
      }
    } 
  },
};

export default moduleLogin;