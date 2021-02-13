<template>
  <v-card color="grey lighten-4" flat height="200px" tile>
    
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
      
        
          <h3>Menu vertical</h3>
          <v-list-item v-for="item in items" :key="item.text" to="/" link>
            <!-- <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <router-link class="md-list-item-router md-list-item-container md-button-clean"
               to="/">
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
              </router-link>
            </v-list-item-content> -->

            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <p>{{ item.text }}</p>
            </v-list-item-content>
          </v-list-item>
        
      
      </v-list>
    </v-navigation-drawer>
    
    <v-app-bar
      app
      clipped-left
      color="blue darken-3"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>
    </v-app-bar>
  </v-card>
</template>

<script>
export default {
  name: "Home2",
  data() {
    return {
      drawer: null,
      items: [
        { icon: "mdi-account-cash", text: "Facturación", ruta: "" },
        { icon: "mdi-account-plus", text: "Clientes", ruta: "/clientes" },
        {
          icon: "mdi-account-hard-hat",
          text: "Usuarios del sistema",
          ruta: "",
        },
        { icon: "mdi-file-chart", text: "Reportes", ruta: "" },
        {
          icon: "mdi-chevron-up",
          "icon-alt": "mdi-chevron-down",
          text: "Labels",
          model: true,
          children: [{ icon: "mdi-plus", text: "Create label" }],
        },
        {
          icon: "mdi-chevron-up",
          "icon-alt": "mdi-chevron-down",
          text: "More",
          model: false,
          children: [{ text: "Import" }, { text: "Export" }],
        },
        { icon: "mdi-cog", text: "Configuración" },
      ],
    };
  },
};
</script>
