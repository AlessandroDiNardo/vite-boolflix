<script >

export default {
    name: "SingleCards",
    props: {
        info: Object
    }
}
</script>

<template>
    <div class="card">
        <img :src="`https://image.tmdb.org/t/p/w200/${info.poster_path}`" alt="">
        <div class="text-block">
            <div>
                Titolo Originale: <span>{{ info.title }}</span>
            </div>
            <div>
                Lingua originale: <span>{{ info.original_language }}</span>
            </div>
            <div>
                Voto: <span>{{ info.vote_average }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
@use '../style/general.scss' as *;

.card {
    width: 250px;
    height: 400px;
    line-height: 25px;
    margin-bottom: 50px;

    img {
        width: 100%;
    }

    .text-block {
        font-size: 15px;
        color: $text-primary;

        &:nth-of-type(3) {
            color: $text-tertiary;
        }
    }
}
</style>