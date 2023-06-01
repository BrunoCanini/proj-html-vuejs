<script>

import { store } from '../data/store';

export default {
  name: "TheSearchbar",
  data(){
        return{
            store,
        }
    },
}

</script>

<template>

    <div class="containerSearchbar">

        <div class="boxLogo">
            <img src="../assets/img/avada-marketing-logo-2x-400x74.png" alt="">
        </div>
        <div class="boxLink">
            <a v-for="link in this.store.links" href="">{{ link }}</a>
            <span> <i class="fa-solid fa-phone iconAwesome"></i> {{ this.store.phoneNumber }} </span>
            <button>Free Quote</button>
        </div>

    </div>

</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;

.containerSearchbar{
    padding: 2rem 0;
    max-width: 1320px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

.boxLogo{
    width: 230px;

    img{
        width: 100%;
    }
}

.boxLink{
    display: flex;
    align-items: center;
    flex-grow: 1;
    justify-content: space-around;

    a{
        text-decoration: none;
        color: $black;
    }

    button{
        color: $orange;
        padding: 15px;
        width: 178px;
        border-radius: 0.5rem;
        border: none;
        background-color: #ffe7da;
        font-weight: bolder;
    }
}

.iconAwesome{
    color: $orange;
    padding: 0 0.5rem;
}

a:hover{
    color: $orange;
    border-bottom: 2px solid $orange;
}

button:hover{
  background-color: $hoverButton;
  color: white;
}



</style>