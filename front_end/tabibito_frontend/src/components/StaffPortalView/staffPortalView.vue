<template>
  <div class="portal">
    <div class="main">
      <side-bar-view></side-bar-view>
      <right-content-view></right-content-view>
    </div>
  </div>

</template>

<script>
import SideBarView from "./sideBarView.vue";
import RightContentView from "./rightContentView.vue";

export default {
  name: "staffPortalView",
  components: {RightContentView, SideBarView}
}
</script>

<style scoped>

</style>