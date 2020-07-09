<template>
  <div>  
   <v-app id="inspire">
<!--empieza el cambio-->
     <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-3" dark>
      <v-toolbar-title style="width: 300px; font-size: 15px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">
          <h3>Soluciones Integrales a su empresa</h3>          
        </span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      
      <v-btn icon large to="/">
        <v-avatar size="32px" item>
          <v-img
            src="https://scontent.fclo7-1.fna.fbcdn.net/v/t1.0-9/60507954_2456550921062661_7539917462968467456_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=hP-bIti86rcAX_z4KJw&_nc_ht=scontent.fclo7-1.fna&oh=2aa6cb9c2705d83e651c58abe3d6e8e0&oe=5F161728"
            alt="Admin"
          ></v-img>
        </v-avatar>
      </v-btn>
    </v-app-bar>
<!--empieza el cambio-->
    <v-main>
      <v-container fluid class="fill-height" style="width: 500px;">
        <div align="center">
          <v-row justify="center">
            <v-col cols="12" sm="6"  dark>

              <v-btn x-large color="primary" dark style="width: 210px;" to="app/cotizaciones">                
                <v-icon>mdi-point-of-sale</v-icon>
                <v-spacer></v-spacer>
                <span>Cotizaciones</span> 
                <v-spacer></v-spacer>              
              </v-btn>

            </v-col>
            <v-col cols="12" sm="6">

              <v-btn x-large color="primary" dark style="width: 210px;" to="/app/clientes">
                <v-icon>mdi-account-supervisor</v-icon>
                <v-spacer></v-spacer>
                <span>Clientes</span>
                <v-spacer></v-spacer>                            
              </v-btn>

            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" sm="6">
              
                <v-btn x-large color="primary" dark style="width: 210px;" to="/app/facturacion">
                  <v-icon>mdi-cash</v-icon>
                  <v-spacer></v-spacer>
                  <span>Facturación</span> 
                  <v-spacer></v-spacer>                                              
                </v-btn>
              
            </v-col>
            <v-col cols="12" sm="6">
              
                <v-btn x-large color="primary" dark style="width: 210px;" to="/app/usuarios">
                  <v-icon>mdi-account</v-icon>
                  <v-spacer></v-spacer>
                  <span>Usuarios</span>
                  <v-spacer></v-spacer>                                   
                </v-btn>
              
            </v-col>
          </v-row>
          <v-row justify="center">
              <v-col>

                <v-btn color="primary" x-large dark style="width: 210px;" to="/app/reportes">
                  <v-icon>mdi-poll-box</v-icon>
                  <v-spacer></v-spacer>
                  <span>Reportes</span>
                  <v-spacer></v-spacer>                
                </v-btn>

              </v-col>
          </v-row>
        </div>
      </v-container>
    </v-main>


    </v-app>


  </div>
</template>
<script>
//import CreateForm from "../components/CreateForm";
export default {
  components: {
    //CreateForm
  },
  data() {
    return {
      dialog: false

    }
  }
}
</script>