<template>
    <div>
        <h1>Tabla de Usuarios</h1>
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
                {text: 'Númer de identificación', value: 'id'},
                {text: 'Nombre', value: 'nombre'},
                {text: 'Correo electronico', value: 'email'},
                {text: '', value: ''}
            ]
        }
    }
}
</script>