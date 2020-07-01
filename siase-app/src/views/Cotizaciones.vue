<template>
    <div>
        <h1>Cotizaciones</h1>
        <ordered-table :dataProps="datos" :headersProps="headers"></ordered-table>
    </div>
</template>

<script>
import OrderedTable from "../components/OrderedTable";
export default {
    components: {
        OrderedTable
    },
    computed: {
        
    },
    data() {
        return {
            headers: [
                {text: 'Número de cotización', value: 'id'},
                {text: 'Nombre cliente', value: 'nombre'},
                {text: 'Fecha de cotización', value: 'fecha'},
                {text: 'Valor total', value: 'total'}
            ]
        }
    }
}
</script>