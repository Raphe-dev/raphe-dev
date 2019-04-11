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
      <div style="display:flex; justify-content:space-between; align-items:center; width:100%;">
      <span class="px-3">&copy; {{ new Date().getFullYear() }}   Raphaelle Roy</span>
      <span style="margin-top:0.4rem; display:flex; justify-content:space-evenly; width:13rem;">
          <a href="https://www.facebook.com/profile.php?id=100009165258440" target="_blank" style="text-decoration:none;"> <v-icon class="fbicon" medium>mdi-facebook-box</v-icon> </a>
          <a href="https://www.linkedin.com/in/rapha%C3%ABlle-roy-b3b89a158/" target="_blank" style="text-decoration:none;"> <v-icon class="linkedinicon" medium>mdi-linkedin-box</v-icon> </a>
          <a href="mailto:raph0713@gmail.com" style="text-decoration:none;"> <v-icon class="mailicon" medium>mdi-gmail</v-icon> </a>
          <a href="https://github.com/Raphe-dev" target="_blank" style="text-decoration:none;"> <v-icon medium>mdi-github-circle</v-icon> </a>
      </span>
      </div>
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