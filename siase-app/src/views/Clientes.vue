<template>
    <div>
        <h1>Clientes</h1>
        
        <ordered-table 
        :dataProps="datos" 
        :headersProps="headers"
        :moduloProps="titulo"
        :editedItemProps="editedItem"
        >
        </ordered-table>

        <create-form></create-form>
        

        
    </div>
</template>

<script>

import OrderedTable from "../components/OrderedTable";
import CreateForm from "../components/CreateForm";
export default {
    components: {       
       OrderedTable,
       CreateForm
    },
    computed: {
        datos() {
            return this.$store.state.clientes
        }
    },
    data() {
        return {
            titulo: 'cliente',
            headers: [
                {text: 'Número de Identificacion', value: 'id'},
                {text: 'Nombre del cliente', value: 'nombre'},
                {text: 'Teléfono', value: 'telefono'},
                {text: 'Dirección', value: 'direccion'},
                {text: 'Correo electrónico', value: 'email'},
                {text: 'Acciones', value: 'acciones', sortable: false}
            ],
            editedItem: {
                id: 0,
                nombre: '',
                telefono: '',
                direccion: '',
                email: ''
            }
        }
    }
    
}
</script>