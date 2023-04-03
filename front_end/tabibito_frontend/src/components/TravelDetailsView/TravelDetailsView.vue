<template>
  <section class="pd">
    <div class="TDCon">
      <div class="space">
        <div class="TDTit">
          <h1 class="TDT">Stonehenge, Windsor Castle, and Bath from London</h1>

          <div class="lower">
            <div class="TDRow">
              <img class="star" src="../../assets/star.svg" alt="">
              <img class="star" src="../../assets/star.svg" alt="">
              <img class="star" src="../../assets/star.svg" alt="">
              <img class="star" src="../../assets/star.svg" alt="">
              <img class="star" src="../../assets/star.svg" alt="">
            </div>
            <div class="TDReview">3,014 reviews</div>

            <img class="loc" src="../../assets/location.svg" alt="">
            <div class="TDLoc">Greater London, United Kingdom</div>

            <button class="map">Show on map</button>

          </div>

        </div>
      </div>
    </div>
  </section>

  <section class="pd">
    <div class="TDCon">
      <div class="DTCols1">
        <n-carousel show-arrow class="TDImg" draggable>
          <img
              class="carousel-img"
              src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
          >
          <img
              class="carousel-img"
              src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
          >
          <img
              class="carousel-img"
              src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
          >
          <img
              class="carousel-img"
              src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
          >
        </n-carousel>

        <h3 class="TDTex1">
          Tour snapshot
        </h3>

        <div class="TDRow1">
          <div class="TDR1">
            <img class="TDIcon1" src="../../assets/time_icon.svg" alt="">
            <div class="TDT1">
              Duration:<br> 11h
            </div>
          </div>

          <div class="TDR1">
            <img class="TDIcon1" src="../../assets/group.svg" alt="">
            <div class="TDT1">
              Group Size:<br> 100
            </div>
          </div>

          <div class="TDR1">
            <img class="TDIcon1" src="../../assets/transport.svg" alt="">
            <div class="TDT1">
              Convenient <br>Transportation
            </div>
          </div>

          <div class="TDR1">
            <img class="TDIcon1" src="../../assets/no.svg" alt="">
            <div class="TDT1">
              Free Cancellation
            </div>
          </div>
        </div>


        <!--Draw a line to separate-->
        <div class="TDLine"></div>

        <div class="TDOverview">
          <h3 class="TDTex2">Overview</h3>

          <p class="TDTex3">
            Unless you hire a car, visiting Stonehenge, Bath, and Windsor Castle in one day is next to impossible. Designed specifically for travelers with limited time in London, this tour allows you to check off a range of southern England's historical attractions in just one day by eliminating the hassle of traveling between each one independently. Travel by comfortable coach and witness your guide bring each UNESCO World Heritage Site to life with commentary. Plus, all admission tickets are included in the tour price.
          </p>
        </div>



      </div>

      <!--   The slide block  -->
      <div class="TDConBox" :style="{top: blockTop}">
        <div class="TDBox">
          <div class="TDTex5">
            Price <span class="TDTex6">US$72</span>
          </div>


          <!--     date chosen     -->
          <div class="TDDate">
            <div class="TDOptionName">Date</div>
            <!--                <div class="optionValue" id="durationValue" @click="handleSelectTime">{{currentTimePeriod}}</div>-->
            <div class="TDDataPickers">
              <n-date-picker v-model:value="startTime" type="date" :is-date-disabled="secureStartTime" size="medium" clearable placeholder="Start Date"/>
              <span>—</span>
              <n-date-picker v-model:value="endTime" type="date" placement="bottom-end" :is-date-disabled="secureEndTime" size="medium" clearable placeholder="End Date"/>
            </div>
          </div>

          <!--     number     -->
          <div class="TDDate">
            <div class="TDOptionName">Number of travelers</div>
            <n-space vertical>
              <n-input-number
                  v-model:value="value"
                  placeholder="Group Number"
                  :min="1"
                  :max="10"
                  size="large"
              />
            </n-space>
          </div>

          <div class="book">
            <div class="input_border">
              <button type="submit" class="add_step_btn c" @click="verify">
                Book Now
              </button>
            </div>
          </div>

          <div class="com">
            <img class="love" src="../../assets/love4.svg">
            <div class="TDTex7">More than half of travelers recommend this trip</div>
          </div>

        </div>

        <div class="TDTex4">Not sure? You can cancel this reservation up to 24 <br> hours in advance for a full refund.</div>
        </div>
    </div>

    <!--Draw a line to separate-->
    <div class="TDLine full"></div>


  </section>


</template>

<script>
export default {
  name: "TravelDetailsView",

  data() {
    return {
      blockHeight: 210, // 制作区块高度
      threshold: 650, // 页面滚动的阈值
      scrollTop: 0, // 页面滚动距离
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
    },
  },
  computed: {
    blockTop() {
      if (this.scrollTop > this.threshold) {
        return `${this.threshold+70 -this.scrollTop}px`;
      } else if (this.scrollTop > this.blockHeight-70) {
        return "70px";
      } else {
        return `${this.blockHeight - this.scrollTop}px`;
      }
    },
  },
}
</script>

<style scoped>
.pd{
  padding-top: 40px !important;
}

.space{
  display:flex;
  flex-wrap:wrap;
  justify-content: space-between !important;
  align-items: flex-end !important;
}

.TDTit{
  flex:0 0 auto;
  width:auto;
}

.TDT{
  font-weight: 100;
  font-size: 30px;
  font-family: JostBlod;
}

.lower{
  display:flex;
  flex-wrap:wrap;
  align-items: center !important;
  padding-top: 10px !important;
}

.TDRow{
  flex:0 0 auto;
  width:auto;
  display:flex!important;
  align-items: center !important;
}

.star{
  width: 13px;
  margin-right: 3px;
}

.loc{
  width: 16px;
  margin-left: 18px;
}

.TDReview{
  font-size: 14px;
  color: #697488;
  margin-left: 10px !important;
}

.TDLoc{
  font-size: 14px;
  color: #697488;
  margin-left: 5px;
}

.map{
  color: #3554D1;
  font-size: 14px;
  text-decoration: underline;
  border: none;
  background-color: transparent;
  margin-left: 10px;
  font-family: Jost;
}

.TDImg{
  //display:flex;
  height: 502px;
  flex-wrap:wrap;
  flex:0 0 auto;
  border-radius: 3px;
}

.carousel-img {
  width: 100%;
  height: 502px;
  object-fit: cover;
}

.TDTex1{
  font-size: 22px;
  font-weight: 500;
  margin-top: 25px !important;
}

.TDRow1{
  display:flex;
  flex-wrap:wrap;
  justify-content: space-between !important;
  width: 100%;
}

.TDR1{
  flex:0 0 auto;
  width: auto;
  display: flex !important;
}

.TDT1{
  font-size: 15px;
  line-height: 1.5 !important;
  font-family: JostLight;
  font-weight: 900;
}

.TDIcon1{
  width: 26px;
  margin-right: 10px !important;
  margin-top: -20px;
}

.TDLine{
  border-top: 1px solid #DDDDDD;
  margin-top: 40px !important;
  margin-bottom: 40px !important;
  width: 100%;
}

.full{
  margin-top: 90px !important;
  margin-bottom: 40px !important;
  margin-left: auto;
  margin-right: auto;
  width: 75%;
}

.TDOverview{
  display:flex;
  flex-wrap:wrap;

  flex:0 0 auto;
  width: 100%;
}

.TDTex2{
  font-size: 22px;
  font-weight: 500;
}

.TDTex3{
  color: #051036;
  font-size: 15px;
  //margin-top: 20px !important;
  line-height: 2.5;
  font-weight: 100;
}

.DTCols1{
  //display:flex;
  //flex-wrap:wrap;
  flex:0 0 auto;
  width: 850px;
}

.TDBox{
  flex:0 0 auto;

  justify-content: flex-end !important;

  flex-direction:column!important;
  align-items: center !important;

  border-radius: 4px;
  padding: 30px !important;
  border: 1px solid #DDDDDD !important;
  background-color: #FFFFFF;
  box-shadow: 0 10px 60px 0 #0510360D;

  width: 300px;
  height: 380px;
}

.TDConBox{
  position: fixed;
  display:flex;
  flex-wrap:wrap;
  margin-left: 935px;
}

.TDTex4{
  padding-left: 30px !important;
  padding-right: 30px !important;
  font-size: 14px;
  color: #697488;
  margin-top: 30px !important;
}

.TDTex5{
  font-size: 15px;
  color: #697488;
}

.TDTex6{
  font-size: 20px;
  font-weight: 500;
  color: #051036;
  margin-left: 5px !important;
  font-family: JostBlod;
}

.TDDate{
  margin-top: 30px;
}

.book{
  margin-top: 25px;
}

.com{
  display:flex!important;
  align-items: center !important;
  padding-top: 20px !important;
}

.TDOptionName{
  margin-bottom: 10px;
  font-size: 17px;
}

.TDDataPickers{
  display: flex;
}

.input_border{
  flex:0 0 auto;
  width:100%;
}

.love{
  display: flex;
  justify-content: center;
  align-items: center;

  height: 35px;
}

.TDTex7{
  font-size: 14px;
  line-height: 1.6 !important;
  margin-left: 10px !important;
  font-family: JostLight;
  font-weight: 900;
}


.add_step_btn{
  font-family: Jost;
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
  border-radius: 4px;
  border: 1px solid transparent;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);

  width: 100%;
  padding-top: 15px !important;
  padding-bottom: 15px !important;

  background-color: #3554D1 !important;
  color: #FFFFFF;

  text-decoration:none;
}

.add_step_btn.c:after{
  content: '»';
  opacity: 0;
  margin-left: 17px;
  transition: 0.5s;
  font-size: 23px;
}


.add_step_btn.c:hover:after {
  opacity: 1;
  right: 0;
  padding-left: 17px;
}

.add_step_btn:hover{
  border-color:  #051036;
  background-color: #051036 !important;
  color: white !important;
}

.TDCon{
  width:100%;
  //width: 500px;
  padding-right:15px;
  padding-left: 15px;
  margin-right:auto;
  margin-left:auto;

  display: flex;
  flex-wrap:wrap;
}

@media (min-width:576px){
  .TDCon{
    max-width:540px
  }
}

@media (min-width:768px){
  .TDCon{max-width:720px}
}

@media (min-width:992px){
  .TDCon{max-width:960px}
}

@media (min-width:1200px){
  .TDCon{
    max-width:1140px
  }
}

@media (min-width:1400px){
  .TDCon{
    max-width:1320px
  }
}

</style>