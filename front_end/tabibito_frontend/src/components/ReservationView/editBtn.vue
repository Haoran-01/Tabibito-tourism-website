<template>
  <n-popconfirm @positive-click="handlePositiveClick()">
    <template #trigger>
      <button type="submit" class="deListBtn" @click="checkEdit">
        Edit
      </button>
    </template>
    Do you want to edit this reservation?
  </n-popconfirm>
</template>

<script>
import {NButton, NIcon, NPopconfirm} from "naive-ui";
export default {
  props: ["rowIndex", "prop"],
  components: {NButton, NIcon, NPopconfirm},
  name: "editBtn",
  methods:{
    handlePositiveClick(){
      // console.log("confirm")
      this.$router.push({ name: 'Edit', params: { itemId } })
    },
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
  border-radius: 43px;
  border: 1px solid transparent;

  padding: 9px 19px;

  margin-top: 3px;

  background-color: #2464dc !important;
  color: #FFFFFF;

  text-decoration:none;
}
</style>