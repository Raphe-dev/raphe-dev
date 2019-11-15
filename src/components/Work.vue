<template>
  <v-container fluid>
    <h1> What I've done </h1>
    </br>
    <v-carousel :cycle="false" hide-controls>
      <v-carousel-item>
        <v-flex style="display:flex; justify-content:space-between; height:100%;">
          <div style="padding-left:1rem;">
            <p>
              <h1> Bloc Solutions </h1>
              <h4 class="text--secondary"> Full stack developer  </h4>
            </p>

            <p>
              <h2> Project details </h2>
              <div class="text--secondary" style="padding-left:0.5rem; text-align:justify;" :style="{paddingRight : $vuetify.breakpoint.mdAndUp ? '7rem' : '0.5rem' }"> 
                I co-founded the project in 2016 and left in April 2019. At first I was doing most of the backend, then ended up leading the front-end after two year.
                Bloc Solutions is a real estate management app where owner can manage their buildings, units and leases. 
              </div>
            </p>

            <p> 
              <h2> Project info </h2>
              <div class="p-info">
                <span class="p-info__row" :class="{ '-small' : $vuetify.breakpoint.mdAndUp }">
                  <v-icon medium style="padding-right:1rem;">mdi-calendar</v-icon>
                  <h4 style="padding-right:1rem; line-height:2rem;"> Project Dates </h4>
                  <span style="line-height:2rem;" class="text--secondary"> 2016, 2019 </span>
                </span>

                <span class="p-info__row" :class="{ '-small' : $vuetify.breakpoint.mdAndUp }">
                  <v-icon style="padding-right:1rem;" medium>mdi-web</v-icon>
                  <h4 style="padding-right:1rem; line-height:2rem;"> Project Website </h4>
                  <span  style="line-height:2rem;" class="text--secondary"> <a href="https://bloc.solutions" target="_blank" class="text--secondary"> bloc.solutions</a> </span>
                </span>

                 <span class="p-info__row" :class="{ '-small' : $vuetify.breakpoint.mdAndUp }">
                  <v-icon style="padding-right:1rem;" medium>mdi-settings</v-icon>
                  <h4 style="padding-right:1rem; line-height:2rem;"> Project Stack </h4>
                  <span style="line-height:2rem;" class="text--secondary"> Laravel, Vue, Nuxt </span>
                </span>
              </div>
            </p>
          </div>
          <div v-if="$vuetify.breakpoint.lgAndUp">
            <img src="https://bloc.solutions/images/FbLogo.png" style="max-width:40rem; max-height:37rem;">
            </img>
          </div>

        </v-flex>
      </v-carousel-item>

      <v-carousel-item>
        <v-flex style="display:flex; justify-content:space-between; height:100%;">
          <div style="padding-left:1rem;">
            <p>
              <h1> Kazionline </h1>
              <h4 class="text--secondary"> Freelancer </h4>
            </p>

            <p>
              <h2> Project details </h2>
              <div class="text--secondary" style="padding-left:0.5rem; text-align:justify;" :style="{paddingRight : $vuetify.breakpoint.mdAndUp ? '7rem' : '0.5rem' }"> 
                Their landing page dated from 2016 and was messy with long loading and undreads of css classes. 
                I rebuilt it from the ground up with Vue and hand written sass for them to be able to maintain the site in the future.
              </div>
            </p>

            <p> 
              <h2> Project info </h2>
              <div class="p-info">
                <span style="display:flex; flex-direction:row; ">
                  <v-icon medium style="padding-right:1rem;">mdi-calendar</v-icon>
                  <h4 style="padding-right:1rem; line-height:2rem;"> Project Dates </h4>
                  <span style="line-height:2rem;" class="text--secondary"> 2019 </span>
                </span>

                <span style="display:flex; flex-direction:row; padding-top:1rem;">
                  <v-icon style="padding-right:1rem;" medium>mdi-web</v-icon>
                  <h4 style="padding-right:1rem; line-height:2rem;"> Project Website </h4>
                  <span  style="line-height:2rem;" class="text--secondary"> <a href="https://gallant-galileo-e1be4e.netlify.com" target="_blank" class="text--secondary"> link </a> </span>
                </span>

                 <span style="display:flex; flex-direction:row; padding-top:1rem;">
                  <v-icon style="padding-right:1rem;" medium>mdi-settings</v-icon>
                  <h4 style="padding-right:1rem; line-height:2rem;"> Project Stack </h4>
                  <span style="line-height:2rem;" class="text--secondary"> Vue, Sass </span>
                </span>
              </div>
            </p>
          </div>
          <div v-if="$vuetify.breakpoint.lgAndUp">
            <img src="../../public/KaziOnline.png" style="max-width:40rem; max-height:36rem;"/>
          </div>
        </v-flex>
      </v-carousel-item>

       <v-carousel-item>
        <v-flex style="display:flex; justify-content:space-between; height:100%;">
          <div style="padding-left:1rem;">
            <p>
              <h1> Mining pool watch </h1>
              <h4 class="text--secondary"> Developer  </h4>
            </p>

            <p>
              <h2> Project details </h2>
              <div class="text--secondary" style="padding-left:0.5rem; text-align:justify;"  :style="{paddingRight : $vuetify.breakpoint.mdAndUp ? '7rem' : '0.5rem' }"> 
                A simple tool to keep track of multiple mining pool hashrate, amount due and a graph representation.
              </div>
            </p>

            <p> 
              <h2> Project info </h2>
              <div class="p-info">
                <span style="display:flex; flex-direction:row; justify-content:flex-start">
                  <v-icon medium style="padding-right:1rem;">mdi-calendar</v-icon>
                  <h4 style="padding-right:1rem; line-height:2rem;"> Project Dates </h4>
                  <span style="line-height:2rem;" class="text--secondary"> 2019 </span>
                </span>

                <span style="display:flex; flex-direction:row; padding-top:1rem; justify-content:flex-start">
                  <v-icon style="padding-right:1rem;" medium>mdi-web</v-icon>
                  <h4 style="padding-right:1rem; line-height:2rem;"> Project Website </h4>
                  <span  style="line-height:2rem;" class="text--secondary"> <a href="https://quirky-mclean-5575e6.netlify.com" target="_blank" class="text--secondary"> link </a></span>
                </span>

                 <span style="display:flex; flex-direction:row; padding-top:1rem; justify-content:flex-start">
                  <v-icon style="padding-right:1rem;" medium>mdi-settings</v-icon>
                  <h4 style="padding-right:1rem; line-height:2rem;"> Project Stack </h4>
                  <span style="line-height:2rem;" class="text--secondary"> Vue </span>
                </span>
              </div>
            </p>
          </div>
          <div v-if="$vuetify.breakpoint.lgAndUp" style="display:flex; align-items:center; height:100%;">
            <img  src="" style="max-width:40rem; max-height:37rem;">
            </img>
          </div>
        </v-flex>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
  export default {
    name: 'work',
    data: () => ({
      
    })
  }
</script>

<style lang="scss">
.p-info {
  padding-top:1rem;
  display:flex; 
  flex-direction:column; 
  align-content:flex-start;
  padding-left:0.7rem;

  &__row {
    display:flex; 
    flex-direction:row;
  
  &.-small {
    width:75%;
  }
    & + & {
      padding-top:1rem;
    }
  }
}
</style>
