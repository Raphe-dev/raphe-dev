<template>
  <v-app id="sandbox" :dark="dark">
    <navigation/>

    <v-parallax
      class="elevation-5" 
      src="http://localhost:8080/parallax.jpg"
    >
      <v-layout align-end justify-end column fill-height pa-0>
        <div class="text-xs-right pa-5" align-end>
          <v-flex>
            <h1 class=" font-weight-regular display-2" :class="{'display-2' :$vuetify.breakpoint.smAndDown}">Raphaëlle Roy</h1>
            <h1 class="black--text  font-weight-regular display-3" :class="{'display-3' :$vuetify.breakpoint.smAndDown}">Full-stack Developer</h1>
          </v-flex>
        </div>
      </v-layout>
    </v-parallax>

    <v-content>
      <v-container fluid>
        <v-layout row wrap align-content-space-between>
          <v-flex md7 xs12>
            <v-flex
              text-sm-left >
              <h1> Who am I? </h1>
              <p class="text--secondary">
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

      <v-container fluid>
        <v-layout row wrap align-content-space-between>
            <v-flex md7 xs12>
              <v-flex
                text-sm-left >
                <h1> What can I do for you? </h1>
                <p class="text--secondary">
                  Cras eu efficitur lorem, non ullamcorper ligula. Aliquam erat volutpat. In hac habitasse platea dictumst. Sed neque quam, rutrum non consequat at, vulputate vitae augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut nec augue interdum, rutrum nulla bibendum, ullamcorper ligula. 
                </p>
              </v-flex>
            </v-flex>
        </v-layout>
      </v-container>

      <v-container fluid>
        <v-layout row wrap>
            <v-flex>
              <h1> Skills </h1>
              </br>
              <v-layout style="display:flex; flex-direction:row; justify-content:space-around; flex-wrap:wrap;">
                <v-card elevation-1>
                  <div style="padding:1rem;">
                  <h3 class="headline text-sm-center"> Frontend </h3>
                  </br>
                  <v-layout xs12 md6 row style="width:20rem">
                    <v-flex xs4>
                      <p class="text--secondary text-uppercase text-sm-left" style="margin-top:0.4rem;"> Laravel </p>
                      <p class="text--secondary text-uppercase text-sm-left"> Express </p>
                      <p class="text--secondary text-uppercase text-sm-left"> Databases </p>
                    </v-flex>
                    <v-flex xs8 style="justify-content:space-around;">
                      <v-rating
                        style="height:2.65rem"
                        small 
                        value="4"
                        full-icon="mdi-checkbox-blank-circle"
                        empty-icon="mdi-checkbox-blank-circle-outline"></v-rating>
                      <v-rating 
                        style="height:2.65rem"

                        small 
                        value="3"
                        full-icon="mdi-checkbox-blank-circle"
                        empty-icon="mdi-checkbox-blank-circle-outline"></v-rating>
                      <v-rating 
                        style="height:2.65rem"
                        small 
                        value="2"
                        full-icon="mdi-checkbox-blank-circle"
                        empty-icon="mdi-checkbox-blank-circle-outline"></v-rating>
                    </v-flex>
                  </v-layout>
                  </div>
                </v-card>

                <v-card elevation-1>
                  <div style="padding:1rem;">
                  <h3 class="headline text-sm-center"> Backend </h3>
                  </br>
                  <v-layout xs12 md6 row style="width:20rem">
                    <v-flex xs4>
                      <p class="text--secondary text-uppercase text-sm-left" style="margin-top:0.4rem;"> Laravel </p>
                      <p class="text--secondary text-uppercase text-sm-left"> Express </p>
                      <p class="text--secondary text-uppercase text-sm-left"> Databases </p>
                    </v-flex>
                    <v-flex xs8 style="justify-content:space-around;">
                      <v-rating
                        style="height:2.65rem"
                        small 
                        value="4"
                        full-icon="mdi-checkbox-blank-circle"
                        empty-icon="mdi-checkbox-blank-circle-outline"></v-rating>
                      <v-rating 
                        style="height:2.65rem"
                        small 
                        value="3"
                        full-icon="mdi-checkbox-blank-circle"
                        empty-icon="mdi-checkbox-blank-circle-outline"></v-rating>
                      <v-rating 
                        style="height:2.65rem"
                        small 
                        value="2"
                        full-icon="mdi-checkbox-blank-circle"
                        empty-icon="mdi-checkbox-blank-circle-outline"></v-rating>
                    </v-flex>
                  </v-layout>
                  </div>
                </v-card>

                <v-card elevation-1>
                  <div style="padding:1rem;">
                  <h3 class="headline text-sm-center"> Hobby </h3>
                  </br>
                  <v-layout xs12 md6 row style="width:20rem">
                    <v-flex xs4>
                      <p class="text--secondary text-uppercase text-sm-left" style="margin-top:0.4rem;"> Laravel </p>
                      <p class="text--secondary text-uppercase text-sm-left"> Express </p>
                      <p class="text--secondary text-uppercase text-sm-left"> Databases </p>
                    </v-flex>
                    <v-flex xs8 style="justify-content:space-around;">
                      <v-rating
                        style="height:2.65rem"
                        small 
                        value="4"
                        full-icon="mdi-checkbox-blank-circle"
                        empty-icon="mdi-checkbox-blank-circle-outline"></v-rating>
                      <v-rating 
                        style="height:2.65rem"

                        small 
                        value="3"
                        full-icon="mdi-checkbox-blank-circle"
                        empty-icon="mdi-checkbox-blank-circle-outline"></v-rating>
                      <v-rating 
                        style="height:2.65rem"
                        small 
                        value="2"
                        full-icon="mdi-checkbox-blank-circle"
                        empty-icon="mdi-checkbox-blank-circle-outline"></v-rating>
                    </v-flex>
                  </v-layout>
                  </div>
                </v-card>
              </v-layout>
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
            <div class="text--secondary"> 
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
import Navigation from './components/Navigation'
  export default {
    name: 'App',
    components: { Navigation },
    data: () => ({
      dark: true,

      years: [
        {
          color: 'indigo',
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