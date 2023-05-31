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
        <div class="containerCards flexWrap">

            <div class="card">
                <div class="cardImg"> <img src="../assets/img/case-studies-1.jpg" alt=""> </div>
                <div class="cardText">
                    <p>How Spaces attracted five million visitors by improving the content</p>
                </div>
                <div class="cardJumbo">
                    <h1>200%</h1>
                    <span>higer revenue from digital</span>
                </div>
            </div>

            <div class="card">
                <div class="cardImg"> <img src="../assets/img/case-studies-4.jpg" alt=""> </div>
                <div class="cardText">
                    <p>Creativity helped Hemisferio to increase their brand reach vertically</p>
                </div>
                <div class="cardJumbo">
                    <h1>10x</h1>
                    <span>Sales increase with the same ad spend</span>
                </div>
            </div>

            <div class="card">
                <div class="cardImg"> <img src="../assets/img/case-studies-6.jpg" alt=""> </div>
                <div class="cardText">
                    <p>How DigitalBox used Al-powered data insight to boost sales</p>
                </div>
                <div class="cardJumbo">
                    <h1>3-year</h1>
                    <span>Partnership with Avada Consultant</span>
                </div>
            </div>

            <div class="boxButton">
                <button>Read More Case Studies</button>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;

.containerComponent{
    width: 1320px;
    margin: 0 auto;
    margin-top: 150px;
}

.text{
    font-size: 1.3rem;
    text-align: center;
    padding-bottom: 70px;
}

.containerCards{
    justify-content: space-between;
}

.card{
    width: calc(100% / 3 - 30px);

        .cardImg{
            width: 100%;
            height: 460px;

                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: top;
                }
        }

        .cardText{
            p{
                font-size: 1.3rem;
                font-weight: 600;
                padding: 1rem 0;
            }
        }

        .cardJumbo{
            h1{
                font-size: 2.5rem;
                padding: 10px 0;
            }
        }
}

.boxButton{
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 70px 0;

        button{
            padding: 0.8rem 1.3rem;
            color: $white;
            background-color: $orange;
            border-radius: 0.35rem;
            border: none;
            font-weight: bolder;
        }
}

</style>