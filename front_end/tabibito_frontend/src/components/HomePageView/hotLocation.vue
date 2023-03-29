<template>
  <section class="position">
    <div class="hotContainer">
      <div class="hotHeader">
        <div class="column">
          <h2 class="title">Explore Hot Locations</h2>
          <p class="title2">Choose The Popular Travel Places</p>
        </div>
        <div class="column">
          <button class="moreBtn">
            More
            <div class="icon"></div>
          </button>
        </div>
      </div>


      <!--      第一个图片区块-->
      <div class="blocks">
        <div class="rect">
          <a class="clickArea">
            <div class="box">
            <img class="image" src="../../assets/1.png" alt="">
            </div>
            <div class="text">
            <div class="text1">Miami</div>
            <div class="text2">4,090 properties</div>
            </div>
          </a>
        </div>

      <!--      第二图片区块-->
        <div class="rect">
          <a class="clickArea">
            <div class="box">
              <img class="image" src="../../assets/1.png" alt="">
            </div>
            <div class="text">
              <div class="text1">Miami</div>
              <div class="text2">4,090 properties</div>
            </div>
          </a>

        </div>

      <!--      第三图片区块-->
        <div class="rect">
          <a class="clickArea">
            <div class="box">
              <img class="image" src="../../assets/1.png" alt="">
            </div>
            <div class="text">
              <div class="text1">Miami</div>
              <div class="text2">4,090 properties</div>
            </div>
          </a>
        </div>

        <!--      第四个图片区块-->
        <div class="rect">
          <a class="clickArea">
            <div class="box">
              <img class="image" src="../../assets/1.png" alt="">
            </div>
            <div class="text">
              <div class="text1">Miami</div>
              <div class="text2">4,090 properties</div>
            </div>
          </a>
        </div>

        <!--      第五个图片区块-->
        <div class="rect">
          <a class="clickArea">
            <div class="box">
              <img class="image" src="../../assets/1.png" alt="">
            </div>
            <div class="text">
              <div class="text1">Miami</div>
              <div class="text2">4,090 properties</div>
            </div>
          </a>
        </div>

        <!--      第六个图片区块-->
        <div class="rect">
          <a class="clickArea">
            <div class="box">
              <img class="image" src="../../assets/1.png" alt="">
            </div>
            <div class="text">
              <div class="text1">Miami</div>
              <div class="text2">4,090 properties</div>
            </div>
          </a>
        </div>

        <!--      第七个图片区块-->
        <div class="rect">
          <a class="clickArea">
            <div class="box">
              <img class="image" src="../../assets/1.png" alt="">
            </div>
            <div class="text">
              <div class="text1">Miami</div>
              <div class="text2">4,090 properties</div>
            </div>
          </a>
        </div>

        <!--      第八个图片区块-->
        <div class="rect">
          <a class="clickArea">
            <div class="box">
              <img class="image" src="../../assets/1.png" alt="">
            </div>
            <div class="text">
              <div class="text1">Miami</div>
              <div class="text2">4,090 properties</div>
            </div>
          </a>
        </div>


      </div>

    </div>


  </section>

<!--  <customer-review></customer-review>-->
<!--  <inspiration></inspiration>-->
<!--  <not-a-member></not-a-member>-->

</template>

<script>
import CustomerReview from "./customerReview.vue";
import Inspiration from "./inspiration.vue";
import NotAMember from "./notMember.vue";

export default {
name: "hotLocation",
  components: {NotAMember, Inspiration, CustomerReview}
}
</script>

<style scoped>
.position{
  padding-top: 60px;
  padding-bottom: 60px;
  font-family: Jost;
}

.hotContainer{
  width:100%;
  padding-right:15px;
  padding-left:15px;
  margin-right:auto;
  margin-left:auto;
}

@media (min-width:576px){
  .hotContainer{
    max-width:540px
  }
}

@media (min-width:768px){
  .hotContainer{max-width:720px}
}

@media (min-width:992px){
  .hotContainer{
    max-width:960px
  }
}

@media (min-width:1200px){
  .hotContainer{
    max-width:1140px
  }
}

@media (min-width:1400px){
  .hotContainer{
    max-width:1320px
  }
}


.hotHeader{
  display:flex;
  flex-wrap:wrap;
  /*margin: 10px 80px;*/
  justify-content: space-between;
  align-items: flex-end;
}

.column{
  flex: 0 0 auto;
  width: auto
}

.title{
  font-size: 30px;
  font-family: JostBlod;
}

.title2{
  color: #697488;
}
.moreBtn{
  font-family: Jost,serif;
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  text-align: center;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.2;
  border-radius: 4px;
  border: 1px solid transparent;

  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  padding: 14px 39px;
  background-color: rgba(53, 84, 209, 0.05);
  color: #3554D1;

  margin-top: -68px;
}

.moreBtn:hover{
  background-color: #3554D1 !important;
  color: white;
}

.icon{
  background-image: url("../../assets/blue_arrow.svg");
  margin-left: 15px !important;

  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 18px;
  height: 18px;
}

.moreBtn:hover .icon{
  background-image: url("../../assets/arrow.svg");
  margin-left: 15px !important;

  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 18px;
  height: 18px;
}

.blocks{
  display: flex;
  flex-wrap: wrap;
  padding-top: 10px;
}

.rect{
  flex:0 0 auto;
  width:25%;

  padding-top: 30px;
}

.clickArea{
  display: flex;
  flex-wrap:wrap;

  align-items: center;
}
.box{
  height: 100px;
  overflow: hidden;
}

.image{
  flex:0 0 auto;
  border-radius: 4px;

  flex-shrink: 0;
  width: 100px;
  height: 100px;
}

.clickArea .image{
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.clickArea:hover .image{
  transform: scale(1.15);
  border-radius: 4px;

}

.text{
  flex:0 0 auto;
  width:auto;
  margin-left: 20px;
}

.text1{
  font-size: 18px;
  font-weight: 500;
}

.text2{
  font-size: 14px;
  line-height: 1.4 !important;
  color: #697488;
  margin-top: 5px
}

@media screen and (max-width:992px) {
  .rect{
    padding-top: 15px;
  }
  .clickArea{
    justify-content: center;

  }
  .text1{
    text-align: center;
  }
  .text{
    margin-left: 0;
  }
}




</style>
