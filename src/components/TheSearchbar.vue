<script>

export default {
  name: "TheSearchbar",
}

</script>

<template>

    <div class="containerSearchbar">

        <div class="boxLogo"></div>
        <div class="boxLink"></div>
        <div class="boxButton"></div>

    </div>

</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;

.containerSearchbar{
    height: 115px;
    width: 100%;
    border: 1px solid black;
}


</style>