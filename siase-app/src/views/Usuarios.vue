<template>
    <div>
        <h1>Tabla de Usuarios</h1>
        <ordered-table 
        :dataProps="datos" 
        :headersProps="headers"
        :moduloProps="titulo"
        :editedItemProps="editedItem"
        >
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
            titulo: 'Usuario',
            headers: [
                {text: 'Númer de identificación', value: 'id'},
                {text: 'Nombre', value: 'nombre'},
                {text: 'Correo electronico', value: 'email'},
                {text: 'Acciones', value: 'acciones'}
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