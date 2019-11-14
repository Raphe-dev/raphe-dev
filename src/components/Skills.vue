<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex>
        <h1> Skills </h1>
        <v-layout style="flex-wrap:wrap">
          <v-card v-for="(skill, key) in skills" :key="key" elevation-1 style="margin:1rem; flex-grow:1; min-width:300px; max-width:450px;">
            <div/>
            <h3 class="pa-1 headline text-sm-center"> {{key}} </h3>
            <v-layout xs12 md6 row class="pt-2">
              <v-flex xs4 class="p-1 pl-3">
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
        'Front-end': {'Vue' : 6, 'Javascript' : 5, 'Node.js' : 5,  'Css & Sass' : 4},
        'Back-end': {'Node.js' : 5, 'Socket.io' : 5, 'SQL/NoSQL' : 4, 'PHP' : 3},
        'Hobby': {'Gardening': 6, 'Gaming' : 4, 'Game dev' : 3,  'Blockchain' : 1},
      }
    })
  }
</script>
