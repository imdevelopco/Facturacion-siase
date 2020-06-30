<template>
    <div>
        <h1>Clientes</h1>
        <!-- <Tabla align="center"></Tabla> -->
        <ordered-table :dataProps="datos">
        </ordered-table>
        

        
    </div>
</template>

<script>
//import Tabla from '../components/Tabla'
import OrderedTable from "../components/OrderedTable";
export default {
    components: {
       //Tabla
       OrderedTable
    },
    computed: {
        datos() {
            return this.$store.state.clientes
        }
    },
    
}
</script>