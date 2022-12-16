<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import axios from 'axios'
import { store } from './store.js';

export default {
  name: "App",
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getMovies() {
      axios
        .get(myURL)
        .then(res => {
          store.movieList = res.data.results;
        })
        .catch(err => {
          console.log("ERRORI", err);
        }
        );
    }
  },
  mounted() {
    this.getMovies();
  }
}
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <main>
    <AppMain />
  </main>
  <footer>
    <AppFooter />
  </footer>
</template>

<style lang="scss">
@use './style/partials/variables.scss' as *;
@use './style/general.scss' as *;
</style>
