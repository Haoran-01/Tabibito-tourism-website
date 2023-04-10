<template>
  <div class="container">
    <div class="itineraryTitle">{{ $t('projectDetailPage.itinerary.title') }}</div>
    <div class="itineraryCore">
      <div class="timeLine">
        <div v-for="(item, index) in itineraryData">
          <itinerary-step :item="item" :index="index"></itinerary-step>
        </div>
      </div>
      <div class="map" id="map"></div>
    </div>
  </div>
</template>

<script>
import ItineraryStep from "./itineraryStep.vue";
import {Loader} from "@googlemaps/js-api-loader";
export default {
  name: "itineraryPart",
  components: {ItineraryStep},
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
  width: 1320px;
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
  width: 560px;
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