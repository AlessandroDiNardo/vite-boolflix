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
    <section class="container">
        <div class="search-bar">
            <input type="text" id="search">
            <button id="btn-search">
                SEARCH
            </button>
        </div>
        <div class="cards-container">
            <SingleCards v-for="(movie, index) in store.movieList" :key="index" :info="movie" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
@use '../style/general.scss' as *;

.container {
    background-color: $bg-primary;

    .search-bar {
        text-align: end;
        padding: 20px;
        color: $text-secondary;

        #search {
            margin-right: 20px;
            text-align: center;
            border: 1px solid $bg-primary;
            border-radius: 7px;
        }

        #btn-search {
            padding: 5px;
            border: 1px solid white;
            border-radius: 5px;
            background-color: white;
            font-size: 12px;
            cursor: pointer;
        }
    }

    .cards-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 50px;
        padding: 10px 100px 100px;
    }
}
</style>
