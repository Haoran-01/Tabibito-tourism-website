<template>
  <n-popconfirm
      @positive-click="handlePositiveClick"
  >
    <template #trigger>
      <n-button class="button" size="small" @click="handleClick" quaternary circle>
        <template #icon>
          <n-icon><cancel-round /></n-icon>
        </template>
      </n-button>
    </template>
    Are you sure you want to delist this travel project?
  </n-popconfirm>
</template>

<script>
import {NButton, NIcon, NPopconfirm} from "naive-ui";
import {CancelRound} from "@vicons/material";
import {toRaw} from "vue";
export default {
  props: ["rowIndex", "prop"],
  components: {NButton, NIcon, CancelRound, NPopconfirm},
  name: "delistButton",
  methods:{
    handlePositiveClick(){
      const index = toRaw(this.rowIndex);
      let indexMid = index.toString();
      let indexFinal = parseInt(indexMid);
      store.commit("changeCurrentDeletion", indexFinal);
    }
  }
}
</script>

<style scoped>
</style>