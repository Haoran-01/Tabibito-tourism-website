<template>
  <div class="TManager">
    <div class="TCon">
      <div class="TTit">
        <div class="TCol">
          <h1 class="TTex1">Travel Programs List</h1>
          <div class="TTex2">Manage the tourism programs</div>

          <div class="but">
            <button class="nBtn nBtn1">
              Back To Dashboard
            </button>

            <button class="nBtn nBtn2" @click="nextPage">
              Add New Projects
            </button>
          </div>
        </div>

        <div class="TAuto">
        </div>
      </div>

      <div class="TTable">

          <div class="main">
            <div class="tableArea">

              <div class="mainTable">
                <v-grid
                    theme="material"
                    :source="rows"
                    :columns="columns"
                    :resize="true"
                    :filter="true"
                    :readonly="true"
                ></v-grid>
              </div>
            </div>
          </div>
      </div>

<!--      @dblclick="cellClickHandler"-->=

      <!--      footer 部分，直接从footerView中抄过来的-->
      <footer class="footer -type-1">
        <div class="container">
          <div class="contact-foot-layout">
            <div class="row contact-foot">
              <div class="col-auto">
                <div class="row contact-foot-sub">
                  <div class="col-auto">
                    <div class="contact-foot-text">
                      © 2023 Tabibito All rights reserved.
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-auto">
                <div class="row contact-foot-sub2">
                  <div class="col-auto">
                    <div class="contact-foot-sub2-in">
                      <button class="contact-foot-sub2-btn">
                        <i class="icon-globe contact-foot-sub2-icon"></i>
                        <span class="underline">English (US)</span>
                      </button>

                      <button class="contact-foot-sub2-btn2">
                        <i class="icon-usd contact-foot-sub2-icon"></i>
                        <span class="underline">USD</span>
                      </button>
                    </div>
                  </div>

                  <div class="col-auto">
                    <div class="contact-foot-icons">
                      <a href="#"><i class="icon-facebook text-14"></i></a>
                      <a href="#"><i class="icon-twitter text-14"></i></a>
                      <a href="#"><i class="icon-instagram text-14"></i></a>
                      <a href="#"><i class="icon-linkedin text-14"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>


    </div>
  </div>


</template>

<script>
import VGrid, {VGridVueTemplate} from "@revolist/vue3-datagrid";

import axios from "axios";
import {useToast} from "vue-toastification";

import listButton from "../BackListView/listButton.vue";
import delistButton from "../BackListView/delistButton.vue";

export default {
  name: "staffView",
  components: {
    VGrid
  },
  setup(){
    const tip = useToast();
    return{tip};
  },
  data(){
    return{
      counter: 0,
      columns: [
        { name: "Name", prop: "name", size: 190,
          cellTemplate: (createElement, props) => {
            return createElement('span', {
              style: {
                fontWeight: 700,
              },

            }, props.model[props.prop]);
          },
        },
        { name: "Start Time", prop: "start_time", size: 160, sortable: true, filter: 'number', columnType: "date", dblclick:"cellClickHandler"},
        { name: "End Time", prop: "end_time", size: 160, sortable: true, filter: 'number', columnType: "date"},
        { name: "Deadline", prop: "app_ddl", size: 160,sortable: true,filter: 'number'},
        { name: "Price", prop: "ori_price", size: 160, sortable: true,filter: 'number'},
        { name: "Discount", prop: "discount", size: 160, sortable: true,filter: 'number'},
        { name: "Mark", prop: "mark", size:160,sortable: true,filter: false},
        { name: "Status", prop: "status", size:160,sortable: false,filter: false},
        { name: "Listing", cellTemplate: VGridVueTemplate(listButton), size: 130},
        { name: "Delisting", cellTemplate: VGridVueTemplate(delistButton), size: 130}

      ],
      rows: [
          {
            name: "1",
            ori_price: "Zhou Zhongyang",
            start_time: "2018-1-1",
            end_time: -1,
            app_ddl: "retail",
            discount:'90%',
            mark: "Xie Wenbei"
      },
        {
          name: "1",
          ori_price: "Zhou Zhongyang",
          start_time: "1",
          end_time: -1,
          app_ddl: "retail",
          discount:'90%',

          mark: "Xie Wenbei"
        },
        {
          name: "1",
          ori_price: "Zhou Zhongyang",
          start_time: "1",
          end_time: -1,
          app_ddl: "retail",
          discount:'90%',

          mark: "Xie Wenbei"
        },
        // {
      //     name: "1",
      //     ori_price: "Zhou Zhongyang",
      //     start_time: "1",
      //     end_time: -1,
      //     app_ddl: "retail",
      //     discount:'90%',
      //
      //     mark: "Xie Wenbei"
      //   },{
      //     name: "1",
      //     ori_price: "Zhou Zhongyang",
      //     start_time: "1",
      //     end_time: -1,
      //     app_ddl: "retail",
      //     discount:'90%',
      //
      //     mark: "Xie Wenbei"
      //   },{
      //     name: "1",
      //     ori_price: "Zhou Zhongyang",
      //     start_time: "1",
      //     end_time: -1,
      //     app_ddl: "retail",
      //     discount:'90%',
      //
      //     mark: "Xie Wenbei"
      //   },{
      //     name: "1",
      //     ori_price: "Zhou Zhongyang",
      //     start_time: "1",
      //     end_time: -1,
      //     app_ddl: "retail",
      //     discount:'90%',
      //
      //     mark: "Xie Wenbei"
      //   },{
      //     name: "1",
      //     ori_price: "Zhou Zhongyang",
      //     start_time: "1",
      //     end_time: -1,
      //     app_ddl: "retail",
      //     discount:'90%',
      //
      //     mark: "Xie Wenbei"
      //   },{
      //     name: "1",
      //     ori_price: "Zhou Zhongyang",
      //     start_time: "1",
      //     end_time: -1,
      //     app_ddl: "retail",
      //     discount:'90%',
      //
      //     mark: "Xie Wenbei"
      //   },{
      //     name: "1",
      //     ori_price: "Zhou Zhongyang",
      //     start_time: "1",
      //     end_time: -1,
      //     app_ddl: "retail",
      //     discount:'90%',
      //
      //     mark: "Xie Wenbei"
      //   },{
      //     name: "1",
      //     ori_price: "Zhou Zhongyang",
      //     start_time: "1",
      //     end_time: -1,
      //     app_ddl: "retail",
      //     discount:'90%',
      //
      //     mark: "Xie Wenbei"
      //   },{
      //     name: "1",
      //     ori_price: "Zhou Zhongyang",
      //     start_time: "1",
      //     end_time: -1,
      //     app_ddl: "retail",
      //     discount:'90%',
      //
      //     mark: "Xie Wenbei"
      //   },{
      //     name: "1",
      //     ori_price: "Zhou Zhongyang",
      //     start_time: "1",
      //     end_time: -1,
      //     app_ddl: "retail",
      //     discount:'90%',
      //
      //     mark: "Xie Wenbei"
      //   },
      //   {
      //     name: "1",
      //     ori_price: "Zhou Zhongyang",
      //     start_time: "1",
      //     end_time: -1,
      //     app_ddl: "retail",
      //     discount:'90%',
      //
      //     mark: "Xie Wenbei"
      //   },
      //   {
      //     name: "1",
      //     ori_price: "Zhou Zhongyang",
      //     start_time: "1",
      //     end_time: -1,
      //     app_ddl: "retail",
      //     discount:'90%',
      //
      //     mark: "Xie Wenbei"
      //   },{
      //     name: "1",
      //     ori_price: "Zhou Zhongyang",
      //     start_time: "1",
      //     end_time: -1,
      //     app_ddl: "retail",
      //     discount:'90%',
      //
      //     mark: "Xie Wenbei"
      //   },{
      //     name: "1",
      //     ori_price: "Zhou Zhongyang",
      //     start_time: "1",
      //     end_time: -1,
      //     app_ddl: "retail",
      //     discount:'90%',
      //
      //     mark: "Xie Wenbei"
      //   },{
      //     name: "1",
      //     ori_price: "Zhou Zhongyang",
      //     start_time: "1",
      //     end_time: -1,
      //     app_ddl: "retail",
      //     discount:'90%',
      //
      //     mark: "Xie Wenbei"
      //   },{
      //     name: "1",
      //     ori_price: "Zhou Zhongyang",
      //     start_time: "1",
      //     end_time: -1,
      //     app_ddl: "retail",
      //     discount:'90%',
      //
      //     mark: "Xie Wenbei"
      //   },{
      //     name: "1",
      //     ori_price: "Zhou Zhongyang",
      //     start_time: "1",
      //     end_time: -1,
      //     app_ddl: "retail",
      //     discount:'90%',
      //
      //     mark: "Xie Wenbei"
      //   },{
      //     name: "1",
      //     ori_price: "Zhou Zhongyang",
      //     start_time: "1",
      //     end_time: -1,
      //     app_ddl: "retail",
      //     discount:'90%',
      //
      //     mark: "Xie Wenbei"
      //   },{
      //     name: "1",
      //     ori_price: "Zhou Zhongyang",
      //     start_time: "1",
      //     end_time: -1,
      //     app_ddl: "retail",
      //     discount:'90%',
      //
      //     mark: "Xie Wenbei"
      //   },{
      //     name: "1",
      //     ori_price: "Zhou Zhongyang",
      //     start_time: "1",
      //     end_time: -1,
      //     app_ddl: "retail",
      //     discount:'90%',
      //
      //     mark: "Xie Wenbei"
      //   },{
      //     name: "1",
      //     ori_price: "Zhou Zhongyang",
      //     start_time: "1",
      //     end_time: -1,
      //     app_ddl: "retail",
      //     discount:'90%',
      //
      //     mark: "Xie Wenbei"
      //   },{
      //     name: "1",
      //     ori_price: "Zhou Zhongyang",
      //     start_time: "1",
      //     end_time: -1,
      //     app_ddl: "retail",
      //     discount:'90%',
      //
      //     mark: "Xie Wenbei"
      //   },{
      //     name: "1",
      //     ori_price: "Zhou Zhongyang",
      //     start_time: "1",
      //     end_time: -1,
      //     app_ddl: "retail",
      //     discount:'90%',
      //
      //     mark: "Xie Wenbei"
      //   },{
      //     name: "1",
      //     ori_price: "Zhou Zhongyang",
      //     start_time: "1",
      //     end_time: -1,
      //     app_ddl: "retail",
      //     discount:'90%',
      //
      //     mark: "Xie Wenbei"
      //   },
      ],
    }
  },
  // created() {
  //   axios.get('http://127.0.0.1:5000/user/backList')
  //       .then((response)=>{
  //         const code = response.status
  //         if (code === 200){
  //           this.rows = response.data
  //         }
  //       })
  // },

  methods:{
    cellClickHandler(event){
      // console.log("aaaa",event)
      this.$router.push({ name: 'Edit', params: { id: event.id } })
    },

    // nextPage(){
    //   this.counter++
    //   axios.post('http://127.0.0.1:5000/user/backList',{
    //     counter: this.number
    //   }).then(function (response){
    //     this.rows = response.data
    //   }).catch(function (error){
    //     console.log(error);
    //   });
    //
    // }
  }

}
</script>

<style scoped>
.TManager{
  overflow: hidden;
  width: 100%;

  /*使用侧边栏前后变化 300px*/
  //padding-left: 300px;
  will-change: padding-left;
  transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.TManager::after {
  content: "";
  display: none;
  position: fixed;
  z-index: 50;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  pointer-events: none;
  opacity: 0;
}

.TCon{
  width: 100%;
  padding: 60px;
  padding-bottom: 0;

  background-color: #F5F5F5;
}

.TTit{
  display:flex;
  flex-wrap:wrap;
  margin: -10px -15px;

  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 60px;
  //padding-bottom: 40px;
}

.TCol{
  flex:0 0 auto;
  width:auto;
  margin-left: 20px;
}

.TTex1{
  font-family: JostBlod;
  font-size: 30px;
  line-height: 1.4;
  font-weight: 100;
}

.TTex2{
  font-size: 15px;
  color: #697488;
}


.but{
  flex:0 0 auto;
  width:auto;

  display:flex;
  flex-wrap:wrap;
}

.nBtn{
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  text-align: center;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.2;
  border-radius: 4px;
  /*border: 1px solid transparent;*/
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);

  padding-left: 44px ;
  padding-right: 44px;

  height:60px;

  /*控制按钮和字体在一行用的，可以删掉，但是那样就对不齐了*/
  margin-top: -63px;

  /*控制离标题的距离*/
  margin-left: 1200px;
}

.nBtn1{
  background-color: #3554D1;
  color: white;
  border: 1px solid #3554D1;
  padding-left: 33px ;
  padding-right: 33px;
}

.nBtn1:hover{
  background-color: #FBFCFF;
  color: #051036;
}

.nBtn2{
  background-color: #FBFCFF;
  color: #051036;
  border: 1px solid #3554D1;
  margin-left: 40px;
  padding-left: 33px ;
  padding-right: 33px;
}

.nBtn2:hover{
  background-color: #3554D1;
  color: white;
}

.nBtn1 .icon_login{
  background-image: url("../../assets/arrow.svg");
  margin-left: 15px !important;

  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 20px;
  height: 20px;
}

.nBtn2 .icon_login{
  background-image: url("../../assets/arrow_blue.svg");
  margin-left: 15px !important;

  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 20px;
  height: 20px;
}

.nBtn1:hover .icon_login{
  background-image: url("../../assets/arrow_blue.svg");
}

.nBtn2:hover .icon_login{
  background-image: url("../../assets/arrow.svg");
}


.TAuto{
  flex:0 0 auto;
  width:auto;
}

.TTable{
  padding: 30px;
  border-radius: 4px;
  background-color: #FFFFFF;
  //margin-left: auto;
  //margin-right: auto;
  max-width: 1580px;
  //box-shadow: 0px 10px 30px 0px #05103608;
}

.main{
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  width: 100%;
  //height: 100vh;
  height: 820px;
}

.tableArea{
  margin-top: 30px;
}

.mainTable{
  //max-width: 1100px;
  width: 100%;
  height: 800px;
  margin-left: auto;
  margin-right: auto;
  overflow-x: hidden !important;
}


/*下方开始，都是footerView中超过来的代码*/
.container{
  padding-right:var(--bs-gutter-x,15px);
  padding-left:var(--bs-gutter-x,15px);
  //margin-right:auto;
  //margin-left:auto;
}

.row {
  --bs-gutter-x:30px;
  --bs-gutter-y:0;
  width: 90%;
  display:flex;
  flex-wrap:wrap;
  margin-top:calc(var(--bs-gutter-y)*-1);
  margin-right:calc(var(--bs-gutter-x)*0.5);
  margin-left:calc(var(--bs-gutter-x)*0.5)
}

.col-auto{
  flex:0 0 auto;
  width:auto
}

.text-14 {
  font-size: 14px !important;
}

.contact-foot-layout {
  padding-top: 20px !important;
  padding-bottom: 20px !important;
  border-top: 1px solid #DDDDDD;
}

.contact-foot {
  justify-content: space-between !important;
  align-items: center !important;
  margin-top: -5px;
  margin-bottom: -5px;
}

.contact-foot-sub {
  margin-left: -15px;
  margin-right: -15px;
  margin-top: -5px;
  margin-bottom: -5px;
}

.contact-foot-text {
  display: flex !important;
  align-items: center !important;
}

.contact-foot-sub2 {
  margin-top: -5px;
  margin-bottom: -5px;
  align-items: center !important;
}

.contact-foot-sub2-in {
  display: flex !important;
  align-items: center !important;
}

.contact-foot-sub2-btn {
  display: flex !important;
  align-items: center !important;
  font-size: 14px !important;
  font-weight: 500;
  color: #051036;
  margin-right: 10px !important;
  border: none;
  background: none;
}

.contact-foot-sub2-icon {
  font-size: 16px !important;
  margin-right: 10px !important;
}

.underline {
  text-decoration: underline;
}

.contact-foot-sub2-btn2 {
  display: flex !important;
  align-items: center !important;
  font-size: 14px !important;
  font-weight: 500;
  color: #051036;
  border: none;
  background: none;
}

.contact-foot-icons {
  display: flex !important;
  margin-left: -10px;
  margin-right: -10px;
  align-items: center !important;
}




</style>