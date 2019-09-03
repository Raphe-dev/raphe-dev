<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex>
        <h1> Skills </h1>
        </br>
        <v-layout class="d-flex flex-row justify-space-around" style="flex-wrap:wrap">
          <v-card v-for="(skill, key) in skills" :key="key" elevation-1 style="margin:1rem; flex-grow:1; min-width:300px; max-width:450px;">
            <div class="pa-2"/>
            <h3 class="headline text-sm-center"> {{key}} </h3>
            <v-layout xs12 md6 row class="pt-2">
              <v-flex xs4 class="pt-1 pl-2">
                <p v-for="(item, key) in skill" :key="key" class="text--secondary text-uppercase"> {{key}} </p>
              </v-flex>
              <v-flex xs8 style="justify-content:space-between;">
                <v-rating
                  v-for="(item, key) in skill"
                  :key="key"
                  style="height:2.6rem"
                  small 
                  readonly 
                  :value="item"
                  :length="6"
                  full-icon="mdi-checkbox-blank-circle"
                  empty-icon="mdi-checkbox-blank-circle-outline"/>
              </v-flex>
            </v-layout>
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
      skills: {
        'Front-end': {'Javascript' : 5, 'Node.js' : 5, 'Vue' : 6, 'Css & Sass' : 4},
        'Back-end': {'Node.js' : 4, 'PHP' : 3, 'SQL/NoSQL' : 4, '.NET' : 1},
        'Hobby': {'Optimisation' : 4, 'Mobile' : 3, 'Game dev' : 2, 'Blockchain' : 1},
      }
    })
  }
</script>
