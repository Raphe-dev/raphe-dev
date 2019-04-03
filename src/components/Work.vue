<template>
  <v-container fluid>
    <h1> What I've done </h1>
    </br>
    <v-carousel :cycle="false" hide-controls>
      <v-carousel-item>
        <v-flex style="display:flex; justify-content:space-between;">
          <div style="padding-left:1rem;">
            <p>
              <h1> Bloc Solutions </h1>
              <h4 class="text--secondary"> Full stack developer  </h4>
            </p>

            <p>
              <h2> Project details </h2>
              <div class="text--secondary" style="padding-right:7rem; padding-left:0.5rem; text-align:justify;"> Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In ac felis quis tortor malesuada pretium. Phasellus dolor. Fusce fermentum odio nec arcu. Integer tincidunt. </div>
            </p>

            <p> 
              <h2> Project info </h2>
              <div style="padding-top:1rem; display:flex; flex-direction:column; align-content:flex-start">
                <span style="display:flex; flex-direction:row; width:50%;">
                  <v-icon medium style="flex:1;">mdi-calendar</v-icon>
                  <h4 style="flex:2;"> Project Dates </h4>
                  <span style="flex:2;" class="text--secondary"> 2016, 2019 </span>
                </span>

                <span style="display:flex; flex-direction:row; width:50%; padding-top:0.5rem;">
                  <v-icon style="flex:1;" medium>mdi-web</v-icon>
                  <h4 style="flex:2;"> Project Website </h4>
                  <span  style="flex:2;" class="text--secondary"> <a href="https://bloc.solutions" target="_blank" class="text--secondary"> bloc.solutions</a> </span>
                </span>

                 <span style="display:flex; flex-direction:row; width:50%; padding-top:0.5rem;">
                  <v-icon style="flex:1;" medium>mdi-settings</v-icon>
                  <h4 style="flex:2;"> Project Stack </h4>
                  <span style="flex:2;" class="text--secondary"> Laravel, Vue, Nuxt </span>
                </span>
              </div>
            </p>
          </div>
          <div v-if="$vuetify.breakpoint.lgAndUp">
            <img src="http://bloc.solutions/images/FbLogo.png" style="max-width:40rem; max-height:37rem;">
            </img>
          </div>
        </v-flex>
      </v-carousel-item>

      <v-carousel-item>
        <h1> lorem ipsum </h1>
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
