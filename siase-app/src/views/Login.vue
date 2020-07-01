<template>
  <v-app id="inspire">
    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="5"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Soluciones Integrales a su empresa</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-avatar size="32px" item>
                  <v-img
                    src="https://scontent.fclo7-1.fna.fbcdn.net/v/t1.0-9/60507954_2456550921062661_7539917462968467456_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=hP-bIti86rcAX_z4KJw&_nc_ht=scontent.fclo7-1.fna&oh=2aa6cb9c2705d83e651c58abe3d6e8e0&oe=5F161728"
                    alt="Admin"
                  ></v-img>
                </v-avatar>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Usuario"
                    name="usuario"
                    prepend-icon="mdi-account"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Contraseña"
                    name="Contraseña"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" to="/home">Ingresar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    props: {
      
    },
  }
</script>