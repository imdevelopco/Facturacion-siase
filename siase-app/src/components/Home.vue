<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-row
            v-if="item.heading"
            :key="item.heading"
            align="center"
          >
            <v-col cols="6">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
            <v-col
              cols="6"
              class="text-center"
            >
              <a
                href="#!"
                class="body-2 black--text"
              >EDIT</a>
            </v-col>
          </v-row>
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              link
            >
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item
            v-else
            :key="item.text"
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
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title
        style="width: 300px; font-size: 15px"
        class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down">Soluciones Integrales a su empresa</span>
      </v-toolbar-title>
      
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-btn
        icon
        large
      >
        <v-avatar
          size="32px"
          item
        >
          <v-img
            src="https://scontent.fclo7-1.fna.fbcdn.net/v/t1.0-9/60507954_2456550921062661_7539917462968467456_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=hP-bIti86rcAX_z4KJw&_nc_ht=scontent.fclo7-1.fna&oh=2aa6cb9c2705d83e651c58abe3d6e8e0&oe=5F161728"
            alt="Admin"
          ></v-img></v-avatar>
      </v-btn>
    </v-app-bar>
    
    <v-btn
      bottom
      color="pink"
      dark
      fab
      fixed
      right
      @click="dialog = !dialog"
    >
      <v-icon>mdi-plus</v-icon>
      
    </v-btn>
    <v-dialog
      v-model="dialog"
      width="800px"
    >
    <CreateForm> </CreateForm>
    </v-dialog>
  </v-app>
</template>

<script>
import CreateForm from './CreateForm'
  export default {
    props: {
      source: String,
    },
    components: {
        CreateForm
    },
    data: () => ({
      dialog: false,
      drawer: null,
      items: [
        { icon: 'mdi-account-cash', text: 'Facturación' },
        { icon: 'mdi-account-plus', text: 'Clientes' },
        { icon: 'mdi-badge-account-horizontal', text: 'Usuarios del sistema' },
        { icon: 'mdi-file-chart', text: 'Reportes' },
        { icon: 'mdi-ballot', text: 'Cotizaciones' },
        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          text: 'Labels',
          model: true,
          children: [
            { icon: 'mdi-plus', text: 'Create label' },
          ],
        },
        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          text: 'More',
          model: false,
          children: [
            { text: 'Import' },
            { text: 'Export' }
          ],
        },
        { icon: 'mdi-cog', text: 'Configuración' },
      ],
    }),
  }
</script>