<script>

import TheSearchbar from './TheSearchbar.vue'
import TheJumbotron from './TheJumbotron.vue';

export default {
  name: "AppHeader",
  components:{
    TheSearchbar,
    TheJumbotron,
  },
}


</script>

<template>

  <header>
    <TheSearchbar />
    <TheJumbotron />
  </header>

</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;


</style>