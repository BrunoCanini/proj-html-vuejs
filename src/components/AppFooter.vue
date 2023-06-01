<script>

import TheFooterForm from './TheFooterForm.vue';
import TheFooterLink from './TheFooterLink.vue';

export default {
  name: "AppFooter",
  components:{
    TheFooterForm,
    TheFooterLink,
  },
}

</script>

<template>

    <footer>
        <TheFooterForm />
        <TheFooterLink />
    </footer>

</template>

<style lang="scss" scoped>

</style>
