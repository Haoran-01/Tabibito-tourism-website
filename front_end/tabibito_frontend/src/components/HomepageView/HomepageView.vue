<template>
  <navigation-bar :is-transparent="true"></navigation-bar>

  <section class="specialPart">
      <div class="specialBackgroundLeft"></div>
      <div class="specialPartCore">
        <div class="specialCoreContainer">
          <h1 class="specialTitle">Best Travel
            <span class="specialTitleTail">Experience
              <span class="specialTitleDecoration">
                <img class="decorationImg" src="../../assets/line.png"/>
              </span>
            </span>
          </h1>
          <p class="specialSlogan">Experience the various exciting tour and travel packages and Make hotel reservations, find vacation packages, search cheap hotels and events</p>
          <div class="searchBar">
            <div class="search">
              <div class="locationOption">
                <div class="optionName">Location</div>
                <n-dropdown
                  trigger="click"
                  placement="bottom-start"
                  :options="locationOptions"
                  @select="handleSelectLocation"
                >
                  <div class="optionValue" id="locationValue">{{currentLocation}}</div>
                </n-dropdown>
              </div>
              <div class="durationOption">
                <div class="optionName">Start Date - End Date</div>
<!--                <div class="optionValue" id="durationValue" @click="handleSelectTime">{{currentTimePeriod}}</div>-->
                <n-date-picker :value="currentTimePeriod" type="daterange" :is-date-disabled="disablePreviousDate" size="small" clearable/>
              </div>
              <div class="tagOption">
                <div class="optionName">Tags</div>
<!--                <div class="optionValue" id="tagValue">fdsfds</div>-->
                <n-select
                    v-model:value="tagValue"
                    multiple
                    :render-tag="renderTag"
                    :options="tags"
                    max-tag-count="responsive"
                />
              </div>
              <div class="searchButton">
                <div class="searchButtonContent">
                  <div class="searchButtonIcon"></div>
                  <div class="searchButtonText">Search</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="specialBackgroundRight"></div>
    </section>


  <most-popular-tours></most-popular-tours>
  <choose-tour-types></choose-tour-types>
  <hot-location></hot-location>

  <section class="discountPart" style="overflow: hidden">
    <div class="discountTitleArea">
      <div class="discountTitle">Deals & Discounts</div>
      <div class="discountSlogan">We provide following discounts for you</div>
    </div>
    <div class="discountMain">
      <div class="discountCover">
        <div class="discountCoverTextArea">
          <div class="discountCoverTitle1">Enjoy Spring Deals</div>
          <div class="discountCoverTitle2">Book Early to Save</div>
          <div class="discountCoverBookButton">Book Now</div>
        </div>
      </div>
      <discount-items></discount-items>
    </div>
  </section>

  <section class="statistics">
    <div class="figure">
      <n-number-animation show-separator
                          :from="0"
                          :to="10"
                          class="mainFigure"></n-number-animation>
      <div class="figureName">Reviews</div>
    </div>
    <div class="figure">
      <n-number-animation show-separator
                          :from="0"
                          :to="10"
                          class="mainFigure"></n-number-animation>
      <div class="figureName">Travel Projects</div>
    </div>
    <div class="figure">
      <n-number-animation show-separator
                          :from="0"
                          :to="10"
                          class="mainFigure"></n-number-animation>
      <div class="figureName">Happy customers</div>
    </div>
    <div class="figure">
      <n-number-animation show-separator
                          :from="0"
                          :to="10"
                          class="mainFigure"></n-number-animation>
      <div class="figureName">Monthly Income</div>
    </div>
  </section>

  <section class="whyChooseUsSection">
    <div class="whyChooseImg"></div>
    <div class="whyChooseCore">
      <div class="whyChooseContent">
        <h2 class="whyChooseTitle">Why Choose Us</h2>
        <div class="whyChooseSlogan">These popular destinations have a lot to offer</div>
        <div class="whyChooseFeatures">
          <div class="whyChooseFeature">
            <div class="featureIcon shieldIcon"></div>
            <div class="featureTextArea">
              <h4 class="featureName">Precise Info Guarantee</h4>
              <div class="featureText">We are trying our best to provide precise information about the trips.</div>
            </div>
          </div>
          <div class="whyChooseFeature">
            <div class="featureIcon bookingIcon"></div>
            <div class="featureTextArea">
              <h4 class="featureName">Easy & Quick Reserving</h4>
              <div class="featureText">By only a few steps, you can reserve a new trip easily.</div>
            </div>
          </div>
          <div class="whyChooseFeature">
            <div class="featureIcon careIcon"></div>
            <div class="featureTextArea">
              <h4 class="featureName">Customer Care 24/7</h4>
              <div class="featureText">Every customer can access to our customer service staffs.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <customer-review></customer-review>
  <inspiration></inspiration>
  <footer-view></footer-view>
</template>

<script>
import NavigationBar from "../GeneralComponents/navigationBar.vue";
import {h, ref} from "vue";
import {NIcon, NTag} from "naive-ui";
import {Location} from "@vicons/ionicons5";
import MostPopularTours from "./mostPopularTours.vue";
import DiscountItems from "./discountItems.vue";
import ChooseTourTypes from "./chooseTourTypes.vue";
import HotLocation from "./hotLocation.vue";
import CustomerReview from "./customerReview.vue";
import Inspiration from "./inspiration.vue";
import FooterView from "../GeneralComponents/footerView.vue";
const renderIcon = (icon) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    });
  };
};
export default {
  name: "HomepageView",
  components: {
    FooterView,
    Inspiration, CustomerReview, HotLocation, ChooseTourTypes, DiscountItems, MostPopularTours, NavigationBar},
  setup(){
    let currentLocation = ref("select");
    let currentTimePeriod = ref();
    const renderTag = ({ option, handleClose }) => {
      return h(
          NTag,
          {
            type: option.type,
            closable: true,
            onMousedown: (e) => {
              e.preventDefault();
            },
            onClose: (e) => {
              e.stopPropagation();
              handleClose();
            }
          },
          { default: () => option.label }
      );
    };
    return{
      currentLocation,
      currentTimePeriod,
      range: ref([]),
      tagValue: ref([]),
      tags: [
        {
          label: "今天在摸鱼",
          value: "value1",
          type: "success"
        },
        {
          label: "工作没做完",
          value: "value2",
          type: "warning"
        },
        {
          label: "晚上要加班",
          value: "value3",
          type: "error"
        }
      ],
      renderTag,
      locationOptions: [
        {
          label: 'London',
          key: 'London',
          icon: renderIcon(Location)
        },
        {
          label: 'Paris',
          key: 'Paris',
          icon: renderIcon(Location)
        },
        {
          label: 'Rome',
          key: 'Rome',
          icon: renderIcon(Location)
        },
      ],
      handleSelectLocation(val){
        currentLocation.value = val;
      },
      disablePreviousDate(ts) {
        return ts < Date.now();
      }
    }
  },
}
</script>

<style scoped>
  .specialPart{
    position: relative;
    padding-top: 260px;
    padding-bottom: 200px;
    box-sizing: border-box;
  }
  .specialBackgroundLeft{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 58%;
    z-index: -1;
    background-image: url("../../assets/homeheadbg.svg");
    background-size: cover;
  }
  .specialBackgroundRight{
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 42%;
    z-index: -2;
    background-image: url("../../assets/beach.jpg");
    background-size: cover;
    background-position: center;
  }
  .specialPartCore{
    max-width: 1140px;
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
  }
  .specialCoreContainer{
    flex: 0 0 auto;
    width: 75%;
    box-sizing: border-box;
    max-width: 100%;
  }
  .specialTitle{
    font-size: 60px;
    margin: 0;
    line-height: 1.45;
    font-weight: 600;
  }
  .specialTitleTail{
    color: #3554D1;
    position: relative;
  }
  .specialSlogan{
    margin-top: 20px;
    font-size: 16px;
    color: var(--secondary-text-color);
    line-height: 1.875;
  }
  .searchBar{
    border-radius: 4px;
    background-color: white;
    margin-top: 35px;
    padding: 20px 20px 20px 0;
    position: relative;
    box-sizing: border-box;
    box-shadow: 0px 20px 40px 0px #05103612;
  }
  .search{
    display: grid;
    grid-template-columns: 1fr 260px 280px auto;
    align-items: center;
  }
  .locationOption{
    padding-left: 30px;
    padding-right: 30px;
    position: relative;
    box-sizing: border-box;

  }
  .durationOption,.tagOption{
    border-left: 1px solid #DDDDDD;
    padding-left: 30px;
    padding-right: 30px;
    position: relative;
    box-sizing: border-box;
  }
  .searchButton{
    border: none;
    background-color: #3554D1;
    cursor: pointer;
    border-radius: 4px;
    transition: .3s ease-in;
  }
  .searchButton:hover{
    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    background-color: #051036;
  }
  .searchButtonContent{
    height: 60px;
    padding: 15px 35px 15px 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-sizing: border-box;
    color: white;
  }
  .searchButtonIcon{
    width: 20px;
    height: 20px;
    background-image: url("../../assets/search_white.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  @media screen and (max-width: 1200px) {
    .specialPart{
      padding-top: 150px;
      padding-bottom: 150px;
    }
    .specialCoreContainer{
      width: 80%;
      margin-left: 50px;
    }
  }

  @media screen and (max-width: 1050px) {
    .specialPart{
      padding-top: 100px;
    }
    .specialCoreContainer{
      width: 75%;
      margin: auto;
    }
    .specialTitle{
      font-size: 40px;
    }
    .search{
      grid-template-columns: 1fr;
      margin-left: 20px;
    }
    .locationOption{
      padding: 20px 0px;
    }
    .optionName{

    }
    .durationOption{
      padding: 20px 0px;
      border-left: 0px;
      border-top: 1px solid #DDDDDD;
    }
    .tagOption{
      padding: 20px 0px;
      border-left: 0px;
      border-top: 1px solid #DDDDDD;
    }
    .searchButton{
    }
  }

  @media screen and (max-width: 500px) {
    .specialBackgroundLeft{
      width: 100%;
    }
    .specialPart{
      padding-top: 50px;
      padding-bottom: 20px;
    }
    .specialCoreContainer {
      margin: auto;
      width: 95%;
    }
    .specialTitle{
      font-size: 30px;
    }
  }
  .optionName{
    font-weight: 500;
    line-height: 1.6;
    font-size: 15px;
  }
  .optionValue{
    color: var(--secondary-text-color);
    line-height: 1.6;
    font-size: 15px;
    cursor: pointer;
  }
  .specialTitleDecoration{
    position: absolute;
    bottom: -40%;
    left: 0;
    width: 100%;
  }
  .decorationImg{
    width: 100%;
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }
  .statistics{
    margin: 60px auto 120px auto;
    max-width: 1140px;
    box-sizing: border-box;
    padding-left: 15px;
    padding-right: 15px;
    display: flex;
    justify-content: center;
  }
  .figure{
    padding: 15px;
    box-sizing: border-box;
    width: 25%;
    text-align: center;
    font-weight: 600;
    line-height: 1.3;
    font-size: 40px;
    color: #3554D1;
  }
  .figureName{
    font-size: 14px;
    color: var(--secondary-text-color);
    margin-top: 5px;
    line-height: 1.4;
    font-weight: 400;
  }
  .whyChooseUsSection{
    position: relative;
    padding-bottom: 120px;
    padding-top: 120px;
    box-sizing: border-box;
    background-color: rgba(53, 84, 209, 0.05);
  }
  .whyChooseImg{
    width: 41.66667%;
    position: absolute;
    box-sizing: border-box;
    height: 100%;
    right: 0;
    top: 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url("../../assets/mountain-fuji.jpg");
  }
  .whyChooseCore{
    max-width: 1320px;
    padding-left: 15px;
    padding-right: 15px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
  }
  .whyChooseContent{
    width: 430px;
    flex: 0 0 auto;
    box-sizing: border-box;
    padding-left: 15px;
    padding-right: 15px;
    max-width: 100%;

  }
  .whyChooseTitle{
    font-weight: 600;
    font-size: 30px;
    line-height: 1.45;
    box-sizing: border-box;
    margin: 0;
  }
  .whyChooseSlogan{
    margin-top: 5px;
    color: var(--secondary-text-color);
  }
  .whyChooseFeatures{
    margin-top: 45px;
  }
  .whyChooseFeature{
    padding: 15px 45px 15px 15px;
    flex:  0 0 auto;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    display: flex;
  }
  .featureIcon{
    width: 50px;
    height: 50px;
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    flex-shrink: 0;
  }
  .shieldIcon{
    background-image: url("../../assets/shield.svg");
  }
  .bookingIcon{
    background-image: url("../../assets/easy_booking.svg");
  }
  .careIcon{
    background-image: url("../../assets/care.svg");
  }
  .featureTextArea{
    margin-left: 15px;
    box-sizing: border-box;
  }
  .featureName{
    font-weight: 500;
    font-size: 18px;
    box-sizing: border-box;
    margin: 0;
  }
  .featureText{
    margin-top: 10px;
    font-size: 15px;
    box-sizing: border-box;
    color: var(--secondary-text-color);
  }
  .discountPart{
    margin: 60px auto 60px auto;
    box-sizing: border-box;
    padding-left: 15px;
    padding-right: 15px;
    max-width: 1320px;
  }
  .discountTitle{
    font-size: 30px;
    margin: 0;
    line-height: 1.45;
    font-weight: 600;
  }
  .discountSlogan{
    margin-top: 5px;
    color: var(--secondary-text-color);
    line-height: 1.875;
  }
  .discountMain{
    margin-top: 25px;
    display: flex;
    flex-wrap: nowrap;
  }
  .discountCover{
    width: 41.66667%;
    box-sizing: border-box;
    margin-right: 15px;
    padding: 50px;
    background-image: url("../../assets/cherry.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 4px;
    position: relative;
  }
  .discountCoverTextArea{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    z-index: 1;
  }
  .discountCover::after{
    content: '';
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    background: linear-gradient(180deg, rgba(5, 16, 54, 0.7) 0%, rgba(5, 16, 54, 0) 100%);
  }
  .discountCoverTitle1{
    color: white;
    margin-bottom: 10px;
    font-weight: 500;
    font-size: 15px;
  }
  .discountCoverTitle2{
    color: white;
    font-size: 30px;
    margin: 0;
    line-height: 1.45;
    font-weight: 600;
  }
  .discountCoverBookButton{
    margin-top: 30px;
    min-width: 180px;
    color: #051036;
    background-color: white;
    padding-top: 15px;
    padding-bottom: 15px;
    font-weight: 500;
    line-height: 1.2;
    text-align: center;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .discountCoverBookButton:hover{
    background-color: var(--primary-color);
    color: white;
    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  @media screen and (max-width: 700px) {
    .whyChooseContent{
      width: 60%;
    }
    .whyChooseFeature{
      padding-right: 0px;
      padding-left: 0px;
    }
    .whyChooseFeatures{
      margin-top: 20px;
    }
  }
  @media screen and (max-width: 600px) {
    .whyChooseContent{
      width: 60%;
      padding-left: 0px;
    }
    .whyChooseFeature{
      padding-right: 0px;
      padding-left: 0px;
    }
    .whyChooseFeatures{
      margin-top: 20px;
    }
    .whyChooseUsSection{
      padding-top: 60px;
    }
    .whyChooseTitle{
      margin-left: 10px;
    }
    .whyChooseSlogan{
      margin-left: 10px;
    }
  }
  @media screen and (max-width: 550px) {
    .whyChooseImg{
      position: static;
      width: 100%;
      height: 400px;
    }
    .whyChooseUsSection{
      padding-top: 0px;
      padding-bottom: 20px;
    }
    .whyChooseCore{
      margin-top: 40px;
    }
    .whyChooseContent{
      width: 100%;
      margin: auto;
      padding-right: 0;
    }
  }
</style>
