<template>
    <div>
        <h1>Clientes</h1>
        
        <ordered-table :dataProps="datos" :headersProps="headers">
        </ordered-table>
        

        
    </div>
</template>

<script>

import OrderedTable from "../components/OrderedTable";
export default {
    components: {
       
       OrderedTable
    },
    computed: {
        datos() {
            return this.$store.state.clientes
        }
    },
    data() {
        return {
            headers: [
                {text: 'Número de Identificacion', value: 'id'},
                {text: 'Nombre del cliente', value: 'nombre'},
                {text: 'Teléfono', value: 'telefono'},
                {text: 'Dirección', value: 'direccion'},
                {text: 'Correo electrónico', value: 'email'},
                {text: 'Acciones', value: 'acciones', sortable: false}
            ]
        }
    }
    
}
</script>