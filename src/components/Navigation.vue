<template>
  <section>
    <v-navigation-drawer
      v-model="primaryDrawer.model"
      :clipped="true"
      floating
      :mobile-break-point="900"
      overflow
      app
      class="elevation-3"
      style="background-color:#181818"
    >
    <v-flex
        text-xs-center
        justify-space-between
      >
        <div class="pa-3">
          <p class="display-1"> Raphaëlle Roy </p>
          <v-avatar
            :size="150"
            color="grey lighten-4"
          >
            <img src="http://localhost:8080/avatar.jpg" alt="avatar">
          </v-avatar>
        </div>
        <v-list class="pt-0">
          <v-list-tile
            v-for="item in items"
            :key="item.title"
            @click=""
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }} <p>asd </p></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <div style="width:100%; display:flex; justify-content:space-around; position:absolute; bottom:2rem;">
          <v-icon medium>mdi-facebook-box</v-icon>
          <v-icon medium>mdi-linkedin-box</v-icon>
          <v-icon medium>mdi-email</v-icon>
        </div>
      </v-flex>
    </v-navigation-drawer>

    <v-toolbar app v-if="$vuetify.breakpoint.smAndDown" >
      <v-toolbar-side-icon
        @click.stop="primaryDrawer.model = !primaryDrawer.model"
      ></v-toolbar-side-icon>
      <v-toolbar-title>Lorem Ipsum</v-toolbar-title>
    </v-toolbar>
  </section>
</template>

<script>
  export default {
    name: 'navigation',
    data: () => ({
            items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ],
      drawers: ['Default (no property)', 'Permanent', 'Temporary'],
      primaryDrawer: {
        model: null,
        type: 'default (no property)',
        clipped: false,
        floating: false,
        mini: false
      },
    })
  }
</script>
