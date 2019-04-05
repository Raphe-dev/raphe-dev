<template>
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
</template>

<script>
  export default {
    name: 'me',
    data: () => ({
      
    })
  }
</script>
