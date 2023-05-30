<script>

import ThePacket from './ThePacket.vue';
import TheBrands from './TheBrands.vue';

export default {
  name: "AppMain",
  components:{
    ThePacket,
    TheBrands,
  },
}


</script>

<template>

    <main>
        <ThePacket />
        <TheBrands />
    </main>

</template>

<style lang="scss" scoped>

</style>