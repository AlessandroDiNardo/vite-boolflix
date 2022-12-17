<script >

export default {
    name: "SingleCards",
    props: {
        info: Object
    },
    data() {
        return {
            flagList: [
                {
                    img: "img/it.png",
                    lang: "it"
                },
                {
                    img: "img/fr.png",
                    lang: "fr"
                },
                {
                    img: "img/gb.png",
                    lang: "en"
                },
                {
                    img: "img/es.png",
                    lang: "es"
                },
                {
                    img: "img/de.png",
                    lang: "de"
                },
                {
                    img: "img/jp.png",
                    lang: "ja"
                },
                {
                    img: "img/pl.png",
                    lang: "pl"
                }
            ]
        }
    },
    computed: {
        // funzione per trasformare stringa statica della lingua in immagine: 
        getFlags() {
            for (let i = 0; i < this.flagList.length; i++) {
                if (this.flagList[i].lang.includes(this.info.original_language)) {
                    return this.flagList[i].img
                }
            }
            return this.flagList[this.flagList.length - 1].img
        },
        // funzione per trasformare il voto da 1 a 10 decimale in un numero intero da 1 a 5:
        getVote() {
            return Math.round(this.info.vote_average / 2);
        }
    }
}

</script>

<template>
    <div class="card">
        <img :src="`https://image.tmdb.org/t/p/w500/${info.poster_path}`" alt="">
        <div class="text-block">
            <div v-if="info.title">
                <div>Titolo Film: {{ info.title }}</div>
                <div>Titolo originale film: {{ info.original_title }}</div>
            </div>
            <div v-else-if="info.name">
                <div>Titolo serie tv: {{ info.name }}</div>
                <div>Titolo originale serie tv : {{ info.original_name }}</div>
            </div>
            <div>
                Language: {{ info.original_language }}
                <img :src="getFlags" alt="flags" class="flags">
            </div>
            <div class="star">
                <span>Voto:</span>
                <div v-for="star in getVote">
                    <font-awesome-icon icon="fa-solid fa-star" />
                </div>
                <div v-for="star in 5 - getVote">
                    <font-awesome-icon icon="fa-regular fa-star" />
                </div>
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
    margin-bottom: 150px;
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

    .flags {
        width: 10%;
    }

    .star {
        display: flex;
    }
}
</style>