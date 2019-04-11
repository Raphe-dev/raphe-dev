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
            <img :src="imgurl" alt="avatar">
          </v-avatar>
        </div>
        <v-list class="pt-0">
          <v-list-tile
            v-for="item in items()"
            :key="item.title"
            @click="$vuetify.goTo(item.target)"
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
          <a href="https://www.facebook.com/profile.php?id=100009165258440" target="_blank" style="text-decoration:none;"> <v-icon class="fbicon" medium>mdi-facebook-box</v-icon> </a>
          <a href="https://www.linkedin.com/in/rapha%C3%ABlle-roy-b3b89a158/" target="_blank" style="text-decoration:none;"> <v-icon class="linkedinicon" medium>mdi-linkedin-box</v-icon> </a>
          <a href="mailto:raph0713@gmail.com" style="text-decoration:none;"> <v-icon class="mailicon" medium>mdi-gmail</v-icon> </a>
          <a href="https://github.com/Raphe-dev" target="_blank" style="text-decoration:none;"> <v-icon medium>mdi-github-circle</v-icon> </a>
        </div>
      </v-flex>
    </v-navigation-drawer>

    <v-toolbar app v-if="$vuetify.breakpoint.smAndDown" >
      <v-toolbar-side-icon
        @click.stop="primaryDrawer.model = !primaryDrawer.model"
      ></v-toolbar-side-icon>
      <v-toolbar-title>Raphaëlle Roy</v-toolbar-title>
    </v-toolbar>
  </section>
</template>

<script>
  export default {
    name: 'navigation',
    data: () => ({
      drawers: ['Default (no property)', 'Permanent', 'Temporary'],
      primaryDrawer: {
        model: null,
        type: 'default (no property)',
        clipped: false,
        floating: false,
        mini: false
      },
      imgurl:  process.env.VUE_APP_URL + '/avatar.jpg'
    }),
    methods: {
      items() {
        return [
          { title: 'Home', icon: 'dashboard', target: 0 },
          { title: 'About', icon: 'question_answer', target: document.getElementById('me') },
          { title: 'Skills', icon: 'mdi-star', target: document.getElementById('cando') },
          { title: 'Journey', icon: 'mdi-routes', target: document.getElementById('journey') },
        ]
      } 
    }  
  }
</script>

<style lang="scss">
  .fbicon {
    &:hover {
      color:#3C5A99;
      cursor: pointer;
    }
  }
  .linkedinicon {
    &:hover {
      color:#0077B5;
      cursor: pointer;
    }
  }
  .mailicon {
    &:hover {
      color:#D44638;
      cursor: pointer;
    }
  }
</style>