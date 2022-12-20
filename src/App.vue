<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppSearch from './components/AppSearch.vue';
import AppInfoUser from './components/AppInfoUser.vue';
import AppFooter from './components/AppFooter.vue';
import axios from 'axios'
import { store } from './store.js';

export default {
  name: "App",
  components: {
    AppHeader,
    AppSearch,
    AppInfoUser,
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
  <header>
    <AppHeader />
    <div class="left_side">
      <AppSearch @searchTitle="getMovies" />
      <AppInfoUser />
    </div>
  </header>
  <main class="container">
    <AppMain />
  </main>
  <footer>
    <AppFooter />
  </footer>
</template>

<style lang="scss">
@use './style/partials/variables.scss' as *;
@use './style/general.scss' as *;

header {
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 65px;
  background-color: $bg-secondary;
  position: fixed;
  z-index: 999;
  width: 100%;

  .left_side {
    display: flex;
    gap: 20px;
    height: 35px;
  }
}

footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 65px;
  background-color: $bg-secondary;
  width: 100%;
  position: fixed;
  z-index: 999;
  bottom: 0;
}
</style>
