<template>

    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field v-model="editedItem.id" label="Número de identificación"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field v-model="editedItem.nombre" label="Nombre"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field v-model="editedItem.telefono" label="Teléfono"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field v-model="editedItem.direccion" label="Dirección"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field v-model="editedItem.email" label="Correo electrónico"></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  
</template>

<script>
  export default {
    name: 'create-form',
    props: {
      
    },
  }
</script>