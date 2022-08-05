<template >
  <v-app id="inspire">
    <v-navigation-drawer v-if="this.$router.currentRoute.name !== 'loading'"
    v-model="drawer"
    app
    >
      <v-img
        class="pa-4"
        height="170"
        src="ticket.jpg"
        gradient="to top right, rgba(127,41,66,1), rgba(25,32,72,.7)"
      >
        <v-avatar size="70" class="mb-4">
            <img
              src="../public/descarga.png"
              alt="UCSG"
            >
          </v-avatar>
          <div class="white--text font-weight-bold">UCSG</div>
          <div class="white--text">estudiante@cu.ucsg.edu.ec</div>
      </v-img>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar v-if="this.$router.currentRoute.name !== 'loading'"
      app
      color="#7F2942"
      dark
      prominent
      src="ticket.jpg"
      fade-img-on-scroll
      scroll-threshold="500"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(127,41,66,1), rgba(25,32,72,.7)"
          color="#7F2942"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>UCSG-Tickets</v-app-bar-title>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  import Spinner from "./components/spinner.vue"

  export default {
    components: { Spinner },
    data: () => ({ 
      drawer: null,
      items: [
          { title: 'Shows y Eventos', icon: 'mdi-ticket', to:'/shows' },
          { title: 'Compras', icon: 'mdi-wallet', to:'/compras' },
        ],
     }),
  }
</script>
