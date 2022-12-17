<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppSearch from './components/AppSearch.vue';
import AppFooter from './components/AppFooter.vue';
import axios from 'axios'
import { store } from './store.js';

export default {
  name: "App",
  components: {
    AppHeader,
    AppSearch,
    AppMain,
    AppFooter
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getMovies() {

      let myUrl = store.apiKey;
      // condizione:
      if (store.searchMovie !== "") {
        myUrl = `${store.apiSearchMovie}&query=${store.searchMovie}`
      }

      axios
        .get(myUrl)
        .then(res => {
          store.movieList = res.data.results;
        })
        .catch(err => {
          console.log("errori", err)
        });
    }
  },
  mounted() {
    this.getMovies();
  }
}
</script>

<template>
  <section class="container">
    <header>
      <AppHeader />
      <AppSearch @searchTitle="getMovies" />
    </header>
    <main>
      <AppMain />
    </main>
    <footer>
      <AppFooter />
    </footer>
  </section>
</template>

<style lang="scss">
@use './style/partials/variables.scss' as *;
@use './style/general.scss' as *;

header {
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  background-color: $bg-secondary;
  position: fixed;
  z-index: 999;
  width: 100%;
}

footer {
  padding: 30px 0;
  text-align: center;
  background-color: $bg-secondary;
}
</style>
