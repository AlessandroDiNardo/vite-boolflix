<script>
import { store } from '../store.js';

export default {
    name: "AppSearch",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="search-block">
        <div class="search-bar">
            <input type="text" v-model="store.searchMovie" @keyup.enter="$emit('searchTitle')" id="search"
                placeholder="Search...">
            <div class="search-glass">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </div>
        </div>
        <button type="submit" @click.prevent="$emit('searchTitle')" id="btn-search">Search</button>
    </div>
</template> 


<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
@use '../style/general.scss' as *;

.search-block {
    display: flex;
    gap: 10px;

    .search-bar {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        border-top-left-radius: 20px;
        border-bottom-right-radius: 20px;
        width: 200px;
        padding: 10px 0;
        background-color: white;
        color: $text-secondary;
        border: none;
        transition: 1s;

        #search {
            border: none;
            background: none;
            text-align: center;
        }

        .search-glass {
            position: absolute;
            top: 35%;
            right: 90%;
            font-size: 10px;
        }

        &:hover {
            border-top-right-radius: 20px;
            border-bottom-left-radius: 20px;
            border-top-left-radius: 0px;
            border-bottom-right-radius: 0px;
            color: $text-primary;
            transition-timing-function: ease-in-out;
            box-shadow: inset 15px 15px 30px rgb(0, 89, 255), inset -15px -15px 30px rgb(0, 89, 255);
        }
    }

    #btn-search {
        padding: 0 20px;
        border: none;
        font-size: 12px;
        cursor: pointer;
        background-color: $text-primary;
        color: $text-secondary;
        border-top-right-radius: 15px;
        border-bottom-left-radius: 15px;
        transition: 1s;

        &:hover {
            transition-timing-function: ease-in-out;
            background-color: $bg-primary;
            color: $text-primary;
            box-shadow: inset 15px 15px 15px rgb(0, 89, 255), inset -15px -15px 15px rgb(0, 89, 255);
            border: none;
            border-top-right-radius: 0px;
            border-bottom-left-radius: 0px;
            border-top-left-radius: 15px;
            border-bottom-right-radius: 15px;
        }
    }
}
</style>