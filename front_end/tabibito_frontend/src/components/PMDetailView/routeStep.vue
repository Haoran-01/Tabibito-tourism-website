<template>
  <div class="stepContainer">
    <div class="stepTitleBar" @click="handleExpand">
      <div class="stepTitle">{{"Step " + (stepIndex + 1) + ": " + stepData.activityName}}</div>
      <div class="actions">
        <n-popconfirm
            @positive-click="handleDeleteStep"
        >
          <template #trigger>
            <div class="actionButton deleteButtonIcon" @click.stop=""></div>
          </template>
          Are you sure you want to delete this step? The information will lost.
        </n-popconfirm>
        <div class="actionButton" :class="expandButtonIcon"></div>
      </div>
    </div>
    <n-collapse-transition :show="show">
      <div class="stepContent">
        <div class="inputTitle">Activity Name</div>
        <div class="input_form">
          <input type="text" v-model="stepData.activityName" required>
          <label class="input_label">Activity Name</label>
        </div>
        <div class="inputTitle">Location</div>
        <div class="input_form">
          <input type="text" v-model="stepData.exactLocation" required>
          <label class="input_label">Exact Location</label>
        </div>
        <div class="input_form" style="justify-content: space-between;">
          <div class="inner_input_form">
            <input type="text" v-model="stepData.mapLatitude" required>
            <label class="input_label">Map Latitude</label>
          </div>
          <div class="inner_input_form">
            <input type="text" v-model="stepData.mapLongitude" required>
            <label class="input_label">Map Longitude</label>
          </div>
          <div class="inner_input_form">
            <input type="text" v-model="stepData.mapZoom" required>
            <label class="input_label">Map Zoom</label>
          </div>
        </div>
        <div class="inputTitle">Time</div>
          <div class="timeInputForm">
            <n-select v-model:value="stepData.dayNumber" :disabled="isDayNumberDisabled" size="large" placeholder="Day Number" :options="dayOptions" placement="bottom"/>
            <n-select v-model:value="stepData.periodValue" size="large" placeholder="Period" :options="periodOptions" placement="bottom"/>
            <n-time-picker v-model:value="stepData.exactTime" size="large" :is-hour-disabled="isHourDisabled" placement="bottom"/>
          </div>
        <div class="inputTitle">Activity Image</div>
        <n-upload
            action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
            :default-file-list="stepData.activityPic"
            list-type="image-card"
            style="margin-left: 10px"
            @before-upload="beforeUpload"
            accept="image/*"
            @finish="handleFinishImage"
            :max="1"
        />
        <div style="height: 20px"></div>
      </div>
    </n-collapse-transition>
  </div>


</template>

<script>
import {ref} from "vue";
import message from "@iconify-icons/uil/message.js";

export default {
  props:['stepData', 'stepIndex'],
  name: "routeStep",
  emits: ['deleteStep'],
  setup(props){
    let show = ref(true);
    let expandButtonIcon = ref("collapseIcon");
    let isDayNumberDisabled = ref(true);
    let dayOptions = ref([]);
    let dayNumber = ref();
    let periodValue = ref();
    let exactTime = ref();
    let periodOptions = ref([
      {
        label: "Morning",
        value: "Morning"
      },
      {
        label: "Noon",
        value: "Noon"
      },
      {
        label: "Afternoon",
        value: "Afternoon"
      },
      {
        label: "Night",
        value: "Night"
      },
      {
        label: "Midnight",
        value: "Midnight"
      }
    ])
    if (props.stepData.totalDayNumber != null && props.stepData.totalDayNumber > 0){
      isDayNumberDisabled.value = false;
      for (let i = 0; i < parseInt(props.stepData.totalDayNumber); i++){
        dayOptions.value.push({
          label: 'day ' + (i + 1),
          value: 'day ' + (i + 1),
        })
      }
    }else{
      isDayNumberDisabled.value = true;
    }
    function handleExpand(){
      if (show.value){
        expandButtonIcon.value = "expandIcon";
        show.value = false;
      }else {
        expandButtonIcon.value = "collapseIcon";
        show.value = true;
      }
    }
    const handleFinishImage = ({file,event}) => {
      console.log(event);
      let res = (event?.target).response;
      props.stepData.activityPic = res.data.url;
    };
    return{
      show,
      expandButtonIcon,
      handleExpand,
      isDayNumberDisabled,
      dayOptions,
      periodOptions,
      dayNumber,
      periodValue,
      exactTime,
      handleFinishImage,
      async beforeUpload(data) {
        if (data.file.file?.type !== "image/*") {
          message.error("You can only upload images.");
          return false;
        }
        return true;
      },
      isHourDisabled(hour){
        console.log(props.stepData.periodValue)
        if (props.stepData.periodValue === "Morning"){
          if (hour >= 11 || hour <= 6){
            return hour
            }
        }
        if (props.stepData.periodValue === "Noon"){
          if (hour > 13 || hour < 11){
            return hour
          }
        }
        if (props.stepData.periodValue === "Afternoon"){
          if (hour <= 13 || hour >= 19){
            return hour
          }
        }
        if (props.stepData.periodValue === "Night"){
          if (hour < 19){
            return hour
          }
        }
        if (props.stepData.periodValue === "Midnight"){
          if (hour > 6){
            return hour
          }
        }
      }
    }
  },
  methods:{
    handleDeleteStep(){
      this.$emit('deleteStep', this.stepIndex);
    }
  }
}
</script>

<style scoped>
.stepContainer{
  width: 100%;
  border: #DDDDDD 1px solid;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 0 20px;
}
  .stepTitleBar{
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .stepTitle{
    font-size: 20px;
  }
  .actions{
    display: flex;
  }
  .actionButton{
    width: 30px;
    height: 30px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  .deleteButtonIcon{
    background-image: url("../../assets/close.svg");
    transition: .2s;
  }
  .deleteButtonIcon:hover{
    border-radius: 100%;
    background-color: #DDDDDD;
    transition: .2s;
  }
  .expandIcon{
    transform: rotateZ(180deg);
    background-image: url("../../assets/ChevronUp.svg");
    transition: .3s;
  }
  .collapseIcon{
    background-image: url("../../assets/ChevronUp.svg");
    transition: .3s;
  }
  .inputTitle{
    margin: 10px 0;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.875;
  }
  .input_form{
    position: relative;
    transition: all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
    display: flex;
    margin: 10px;
  }
  .inner_input_form{
    position: relative;
    transition: all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
    display: flex;
    width: 30%;
  }
  .input_label{
    line-height: 1 !important;
    font-size: 14px !important;
    color: #697488;
  }
  .input_form label {
    position: absolute;
    top: 26px;
    padding: 0 15px;
    pointer-events: none;
    font-size: 14px;
    transition: all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .input_form input,textarea {
    border: 1px solid #DDDDDD;
    width: 100%;
    font-size: 15px;
    border-radius: 4px;
    /*padding: 0 15px;*/
    padding-top: 20px;
    padding-left: 15px;
    min-height: 48px;
    transition: all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .input_form textarea{
    min-height: 80px;
  }
  .input_form input:focus,textarea:focus {
    outline: 2px solid #000000 !important;
  }
  .input_form input:focus ~ label, .input_form input:valid ~ label {
    transform: translateY(-10px);
  }
  .input_form textarea:focus ~ label, .input_form textarea:valid ~ label {
    transform: translateY(-10px);
  }
  .input_form textarea{
    box-sizing: border-box;
    padding-top: 35px;
  }
  .timeInputForm{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    box-sizing: border-box;
  }
  .timeInputForm *{
    width: calc((100% - 20px)/3);
  }
</style>