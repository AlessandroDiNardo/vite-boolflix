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
                    img: "img/us.png",
                    lang: "us"
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
                },
                {
                    img: "img/noFlags.png",
                    lang: ""
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
    <div class="card-block">
        <div class="card">
            <img :src="`https://image.tmdb.org/t/p/w500/${info.poster_path}`" alt=""
                onerror="this.src = '/img/imgNotFound.png';">
            <div class=" text-block">
                <div class="over-block">
                    <div>
                        <span>Lingua: </span>
                        <img :src="getFlags" alt="flags" class="flags">
                    </div>
                    <div class="star">
                        <span>Voto:</span>
                        <div v-for="star in getVote">
                            <font-awesome-icon icon="fa-solid fa-star" />
                        </div>
                        <div v-for="star in 4 - getVote">
                            <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
                        </div>
                    </div>
                    <div class="overview">
                        <span>Overview: </span>{{ info.overview }}
                    </div>
                </div>
            </div>
        </div>
        <div v-if="info.title">
            <div class="title">
                {{ info.title }}
            </div>
        </div>
        <div v-else-if="info.name">
            <div class="title">
                {{ info.name }}
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
@use '../style/general.scss' as *;

.card-block {
    text-align: center;
    width: 250px;
    color: $text-primary;
    margin-bottom: 30px;

    .card {
        width: 250px;
        height: 100%;
        line-height: 25px;
        margin-bottom: 10px;
        position: relative;
        overflow-y: auto;
        scrollbar-width: thin;
        scrollbar-color: rgb(0, 89, 255) rgb(0, 0, 0);

        img {
            width: 100%;
            height: 100%;
            transition: 0.7s;
        }

        .text-block {
            display: block;
            width: 100%;
            font-size: 15px;
            color: $text-primary;

            span {
                color: rgba(255, 0, 0, 0.648);
            }

            .flags {
                width: 10%;
                opacity: 1;
            }

            .star {
                display: flex;
                color: yellow;
                justify-content: center;
            }

            .over-block {
                display: none;
            }
        }

        &:hover {
            img {
                width: 100%;
                height: 100%;
                opacity: 0.3;
                border-radius: 20px;
                transition-timing-function: ease-in-out;
            }

            .over-block {
                display: block;
                width: 100%;
                position: absolute;
                top: 0;
                text-align: center;
                padding: 5px 10px;
            }
        }
    }
}
</style>