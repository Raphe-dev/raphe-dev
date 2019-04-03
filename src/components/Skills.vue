<template>
<v-container fluid>
        <v-layout row wrap>
            <v-flex>
              <h1> Skills </h1>
              </br>
              <v-layout style="display:flex; flex-direction:row; justify-content:space-between; flex-wrap:wrap;">
                <v-card elevation-1 style="margin:1rem;">
                  <div style="padding:1rem;">
                  <h3 class="headline text-sm-center"> Front-end </h3>
                  </br>
                  <v-layout xs12 md6 row style="width:20rem">
                    <v-flex xs4>
                      <p class="text--secondary text-uppercase text-sm-left" style="margin-top:0.4rem;"> Javascript </p>
                      <p class="text--secondary text-uppercase text-sm-left"> Vue </p>
                      <p class="text--secondary text-uppercase text-sm-left"> Css </p>
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
                        value="5"
                        full-icon="mdi-checkbox-blank-circle"
                        empty-icon="mdi-checkbox-blank-circle-outline"></v-rating>
                      <v-rating 
                        style="height:2.65rem"
                        small 
                        value="3"
                        full-icon="mdi-checkbox-blank-circle"
                        empty-icon="mdi-checkbox-blank-circle-outline"></v-rating>
                    </v-flex>
                  </v-layout>
                  </div>
                </v-card>

                <v-card elevation-1 style="margin:1rem;">
                  <div style="padding:1rem;">
                  <h3 class="headline text-sm-center"> Back-end </h3>
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
                        value="3"
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

                <v-card elevation-1 style="margin:1rem;">
                  <div style="padding:1rem;">
                  <h3 class="headline text-sm-center"> Hobby </h3>
                  </br>
                  <v-layout xs12 md6 row style="width:20rem">
                    <v-flex xs4>
                      <p class="text--secondary text-uppercase text-sm-left" style="margin-top:0.4rem;"> Game </p>
                      <p class="text--secondary text-uppercase text-sm-left"> Mobile </p>
                      <p class="text--secondary text-uppercase text-sm-left"> Blockchain </p>
                    </v-flex>
                    <v-flex xs8 style="justify-content:space-around;">
                      <v-rating
                        style="height:2.65rem"
                        small 
                        value="2"
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
                        value="1"
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
</template>

<script>
  export default {
    name:'skills',
    data: () => ({
      
    })
  }
</script>
