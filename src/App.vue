<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">{{ apiData }} DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import axios from 'axios';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      apiData: '',
    };
  },
  mounted() {
        const url = 'http://api.' + process.env.VUE_APP_SERVER_DOMAIN + '/test';
        axios.get(url)
        .then((response) => {
            this.apiData = response.data;
        })
        .catch((err) => {
            console.error(err);
        });
    },
}
</script>
