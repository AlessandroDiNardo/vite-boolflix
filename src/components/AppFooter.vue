<script >
export default {
    name: "AppFooter",
}
</script>

<template>
    <div class="bottombar">
        <h1>BOOLFLIX</h1>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
@use '../style/general.scss' as *;

.bottombar {
    height: 100px;
    padding: 20px 0;
    text-align: center;
    background-color: $bg-secondary;
    color: red;
}
</style>
