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
        <div class="boxText">
            <h1>Some Brands We Work With</h1>
            <span>Quisque aliquet, libero consequat, elementum convallis.</span>
        </div>
        <div class="box flexWrap">
            <div class="brand"> <img src="../assets/img/sponsor1.png" alt=""> </div>
            <div class="brand"> <img src="../assets/img/sponsor2.png" alt=""> </div>
            <div class="brand"> <img src="../assets/img/sponsor3.png" alt=""> </div>
            <div class="brand"> <img src="../assets/img/sponsor4.png" alt=""> </div>
            <div class="brand"> <img src="../assets/img/sponsor5.png" alt=""> </div>
            <div class="brand"> <img src="../assets/img/sponsor6.png" alt=""> </div>
        </div>
        <div class="boxInfo flexWrap">
            <div class="infoImg"> <img src="../assets/img/marketing-expert-cta.png" alt=""> </div>
            <div class="infoName">
                <h4>Sandy Reiff</h4>
                <span>Marketing Consultant Expert</span>
            </div>
            <div class="info">
                <h2>Drive Leades and Sales whit Avada</h2>
            </div>
            <div class="infoNumber">
                <button><i class="fa-solid fa-phone iconAwesome"><span>{{ this.store.phoneNumber }}</span></i></button>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;

.containerBrands{
    max-width: 1320px;
    margin: 0 auto;
    height: 500px;
}

.boxText{
    text-align: center;

        h1{
            font-size: 2.5rem;
            padding: 0 0 20px 0;
        }
}

.brand{
    width: calc(100% / 6);
    padding-top: 50px;

        img{
            width: 100%;
        }
}

.boxInfo{
    width: 100%;
    padding: 1rem;
    box-shadow: 3px 3px 3px 3px rgba(128, 128, 128, 0.074);
    margin: 150px 0 20px 0;
    justify-content: space-around;
    align-items: center;

        .infoImg{
            width: 65px;
                img{
                    width: 100%;
                    border-radius: 50%;
                }
        }

        .infoNumber{
            button{
                width: 230px;
                padding: 1rem;
                color: $orange;
                background-color: #ffe7da;
                border: none;
                border-radius: 0.35rem;
            }

            span{
                padding-left: 0.5rem;
                font-family: sans-serif;
                font-weight: bold;
            }

        }
}


</style>