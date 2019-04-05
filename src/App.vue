<template>
  <v-app id="sandbox" dark>
    <navigation/>

    <parallax/>

    <v-content>
      <me id="me"/>

      <can-do id="cando"/>

      <skills/>

      <work/>
      
      <journey id="journey"/>
    </v-content>

    <v-footer inset app absolute>
      <span class="px-3">&copy; {{ new Date().getFullYear() }}   Raphaelle Roy</span>
    </v-footer>
  </v-app>
</template>

<script>
import Navigation from './components/Navigation'
import Skills from './components/Skills'
import Parallax from './components/Parallax'
import Me from './components/Me'
import CanDo from './components/CanDo'
import Journey from './components/Journey'
import Work from './components/Work'
  export default {
    name: 'App',
    components: { Navigation, Skills, Parallax, Me, CanDo, Journey, Work },
  }
</script>


<style lang="scss">
.title-raph {
  font-family: 'Roboto Slab', cursive !important;
  font-weight: bold;
  font-size: 5rem;
}

</style>