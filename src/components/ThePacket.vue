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
                    <div class="logo"></div>
                    <div class="title"></div>
                </div>
                <div class="info2">
                    
                </div>
            </div>
        </div>
        <div class="box">
            <div class="right"></div>
            <div class="left">
                <img src="../assets/img/image (1) (1).png" alt="">
            </div>
        </div>
        <div class="box">
            <div class="left">
                <img src="../assets/img/image (2).png" alt="">
            </div>
            <div class="right"></div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;

.boxPacket{
    height: 2400px ;
    width: 100%;
    padding: 100px 300px;
}

.box{
    display: flex;
    flex-wrap: nowrap;
}

.left{
    width: 50%;
    border: 1px solid black;
}

.right{
    width: 50%;
    border: 1px solid black;
}



</style>