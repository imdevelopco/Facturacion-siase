<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.text"
          :to="item.ruta"
          link
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
        
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-3" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="width: 300px; font-size: 15px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">
          <h3>Soluciones Integrales a su empresa</h3>          
        </span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn icon to="/home">
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-btn icon large to="/">
        <v-avatar size="32px" item>
          <v-img
            src="https://scontent.fclo7-1.fna.fbcdn.net/v/t1.0-9/60507954_2456550921062661_7539917462968467456_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=hP-bIti86rcAX_z4KJw&_nc_ht=scontent.fclo7-1.fna&oh=2aa6cb9c2705d83e651c58abe3d6e8e0&oe=5F161728"
            alt="Admin"
          ></v-img>
        </v-avatar>
      </v-btn>
    </v-app-bar>
    <!---------------------------CONTENIDO CENTRAL--------------------------------------->
    <v-main>
      <v-container>
        <v-row align="center" justify="center">
          <v-col class="text-center">
            
              <template>
                <Content></Content>
              </template>
              
            
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Content from './Content'
//import CreateForm from './CreateForm'
export default {
  props: {
    source: String
  },
  components: {
    Content
    //CreateForm
  },
  data: () => ({
    //dialog: false,
    drawer: null,
    items: [
      { icon: "mdi-account-cash", text: "Facturación", ruta:'/app/facturacion'},
      { icon: "mdi-account-plus", text: "Clientes", ruta: '/app/clientes'},
      { icon: "mdi-account-hard-hat", text: "Usuarios del sistema", ruta: '/app/usuarios'},
      { icon: "mdi-file-chart", text: "Reportes", ruta:'/app/reportes'},
      // {
      //   icon: "mdi-chevron-up",
      //   "icon-alt": "mdi-chevron-down",
      //   text: "Labels",
      //   model: true,
      //   children: [{ icon: "mdi-plus", text: "Create label" }]
      // },
      // {
      //   icon: "mdi-chevron-up",
      //   "icon-alt": "mdi-chevron-down",
      //   text: "More",
      //   model: false,
      //   children: [{ text: "Import" }, { text: "Export" }]
      // },
      { icon: "mdi-cog", text: "Configuración", ruta:'/app/configuracion'}
    ]
  })
};
</script>