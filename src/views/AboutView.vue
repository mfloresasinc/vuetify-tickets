<template>
  <div >
    <div style="padding: absolute;">
     <v-img class="badbuny pa-0"
          lazy-src="https://picsum.photos/id/11/10/6"
          src="../../public/HDGIVTNKURFQXLRZDMEEBJQTHA.jpg"
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
          <TicketCompra v-bind:title="item.title" v-bind:precio="item.precio"/>
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
    data: () => ({
      items: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'La Playa Experience',
          precio: 260,
        },
        { divider: true, },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Yonaguni Platinum',
          precio: 230,
        },
        { divider: true, },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Dakiti Golden',
          precio: 185,
        },
        { divider: true, },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Palco',
          precio: 100,
        },
        { divider: true, },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Callaita Fan Zone',
          precio: 85,
        },
        { divider: true, },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Tribuna',
          precio: 70,
        },
        { divider: true, },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Preferencia',
          precio: 50,
        },
        { divider: true, },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'General',
          precio: 30,
        },
      ],
    }),
  }
</script>