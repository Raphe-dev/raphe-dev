<template>
  <v-container fluid>
    <v-layout row wrap align-content-space-between>
        <v-flex lg7 md12 xs12>
          <v-flex
            text-sm-left >
            <h1> What can I do for you? </h1>
            <p class="text--secondary">
              <v-expansion-panel v-for="(item, key) in data" :key="key">
                <v-expansion-panel-content>
                  <template v-slot:header>
                    <div>{{item.title}}</div>
                  </template>
                  <v-card>
                    <v-card-text>
                      {{item.text}}
                    </v-card-text>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </p>
          </v-flex>
        </v-flex>
    </v-layout>
  </v-container>
</template> 

<script>
  export default {
    name: 'can-do',
    data: () => ({
      data: [
        {title: 'A website', text: ''},
        {title: 'An application', text: ''},
        {title: 'Optimisation', text: ''},
        {title: 'Make your dream come true', text: ''}
      ]
    })
  }
</script>
