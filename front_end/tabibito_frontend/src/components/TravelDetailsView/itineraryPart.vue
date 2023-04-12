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
      version: "beta",
      libraries: ["marker"],
      language: "en-US"
    });

    loader.load().then((google) => {
      const center = { lat: 34.84555, lng: -111.8035 };
      let map = new google.maps.Map(document.getElementById("map"), {
        center: center,
        zoom: 12,
        mapId: "fdhssdfkhsdjkhasdfjkh"
      });
      const tourStops = [
        {
          position: { lat: 34.8791806, lng: -111.8265049 },
          title: "Boynton Pass",
        },
        {
          position: { lat: 34.8559195, lng: -111.7988186 },
          title: "Airport Mesa",
        },
        {
          position: { lat: 34.832149, lng: -111.7695277 },
          title: "Chapel of the Holy Cross",
        },
        {
          position: { lat: 34.823736, lng: -111.8001857 },
          title: "Red Rock Crossing",
        },
        {
          position: { lat: 34.800326, lng: -111.7665047 },
          title: "Bell Rock",
        },
      ];
      // Create an info window to share between markers.
      const infoWindow = new google.maps.InfoWindow();
      tourStops.forEach(({ position, title }, i) => {
        const pinView = new google.maps.marker.PinView({
          glyph: `${i + 1}`,
        });
        const marker = new google.maps.marker.AdvancedMarkerView({
          position,
          map,
          title: `${i + 1}. ${title}`,
          content: pinView.element,
        });

        // Add a click listener for each marker, and set up the info window.
        marker.addListener("click", ({ domEvent, latLng }) => {
          const { target } = domEvent;

          infoWindow.close();
          infoWindow.setContent(marker.title);
          infoWindow.open(marker.map, marker);
        });
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