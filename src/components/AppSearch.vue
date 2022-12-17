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
    <div class="search-bar">
        <input type="text" v-model="store.searchMovie" @keyup.enter="$emit('searchTitle')" id="search">
        <button type="submit" @click.prevent="$emit('searchTitle')" id="btn-search">Search</button>
    </div>
</template> 


<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
@use '../style/general.scss' as *;

.search-bar {
    background-color: $bg-primary;
    text-align: end;
    padding: 30px;
    color: $text-secondary;

    #search {
        margin-right: 20px;
        text-align: center;
        border: 1px solid $bg-primary;
        border-radius: 7px;
        padding: 5px 0;
        width: 120px;
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
</style>