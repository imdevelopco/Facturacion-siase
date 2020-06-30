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
        },
        headersProps: []
    },
    data() {
        return {
            headers: this.headersProps,
            datos: this.dataProps
        }
    }
}
</script>