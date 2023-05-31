<script>

import { store } from '../data/store';

export default {
  name: "TheCards",
  data(){
        return{
            store,
        }
    },
}

</script>

<template>

    <div class="containerComponent">
        <div class="text">
            <h1>Trusted by Leading Organisations</h1>
        </div>
        <div class="containerCards"></div>
    </div>

</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;

.containerComponent{
    width: 1320px;
    margin: 0 auto;
    height: 800px;
    border: 1px solid black;
    margin-top: 150px;
}

.text{
    font-size: 1.4rem;
    text-align: center;
}


</style>