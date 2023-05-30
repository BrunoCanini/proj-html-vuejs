<script>

import { store } from '../data/store';

export default {
  name: "TheBrands",
  data(){
        return{
            store,
        }
    },
}

</script>

<template>
    
    <div class="containerBrands">
        <div class="box">
            <h1>Some Brands We Work With</h1>
            <span>Quisque aliquet, libero consequat, elementum convallis.</span>
        </div>
        <div class="box">

        </div>
        <div class="box"></div>
    </div>

</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;

.containerBrands{
    max-width: 1320px;
    margin: 0 auto;
    height: 500px;
    border: 1px solid black;
}

.box{
    text-align: center;

        h1{
            font-size: 2.5rem;
            padding: 0 0 25px 0;
        }
}


</style>