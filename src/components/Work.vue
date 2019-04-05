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
              <div class="p-info">
                <span class="p-info__row" :class="{ '-small' : $vuetify.breakpoint.mdAndUp }">
                  <v-icon medium style="flex:1;">mdi-calendar</v-icon>
                  <h4 style="flex:2; line-height:2rem;"> Project Dates </h4>
                  <span style="flex:2; line-height:2rem;" class="text--secondary"> 2016, 2019 </span>
                </span>

                <span class="p-info__row" :class="{ '-small' : $vuetify.breakpoint.mdAndUp }">
                  <v-icon style="flex:1;" medium>mdi-web</v-icon>
                  <h4 style="flex:2; line-height:2rem;"> Project Website </h4>
                  <span  style="flex:2; line-height:2rem;" class="text--secondary"> <a href="https://bloc.solutions" target="_blank" class="text--secondary"> bloc.solutions</a> </span>
                </span>

                 <span class="p-info__row" :class="{ '-small' : $vuetify.breakpoint.mdAndUp }">
                  <v-icon style="flex:1;" medium>mdi-settings</v-icon>
                  <h4 style="flex:2; line-height:2rem;"> Project Stack </h4>
                  <span style="flex:2; line-height:2rem;" class="text--secondary"> Laravel, Vue, Nuxt </span>
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
        <v-flex style="display:flex; justify-content:space-between;">
          <div style="padding-left:1rem;">
            <p>
              <h1> Crypto Local </h1>
              <h4 class="text--secondary"> Full stack developer & owner  </h4>
            </p>

            <p>
              <h2> Project details </h2>
              <div class="text--secondary" style="padding-right:7rem; padding-left:0.5rem; text-align:justify;"> Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In ac felis quis tortor malesuada pretium. Phasellus dolor. Fusce fermentum odio nec arcu. Integer tincidunt. </div>
            </p>

            <p> 
              <h2> Project info </h2>
              <div style="padding-top:1rem; display:flex; flex-direction:column; align-content:flex-start">
                <span style="display:flex; flex-direction:row; ">
                  <v-icon medium style="flex:1;">mdi-calendar</v-icon>
                  <h4 style="flex:2; line-height:2rem;"> Project Dates </h4>
                  <span style="flex:2; line-height:2rem;" class="text--secondary"> 2018, 2019 </span>
                </span>

                <span style="display:flex; flex-direction:row; padding-top:1rem;">
                  <v-icon style="flex:1;" medium>mdi-web</v-icon>
                  <h4 style="flex:2; line-height:2rem;"> Project Website </h4>
                  <span  style="flex:2; line-height:2rem;" class="text--secondary"> <a href="" target="_blank" class="text--secondary"> link </a> </span>
                </span>

                 <span style="display:flex; flex-direction:row; padding-top:1rem;">
                  <v-icon style="flex:1;" medium>mdi-settings</v-icon>
                  <h4 style="flex:2; line-height:2rem;"> Project Stack </h4>
                  <span style="flex:2; line-height:2rem;" class="text--secondary"> Vue, Express </span>
                </span>
              </div>
            </p>
          </div>
          <div v-if="$vuetify.breakpoint.lgAndUp">
            <img src="https://scontent.fymy1-2.fna.fbcdn.net/v/t1.15752-9/42643597_304905553443098_4900981121266745344_n.png?_nc_cat=110&_nc_ht=scontent.fymy1-2.fna&oh=0e57a64a83c0e355c40df06fc219fa63&oe=5D3CB7BD" style="max-width:40rem; max-height:37rem;">
            </img>
          </div>
          <div v-if="$vuetify.breakpoint.mdOnly">
            <img src="https://scontent.fymy1-2.fna.fbcdn.net/v/t1.15752-9/42643597_304905553443098_4900981121266745344_n.png?_nc_cat=110&_nc_ht=scontent.fymy1-2.fna&oh=0e57a64a83c0e355c40df06fc219fa63&oe=5D3CB7BD" style="max-width:20rem;">
            </img>
          </div>
          <div v-if="$vuetify.breakpoint.smOnly">
            <img src="https://scontent.fymy1-2.fna.fbcdn.net/v/t1.15752-9/42643597_304905553443098_4900981121266745344_n.png?_nc_cat=110&_nc_ht=scontent.fymy1-2.fna&oh=0e57a64a83c0e355c40df06fc219fa63&oe=5D3CB7BD" style="max-width:15rem;">
            </img>
          </div>
        </v-flex>
      </v-carousel-item>

      <v-carousel-item>
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
