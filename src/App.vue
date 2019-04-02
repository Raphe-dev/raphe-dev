<template>
  <v-app id="sandbox" :dark="dark">
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
        align-center
        justify-center
        text-xs-center
      >
        <div class="pa-3">
          <p class="display-1"> Raphaëlle Roy </p>
          <v-avatar
            :size="128"
            color="grey lighten-4"
          >
            <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
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
      </v-flex>
    </v-navigation-drawer>

    <v-toolbar app v-if="$vuetify.breakpoint.smAndDown" >
      <v-toolbar-side-icon
        @click.stop="primaryDrawer.model = !primaryDrawer.model"
      ></v-toolbar-side-icon>
      <v-toolbar-title>Lorem Ipsum</v-toolbar-title>
    </v-toolbar>
    <v-parallax
      class="elevation-5" 
      src="http://localhost:8080/parallax.jpg"
    >
      <v-layout align-end justify-end column fill-height pa-0>
        <div class="text-xs-right pa-5" align-end>
          <v-flex>
            <div class="text-uppercase display-2" :class="{'display-2' : $vuetify.breakpoint.smAndDown}">Raphaelle Roy</div>
            <h1 class="black--text text-uppercase font-weight-regular display-3" :class="{'display-3' :$vuetify.breakpoint.smAndDown}">Full-stack Developer</h1>
          </v-flex>
        </div>
      </v-layout>
    </v-parallax>
    <v-content>
        <v-flex>
         
          <v-container fluid>
            <v-layout row wrap align-content-space-between>
               <v-flex md7 xs12>
                  <v-flex
                    text-sm-left >
                    <h1> Who am I? </h1>
                    <p>
                      Cras eu efficitur lorem, non ullamcorper ligula. Aliquam erat volutpat. In hac habitasse platea dictumst. Sed neque quam, rutrum non consequat at, vulputate vitae augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut nec augue interdum, rutrum nulla bibendum, ullamcorper ligula. 
                    </p>
                  </v-flex>
                </v-flex>
                
                <v-layout xs12 md5 row style="padding:2rem 2rem 0 4rem;">
                  <v-flex xs6>
                    <p class="text--secondary text-uppercase text-sm-left"> Location </p>
                    <p class="text--secondary text-uppercase text-sm-left"> Email </p>
                    <p class="text--secondary text-uppercase text-sm-left"> Phone </p>
                  </v-flex>
                  <v-flex xs6>
                    <p class="text--secondary  text-sm-left"> Canada </p>
                    <p class="text--secondary  text-sm-left"> admin@raphe.dev </p>
                    <p class="text--secondary  text-sm-left"> (418) 933 2699 </p>
                  </v-flex>
                </v-layout>
            </v-layout>
          </v-container>
          
        </v-flex>
      <v-container fluid>
        <v-layout row wrap align-content-space-between>
            <v-flex md7 xs12>
              <v-flex
                text-sm-left >
                <h1> What can I do for you? </h1>
                <p>
                  Cras eu efficitur lorem, non ullamcorper ligula. Aliquam erat volutpat. In hac habitasse platea dictumst. Sed neque quam, rutrum non consequat at, vulputate vitae augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut nec augue interdum, rutrum nulla bibendum, ullamcorper ligula. 
                </p>
              </v-flex>
            </v-flex>
        </v-layout>
      </v-container>
      
      <v-container >
        <h1> What I've done </h1>
      <v-timeline>
        <v-timeline-item
          v-for="(year, i) in years"
          :key="i"
          :color="year.color"
          small
        >
          <template v-slot:opposite>
            <span
              :class="`headline font-weight-bold ${year.color}--text`"
              v-text="year.year"
            ></span>
          </template>
          <div class="py-3">
            <h2 :class="`headline font-weight-light mb-3 ${year.color}--text`">Lorem ipsum</h2>
            <div>
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
      </v-container>

    </v-content>

    <v-footer :inset="true">
      <span class="px-3">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    data: () => ({
      dark: true,
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
      years: [
        {
          color: 'blue',
          year: '2019'
        },
        {
          color: 'light-blue',
          year: '2017'
        },
        {
          color: 'cyan',
          year: '2016'
        },
        {
          color: 'green',
          year: '2008'
        },
        {
          color: 'pink',
          year: '2005'
        },
        {
          color: 'amber',
          year: '1996'
        },
        {
          color: 'orange',
          year: '1993'
        }
      ]
    }),
  }
</script>


<style lang="scss">
.bg-container {
  height: 97vh;
  background: linear-gradient(129deg,  #22829b, #21955a);
  background-size: 800% 800%;

  background: linear-gradient(321deg, #22829b, #21955a);
background-size: 800% 800%;

-webkit-animation: AnimationName 15s ease infinite;
-moz-animation: AnimationName 155s ease infinite;
-o-animation: AnimationName 15s ease infinite;
animation: AnimationName 15s ease infinite;

@-webkit-keyframes AnimationName {
    0%{background-position:11% 0%}
    50%{background-position:90% 100%}
    100%{background-position:11% 0%}
}
@-moz-keyframes AnimationName {
    0%{background-position:11% 0%}
    50%{background-position:90% 100%}
    100%{background-position:11% 0%}
}
@-o-keyframes AnimationName {
    0%{background-position:11% 0%}
    50%{background-position:90% 100%}
    100%{background-position:11% 0%}
}
@keyframes AnimationName { 
    0%{background-position:11% 0%}
    50%{background-position:90% 100%}
    100%{background-position:11% 0%}
}
}

</style>