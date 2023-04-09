<template>
  <div class="halfMap">
  <div class="list_content">
    <div class="list_search_wrap">
      <div class="list_search">

        <div class="loc_wrap">

          <div class="loc_head">
            <n-icon class="icon_loc"><LocationOutline /></n-icon>

            <div class="loc_margin">
              <h4 class="loc_title">Destinations</h4>
              <div class="loc_input">
                <n-dropdown
                    trigger="click"
                    placement="bottom-start"
                    :options="locOptions"
                    @select="handleSelectLoc"
                >
                  <n-button> Select </n-button>
                </n-dropdown>
              </div>
            </div>
          </div>
        </div>

        <div class="date_wrap">

          <div class="loc_head">
            <n-icon class="icon_loc"><TodayOutline /></n-icon>

            <div class="loc_margin">
              <h4 class="loc_title">Check in - Check out</h4>
              <div class="loc_input">
                <n-date-picker v-model:value="range" type="daterange" clearable />
<!--                <pre>{{ JSON.stringify(range) }}</pre>-->
              </div>
            </div>
          </div>
        </div>

        <div class="guests_wrap">

          <div class="loc_head">
            <n-icon class="icon_loc"><CompassOutline /></n-icon>

            <div class="loc_margin">
              <h4 class="loc_title">Tour Type</h4>
              <div class="loc_input">
                <n-dropdown
                    trigger="click"
                    placement="bottom-start"
                    :options="typeOptions"
                      @select="handleSelectType"
                >
                  <n-button> choose type </n-button>
                </n-dropdown>
              </div>
            </div>
          </div>
        </div>

        <div class="search_btn">
          <n-button class="btn_search" color="#3554D1">
            <n-icon class="icon_search"><Search /></n-icon>
          </n-button>
        </div>
      </div>
    </div>

    <div class="row x-gap-10 y-gap-10 select_menu">
      <n-select class="dropdown" v-model:value="value" :options="priceoptions" clearable placeholder="Price" @select="handleSelectPrice"/>
      <n-select class="dropdown" v-model:value="value" :options="durationoptions" clearable placeholder="Duration" @select="handleSelectDuration"/>
      <n-select class="dropdown" v-model:value="value" :options="languageoptions" clearable placeholder="Language" @select="handleSelectLanguage"/>
    </div>

    <div class="row y-gap-10 property">
      <div class="col-auto">
        <div class="property_text"><span class="property_num">3,269 properties</span> in Europe</div>
      </div>
      <div class="col-auto">
          <n-dropdown
              trigger="click"
              placement="bottom-start"
              :options="sortoptions"
              @select="handleSelectSort"
          >
          <n-button strong ghost size="large" icon-placement="left">
            <template #icon>
              <n-icon>
                <StatsChartOutline />
              </n-icon>
            </template>
            Sort
          </n-button>
        </n-dropdown>
      </div>
    </div>

    <div class="row y-gap-20 contents_wrap">

      <div class="col-12">

        <div class="content_wrap">
          <div class="row x-gap-20 y-gap-20" v-for="item in items" :key="item.id">
            <div class="col-md-auto">

              <div class="content_left ratio ratio-1:1">
                <div class="cardImage_content">
                  <img class="cardImage col-12" src="item.image" alt="image">
                </div>

                <div class="cardImage_wish">
                  <n-button :loading="item.loading" @click="handleClick" strong secondary circle type="info">
                    <template #icon>
                      <n-icon><HeartOutline /></n-icon>
                    </template>
                  </n-button>
                </div>
              </div>
            </div>

            <div class="col-md">
              <p class="hours">{{ item.hours }}</p>
              <h3 class="title">{{  item.title }}</h3>
              <p class="location">{{  item.location }}</p>

              <div class="opt1">{{  item.opt1 }}</div>
              <div class="opt2">{{  item.opt2 }}</div>
            </div>

            <div class="col-md-auto content_right">
              <div class="stars x-gap-10">
                <n-icon class="star" v-for="star in item.stars" :key="star"><Star /></n-icon>
              </div>
              <div class="reviews">{{ item.reviews }} reviews</div>

              <div class="from">From</div>
              <div class="price">US${{ item.price }}</div>
              <div class="per">{{ item.per }}</div>


              <a href="#" class="button -dark-1 btn_detail">
                View Detail <n-icon class="margin"><ArrowForward /></n-icon>
              </a>

            </div>

          </div>
        </div>
      </div>
    </div>

    <n-pagination class="page" v-model:page="page" :on-update:page="pageChange"	:page-count="countPage"/>


  </div>

  <div class="map_content">
    <div class="map" id="map"></div>
  </div>
  </div>


</template>

<script>
import { defineComponent, ref } from 'vue'
import {Loader} from "@googlemaps/js-api-loader";
import { useMessage } from "naive-ui";
import { ArrowForward, Star, HeartOutline, LocationOutline, TodayOutline, CompassOutline, Search, StatsChartOutline } from "@vicons/ionicons5";
import {VGridVueTemplate} from "@revolist/vue3-datagrid";
import listButton from "../BackListView/listButton.vue";
import delistButton from "../BackListView/delistButton.vue";
import editButton from "../BackListView/editButton.vue";
import axios from "axios";
export default defineComponent({
  name: "leftListView",
  components: {
    HeartOutline,
    LocationOutline,
    TodayOutline,
    CompassOutline,
    Search,
    StatsChartOutline,
    Star,
    ArrowForward
  },
  setup () {
    let startTime = ref();
    let endTime = ref();
    let currentLocation = ref("select");
    let tourType = ref();
    const loadingRef = ref(false);
    let price = ref();
    let duration = ref();
    let language = ref();
    const message = useMessage();
    return {
      currentLocation,
      startTime,
      endTime,
      tourType,
      price,
      duration,
      language,
      handleClick() {
        loadingRef.value = true
        setTimeout(() => {
          loadingRef.value = false
        }, 2000)
      },
      loading: loadingRef,
      range: ref([118313526e4, Date.now()]),
      value: ref(null),
      priceoptions: [
        {
          label: "Less than $500",
          value: '-500',
          key: '-500'
        },
        {
          label: '$500 - $1000',
          value: '500-1000',
          key: '500-1000'
        },
        {
          label: '$1000 - $2000',
          value: '1000-2000',
          key: '1000-2000'
        },
        {
          label: "$2000+",
          value: '2000+',
          key: '2000+'
        }],
      durationoptions: [
        {
          label: "1 week",
          value: '1 week',
          key: '1 week'
        },
        {
          label: '2 weeks',
          value: '2 weeks',
          key: '2 weeks'
        },
        {
          label: '3 weeks',
          value: '3 weeks',
          key: '3 weeks'
        },
        {
          label: "1 month",
          value: '1 month',
          key: '1 month'
        }],
      languageoptions: [
        {
          label: "English",
          value: 'English',
          key: 'English'
        },
        {
          label: 'Italian',
          value: 'Italian',
          key: 'Italian'
        },
        {
          label: 'Deutsch',
          value: 'Deutsch',
          key: 'Deutsch'
        },
        {
          label: "Turkish",
          value: 'Turkish',
          key: 'Turkish'
        }],
      sortoptions: [
        {
          label: "discount (high to low)",
          key: "discount (high to low)"
        },
        {
          label: "discount (low to high)",
          key: "discount (low to high)"
        },
        {
          label: "price (high to low)",
          key: "price (high to low)"
        },
        {
          label: "price (low to high)",
          key: "price (low to high)"
        }
      ],
      locOptions: [
        {
          label: '滨海湾金沙，新加坡',
          key: 'marina bay sands'
        },
        {
          label: '布朗酒店，伦敦',
          key: "brown's hotel, london"
        },
        {
          label: '亚特兰蒂斯巴哈马，拿骚',
          key: 'atlantis nahamas, nassau'
        },
        {
          label: '比佛利山庄酒店，洛杉矶',
          key: 'the beverly hills hotel, los angeles'
        }
      ],
      typeOptions: [
        {
          label: 'Wildlife Tour',
          key: 'Wildlife Tour'
        },
        {
          label: 'Adventure Tour',
          key: "Adventure Tour"
        },
        {
          label: 'City Tours',
          key: 'City Tours'
        },
        {
          label: 'Museum Tours',
          key: 'Museum Tours'
        },
        {
          label: 'Beaches Tour',
          key: 'Beaches Tour'
        }
      ],
      handleSelectLoc(val) {
        currentLocation.value = val;
      },
      handleSelectType(val) {
        tourType.value = val;
      },
      handleSelectSort(key) {
        message.info(String(key));
      },
      handleSelectPrice(val) {
        price.value = val;
      },
      handleSelectDuration(val) {
        duration.value = val;
      },
      handleSelectLanguage(val) {
        language.value = val;
      },
      handleSearchProject() {
        axios.post("http://127.0.0.1:5000/search_page/product_list",
            {
              startTime: this.range[0],
              endTime: this.range[1],
              currentLocation: currentLocation.value,
              tourType: tourType.value,
              price: price.value,
              duration: duration.value,
              language: language.value
            }
        )
            .then((response)=>{
              const code = response.status
              if (code === 200){
                this.products = response.data
              }
            })
        axios.post("http://127.0.0.1:5000/search_page/product_number",
            {
              startTime: this.range[0],
              endTime: this.range[1],
              currentLocation: currentLocation.value,
              tourType: tourType.value,
              price: price.value,
              duration: duration.value,
              language: language.value
            }
        )
            .then((response)=>{
              const code = response.status
              if (code === 200){
                this.count = response.data
              }
            })
      }
    }
  },
  mounted() {
    const loader = new Loader({
      apiKey: "AIzaSyBctzU8ocpP_0j4IdTRqA-GABIAnaXd0ow",
      version: "weekly",
    });

    loader.load().then(() => {
      const Beijing = { lat: 40, lng: 116 };
      let map = new google.maps.Map(document.getElementById("map"), {
        center: Beijing,
        zoom: 8,
      });
      const marker = new google.maps.Marker({
        position: Beijing,
        map: map,
      });
    });
  },
  data(){
    return{
      countPage: ref(),
      items:[
        {
          id: 1,
          image: "../../assets/searchViewTest.png",
          loading: false,
          hours: "6+ hours",
          title: "Leeds Castle, Cliffs of Dover and Canterbury Day Trip from London with Guided Cathedral Tour",
          location: "Westminster Borough, London",
          opt1: "Taking safety measures",
          opt2: "Free cancellation",
          stars: [1, 2, 3, 4, 5],
          reviews: "3,014",
          price: "72",
          per: "per adult"
        },
        {
          id: 2,
          image: "../../assets/searchViewTest.png",
          loading: false,
          hours: "8+ hours",
          title: "Day Trip to the Isle of Wight from London: including Osborne House Tickets",
          location: "Isle of Wight, United Kingdom",
          opt1: "Taking safety measures",
          opt2: "Free cancellation",
          stars: [1, 2, 3, 4],
          reviews: "1,223",
          price: "116",
          per: "per adult"
        },
        {
          id: 3,
          image: "../../assets/searchViewTest.png",
          loading: false,
          hours: "7 hours",
          title: "Stonehenge, Windsor Castle, and Bath with Pub Lunch in Lacock",
          location: "Greater London, United Kingdom",
          opt1: "Taking safety measures",
          opt2: "Free cancellation",
          stars: [1, 2, 3, 4],
          reviews: "1,223",
          price: "116",
          per: "per adult"
        }
      ],
    }
  },

  methods:{
    pageChange(newPage){
      // console.log(`Current page is ${newPage}`);
      axios.post('http://127.0.0.1:5000/search_page/product_list',{
        page: newPage
      }).then(function (response){
        this.products = response.data
        console.log("分页成功嘞 yeeee")
      }).catch(function (error){
        console.log(error);
      });
    }

  }
})

</script>

<style scoped>
.page{
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
}
.halfMap {
  display: flex;
  width: 100%;
  min-height: calc(100vh - 90px);
}

@media (max-width: 991px) {
  .halfMap {
    flex-direction: column;
  }
}

@media (max-width: 767px) {
  .halfMap {
    margin-top: 80px;
  }
}
.dropdown {
  height: 40px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 8px;
}
.map_content {
  width: 100%;
  min-height: 100%;
}
@media (max-width: 991px) {
  .map_content {
    order: 1;
  }
}
.map {
  width: 100%;
  height: 100%;
  background-color: #a3a3a3;
}
.margin {
  margin-left: 15px;
}
.btn_detail {
  padding: 10px 24px !important;
  background-color: #3554D1 !important;
  color: #FFFFFF;
  margin-top: 15px !important;
  text-decoration: none;
}
.button.-dark-1:hover {
  border-color: #051036;
  color: white !important;
}
.button:hover {
  opacity: 0.7;
}
.button {
  color: white;
  text-transform: capitalize;
  font-weight: 700;
  transition: opacity 200ms ease;
}
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  text-align: center;
  line-height: 1;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.2;
  border-radius: 4px;
  border: 1px solid transparent;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.from {
  font-size: 14px;
  color: #697488;
  margin-top: 24px;
}
.price {
  font-size: 22px;
  line-height: 1.2;
  font-weight: 600;
}
.per {
  font-size: 14px;
  color: #697488;
}
.reviews {
  font-size: 14px;
  line-height: 1.4;
  color: #697488;
  margin-top: 10px;
}
.star {
  font-size: 10px;
  color: #F8D448;
}
.stars {
  display: flex !important;
  align-items: center !important;
  justify-content: flex-end !important;
}
.content_right {
  text-align: right;
}

.opt1 {
  font-size: 14px;
  line-height: 1.5 !important;
  font-weight: 500;
  margin-top: 20px !important;
}
.opt2 {
  font-size: 14px;
  color: #008009;
  font-weight: 500;
  line-height: 1.5 !important;
  margin-top: 3px !important;
}
.location {
  font-size: 14px;
  line-height: 1.4 !important;
}
.title {
  font-size: 16px;
  line-height: 1.6 !important;
  font-weight: 500;
}
.hours {
  font-size: 14px;
  line-height: 1.4 !important;
  margin-bottom: 5px !important;
}
.cardImage_wish {
  position: absolute;
  top: 20px;
  right: 20px;
}
.cardImage {
  border-radius: 4px;
}
.cardImage_content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  border-radius: inherit;
}
.ratio {
  position: relative;
  display: block;
  overflow: hidden;
}

.ratio::before {
  display: block;
  width: 100%;
  content: "";
}

.ratio-1\:1::before {
  padding-bottom: 100%;
}
.content_left {
  position: relative;
  z-index: 0;
  width: 200px;
  max-width: 100%;
  border-radius: 4px;
}

@media (max-width: 767px) {
  .content_left {
    width: 100% !important;
  }
  .content_right {
    text-align: left !important;
  }
  .stars {
    justify-content: flex-start !important;
  }
  .from {
    margin-top: 20px;
  }
}
.content_wrap {
  border-top: 1px solid #DDDDDD;
  padding-top: 20px;
}
.contents_wrap {
  padding-top: 20px;
}
.property_text {
  font-size: 18px;
}
.property_num {
  font-weight: 500;
}
.property {
  justify-content: space-between !important;
  align-items: center !important;
  padding-top: 20px !important;
}
.select_menu {
  padding-top: 20px !important;
}
.btn_search {
  flex-shrink: 0;
  width: 60px;
  height: 60px;
}
.icon_search {
  font-size: 20px;
}
.search_btn {
  border: none !important;
}
.guests_wrap {
  position: relative;
  padding-left: 30px !important;
  padding-right: 30px !important;
}
.date_wrap {
  position: relative;
  padding-left: 30px !important;
  padding-right: 30px !important;
}
.loc_margin {
  margin-left: 10px;
}
.loc_title {
  font-size: 15px;
  font-weight: 500;
  line-height: 1.6;
}
.loc_input {
  font-size: 15px;
  color: #697488;
  line-height: 1.6;
}
.icon_loc {
  font-size: 20px;
  color: #697488;
  margin-top: 5px;
}
.loc_head {
  display: flex !important;
}
.loc_wrap {
  position: relative;
  padding-right: 30px !important;
  padding-left: 20px !important;
}

.list_search {
  display: grid;
  grid-template-columns: 1fr 250px 290px auto;
  align-items: center !important;
}

.list_search > * + * {
  border-left: 1px solid #DDDDDD;
}

@media (max-width: 991px) {
  .list_search {
    grid-template-columns: 1fr;
  }
  .list_search > * + * {
    border-left: 0;
    border-top: 1px solid #DDDDDD;
  }
  .loc_wrap {
    padding: 20px 0 !important;
  }
  .date_wrap {
    padding: 20px 0px !important;
  }
  .guests_wrap {
    padding: 20px 0px !important;
  }
}

.list_search_wrap {
  position: relative;
  z-index: 20;
  background-color: #F5F5F5 !important;
  padding-top: 10px !important;
  padding-bottom: 10px !important;
  padding-right: 10px;
  border-radius: 4px;
}

@media (max-width: 991px) {
  .list_search_wrap {
    width: 100%;
    border-radius: 4px !important;
    padding: 5px 20px 20px !important;
    background-color: #F5F5F5 !important;
  }
}
.list_content {
  width: 865px;
  max-width: 100%;
  flex-shrink: 0;
  padding: 30px;
  min-height: 100%;
}

@media (max-width: 767px) {
  .list_content {
    padding: 20px;
  }
}

@media (max-width: 991px) {
  .list_content {
    width: 100%;
    order: 2;
  }
}

@media (max-width: 1199px) {
  .list_content {
    width: 660px;
  }
}








.row{
  --bs-gutter-x:30px;
  --bs-gutter-y:0;
  display:flex;
  flex-wrap:wrap;
  margin-top:calc(var(--bs-gutter-y)*-1);
  margin-right:calc(var(--bs-gutter-x)*-0.5);
  margin-left:calc(var(--bs-gutter-x)*-0.5)
}

.row>*{
  box-sizing:border-box;
  flex-shrink:0;
  width:100%;
  max-width:100%;
  padding-right:calc(var(--bs-gutter-x)*0.5);
  padding-left:calc(var(--bs-gutter-x)*0.5);
  margin-top:var(--bs-gutter-y)
}

.row-cols-auto>*{
  flex:0 0 auto;
  width:auto
}

.row-cols-1>*{
  flex:0 0 auto;
  width:100%
}

.row-cols-2>*{
  flex:0 0 auto;
  width:50%
}

.row-cols-3>*{
  flex:0 0 auto;
  width:33.33333%
}

.row-cols-4>*{
  flex:0 0 auto;
  width:25%
}

.row-cols-5>*{
  flex:0 0 auto;
  width:20%
}

.row-cols-6>*{
  flex:0 0 auto;
  width:16.66667%
}

.col-auto{
  flex:0 0 auto;
  width:auto
}

@media (min-width:576px){
  .row-cols-sm-auto>*{
    flex:0 0 auto;width:auto
  }
  .row-cols-sm-1>*{flex:0 0 auto;width:100%}
  .row-cols-sm-2>*{flex:0 0 auto;width:50%}
  .row-cols-sm-3>*{flex:0 0 auto;width:33.33333%}
  .row-cols-sm-4>*{flex:0 0 auto;width:25%}
  .row-cols-sm-5>*{flex:0 0 auto;width:20%}
  .row-cols-sm-6>*{flex:0 0 auto;width:16.66667%}
  .col-sm-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
}
.col-md, .col-md-auto,
.col-auto, .col-12 {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

@media (min-width: 768px) {
  .col-md {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }

  .row-cols-md-1 > * {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .row-cols-md-2 > * {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .row-cols-md-3 > * {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }

  .row-cols-md-4 > * {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .row-cols-md-5 > * {
    flex: 0 0 20%;
    max-width: 20%;
  }

  .row-cols-md-6 > * {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }

  .col-md-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }

  .col-md-1 {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%;
  }

  .col-md-2 {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }

  .col-md-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-md-4 {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }

  .col-md-5 {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%;
  }

  .col-md-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-md-7 {
    flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%;
  }

  .col-md-8 {
    flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%;
  }

  .col-md-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .col-md-10 {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%;
  }

  .col-md-11 {
    flex: 0 0 91.6666666667%;
    max-width: 91.6666666667%;
  }

  .col-md-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

@media (min-width:768px){
  .row-cols-md-auto>*{flex:0 0 auto;width:auto}
  .row-cols-md-1>*{flex:0 0 auto;width:100%}
  .row-cols-md-2>*{flex:0 0 auto;width:50%}
  .row-cols-md-3>*{flex:0 0 auto;width:33.33333%}
  .row-cols-md-4>*{flex:0 0 auto;width:25%}
  .row-cols-md-5>*{flex:0 0 auto;width:20%}
  .row-cols-md-6>*{flex:0 0 auto;width:16.66667%}
  .col-md-6{flex:0 0 auto;width:50%}
  .col-md-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }
  .col-md {
     flex-basis: 0;
     flex-grow: 1;
     max-width: 100%;
   }
  .col-md{flex:1 0 0%}
}

@media (min-width:992px){
  .row-cols-lg-auto>*{flex:0 0 auto;width:auto}
  .row-cols-lg-1>*{flex:0 0 auto;width:100%}
  .row-cols-lg-2>*{flex:0 0 auto;width:50%}
  .row-cols-lg-3>*{flex:0 0 auto;width:33.33333%}
  .row-cols-lg-4>*{flex:0 0 auto;width:25%}
  .row-cols-lg-5>*{flex:0 0 auto;width:20%}
  .row-cols-lg-6>*{flex:0 0 auto;width:16.66667%}
}

@media (min-width:1200px){
  .row-cols-xl-auto>*{
    flex:0 0 auto;
    width:auto
  }
  .row-cols-xl-1>*{
    flex:0 0 auto;
    width:100%
  }
  .row-cols-xl-2>*{
    flex:0 0 auto;
    width:50%
  }
  .row-cols-xl-3>*{
    flex:0 0 auto;
    width:33.33333%
  }
  .row-cols-xl-4>*{
    flex:0 0 auto;
    width:25%
  }

  .row-cols-xl-5>*{
    flex:0 0 auto;
    width:20%
  }

  .row-cols-xl-6>*{
    flex:0 0 auto;
    width:16.66667%
  }

  .col-xl-3{flex:0 0 auto;width:25%}
  .col-xl-5{flex:0 0 auto;width:41.66667%}
}

@media (min-width:1400px){
  .row-cols-xxl-auto>*{
    flex:0 0 auto;width:auto}
  .row-cols-xxl-1>*{flex:0 0 auto;width:100%}
  .row-cols-xxl-2>*{flex:0 0 auto;width:50%}
  .row-cols-xxl-3>*{flex:0 0 auto;width:33.33333%}
  .row-cols-xxl-4>*{flex:0 0 auto;width:25%}
  .row-cols-xxl-5>*{flex:0 0 auto;width:20%}
  .row-cols-xxl-6>*{flex:0 0 auto;width:16.66667%}
}

.x-gap-10 {
  margin-left: -5px;
  margin-right: -5px;
}

.x-gap-10 > * {
  padding-left: 5px;
  padding-right: 5px;
}

.y-gap-10 {
  margin-top: -5px;
  margin-bottom: -5px;
}

.y-gap-10 > * {
  padding-top: 5px;
  padding-bottom: 5px;
}

.y-gap-20 {
  margin-top: -10px;
  margin-bottom: -10px;
}

.y-gap-20 > * {
  padding-top: 10px;
  padding-bottom: 10px;
}

.y-gap-30 {
  margin-top: -15px;
  margin-bottom: -15px;
}

.y-gap-30 > * {
  padding-top: 15px;
  padding-bottom: 15px;
}

.col-sm-6 {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

.col-12 {
  flex: 0 0 100%;
  max-width: 100%;
}
</style>