<script>
export default {
    name: "AppInfoUser"
}
</script>

<template>
    <div class="info-block">
        <button class="alert">
            <font-awesome-icon icon="fa-solid fa-bell" />
        </button>
        <div class="img_user">
            <img src="img/Trevor.jpg" alt="">
        </div>
        <button class="other-users">
            <font-awesome-icon icon="fa-solid fa-sort-down" />
        </button>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
@use '../style/general.scss' as *;

.info-block {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    button {
        background-color: black;
        border: none;
    }

    .alert {
        color: $text-primary;

        &:hover {
            cursor: pointer;
            color: yellow;
        }
    }

    .img_user {
        width: 35px;

        img {
            width: 100%;
            border-radius: 5px;
        }
    }

    .other-users {
        font-size: 15px;
        color: $text-primary;
        margin-bottom: 8px;

        &:hover {
            cursor: pointer;
            color: rgb(0, 89, 255);
        }
    }
}
</style>