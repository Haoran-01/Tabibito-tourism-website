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
import axios from "axios";
export default {
  props: ["rowIndex", "prop"],
  components: {NButton, NIcon, CancelRound, NPopconfirm},
  name: "delistButton",
  methods:{
    handlePositiveClick(){
      axios.post('http://127.0.0.1:5000/user/backList',{
        operation: "launch",
        id: this.itemId,
      })
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

  padding: 9px 15px;

  margin-top: 3px;

  background-color: #d9545d !important;
  color: #FFFFFF;

  text-decoration:none;
}
</style>