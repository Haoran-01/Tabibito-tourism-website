<template>
  <div class="container">
    <div class="itineraryTitle">Itinerary</div>
    <div class="itineraryCore">
      <div class="timeLine">
        <div v-for="(item, index) in itineraryData">
          <itinerary-step :item="item" :index="index"></itinerary-step>
        </div>
      </div>
      <div class="map"></div>
    </div>
  </div>
</template>

<script>
import ItineraryStep from "./itineraryStep.vue";
export default {
  name: "itineraryPart",
  components: {ItineraryStep},
  data(){
    return{
      itineraryData: [
        {
          name: "test",
          time: "test",
          description: "test",
          picture: "test"
        },
        {
          name: "test",
          time: "test",
          description: "test",
          picture: "test"
        },
      ]
    }
  }
}
</script>

<style scoped>
.container{
  width: 1110px;
  margin: 0 auto;
}
.itineraryTitle{
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.45;
}
.itineraryCore{
  width: 100%;
  display: flex;
}
.timeLine{
  width: 350px;
  margin: 15px;
}
.map{
  width: 730px;
  margin: 15px;
  background-color: #051036;
  border-radius: 4px;
  min-height: 500px;
}
</style>