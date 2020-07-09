<template>
    <div>
        <h1>Facturación</h1>
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
            return this.$store.state.facturas
        }
    },
    data() {
        return {
            titulo: 'factura',
            headers: [
                {text: 'Número de factura', value: 'id'},
                {text: 'Nombre Cliente', value: 'nombre'},
                {text: 'Fecha factura', value: 'fecha'},
                {text: 'Valor total', value: 'total'},
                {text: 'Acciones', value: 'acciones'}
            ],
            editedItem: {
                id: 0,
                nombre: '',
                fecha: '',
                total: ''
            }
        }
    }
}
</script>