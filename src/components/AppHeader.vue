<script>

import TheSearchbar from './TheSearchbar.vue'

export default {
  name: "AppHeader",
  components:{
    TheSearchbar,
  },
}


</script>

<template>
    <TheSearchbar />

</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;


</style>