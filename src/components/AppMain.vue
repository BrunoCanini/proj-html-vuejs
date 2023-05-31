<script>

import ThePacket from './ThePacket.vue';
import TheBrands from './TheBrands.vue';
import TheCards from './TheCards.vue';
import TheOptimizing from './TheOptimizing.vue';
import TheResources from './TheResources.vue';

export default {
  name: "AppMain",
  components:{
    ThePacket,
    TheBrands,
    TheCards,
    TheOptimizing,
    TheResources,
  },
}


</script>

<template>

    <main>
        <ThePacket />
        <TheBrands />
        <TheCards />
        <TheOptimizing />
        <TheResources />
    </main>

</template>

<style lang="scss" scoped>

</style>