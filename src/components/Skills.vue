<template>
<v-container fluid>
        <v-layout row wrap>
            <v-flex>
              <h1> Skills </h1>
              </br>
              <v-layout style="display:flex; flex-direction:row; justify-content:space-around; flex-wrap:wrap;">
                <v-card elevation-1 style="margin:1rem; flex-grow:1; min-width:300px; max-width:450px;">
                  <div style="padding:1rem;">
                  <h3 class="headline text-sm-center"> Front-end </h3>
                  </br>
                  <v-layout xs12 md6 row >
                    <v-flex xs4 >
                      <p class="text--secondary text-uppercase " style="margin-top:0.4rem;"> Javascript </p>
                      <p class="text--secondary text-uppercase "> Node.js </p>
                      <p class="text--secondary text-uppercase "> Vue </p>
                      <p class="text--secondary text-uppercase "> CSS / SASS </p>
                    </v-flex>
                    <v-flex xs8 style="justify-content:space-between;">
                      <v-rating
                        style="height:2.65rem"
                        small 
                        readonly 
                        :value="5"
                        :length="6"
                        full-icon="mdi-checkbox-blank-circle"
                        empty-icon="mdi-checkbox-blank-circle-outline"></v-rating>
                      <v-rating 
                        style="height:2.65rem"
                        readonly 
                        small 
                        :value="5"
                        :length="6"
                        full-icon="mdi-checkbox-blank-circle"
                        empty-icon="mdi-checkbox-blank-circle-outline"></v-rating>
                      <v-rating 
                        style="height:2.65rem"
                        small 
                        readonly 
                        :value="6"
                        :length="6"
                        full-icon="mdi-checkbox-blank-circle"
                        empty-icon="mdi-checkbox-blank-circle-outline"></v-rating>
                        <v-rating 
                        style="height:2.65rem"
                        small 
                        readonly 
                        :value="4"
                        :length="6"
                        full-icon="mdi-checkbox-blank-circle"
                        empty-icon="mdi-checkbox-blank-circle-outline"></v-rating>
                    </v-flex>
                  </v-layout>
                  </div>
                </v-card>

                <v-card elevation-1 style="margin:1rem; flex-grow:1; min-width:300px; max-width:450px;">
                  <div style="padding:1rem;">
                  <h3 class="headline text-sm-center"> Back-end </h3>
                  </br>
                  <v-layout xs12 md6 row >
                    <v-flex xs4 >
                      <p class="text--secondary text-uppercase text-sm-left" style="margin-top:0.4rem;"> Node.js </p>
                      <p class="text--secondary text-uppercase text-sm-left"> Firebase </p>
                      <p class="text--secondary text-uppercase text-sm-left"> PHP </p>
                      <p class="text--secondary text-uppercase text-sm-left"> SQL / NoSQL </p>
                    </v-flex>
                    <v-flex xs8 style="justify-content:space-around;">
                      <v-rating
                        style="height:2.65rem"
                        small 
                        readonly 
                        :value="4"
                        :length="6"
                        full-icon="mdi-checkbox-blank-circle"
                        empty-icon="mdi-checkbox-blank-circle-outline"></v-rating>
                      <v-rating 
                        style="height:2.65rem"
                        small
                        readonly 
                        :value="4"
                        :length="6"
                        full-icon="mdi-checkbox-blank-circle"
                        empty-icon="mdi-checkbox-blank-circle-outline"></v-rating>
                      <v-rating 
                        style="height:2.65rem"
                        small
                        readonly 
                        :value="3"
                        :length="6"
                        full-icon="mdi-checkbox-blank-circle"
                        empty-icon="mdi-checkbox-blank-circle-outline"></v-rating>
                      <v-rating 
                        style="height:2.65rem"
                        small
                        readonly 
                        :value="3"
                        :length="6"
                        full-icon="mdi-checkbox-blank-circle"
                        empty-icon="mdi-checkbox-blank-circle-outline"></v-rating>
                    </v-flex>
                  </v-layout>
                  </div>
                </v-card>

                <v-card elevation-1 style="margin:1rem; flex-grow:1; min-width:300px; max-width:450px;">
                  <div style="padding:1rem;">
                  <h3 class="headline text-sm-center"> Hobby </h3>
                  </br>
                  <v-layout xs12 md6 row >
                    <v-flex xs4 >
                      <p class="text--secondary text-uppercase text-sm-left" style="margin-top:0.4rem;"> SEO </p>
                      <p class="text--secondary text-uppercase text-sm-left"> Mobile dev </p>
                      <p class="text--secondary text-uppercase text-sm-left"> Game dev </p>
                      <p class="text--secondary text-uppercase text-sm-left"> Blockchain </p>
                    </v-flex>
                    <v-flex xs8 style="justify-content:space-around;">
                      <v-rating
                        style="height:2.65rem"
                        small 
                        readonly 
                        :value="5"
                        :length="6"
                        full-icon="mdi-checkbox-blank-circle"
                        empty-icon="mdi-checkbox-blank-circle-outline"></v-rating>
                      <v-rating 
                        style="height:2.65rem"
                        readonly 
                        small 
                        :value="3"
                        :length="6"
                        full-icon="mdi-checkbox-blank-circle"
                        empty-icon="mdi-checkbox-blank-circle-outline"></v-rating>
                      <v-rating 
                        style="height:2.65rem"
                        small 
                        readonly 
                        :value="2"
                        :length="6"
                        full-icon="mdi-checkbox-blank-circle"
                        empty-icon="mdi-checkbox-blank-circle-outline"></v-rating>
                      <v-rating 
                        style="height:2.65rem"
                        small 
                        readonly 
                        :value="1"
                        :length="6"
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
