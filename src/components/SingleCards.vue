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
                <span>Titolo Originale:</span> {{ info.title }}
            </div>
            <div>
                <span>Lingua originale:</span> {{ info.original_language }}
            </div>
            <div>
                <span>Voto:</span> {{ info.vote_average }}
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
    margin-bottom: 80px;
    border: 1px solid white;

    img {
        width: 100%;
        height: 100%;
    }

    .text-block {
        width: 100%;
        font-size: 15px;
        color: $text-primary;

        span {
            color: rgba(255, 0, 0, 0.648);
        }
    }
}
</style>