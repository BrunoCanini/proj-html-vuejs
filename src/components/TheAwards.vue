<script>

import { store } from '../data/store';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Pagination } from 'swiper';

export default {
  name: "TheAwards",
  components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [FreeMode, Pagination],
      };
    },
  data(){
        return{
            store,
        }
    },
}

</script>

<template>

    <div class="containerAwards">
        <h2 class="center">Awards</h2>
        <div class="scrolling">
            <swiper :slidesPerView="4" :spaceBetween="30" :freeMode="true" :modules="modules" class="mySwiper">

                <swiper-slide class="castom">
                    <div class="swiperImg">
                        <img src="../assets/img/award-a.png" alt="">
                    </div>
                    <div class="center">
                        <p>Winner Seo Master MAGT</p>
                        <p>Smart Start Award 2017</p>
                    </div>
                </swiper-slide>

                <swiper-slide class="castom">
                    <div class="swiperImg">
                        <img src="../assets/img/award-b.png" alt="">
                    </div>
                    <div class="center">
                        <p>Top Social Media Agencias</p>
                        <p>Next Partner 2018</p>
                    </div>
                </swiper-slide>

                <swiper-slide class="castom">
                    <div class="swiperImg">
                        <img src="../assets/img/award-c.png" alt="">
                    </div>
                    <div class="center">
                        <p>10 Fastest Growing Abstract</p>
                        <p>Solution Providers 2019</p>
                    </div>
                </swiper-slide>

                <swiper-slide class="castom">
                    <div class="swiperImg">
                        <img src="../assets/img/award-d.png" alt="">
                    </div>
                    <div class="center">
                        <p>National Excellence Agencie</p>
                        <p>Award Winner 2020</p>
                    </div>
                </swiper-slide>

                <swiper-slide class="castom">
                    <div class="swiperImg">
                        <img src="../assets/img/award-a.png" alt="">
                    </div>
                    <div class="center">
                        <p>Winner Seo Master MAGT</p>
                        <p>Smart Start Award 2017</p>
                    </div>
                </swiper-slide>

                <swiper-slide class="castom">
                    <div class="swiperImg">
                        <img src="../assets/img/award-b.png" alt="">
                    </div>
                    <div class="center">
                        <p>Winner Seo Master MAGT</p>
                        <p>Smart Start Award 2017</p>
                    </div>
                </swiper-slide>

                <swiper-slide class="castom">
                    <div class="swiperImg">
                        <img src="../assets/img/award-c.png" alt="">
                    </div>
                    <div class="center">
                        <p>Winner Seo Master MAGT</p>
                        <p>Smart Start Award 2017</p>
                    </div>
                </swiper-slide>

                <swiper-slide class="castom">
                    <div class="swiperImg">
                        <img src="../assets/img/award-d.png" alt="">
                    </div>
                    <div class="center">
                        <p>Winner Seo Master MAGT</p>
                        <p>Smart Start Award 2017</p>
                    </div>
                </swiper-slide>


            </swiper>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;

.containerAwards{
    max-width: 1320px;
    margin: 0 auto;
}

.center{
    text-align: center;

        p{
            padding: 0.3rem 0;
        }

}

.castom{
    width: 250px;
    height: 200px;
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
        img{
            width: 100%;
        }
}

.swiperImg{
    width: 120px;
    height: 120px;
}

</style>