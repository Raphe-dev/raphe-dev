<template>
  <v-parallax
    class="elevation-5" 
    :src="imgurl"
  >
    <v-layout align-end justify-end column fill-height pa-0>
      <div class="text-xs-right pa-5" align-end>
        <v-flex>
          <h1 class=" title-raph" :class="{'display-2' :$vuetify.breakpoint.smAndDown}">Raphaëlle Roy</h1>
          <h1 class="black--text  font-weight-regular display-3" :class="{'display-3' :$vuetify.breakpoint.smAndDown}">Full-stack Developer</h1>
        </v-flex>
      </div>
    </v-layout>
  </v-parallax>
</template>

<script>
  export default {
    name: 'parallax',
    data: () => ({
      imgurl:  process.env.VUE_APP_URL + '/parallax.jpg'
    })
  }
</script>
