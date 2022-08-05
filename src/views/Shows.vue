<template>
  <div class="shows pa-6">
    <h1>Shows y Eventos</h1>
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
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
          <v-btn icon :to="item.to">
            <v-icon color="#7F2942">mdi-arrow-right-drop-circle
            </v-icon>
          </v-btn>
        </v-list-item-action>
        </v-list-item>
      </template>
    </v-list>
  </div>
</template>

<script>

  export default {
    name: 'Home',
    data: () => ({
      items: [
        {
          avatar: 'https://yt3.ggpht.com/7tCfeCWH4arhsTM-4Rz4IxWieQbegzibeXlG-kbytAujdk5dr2K0gBb8NG0Cvk6lB1dPkjyd=s900-c-k-c0x00ffffff-no-rj',
          title: 'BAD BUNNY',
          subtitle: `World's Hottest Tour`,
          to: '/about'
        },
        { divider: true, },
        {
          avatar: 'https://comicconecuador.com/wp-content/uploads/2019/01/logo.png',
          title: 'ECUADOR COMIC CON',
          subtitle: `COMIC CON 2022`,
          to: '/comic'

        },
        { divider: true, },
        {
          avatar: 'data:image/png;base64,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',
          title: 'UCSG',
          subtitle: `5 de Agosto`,
          to: '/christian'
        },
      ],
    }),
  }
</script>
