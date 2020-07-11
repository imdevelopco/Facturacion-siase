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
    async retrieveToken(context, credentials){
      try{
          let response = await axios.post(this.state.routeAPI + "/login",{
          username: credentials.username, 
          password: credentials.password });
          const token = response.data.token
          console.log("[Debug] la respuesta del login:", response.data.user)
          context.commit('setUserPermission',response.data.user.is_superuser,response.data.user.is_staff)
          localStorage.setItem('token',token)
          localStorage.setItem('user',response.data.user.is_superuser)
          localStorage.setItem('canAdd',response.data.user.is_staff)
          localStorage.setItem('name',response.data.user.first_name)
      }catch(error){
        /* if (error.response.status == 400) {
          alert("Credenciales incorrectas, intenta de nuevo");
          console.log(error.response);
         } else if(error.response){
          alert("Problemas internos")
         } */
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