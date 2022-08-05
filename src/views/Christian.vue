<template>
  <div >
    <div style="padding: absolute;">
     <v-img class="badbuny pa-0"
          lazy-src="https://picsum.photos/id/11/10/6"
          src="../../public/ucsg.jpg"
          absolute
        ></v-img>
      </div>
      <div class="shows pa-6">
    <v-list three-line>
      <template>
        <v-list-item class="list pa-0">
          <v-list-item-content>
            <v-list-item-title> Página Web</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
          <v-btn icon style="padding-top: 25px;">
            <a href="https://www.ucsg.edu.ec/"><v-icon color="#7F2942">mdi-arrow-right-drop-circle
            </v-icon></a>
          </v-btn>
          </v-list-item-action>
        </v-list-item>
        <v-divider ></v-divider>
        <v-list-item class="list pa-0">
          <v-list-item-content>
            <v-list-item-title> Instagram</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
          <v-btn icon style="padding-top: 25px;">
            <a href="https://www.instagram.com/ucsgye/?hl=en"><v-icon color="#7F2942">mdi-arrow-right-drop-circle
            </v-icon></a>
          </v-btn>
          </v-list-item-action>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item class="list pa-0">
          <v-list-item-content>
            <v-list-item-title> Facebook</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
          <v-btn icon style="padding-top: 25px;">
            <a href="https://www.facebook.com/UCSGye/"><v-icon color="#7F2942">mdi-arrow-right-drop-circle
            </v-icon></a>
          </v-btn>
          </v-list-item-action>
        </v-list-item>
      </template>
    </v-list>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Home',
    data: () => ({
      items: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Página Web',
          to: 'https://www.ucsg.edu.ec/'
        },
        { divider: true, },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Instagram',
          click: 'instagram()'
        },
        { divider: true, },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Facebook',
        },
      ],
    }),
    methods: {
      ucsg() {
        location.replace("https://www.ucsg.edu.ec/")
      },
      instagram() {
        location.replace("https://www.instagram.com/ucsgye/?hl=en")
      },
      facebook() {
        location.replace("https://www.facebook.com/UCSGye/")
      }
    }
  }
</script>