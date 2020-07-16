import axios from 'axios';

export default {
  namespaced: true,

  state: {
    
  },
  getters:{
    getToken(){
      return this.state.token
    }
  },
  mutations: {
    retrieveToken(state,token){
      state.token = token;
    },

    //logout
    destroyToken(state){
      state.token = null;
      state.userPermision = null;
    },
  },
  actions: {
    async retrieveToken(context,credentials){
      
      try{
        console.log(credentials.user,'------',
          credentials.pwd);
          let response = await axios.post("http://localhost:5000/login",{
          usuario: credentials.user, 
          pwd: credentials.pwd });
          //const token = response.data.token
          console.log("Token: ",response) 
          return response; 
             
      }catch(error){
           if (error.response.status == 400) {
              alert("Credenciales incorrectas, intenta de nuevo");
              console.log(error.response);
              return error.response;
             } else if(error.response){
              alert("Problemas internos")
              return error.response;
             } 
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
  }
};

