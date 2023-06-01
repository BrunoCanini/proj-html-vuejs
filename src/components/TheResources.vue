<script>

import { store } from '../data/store';

export default {
  name: "TheResources",
  data(){
        return{
            store,
        }
    },
}

</script>

<template>

<div class="color">
    <div class="containerResources">
        <div class="containerA">
            <h1>Marketing Resources: <br>Insider Advice on How to <br>Increase Online Sales</h1>
            <button>Explore All Resources</button>
        </div>
        <div class="containerB">
            <div class="card">
                <div class="cardImg"> <img src="../assets/img/blog-posts-6.jpg" alt=""> </div>
                <div class="cardText">
                    <p>Marketing Tips And Tricks For Your Website</p>
                </div>
            </div>

            <div class="card">
                <div class="cardImg"> <img src="../assets/img/blog-posts-5.jpg" alt=""> </div>
                <div class="cardText">
                    <p>How to Write Stunning Blog Post Titles</p>
                </div>
            </div>

            <div class="card">
                <div class="cardImg"> <img src="../assets/img/blog-posts-4.jpg" alt=""> </div>
                <div class="cardText">
                    <p>Techniques to Reduce Facebook Ads Spend</p>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;

.color{
    width: 100%;
    background-color: #efeff2;
}

.containerResources{
    max-width: 1320px;
    margin: 0 auto;
    padding-top: 150px;

}

.containerA{
    position: relative;

        h1{
            font-size: 2.4rem;
        }

        button{
            padding: 0.7rem 1.3rem;
            color: $white;
            background-color: $orange;
            border-radius: 0.35rem;
            border: none;
            font-weight: bolder;
            position: absolute;
            bottom: 0;
            right: 0;
        }

}

.containerB{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.card{
    padding: 85px 0;
    width: calc(100% / 3 - 30px);

        .cardImg{
            width: 100%;

                img{
                    width: 100%;
                }
        }
}

.cardText{
    p{
        font-size: 1.4rem;
        font-weight: 600;
        padding: 1rem 0;
    }
}

// hover

.cardImg:hover{
    filter: saturate(400%);
}

button:hover{
  background-color: $hoverButton;
}


</style>