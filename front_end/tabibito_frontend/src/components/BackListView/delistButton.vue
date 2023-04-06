<template>
  <n-popconfirm
      @positive-click="handlePositiveClick"
  >
    <template #trigger>
      <button type="submit" class="deListBtn" @click="checkList">
        Delisting
        <div class="icon_add"></div>
      </button>
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
.deListBtn{
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  text-align: center;
  font-weight: 500;
  font-size: 15px;
  border-radius: 3px;
  border: 1px solid transparent;

  padding: 9px 18px;

  margin-top: 3px;

  background-color: #d9545d !important;
  color: #FFFFFF;

  text-decoration:none;
}
</style>