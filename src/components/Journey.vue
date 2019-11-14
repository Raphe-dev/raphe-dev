<template>
  <v-container fluid>
    <v-layout row wrap align-content-space-between>
      <v-flex
        text-sm-left >
        <h1> My journey </h1>
      </v-flex>
      <v-timeline>
        <v-timeline-item
          v-for="(year, i) in years"
          :key="i"
          :color="year.color"
          :icon="year.icon"
        >
          <template v-slot:opposite>
            <span
              :class="`headline font-weight-bold ${year.color}--text`"
              v-text="year.year"
            ></span>
          </template>
          <div class="py-3">
            <h2 :class="`headline font-weight-light mb-2 ${year.color}--text`">{{year.title}}</h2>
            <div class="text--secondary" style="text-align: justify"> 
              {{year.text}}
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'journey',
    data: () => ({
      years: [
        {
          color: 'blue',
          year: '2019',
          icon: 'mdi-map-marker',
          title: 'Now we\'re here',
          text: 'foo'
        },
        {
          color: 'light-blue',
          year: '2017',
          icon: 'mdi-heart-outline',
          title: 'Discovery of Vue',
          text: "I always bashed Javascript for being the shitty slow non-typed interpreted language that it what it was 15 years ago until I took a new look into it via having to learn everything about Vue.js and it's ecosystem. I discovered the wonderful world of Node.js and the benefits of ES6, I was shocked. Javascript is now my favorite language of all, sure have to be carefull as it is a much too permisive language but it can do pretty much anything at a decent speed now and I'm in love."
        },
        {
          color: 'cyan',
          year: '2016',
          icon: 'mdi-chart-line',
          title: 'A great opportunity',
          text: 'After wandering the world for a while I stumbled upon a friend that had a great idea to start a web business, I had not programmed for a while so I started from the groud up, learning Html5 Css/Sass and Php which had all changed a lot I had to do weeks of reading docs and courses. We chose Laravel for the backend so I mostly coded in PHP for a year until someone took it in charge while we started the front-end over with Vue and that is when everything changed.'
        },
        {
          color: 'green',
          year: '2008',
          icon: 'mdi-star',
          title: 'I won something!',
          text: 'At school there was a contest to make a game with Scratch, having a lot of game ressources from messing around in rpg maker I went all out and did a zelda game everything was handcoded with the drag and drop system, the sprite animation, the enemies AI, the collisions were based on pixel color, it was not much of a game world but more a prototype of mechanics. It was a mess, but it worked! And I got a reward for winning the contest.'
        },
        {
          color: 'pink',
          year: '2005',
          icon: 'mdi-glasses',
          title: 'Rediscovery of programming',
          text: 'Being older and in a computer science oriented program at school, I discovered LeSiteDuZero which is now Open Classroom. There I started by going through the most popular html/css tutorials then got closer to the machine by learning the base of C then C++, Python and Java. I was staying away of web technologie at the time as coding webpages was a nightmare.'
        },
        {
          color: 'yellow',
          year: '2001',
          icon: 'mdi-monitor',
          title: 'Web development summercamp',
          text: "My parents really wanted me to go to summercamp at the time and I didn't! Then, I saw that there was a web development program where we could learn basic html css and a little bit of php, that was my first real programming experience!"
        },
        {
          color: 'amber',
          year: '1997',
          icon: 'mdi-monitor',
          title: 'My first computer',
          text: 'Got in touch with DOS, what a time to be alive.'
        },
        {
          color: 'orange',
          year: '1993 ',
          icon: 'mdi-baby',
          title: 'I was born',
          text: 'The journey begins.'
        }
      ]
    })
  }
</script>
