<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height background" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="5">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Soluciones Integrales a su empresa</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-avatar size="32px" item>
                  <v-img :src="logo"></v-img>
                </v-avatar>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Usuario"
                    name="usuario"
                    v-model="user"
                    prepend-icon="mdi-account"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Contraseña"
                    name="Contraseña"
                    v-model="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="test">Ingresar</v-btn>
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
  data: function() {
    return {
      user: "",
      password: ""
    };
  },
  props: {
    logo: {
      Type: String,
      default: require("../assets/logo_SIASE.png")
    }
  },
  methods: {
    test() {
      this.$store
        .dispatch(
          "moduleLogin/retrieveToken",
          {
            user: this.user,
            pwd: this.password
          },
          { root: true }
        )
        .then(response => {
          if (response.status == 200) {
            this.$router.push("/app");
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style>
.logoLogin {
  width: 50px;
  height: auto;
}
</style>  