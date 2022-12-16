<script >

export default {
    name: "AppMain",
    props: ["info"]
}
</script>

<template>
    <div class="card">
        <img :src="info.poster_path" alt="">
        <div>
            Lingua:{{ info.original_language }}
        </div>
        <div>
            Lingua originale:{{ info.original_language }}
        </div>
        <div>
            Titolo: {{ info.title }}
        </div>
        <div>
            Voto: {{ info.vote_average }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
@use '../style/general.scss' as *;

.card {
    text-align: center;

    img {
        width: 50%;
    }
}
</style>