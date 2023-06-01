<script>

import { store } from '../data/store';

export default {
  name: 'TheFooterForm',
  components:{

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

        <div class="containerFooterForm">
            <div class="containerText">
                <h1>Let's Make things Happen</h1>
                <p>Curabitur ac leo nunc. Vestibulum et maurius vel ante finibus maximus nec et leo. Integer consectetur</p>
                <hr>
                <p class="custom">"The team at Avada Marketing Consultant is fabolous. They helped us unlock our potential online ad offline. We have experienced year on year growth due to their progressive approach."</p>
                <span>George Anderson</span>
                <br><small>Digitalbox CEO</small>
            </div>

            <div class="boxInForm">
                <div class="boxImg">
                    <img src="../assets/img/marketing-consultant-expert.jpg" alt="">
                    <h3>Richard Madsen</h3>
                    <p>Marketing Consulting Expert</p>
                    <span><i class="fa-solid fa-phone iconAwesome"></i>{{ this.store.phoneNumber }}</span>
                </div>
                <div class="boxForm">
                    <form action="">
                        <input type="name" placeholder="You Name*">
                        <input type="email" placeholder="Your Email*">
                        <input type="number" placeholder="Your Phone Number*">
                        <button type="submit">Get a Callback</button>
                    </form>
                    <span>By submitting my data i gree to be contacted</span>
                </div>
            </div>

        </div>

    </div>

</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;

.color{
    width: 100%;
    background-color: $black;
}

.containerFooterForm{
    max-width: 1320px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 110px 0;
}

.containerText{
    width: 50%;
    color: white;
    padding: 0 180px 0 0;

        h1{
            font-size: 3.5rem;
            // 3
        }

        p{
            font-size: 1.6rem;
            padding: 25px 0;
        }

        hr{
            width: 15%;
            margin: 20px 0;
        }

        .custom{
            font-size: 1.2rem;
            font-family: initial;
        }

        span{
            font-size: 0.9rem;
            font-weight: 700;
        }

        small{
            font-size: x-small;
            color: rgba(255, 255, 255, 0.54)
        }
}

.boxInForm{
    // width: 35%;
    width: 475px;
    height: 626px;
    background-color: white;
    border-radius: 0.7rem;
    border: 1px solid rgba(128, 128, 128, 0.2);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 40px;
    box-shadow: 3px 5px rgba(128, 128, 128, 0.074);
    margin-right: 90px;

        .boxImg{    

            text-align: center;

            img{
                width: 80px;
                border-radius: 50%;
            }

            h3{
                padding-top: 20px;
                font-size: 22px;
            }

            p{
                padding: 28px 0;
                font-size: 16px;
                color: $grey;
            }

            span{
                color: $orange;
            }
        }

        .iconAwesome{
            color: $orange;
            padding: 0 0.5rem;
        }

        input{
            width: 100%;
            padding: 25px;
            margin: 10px 0;
            border-radius: 0.5rem;
            border: 1px solid rgba(128, 128, 128, 0.45);
        }

        .boxForm{

            text-align: center;

            button{
                width: 100%;
                padding: 20px;
                margin-bottom: 1rem;
                border-radius: 0.5rem;
                border: none;
                background-color: $orange;
                color: $white;
                font-weight: bolder;
            }

            span{
                color: $grey;
                font-size: smaller;
            }
        }

}

</style>