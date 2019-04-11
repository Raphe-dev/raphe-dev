<template>
  <v-container fluid>
    <v-layout row wrap align-content-space-between>
        <v-flex lg7 md12 xs12>
          <v-flex
            text-sm-left >
            <h1> What can I do for you? </h1>
            <p class="text--secondary">
              <v-expansion-panel>
                <v-expansion-panel-content>
                  <template v-slot:header>
                    <div>A website</div>
                  </template>
                  <v-card>
                    <v-card-text>

                    </v-card-text>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-content>
                  <template v-slot:header>
                    <div>An application</div>
                  </template>
                  <v-card>
                    <v-card-text>

                    </v-card-text>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-content>
                  <template v-slot:header>
                    <div>Optimisation</div>
                  </template>
                  <v-card>
                    <v-card-text>

                    </v-card-text>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-content>
                  <template v-slot:header>
                    <div>But there's things I can't do</div>
                  </template>
                  <v-card>
                    <v-card-text>
                      
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
      
    })
  }
</script>
