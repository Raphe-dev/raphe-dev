<template>
  <v-container fluid>
    <v-layout row wrap align-content-space-between>
      <v-flex md7 xs12>
        <v-flex
          text-sm-left >
          <h1> Who am I? </h1>
          <p class="text--secondary">
            <p>
              I am a young full-stack developper with 4 years of experience, 
              I try to keep up with the most recent technologies and frameworks as much as possible.
              I love prototyping in my spare time to try things out and understand how they works.
            </p>
            <p>
              I fell in love with Javascript a few years back and love it more with every new feature, I mainly use the wonderfull Vue.js framwework
              to build the front end of websites, web apps and even native mobile app. 
              For the servers I mostly use Node.js with express.js as it is very polyvalent, fast and flexible.
            </p>
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
</template>

<script>
  export default {
    name: 'me'
  }
</script>
