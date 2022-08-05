<template>
  <v-dialog
    transition="dialog-bottom-transition"
    max-width="600"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on" >
        <v-icon color="#7F2942">
          mdi-qrcode
        </v-icon>
      </v-btn>
    </template>
    <template v-slot:default="dialog">
      <v-card>
        <v-toolbar
          color="#7F2942"
          dark
        >Codigo QR</v-toolbar>
        <v-card-actions class="justify-end">
          <vue-qr text="https://www.unveranosinti.com/" :size="300"></vue-qr>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
  import VueQr from 'vue-qr';
	export default {
    data () {
      return {
        player_one: {
          score: 1
        },
        to: '/compras',
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
    components: {
      VueQr
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