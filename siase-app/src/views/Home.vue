<template>
  <div>

    <h1>Home</h1>

    <router-link to="/app/facturacion">Facturacion</router-link> | 
    <router-link to="/app/clientes">Clientes</router-link>
    <br>
    <router-link to="/app/usuarios">Usuarios</router-link> |
    <router-link to="/app/reportes">Reportes</router-link>

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