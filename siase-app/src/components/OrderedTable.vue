<template>
  <div>
    <v-data-table 
    table-header-color="blue" 
    :headers="headers"
    :items="datos"
    :items-per-page="5"
    class="elevation-5">
      
    </v-data-table>

    
  </div>
</template>

<script>
export default {
    name: "ordered-table",
    props: {
        dataProps: {
            Type: Object
        }
    },
    data() {
        return {
            headers: [
                {text: 'Número de Identificacion', value: 'id'},
                {text: 'Nombre', value: 'nombre'},
                {text: 'Teléfono', value: 'telefono'},
                {text: 'Dirección', value: 'direccion'},
                {text: 'Correo electrónico', value: 'email'}
            ],
            datos: this.dataProps
        }
    }
}
</script>