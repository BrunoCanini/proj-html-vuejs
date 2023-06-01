<script>

import { store } from '../data/store';


export default {
  name: "TheJumbotron",
  data(){
        return{
            store,
        }
    },
}

</script>

<template>

    <div class="containerJumbotron">

        <div class="containerWidth">

            <div class="boxJumbotron">
                <h1>Unlock Your Online Growth Potential</h1>
                <p>Online marketing to secure customer retention, leads, and sales. We focus on the bigger picture</p>
                <button>Our services <i class="fa-solid fa-arrow-right"></i> </button>
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

            <div class="boxAdvertising">
                <div class="box1"></div>
                <div class="box2"></div>
            </div> 

        </div>

    </div>



</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;

.containerJumbotron{
    padding: 100px 0;
    height: 690px;
    width: 100%;
    background-image: url(../assets/img/marketing-intro.jpg);
    background-position: center;
    background-size: cover;
    position: relative;
}

.containerWidth{
    max-width: 1320px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
}

.boxJumbotron{
    width: 45%;
    color: $white;
    padding: 25px 0;
    margin-right: 120px;

        h1{
            font-size: 55px;
        }

        p{
            font-size: 25px;
            padding: 45px 0;
        }

        button{
            width: 180px;
            padding: 20px;
            border-radius: 0.5rem;
            font-weight: bold;
            border: none;
        }
}

.boxInForm{
    width: 35%;
    background-color: white;
    border-radius: 0.7rem;
    border: 1px solid rgba(128, 128, 128, 0.2);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 40px;
    box-shadow: 3px 5px rgba(128, 128, 128, 0.074);

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
.boxAdvertising{
    position: absolute;
    right: 0;
    top: 0;
}

.box1 , .box2{
   width: 65px; 
   height: 65px;
   background-color: bisque;
   margin: 1rem;
   border-radius: 0.5rem;
}

.box1{
    background-image: url(../assets/img/htmlmgEs.png);
    background-size: contain;
}

.box2{
    background-image: url(../assets/img/vueImgEs.png);
    background-size: cover;
}


</style>