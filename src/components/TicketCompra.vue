<template>
  <v-dialog
    transition="dialog-bottom-transition"
    max-width="600"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon style="padding-top: 25px;" v-bind="attrs" v-on="on" >
        <v-icon color="#7F2942">
          mdi-arrow-right-drop-circle
        </v-icon>
      </v-btn>
    </template>
    <template v-slot:default="dialog">
      <v-card>
        <v-toolbar
          color="#7F2942"
          dark
        >{{ title }}</v-toolbar>
        <h3 style="margin-left: 15px;">Por Favor ingrese los tickets que desea comprar</h3>
        <v-container
          fluid
          style="min-height: 0;"
          grid-list-lg
          >
          <v-layout row wrap>
            <v-flex xs12>
              <v-card color="blue-grey darken-2" class="white--text">
                <v-card-actions>
                  <div>
                    <v-btn style="margin-right: 10px;" color="orange darken-5" fab text @click="increaseScore(player_one)">
                      <v-icon>mdi-arrow-up-drop-circle</v-icon>
                    </v-btn>
                  </div>
                  <h3>{{player_one.score}}</h3>
                  <div>
                    <v-btn style="margin-left: 10px;" color="error" fab text @click="decreaseScore(player_one)">
                       <v-icon>mdi-arrow-down-drop-circle</v-icon>
                    </v-btn>
                  </div>
                </v-card-actions>
              </v-card>
              <v-card color="primary" style="margin-right:210px">
                <h4 class="white--text" style="margin-left: 25px;">$ {{precio*player_one.score}} </h4>
              </v-card>
            </v-flex>
        </v-layout>
      </v-container>
        <v-card-actions class="justify-end">
          <v-btn
            color="error"
            text
            @click="dialog.value = false"
          >Cerrar</v-btn>
          <!--SnackBar /-->
          <!--v-btn 
            color="green darken-1"
            text
            to="/compras"
          >
            Comprar
          </v-btn-->
            <v-btn
              @click="snackbar = true"
              color="green darken-1"
              text
              
            >
              Compra
            </v-btn>
            <v-snackbar
            timeout="-1"
              v-model="snackbar"
              top        
            >
              {{ text }}

              <template v-slot:action="{ attrs }">
                <v-btn

                  to="/shows"
                  color="pink"
                  text
                  v-bind="attrs"
                  @click="snackbar = false"
                >
                  Close
                </v-btn>
              </template>
            </v-snackbar>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
	export default {
    data () {
      return {
        player_one: {
          score: 1
        },
        to: '/shows',
        snackbar: false,
        text: `¡Su compra ha sido realizada, gracias por preferirnos!`,
      }
    },
    methods: {
      increaseScore(player, valor) {
        player.score += 1;
        valor = player.score * this.precio;
      },
      decreaseScore(player, valor) {
        if(player.score > 0) {
          player.score -= 1;
        }
        valor = player.score * this.precio;
      },
      cerrar() {
        this.$emit("closeDialog");
        console.log(1)
      }

    },
    props: {
      title: String,
      precio: Number,
      visible: {
        type: Boolean,
        deafault: false,
      }
    },
	}
</script>

<style>

</style>