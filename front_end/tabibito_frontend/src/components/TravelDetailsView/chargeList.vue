<template>
  <div class="container">
    <div class="chargeListTitle">{{ $t('projectDetailPage.ChargeList.title')}}</div>
    <div class="chargeList">
      <n-card :title="item.chargeTitle" hoverable v-for="item in chargeListData">
        {{item.chargeDescription}}
      </n-card>
    </div>
  </div>
  <div class="divider"></div>
  <itinerary-part></itinerary-part>
</template>

<script>
import ItineraryPart from "./itineraryPart.vue";
export default {
  name: "chargeList",
  components: {ItineraryPart},
  data(){
    return{
      chargeListData: [
        {
          chargeTitle: "test",
          chargeDescription: "test"
        },
        {
          chargeTitle: "test",
          chargeDescription: "test"
        },
        {
          chargeTitle: "test",
          chargeDescription: "test"
        },
        {
          chargeTitle: "test",
          chargeDescription: "test"
        },{
          chargeTitle: "test",
          chargeDescription: "test"
        },
      ]
    }
  }
}
</script>

<style scoped>
.container{
  width: 1320px;
  margin: 0 auto;
}
.chargeListTitle{
  font-weight: 500;
  font-size: 22px;
  line-height: 1.45;
  margin: 20px 0;
}
.chargeList{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
}
.n-card{
  width: 270px;
  margin-bottom: 10px;
}
.divider{
  width: 1320px;
  border-top: 1px solid #DDDDDD;
  margin: 40px auto;
}
</style>