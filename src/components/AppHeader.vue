<script >
export default {
    name: "AppHeader",
}
</script>

<template>
    <div class="topbar">
        <div class="logo">
            <h1> BOOLFLIX </h1>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
@use '../style/general.scss' as *;

.topbar {
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-color: $bg-secondary;

    h1 {
        color: $text-tertiary;
        font-size: 20px;
    }
}
</style>
