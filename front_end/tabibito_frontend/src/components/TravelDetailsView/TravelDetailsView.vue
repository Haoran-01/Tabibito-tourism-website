<template>
  <navigation-bar></navigation-bar>

  <section class="pd" >
    <div class="TDCon" style="margin-top: 80px;">
      <div class="space">
        <div class="TDTit">
          <h1 class="TDT">{{ details.name }}</h1>

          <div class="lower">
            <div class="TDRow">
              <img class="star" src="../../assets/star.svg" alt="">
              <img class="star" src="../../assets/star.svg" alt="">
              <img class="star" src="../../assets/star.svg" alt="">
              <img class="star" src="../../assets/star.svg" alt="">
              <img class="star" src="../../assets/star.svg" alt="">
            </div>
            <div class="TDReview">{{ details.reviews }} reviews</div>

            <img class="loc" src="../../assets/location.svg" alt="">
            <div class="TDLoc">{{ details.location }}</div>

            <button class="map">Show on map</button>

          </div>

        </div>
      </div>
    </div>
  </section>

  <section class="pd">
    <div class="TDCon">
      <div class="DTCols1">

        <div class="TDInput_border">

          <button type="submit" class="TDAdd_btn" @click="checkLogin">
            See All Photos
            <div class="icon_add"></div>
          </button>
        </div>

        <n-carousel show-arrow class="TDImg" draggable>
          <img
              class="carousel-img"
              src="{{ details.cover_image }}"
          >

          <div v-for="imgURL in details.banner_image">
            <img
                class="carousel-img"
                src="{{ imgURL }}"
            >
          </div>

        </n-carousel>

        <h3 class="TDTex1">
          Tour snapshot
        </h3>

        <div class="TDRow1">
          <div class="TDR1">
            <img class="TDIcon1" src="../../assets/time_icon.svg" alt="">
            <div class="TDT1">
              Duration:<br> {{ duration }} Day
            </div>
          </div>

          <div class="TDR1">
            <img class="TDIcon1" src="../../assets/group.svg" alt="">
            <div class="TDT1">
              Group Size:<br> {{ details.group_number }}
            </div>
          </div>

          <div v-for="tag in details.tags">
          <div class="TDR1">
            <img class="TDIcon1" src="../../assets/transport.svg" alt="">
            <div class="TDT1">
              Tag: <br>{{ tag }}
            </div>
          </div>

<!--          <div class="TDR1">-->
<!--            <img class="TDIcon1" src="../../assets/no.svg" alt="">-->
<!--            <div class="TDT1">-->
<!--              Free Cancellation-->
<!--            </div>-->
<!--          </div>-->
        </div>

        </div>

        <!--Draw a line to separate-->
        <div class="TDLine"></div>

        <div class="TDOverview">
          <h3 class="TDTex2">Overview</h3>

          <p class="TDTex3">
            {{ details.description }}
          </p>
        </div>



      </div>

      <!--   The slide block  -->
      <div class="TDConBox" :style="{top: blockTop}">
        <div class="TDBox">
          <div class="TDTex5">
            Price <span class="TDTex6">US${{ details.price }}</span>
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
                  v-model:value="groupNum"
                  placeholder="Group Number"
                  :min="1"
                  :max="10"
                  size="large"
              />
            </n-space>
          </div>

          <div class="book">
            <div class="input_border">
              <button type="submit" class="add_step_btn c" @click="handleClickProject">
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

  <charge-list></charge-list>

  <div class="TDLine full"></div>

  <guest-reviews></guest-reviews>

  <div class="TDLine full"></div>

  <leave-reply></leave-reply>

  <div class="TDLine full"></div>

  <similar-experiences></similar-experiences>

  <footer-view></footer-view>
</template>

<script>
import ChargeList from "./chargeList.vue";
import GuestReviews from "./guestReviews.vue";
import LeaveReply from "./leaveReply.vue";
import SimilarExperiences from "./similarExperiences.vue";
import NavigationBar from "../GeneralComponents/navigationBar.vue";
import footerView from "../GeneralComponents/footerView.vue";
import axios from 'axios';
import {ref} from "vue";
import { useToast } from "vue-toastification";



export default {
  name: "TravelDetailsView",
  components: {NavigationBar, SimilarExperiences, LeaveReply, GuestReviews, ChargeList, footerView},

  data() {
    return {
      blockHeight: 210, // 制作区块高度
      threshold: 650, // 页面滚动的阈值
      scrollTop: 0, // 页面滚动距离

      // 后端拿到的数据
      details: [],
      duration: 0,

    };
  },

  setup(){
    let startTime = ref();
    let endTime = ref();
    let groupNum = ref("groupNum");

    const toast = useToast();


    return{
      startTime,
      endTime,
      groupNum,
      toast,

      // 控制可以选择的时间范围
      secureStartTime(ts) {
        if (startTime.value != null){
          return ts > startTime.value;
        }
        else {
          return ts < Date.now();
        }
      },
      secureEndTime(ts){
        if (endTime.value != null){
          return ts < endTime.value;
        }
        else {
          return ts < Date.now();
        }
      },

      handleClickProject() {
        if (startTime.value === 0 || startTime.value === null || endTime.value === null || endTime.value === 0 || currentLocation.value === "select") {
          return;
      }
        axios.post("http://127.0.0.1:5000/product/detail_post",
            {
              start_time: startTime.value,
              end_time: endTime.value,
              groupNum: groupNum,
            }
        )
            .then(function (response){
              if (response.data.code === 200){
                this.toast.error("Successfully Reservation");
              }
            })
    }
    }
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);

    axios.get('http://127.0.0.1:5000/product/detail')
        .then(response => {
          this.details = response.data.details;

          const num1 = new Date(this.details.end_time).getTime()
          const num2 = new Date(this.details.start_time).getTime()
          let diffMs = num1-num2
          // 将毫秒数转换为天数
          this.duration = Math.floor(diffMs / (1000 * 60 * 60 * 24))

        })
        .catch(error => {
          console.error(error);
        });

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

.TDInput_border{
  flex:0 0 auto;
  width:100%;
  margin-top: 20px;
}

.TDAdd_btn{
  position: absolute;
  font-weight: 900;
  font-size: 16px;
  line-height: 1.2;
  border-radius: 4px;
  border: 1px solid transparent;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);

  padding-top: 15px !important;
  padding-bottom: 15px !important;

  margin-top: 440px;
  margin-left: 20px;
  z-index: 100;


  background-color: white !important;
  color: #3554D1;
  width:170px;
  text-decoration:none;
  font-family: Jost;
}

.TDAdd_btn:hover{
  background-color: #3554D1 !important;
  color: white !important;
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
  margin-top: 40px !important;
  margin-bottom: 40px !important;
  margin-left: auto;
  margin-right: auto;
  max-width: 1320px;
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
  margin: 0;
}

.TDTex3{
  color: #051036;
  font-size: 15px;
  margin: 20px 0 0;
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