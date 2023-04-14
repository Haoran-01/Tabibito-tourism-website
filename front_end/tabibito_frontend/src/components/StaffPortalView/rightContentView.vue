<template>
  <body>

      <div class="dashboard_content">
        <div class="row dash_head y-gap-20 pb-60 lg:pb-40 md:pb-32">
          <div class="col-auto">

            <h1 class="dash_title">Dashboard</h1>
            <div class="dash_text">Lorem ipsum dolor sit amet, consectetur.</div>

          </div>

          <div class="col-auto">

          </div>
        </div>


        <div class="row y-gap-30">

          <div class="col-xl-3 col-md-6">
            <div class="block_sub_wrap">
              <div class="row block_content">
                <div class="col-auto">
                  <div class="block_title">Monthly Pending</div>
                  <div class="block_money">${{ Number(earns.month_pending).toFixed(2) }}</div>
<!--                  <div class="block_total">Total pending</div>-->
                </div>

                <div class="col-auto">
                  <img src="../../assets/dashboard/icons/1.svg" alt="icon">
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6">
            <div class="block_sub_wrap">
              <div class="row block_content">
                <div class="col-auto">
                  <div class="block_title">Monthly Earning</div>
                  <div class="block_money">${{ Number(earns.month_earning).toFixed(2) }}</div>
<!--                  <div class="block_total">Total Confirmed</div>-->
                </div>

                <div class="col-auto">
                  <img src="../../assets/dashboard/icons/2.svg" alt="icon">
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6">
            <div class="block_sub_wrap">
              <div class="row block_content">
                <div class="col-auto">
                  <div class="block_title">Quarterly Pending</div>
                  <div class="block_money">${{ Number(earns.quarterly_pending).toFixed(2) }}</div>
<!--                  <div class="block_total">Total pending</div>-->
                </div>

                <div class="col-auto">
                  <img src="../../assets/dashboard/icons/3.svg" alt="icon">
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6">
            <div class="block_sub_wrap">
              <div class="row block_content">
                <div class="col-auto">
                  <div class="block_title">Quarterly Earning</div>
                  <div class="block_money">${{ Number(earns.quarterly_earning).toFixed(2) }}</div>
<!--                  <div class="block_total">Earning</div>-->
                </div>

                <div class="col-auto">
                  <img src="../../assets/dashboard/icons/4.svg" alt="icon">
                </div>
              </div>
            </div>
          </div>

        </div>

        <div class="row y-gap-30 statistics_and_recent_wrap">
          <div class="statistics_wrap">
            <div class="statistics_wrap_sub">
              <div class="statistics_head">
                <h2 class="statistics_title">
                  Earning Statistics
                </h2>

                <div class="dropdown">
                <n-dropdown trigger="hover" :options="options" @select="handleSelect">
                  <n-button>This Week</n-button>
                </n-dropdown>
                </div>

              </div>

              <div class="echarts">
                <figure>
                  <v-chart :option="scatter"/>
                </figure>
              </div>
            </div>
          </div>

          <div class="col-xl-5 col-md-6">
            <div class="table_wrap">
              <div class="table_head">
                <h2 class="table_head_text">
                  Recent Bookings
                </h2>

                <div class="">
                  <h4 class="table_head_href" @click="this.$router.push('/management/project_list')">View All</h4>
                </div>
              </div>

              <n-table :bordered="false" :single-line="false">
                <thead>
                <tr>
                  <th>#</th>
                  <th>Item</th>
                  <th>Total</th>
                  <th>Paid</th>
                  <th>Status</th>
                  <th>Created At</th>
                </tr>
                </thead>
                <tbody>

                <template v-for="(item, index) in items" :key="index">
                  <tr>
                    <td>#{{ index + 1 }}</td>
                    <td>{{ item.destination }}</td>
                    <td class="table_money">${{ item.price }}</td>
                    <td>${{ item.discount }}</td>
                    <td>
                      <div v-if="item.status === 'pending'" class="table_pending">Pending</div>
                      <div v-else-if="item.status === 'confirmed'" class="table_confirm">Confirmed</div>
                      <div v-else-if="item.status === 'cancelled'" class="table_reject">Rejected</div>
                    </td>
                    <td>{{ item.date }}<br>{{ item.time }}</td>
                  </tr>
                </template>
                </tbody>

              </n-table>

            </div>
          </div>

        </div>


      </div>

  </body>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useMessage } from "naive-ui";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { ScatterChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import FooterView from "../GeneralComponents/footerView.vue";
import axios from "axios";

use([
  CanvasRenderer,
  ScatterChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);

const data = [
  [
    [28604, 77, 17096869, "Australia", 1990],
    [31163, 77.4, 27662440, "Canada", 1990],
    [1516, 68, 1154605773, "China", 1990],
    [13670, 74.7, 10582082, "Cuba", 1990],
    [28599, 75, 4986705, "Finland", 1990],
    [29476, 77.1, 56943299, "France", 1990],
    [31476, 75.4, 78958237, "Germany", 1990],
    [28666, 78.1, 254830, "Iceland", 1990],
    [1777, 57.7, 870601776, "India", 1990],
    [29550, 79.1, 122249285, "Japan", 1990],
    [2076, 67.9, 20194354, "North Korea", 1990],
    [12087, 72, 42972254, "South Korea", 1990],
    [24021, 75.4, 3397534, "New Zealand", 1990],
    [43296, 76.8, 4240375, "Norway", 1990],
    [10088, 70.8, 38195258, "Poland", 1990],
    [19349, 69.6, 147568552, "Russia", 1990],
    [10670, 67.3, 53994605, "Turkey", 1990],
    [26424, 75.7, 57110117, "United Kingdom", 1990],
    [37062, 75.4, 252847810, "United States", 1990]
  ],
  [
    [44056, 81.8, 23968973, "Australia", 2015],
    [43294, 81.7, 35939927, "Canada", 2015],
    [13334, 76.9, 1376048943, "China", 2015],
    [21291, 78.5, 11389562, "Cuba", 2015],
    [38923, 80.8, 5503457, "Finland", 2015],
    [37599, 81.9, 64395345, "France", 2015],
    [44053, 81.1, 80688545, "Germany", 2015],
    [42182, 82.8, 329425, "Iceland", 2015],
    [5903, 66.8, 1311050527, "India", 2015],
    [36162, 83.5, 126573481, "Japan", 2015],
    [1390, 71.4, 25155317, "North Korea", 2015],
    [34644, 80.7, 50293439, "South Korea", 2015],
    [34186, 80.6, 4528526, "New Zealand", 2015],
    [64304, 81.6, 5210967, "Norway", 2015],
    [24787, 77.3, 38611794, "Poland", 2015],
    [23038, 73.13, 143456918, "Russia", 2015],
    [19360, 76.5, 78665830, "Turkey", 2015],
    [38225, 81.4, 64715810, "United Kingdom", 2015],
    [53354, 79.1, 321773631, "United States", 2015]
  ]
];

export default defineComponent({
  name: 'rightContentView',
  components: {
    FooterView,
    VChart
  },
  provide: {
    [THEME_KEY]: "light"
  },
  setup() {
    // 注释掉这一行才能正常显示，说明useMessage的值是空，我不知道为啥
    // const message = useMessage();
    const showDropdownRef = ref(false);
    const scatter = ref({
      textStyle: {
        fontFamily: 'Inter, "Helvetica Neue", Arial, sans-serif'
      },
      title: {
        text: "Life Expectancy vs. GDP by country"
      },
      legend: {
        right: 10,
        data: ["1990", "2015"]
      },
      xAxis: {
        splitLine: {
          lineStyle: {
            type: "dashed"
          }
        }
      },
      yAxis: {
        splitLine: {
          lineStyle: {
            type: "dashed"
          }
        },
        scale: true
      },
    });
    return {
      options: [
        {
          label: "Animation",
          key: "Animation",
          // disabled: true
        },
        {
          label: "Design",
          key: "Design"
        },
        {
          label: "Illustration",
          key: "Illustration"
        },
        {
          label: "Business",
          key: "Business"
        }
      ],
      showDropdown: showDropdownRef,
      handleSelect(key) {
        message.info(String(key));
      },
      handleClick() {
        showDropdownRef.value = !showDropdownRef.value;
      },
      scatter
    };
    },
  data(){
    return{
      earns: [],
      items:[],
    }
  },
  mounted() {
    axios.get('http://127.0.0.1:5000/staff_portal/recent_product_list')
        .then(response => {
          this.items = response.data.orders;
        })
        .catch(error => {
          console.error(error);
        });
    axios.get('http://127.0.0.1:5000/staff_portal/get_statistic')
        .then(response => {
          this.earns = response.data;
        })
        .catch(error => {
          console.error(error);
        });
  }
});


</script>

<style scoped>
.table_reject {
  border-radius: 100px;
  padding-top: 4px !important;
  padding-bottom: 4px !important;
  text-align: center;
  flex:0 0 auto;
  width:100%;
  font-size: 14px !important;
  font-weight: 500;
  background-color: #FFF5F8 !important;
  color: #F1416C;
}

.table_confirm {
  border-radius: 100px;
  padding-top: 4px !important;
  padding-bottom: 4px !important;
  text-align: center;
  flex:0 0 auto;
  width:100%;
  font-size: 14px !important;
  font-weight: 500;
  background-color: rgba(53, 84, 209, 0.05);
  color: #3554D1;
}

.table_pending {
  border-radius: 100px;
  padding-top: 4px !important;
  padding-bottom: 4px !important;
  text-align: center;
  flex:0 0 auto;
  width:100%;
  font-size: 14px !important;
  font-weight: 500;
  background-color: #FFF8DD !important;
  color: #FFC700;
}

.table_money {
  font-weight: 500;
}

.table_head_href {
  color: #051036;
  font-size: 18px;
  line-height: 1.6 !important;
  font-weight: 500;
  cursor: pointer;
}

@media (max-width: 900px) {
  .table_head_href {
    color: #051036;
    font-size: 9px !important;
    line-height: 1.6 !important;
    font-weight: 500;
  }
}

/*.table_head_href {*/
/*  font-size: 14px !important;*/
/*  color: #3554D1;*/
/*  font-weight: 500;*/
/*  text-decoration: underline;*/
/*}*/

.table_head_text {
  font-size: 18px !important;
  line-height: 1 !important;
  font-weight: 500;
}

.table_head {
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
}

.table_wrap {
  padding: 30px !important;
  border-radius: 4px;
  background-color: #FFFFFF !important;
  box-shadow: 0px 10px 30px 0px #05103608;
  margin-bottom: 30px;
  overflow-x: scroll;
}

.echarts {
  padding-top: 30px !important;
}

.dropdown {
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 8px;
}

.statistics_title {
  font-size: 18px !important;
  line-height: 1 !important;
  font-weight: 500;
}

.statistics_head {
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
}

.statistics_wrap_sub {
  padding: 30px !important;
  border-radius: 4px;
  background-color: #FFFFFF !important;
  box-shadow: 0px 10px 30px 0px #05103608;
}

@media (min-width:1200px) {
  .statistics_wrap {
    flex: 0 0 auto;
    width: 58.33333%;
  }
}

@media (min-width:768px) {
  .statistics_wrap {
    flex: 0 0 auto;
    width: 50%
  }
}


.statistics_and_recent_wrap {
  padding-top: 20px !important;
}

:root {
  --dashboard-width: 300px;
}

@media (max-width: 1199px) {
  :root {
    --dashboard-width: 250px;
  }
}


.dashboard_content {
  width: 94%;
  padding: 60px;
  padding-bottom: 0;
  background-color: #F5F5F5 !important;
}

@media (max-width: 1600px) {
  .dashboard_content{
    padding: 45px;
  }
}
@media (max-width: 1245px) {
  .dashboard_content{
    padding: 35px;
  }
}
@media (max-width: 910px) {
  .dashboard_content {
    padding: 25px;
  }
}
@media (max-width: 768px) {
  .dashboard_content {
    padding: 30px;
    padding-bottom: 0;
  }
}
@media (max-width: 670px) {

  .dashboard_content {
    padding: 27px;
    padding-bottom: 0;
  }
}
@media (max-width: 575px) {
  .dashboard_content {
    padding: 10px;
    padding-bottom: 0;
  }
}

.dash_head {
  justify-content: space-between !important;
  align-items: flex-end !important;
}

.dash_title {
  font-size: 30px !important;
  line-height: 1.4 !important;
  font-weight: 600;
}

.dash_text {
  font-size: 15px !important;
  color: #697488;
}

.block_sub_wrap {
  padding: 30px !important;
  border-radius: 4px;
  background-color: #FFFFFF;
  box-shadow: 0px 10px 30px 0px #05103608;
}

.block_content {
  margin-top: -10px;
  margin-bottom: -10px;
  justify-content: space-between !important;
  align-items: center !important;
}

.block_title {
  font-weight: 500;
  line-height: 1.4 !important;
}

.block_money {
  font-size: 26px !important;
  line-height: 1.6 !important;
  font-weight: 600;
  margin-top: 5px !important;
}

.block_total {
  font-size: 15px !important;
  line-height: 1.4 !important;
  color: #697488;
  margin-top: 5px !important;
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
}

@media (min-width:768px){
  .row-cols-md-auto>*{flex:0 0 auto;width:auto}
  .row-cols-md-1>*{flex:0 0 auto;width:100%}
  .row-cols-md-2>*{flex:0 0 auto;width:50%}
  .row-cols-md-3>*{flex:0 0 auto;width:33.33333%}
  .row-cols-md-4>*{flex:0 0 auto;width:25%}
  .row-cols-md-5>*{flex:0 0 auto;width:20%}
  .row-cols-md-6>*{flex:0 0 auto;width:16.66667%}
  .col-md-6{
    flex:0 0 auto;
    /*width:50%;*/
    width: 100%;
  }
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
  .col-xl-5{
    flex:0 0 auto;
    /*width:41.66667%;*/
    width: 100%;
  }
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


</style>
