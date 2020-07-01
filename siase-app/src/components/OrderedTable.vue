<template>
  <div>

    <v-data-table 
    :headers="headers"
    :items="datos"
    :search="search"
    :items-per-page="5"
    class="elevation-5">

    <template v-slot:top>
      <v-toolbar flat color="white">
        
        

        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >Nuevo {{ nuevo }}</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.id" label="Número de identificación"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.nombre" label="Nombre"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.telefono" label="Teléfono"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.direccion" label="Dirección"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.email" label="Correo electrónico"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancelar</v-btn>
              <v-btn color="blue darken-1" text @click="save">Guardar</v-btn>
            </v-card-actions>

          </v-card>
        </v-dialog>
        <!-- ---------------->
        <v-spacer></v-spacer>

        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Buscar"
            single-line
            hide-details
        ></v-text-field>
        
      </v-toolbar>
    </template>

    <template v-slot:item.acciones="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <!--
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
    -->


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
        headersProps: [],
        agregarProps: {
            Type: String
        }
    },
    data() {
        return {
            nuevo: this.agregarProps,
            dialog: false,
            search: '',
            headers: this.headersProps,
            datos: this.dataProps,
            editedIndex: -1,
            editedItem: {
                id: 0,
                nombre: '',
                telefono: '',
                direccion: '',
                email: ''
            },
            defaultItem: {
                id: 0,
                nombre: '',
                telefono: '',
                direccion: '',
                email: '',
            },
        }
    },
    computed: {
        formTitle () {
        return this.editedIndex === -1 ? 'Nuevo ' + this.nuevo : 'Editar'
      },
    },
    watch: {
      dialog (val) {
        val || this.close()
      },
    },
    //created () {
    //  this.initialize()
    //},
    methods: {
      //initialize () {
      //  this.datos = [
          
      //  ]
      //},
      editItem (item) {
        this.editedIndex = this.datos.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.datos.indexOf(item)
        confirm('Seguro que desea eliminar este elemento?') && this.datos.splice(index, 1)
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.datos[this.editedIndex], this.editedItem)
        } else {
          this.datos.push(this.editedItem)
        }
        this.close()
      },
    },
}
</script>