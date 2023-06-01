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

    </div>

</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;

.color{
    width: 100%;
    background-color: #efeff2;
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
</style>