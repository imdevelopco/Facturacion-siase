<template>
  <div>  
   <v-app id="inspire">

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

    <v-main>
      <v-container fluid style="width: 500px;">
        <v-row align="end" style="height: 250px">
          <v-col cols="12" sm="6">
            <div class="text-center">
              <div class="my-2">
                <v-btn x-large color="primary" style="width: 200px" dark to="/app/cotizaciones">
                  <v-row>
                    <v-col>
                      <v-icon>mdi-point-of-sale</v-icon>
                    </v-col>
                    <v-col>
                      Cotizaciones
                    </v-col>
                  </v-row>                
                </v-btn>
              </div>            
              <div class="my-2">
                <v-btn x-large color="primary" style="width: 200px" dark to="/app/facturacion">
                <v-row>
                    <v-col>
                      <v-icon>mdi-cash</v-icon>
                    </v-col>
                    <v-col>
                      Facturación
                    </v-col>
                  </v-row>               
                </v-btn>
              </div>
            </div>
          </v-col>
          <v-col cols="12" sm="6">
            <div class="text-center">
              <div class="my-2">
                <v-btn x-large color="primary" style="width: 200px" dark to="/app/clientes">
                  <v-row>
                    <v-col>
                      <v-icon>mdi-account-supervisor</v-icon>
                    </v-col>
                    <v-col>
                      Clientes
                    </v-col>
                  </v-row>
                </v-btn>
              </div>
              <div class="my-2">
                <v-btn color="primary" style="width: 200px" x-large dark to="/app/usuarios">
                <v-row>
                  <v-col>
                  <v-icon>mdi-account</v-icon>
                  </v-col>
                  <v-col>
                    Usuarios
                  </v-col>
                </v-row>
                </v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row justify="center">
            <div class="text-center">
              <div class="my-2">
                <v-btn color="primary" x-large dark to="/app/reportes">
                  <v-row>
                    <v-col>
                    <v-icon>mdi-poll-box</v-icon>
                    </v-col>
                    <v-col>
                      Reportes
                    </v-col>
                  </v-row>
                </v-btn>
              </div>
            </div>
        </v-row>
      </v-container>
    </v-main>


    </v-app>
    


    <v-btn bottom color="pink" dark fab fixed right @click="dialog = !dialog">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" width="800px">
      <CreateForm></CreateForm>
    </v-dialog>
  </div>
</template>
<script>
import CreateForm from "../components/CreateForm";
export default {
  components: {
    CreateForm
  },
  data() {
    return {
      dialog: false

    }
  }
}
</script>