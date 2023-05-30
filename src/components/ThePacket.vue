<script>

export default {
  name: "ThePacket",
  components:{

  },
}

</script>

<template>

    <div class="boxPacket">

        <div class="box">
            <div class="left">
                <img src="../assets/img/image (1).png" alt="">
            </div>
            <div class="right">
                <div class="info">
                    <div class="logo blu"></div>
                    <div class="title">
                        <h5>Business Growth</h5>
                    </div>
                </div>
                <div class="info2">
                    <h1>Increase Brand Awareness</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore deleniti hic repellendus maiores explicabo qui id laudantium est sed, ratione at. Laudantium eum saepe quibusdam velit, voluptatum neque excepturi alias.</p>
                    <button>Get a consultation</button>
                </div>
            </div>
        </div>

        <div class="box">
            <div class="right">
                <div class="info">
                    <div class="logo yellow"></div>
                    <div class="title">
                        <h5>Investor In People</h5>
                    </div>
                </div>
                <div class="info2">
                    <h1>In-House Sales Training</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore deleniti hic repellendus maiores explicabo qui id laudantium est sed, ratione at. Laudantium eum saepe quibusdam velit, voluptatum neque excepturi alias.</p>
                    <button>Get a consultation</button>
                </div>
            </div>
            <div class="left">
                <img src="../assets/img/image (1) (1).png" alt="">
            </div>
        </div>
        <div class="box">

            <div class="left">
                <img src="../assets/img/image (2).png" alt="">
            </div>
            <div class="right">
                <div class="info">
                    <div class="logo green"></div>
                    <div class="title">
                        <h5>Social Media Analysis</h5>
                    </div>
                </div>
                <div class="info2">
                    <h1>Herness Your Social Proof</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore deleniti hic repellendus maiores explicabo qui id laudantium est sed, ratione at. Laudantium eum saepe quibusdam velit, voluptatum neque excepturi alias.</p>
                    <button>Get a consultation</button>
                </div>
            </div>
        </div>

    </div>

</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;

.boxPacket{
    max-width: 1320px;
    margin: 0 auto;
    padding: 100px 0px 0px 0px;
}

.box{
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    margin: 150px 0;
}

.left{
    width: 50%;

        img{
            width: 480px;
        }
}

.right{
    width: 50%;
    padding-right: 200px;
}

.logo{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 0.5rem;
}

.blu{
    background-color: $blue;
}

.yellow{
    background-color: $yellow;
}

.green{
    background-color: $green;
}

.info{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

.info2{
    p{
        padding: 35px 0;
        font-size: 1.2rem;
    }

    h1{
        font-size: 2.5rem;
        margin-top: 1rem;
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

#reverse{
    flex-direction: row-reverse;
}


</style>