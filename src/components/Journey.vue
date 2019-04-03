<template>
  <v-container >
      <h1> My journey </h1>
    <v-timeline>
      <v-timeline-item
        v-for="(year, i) in years"
        :key="i"
        :color="year.color"
        small
      >
        <template v-slot:opposite>
          <span
            :class="`headline font-weight-bold ${year.color}--text`"
            v-text="year.year"
          ></span>
        </template>
        <div class="py-3">
          <h2 :class="`headline font-weight-light mb-3 ${year.color}--text`">Lorem ipsum</h2>
          <div class="text--secondary"> 
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
  export default {
    name: 'journey',
    data: () => ({
      years: [
        {
          color: 'indigo',
          year: '2019'
        },
        {
          color: 'light-blue',
          year: '2017'
        },
        {
          color: 'cyan',
          year: '2016'
        },
        {
          color: 'green',
          year: '2008'
        },
        {
          color: 'pink',
          year: '2005'
        },
        {
          color: 'amber',
          year: '1996'
        },
        {
          color: 'orange',
          year: '1993'
        }
      ]
    })
  }
</script>
