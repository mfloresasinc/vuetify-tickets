<template>
  <div >

    <div style="padding: absolute;">
     <v-img class="badbuny pa-0"
          lazy-src="https://picsum.photos/id/11/10/6"
          src="../../public/4Tujz7n.png"
          absolute
        ></v-img>
      </div>
      <div class="shows pa-6">
    <v-list three-line>
      <template v-for="(item, index) in items">
        <v-subheader
          v-if="item.header"
          :key="item.header"
          v-text="item.header"
        ></v-subheader>

        <v-divider
          v-else-if="item.divider"
          :key="index"
          :inset="item.inset"
        ></v-divider>

        <v-list-item
          class="list pa-0"
          v-else
          :key="item.title"
        >
          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <TicketCompra 
              :visible="cerrarDialogo" 
              v-bind:title="item.title" 
              v-bind:precio="item.precio" 
              v-on:closeDialog="onCloseDialog" 
              @click="abrir"/>
        </v-list-item-action>
        </v-list-item>
      </template>
    </v-list>
    </div>
  </div>
</template>

<script>

  import TicketCompra from "../components/TicketCompra.vue"

  export default {
    components: { TicketCompra },
    name: 'Home',
    data: () => {
      return {
        items: [
          {
            id: 1,
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Entrada General',
            precio: 12,
          },
          { divider: true, },
          {
            id: 2,
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'Paquete VIP',
            precio: 70
          },
        ],
        cerrarDialogo: false,
      }
    },
    methods: {
      onCloseDialog() {
        this.cerrarDialogo = false;
        console.log("hola")
      },
      abrir() {
        this.cerrarDialogo = true;
        console.log(5555)
      }
    }
  }
</script>