<script>

import ThePacket from './ThePacket.vue';
import TheBrands from './TheBrands.vue';
import TheCards from './TheCards.vue';

export default {
  name: "AppMain",
  components:{
    ThePacket,
    TheBrands,
    TheCards,
  },
}


</script>

<template>

    <main>
        <ThePacket />
        <TheBrands />
        <TheCards />
    </main>

</template>

<style lang="scss" scoped>

</style>