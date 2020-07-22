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
          <v-img>
           <v-icon>mdi-account-circle</v-icon>
          </v-img>
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

export default {
  props: {
    source: String
  },
  components: {
    Content

  },
  data: () => ({
    drawer: null,
    items: [
      {icon: "mdi-point-of-sale", text: "Cotizaciones", ruta: '/app/cotizaciones'},
      { icon: "mdi-account-cash", text: "Facturación", ruta:'/app/facturacion'},
      { icon: "mdi-account-plus", text: "Clientes", ruta: '/app/clientes'},
      { icon: "mdi-account-hard-hat", text: "Usuarios del sistema", ruta: '/app/usuarios'},
      { icon: "mdi-file-chart", text: "Reportes", ruta:'/app/reportes'},
      { icon: "mdi-cog", text: "Configuración", ruta:'/app/configuracion'}
    ]
  })
};
</script>