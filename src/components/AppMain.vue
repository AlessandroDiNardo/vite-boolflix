<script >
import SingleCards from './SingleCards.vue';
import { store } from '../store.js';


export default {
    name: "AppMain",
    components: {
        SingleCards
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="cards-container">
        <SingleCards v-for="(movie, index) in store.movieList" :key="index" :info="movie" />
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
@use '../style/general.scss' as *;

.cards-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 25px;
    padding: 100px 0;
}
</style>
