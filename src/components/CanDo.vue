<template>
  <v-container fluid>
    <v-layout row wrap >
        <v-flex lg7 md12 xs12 >
          <h1> What can I do for you? </h1>
          <p>
            <v-expansion-panel v-for="(item, key) in data" :key="key">
              <v-expansion-panel-content>
                <template v-slot:header>
                  <div>{{item.title}}</div>
                </template>
                <v-card>
                  <v-card-text class="text--secondary " style="text-align:justify">
                    {{item.text}}
                  </v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </p>
        </v-flex>
    </v-layout>
  </v-container>
</template> 

<script>
  export default {
    name: 'can-do',
    data: () => ({
      data: [
        {title: 'Website', 
          text: "So you need a website built for your new busniess? Or maybe you already have one but it is so messy you can't change anything. I can fix that for you! You'll get a fast and clean website with handwritten sass code following the BEM naming convention (Or a library if you want to), component based architecture so you can easily navigate and modify the source code without a headache."
        },
        {title: 'Web-app', 
          text: "You have that revolutionary web-app idea but are not an experienced developer? I am there to make it real! With node.js and vue.js it'll be fast, seamless and responsive to all type of screens."
        },
        {title: 'Mobile application', 
          text: "You need an android or ios app built or maybe already have a web-app but would like it run natively on mobile devices? With the help of vue-native I can build the app of your dream with truely native performance and the same clean architecture."
        },
        {title: 'Optimisation', 
          text: "Maybe your website take a lot of time to load Or maybe it is not as fluid as it should be. Maybe you don't get ranked in google where you should or dont get the social media sharing preview you would like. It can be a lot of things that makes you unhappy about your website I'll be glad to take a look and recommand you with some better practices or take a deeper look and fix as much as possible."
        }
      ]
    })
  }
</script>
