<template>
  <n-popconfirm
      @positive-click="handlePositiveClick"
  >
    <template #trigger>
      <button type="submit" class="deListBtn" @click="checkList">
        Launch {{ title }}22
      </button>
    </template>
    Are you sure you want to launch this travel project?
  </n-popconfirm>
</template>

<script>
import {NButton, NIcon, NPopconfirm} from "naive-ui";
import {CancelRound} from "@vicons/material";
export default {
  props: ['qqqq'],
  components: {NButton, NIcon, CancelRound, NPopconfirm},
  name: "listButton",
  methods:{
    handlePositiveClick(){
      console.log(1111111)
      console.log(this.qqqq)
      this.axios.post('/staff_portal/product_status',{
        operation: "launch",
        id: this.title,
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

  padding: 9px 19px;

  margin-top: 3px;

  background-color: #42a14e !important;
  color: #FFFFFF;

  text-decoration:none;
}
</style>