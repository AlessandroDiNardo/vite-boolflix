<script >
export default {
    name: "AppFooter",
}
</script>

<template>
    <div class="text-footer">
        <h1 onclick="location.reload(true)"> BOOLFLIX </h1>
        <h5>"The Ultimate film and serie tv Machine."</h5>
    </div>
    <ul class="socials">
        <li>
            <font-awesome-icon icon="fa-brands fa-square-facebook" />
        </li>
        <li>
            <font-awesome-icon icon="fa-brands fa-twitter" />
        </li>
        <li>
            <font-awesome-icon icon="fa-brands fa-instagram" />
        </li>
        <li>
            <font-awesome-icon icon="fa-brands fa-youtube" />
        </li>
    </ul>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
@use '../style/general.scss' as *;

.text-footer {

    h1 {
        color: $text-tertiary;
        font-size: 20px;
        margin-bottom: 10px;

        &:hover {
            cursor: pointer;
        }
    }

    h5 {
        color: $text-tertiary;
    }

}

.socials {
    color: $text-tertiary;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    list-style: none;

    li {
        color: $text-tertiary;
        font-size: 20px;
        transition: 0.7s;

        &:hover {
            color: $text-primary;
            cursor: pointer;
            transition-timing-function: ease-in-out;
        }
    }
}
</style>
