<script>

import { store } from '../data/store';

export default {
  name: 'TheFooterLink',
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

        <div class="containerFooterLink">
            <div class="col4">
                <div class="top">
                    <h3>Grow Your Online Business Strategically, and Improve Customer Retention.</h3>
                    <div class="containerFont">
                        <div class="font"> <i class="fa-brands fa-facebook-f" style="color: #000000;"></i> </div>
                        <div class="font"> <i class="fa-brands fa-twitter" style="color: #000000;"></i> </div>
                        <div class="font"> <i class="fa-brands fa-instagram" style="color: #000000;"></i> </div>
                        <div class="font"> <i class="fa-brands fa-youtube" style="color: #000000;"></i> </div>
                        <div class="font"> <i class="fa-brands fa-linkedin-in" style="color: #000000;"></i> </div>
                        <div class="font"> <i class="fa-brands fa-tiktok" style="color: #000000;"></i> </div>
                    </div>
                </div>
                <div class="buttom">
                    <span> <i class="fa-regular fa-copyright" style="color: #000000;"></i> 2020 - Avada Consultant - Powered by WorldPress </span>
                </div>
            </div>
            <div class="col2">
                <div class="top">
                    <h4>Services</h4>
                    <ul>
                        <template v-for="link in store.footerLinks.services">
                            <li ><a href="">{{ link }}</a></li>
                        </template>
                    </ul>
                </div>
                <div class="buttom">
                    <span>Call Us {{ store.phoneNumber }}</span>
                </div>
            </div>
            <div class="col2">
                <div class="top">
                    <h4>Resources</h4>
                    <ul>
                        <template v-for="link in store.footerLinks.resources">
                            <li ><a href="">{{ link }}</a></li>
                        </template>
                    </ul>
                </div>
            </div>
            <div class="col2">
                <div class="top">
                    <h4>Company</h4>
                    <ul>
                        <template v-for="link in store.footerLinks.company">
                            <li ><a href="">{{ link }}</a></li>
                        </template>
                    </ul>
                </div>
                <div class="buttom">
                    <span>{{ store.emailCompany }}</span>
                </div>
            </div>

        </div>

        <div class="popap">
            <div class="popapImg"> <img src="../assets/img/marketing-expert-cta.png" alt=""> </div>
            <div class="popapText">
                <p>This is a free HubSpot live chat. You can create your own chat flows and engage your customers with Avada & HubSpot!</p>
            </div>
            <div class="popapIcon"> <i class="fa-solid fa-message" style="color: #ffffff;"></i> </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;

.color{
    width: 100%;
    background-color: #efeff2;
    position: relative;
}

.containerFooterLink{
    max-width: 1320px;
    height: 660px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 110px 0;
}

.col4{
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

        .top{
            width: 100%;
            h3{
                font-size: 1.5rem;
            }
                .containerFont{
                    width: 220px;
                    margin: 30px 0;
                    display: flex;
                        .font{
                            width: calc(100% / 6);
                        }
                }
    
        }
}

li{
    list-style-type: none;
    line-height: 2.5rem;

        a{
            text-decoration: none;
            color: $black;
        }
}

.col2{
    width: 15%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

        h4{
            padding-bottom: 1.5rem;
        }
}

span{
    font-size: small;
}

// popap

.popap{
    width: 230px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: fixed;
    right: 17px;
    bottom: 17px;
}

.popapText{
    background-color: white;
    width: 230px;
    height: 160px;
    padding: 0 1rem;
    color: rgb(86, 86, 86);
    display: flex;
    justify-content: center;
    align-items: center;
}

.popapImg{
    width: 50px;
    height: 50px;

        img{
            width: 100%;
            border-radius: 50%;
            position: relative;
            top: 25px;
        }
}

.popapIcon{
    width: 65px;
    height: 65px;
    background-color: $orange;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-top: 20px;
    position: relative;
    left: 80px;
}
</style>