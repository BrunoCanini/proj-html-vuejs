<script>

import { store } from '../data/store';
import TheAwards from './TheAwards.vue';

export default {
  name: "TheOptimizing",
  components:{
    TheAwards,
  },
  data(){
        return{
            store,
        }
    },
}

</script>

<template>
    <div class="color">
        <div class="containerOptimizing flexWrap">

            <div class="boxText flexWrap">
                <div>
                    <h1>We Boost Our Clients'Buttom Line by Optimizing Their Growth Potential.</h1>
                    <p>Quisque aliquet, libero consequat elementum convalis, errat risus imperdiet pellentensque sem neque eget.</p>
                    <button>Why Work Whith Us</button>
                </div>
            </div>
            <div class="boxImg"> <img src="../assets/img/we-boost-our-clients.jpg" alt=""> </div>
            <div class="boxText flexWrap">
                <div>
                    <h2>We Build Relationships</h2>
                    <p>Curabitur ac leo nunc. Vestibulum et maurius ante finibus maximus nec ut leo. Integer consectetur.</p>
                    <h2>Proprietary Processes</h2>
                    <p>Curabitur ac leo nunc. Vestibulum et maurius ante finibus maximus nec ut leo. Integer consectetur.</p>
                </div>
            </div>
            <div class="boxText flexWrap">
                <div class="flexWrap">
                    <div class="miniImg"> <img src="../assets/img/image (2) (1).png" alt=""> </div>
                    <div class="fixPadding">
                        <h3>Accountability</h3>
                        <p>Curabitur ac leo nunc vestibulum</p>
                    </div>

                    <div class="miniImg"> <img src="../assets/img/image (3).png" alt=""> </div>
                    <div class="fixPadding">
                        <h3>Accountability</h3>
                        <p>Curabitur ac leo nunc vestibulum</p>
                    </div>

                    <div class="miniImg"> <img src="../assets/img/image (4).png" alt=""> </div>
                    <div class="fixPadding">
                        <h3>Accountability</h3>
                        <p>Curabitur ac leo nunc vestibulum</p>
                    </div>
                </div>
            </div>

        </div>

        <TheAwards />

        <div class="containerAvada">
            <div class="contImg"> <img src="../assets/img/case-studies-5.jpg" alt=""> </div>
            <div class="contText">
                <div>
                    <h2>"The team at Avada Marketing Consultant is fabolous. They Helped us unlock our potential online ad offline. We have experienced year growth due to their progressive approach."</h2>
                    <p>Kate Schadler</p>
                    <span>Marketing Consultant - Abstract</span>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;

.containerOptimizing{
    max-width: 1320px;
    margin: 0 auto;
    padding: 100px 0 20px 0;
}

.boxText{
    width: 50%;
    height: 570px;
    padding: 50px 100px;
    justify-content: center;
    align-items: center;

        h1{
            font-size: 2.5rem;
        }

        p{
            font-size: 1.3rem;
            padding: 20px 0;
        }

        button{
        padding: 0.8rem;
        color: $white;
        background-color: $orange;
        border-radius: 0.35rem;
        border: none;
        font-weight: bolder;
        }

}

.boxImg{
    width: 50%;
    height: 570px;

        img{
            width: 100%;
            height: 100%;
            border-radius: 0.5rem;
        }
}

.fixPadding{
    padding: 0.7rem;
}

.color{
    width: 100%;
    background-color: $panna;
}

.containerAvada{
    max-width: 1320px;
    margin: 0 auto;
    margin-top: 200px;
    display: flex;
    flex-wrap: wrap;

        .contImg{
            width: 50%;
            height: 590px;

                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 0.5rem;
                }
        }

        .contText{
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10rem;

                h2{
                    padding-bottom: 2rem;
                }

                p{
                    padding-bottom: 0.6rem;
                    font-weight: bold;
                    color:rgb(49, 45, 45);

                }

                span{
                    font-size: small;
                }
        }
}

</style>