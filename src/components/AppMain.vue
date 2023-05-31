<script>

import ThePacket from './ThePacket.vue';
import TheBrands from './TheBrands.vue';
import TheCards from './TheCards.vue';
import TheOptimizing from './TheOptimizing.vue';

export default {
  name: "AppMain",
  components:{
    ThePacket,
    TheBrands,
    TheCards,
    TheOptimizing,
  },
}


</script>

<template>

    <main>
        <ThePacket />
        <TheBrands />
        <TheCards />
        <TheOptimizing />
    </main>

</template>

<style lang="scss" scoped>

</style>