<script >
export default {
    name: "AppFooter",
}
</script>

<template>
    <h1 onclick="location.reload(true)"> BOOLFLIX </h1>
    <h5>"The Ultimate film and serie tv Machine."</h5>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
@use '../style/general.scss' as *;

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
</style>
