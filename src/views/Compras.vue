<template>
  <div class="compras pa-6">
    <h1>Mis Compras</h1>
    <v-list three-line>
      <template>
        <v-list-item class="list pa-0">
          <v-list-item-content>
              <v-img src="../../public/HDGIVTNKURFQXLRZDMEEBJQTHA.jpg" style="max-width: 150px;"></v-img>
            
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-subtitle class="font-weight-bold"> Bad Bunny </v-list-item-subtitle>
            <v-list-item-subtitle class="font-weight-bold"> X2 La Playa Experience </v-list-item-subtitle>
            <v-list-item-subtitle class="font-weight-bold"> $520 </v-list-item-subtitle>
            <v-list-item-subtitle class="font-weight-bold"></v-list-item-subtitle><QrCode /></v-list-item-subtitle>
          </v-list-item-action>
        </v-list-item>
        <v-divider ></v-divider>
        <v-list-item class="list pa-0">
          <v-list-item-content>
              <v-img src="../../public/4Tujz7n.png" style="max-width: 150px;"></v-img>
            
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-subtitle class="font-weight-bold"> Comic Con 2022 </v-list-item-subtitle>
            <v-list-item-subtitle class="font-weight-bold"> X3 Entrada General </v-list-item-subtitle>
            <v-list-item-subtitle class="font-weight-bold"> $36 </v-list-item-subtitle>
            <v-list-item-subtitle class="font-weight-bold"></v-list-item-subtitle><QrCode2 /></v-list-item-subtitle>
          </v-list-item-action>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item class="list pa-0">
          
        </v-list-item>
      </template>
    </v-list>
  </div>
</template>

<script>
  import QrCode2 from "../components/QrCode2.vue"
  import QrCode from "../components/QrCode.vue"
  import VueQr from 'vue-qr';

  export default {
    data () {
      return {
        
      }
    },
    components: {
      VueQr,
      QrCode,
      QrCode2
    }
  }
  
</script>