<script >
export default {
    name: "AppFooter",
}
</script>

<template>
    <h1 onclick="location.reload(true)"> BOOLFLIX </h1>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
@use '../style/general.scss' as *;

h1 {
    color: $text-tertiary;
    font-size: 20px;

    &:hover {
        cursor: pointer;
    }
}
</style>
