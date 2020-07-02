<template>
    <div>
        <h1>Cotizaciones</h1>
        <ordered-table 
        :dataProps="datos" 
        :headersProps="headers"
        :moduloProps="titulo"
        :editedItemProps="editItem"
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
            titulo: 'Cotización',
            headers: [
                {text: 'Número de cotización', value: 'id'},
                {text: 'Nombre cliente', value: 'nombre'},
                {text: 'Fecha de cotización', value: 'fecha'},
                {text: 'Valor total', value: 'total'},
                {text: 'Acciones', value: 'acciones', sortable: false}
            ],
            editItem: {
                id: 0,
                nombre: '',
                fecha: '',
                total: ''
            }
        }
    }
}
</script>