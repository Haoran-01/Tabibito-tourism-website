<template>
<div class="userDropDown">
  <div class="userInfo">
    <div class="userAvatar"></div>
    <div class="userInfoText">
      <div class="userName">Hello</div>
      <div class="userRole"></div>
    </div>
  </div>
  <div class="actions">
    <div class="actionItem" v-for="item in action_items" @click="handleClick(item)">
      <div class="actionItemIcon" :style="item.icon"></div>
      <div class="actionItemText">{{item.text}}</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  setup(){
    return{
      action_items:[
        {
          icon: "background-image:url('src/assets/profile.svg')",
          text: "Profile",
          path: ""
        },
        {
          icon: "background-image:url('src/assets/logout.svg')",
          text: "Log out",
          path: ""
        }
      ]
    }
  },
  name: "userDropDown",
  methods:{
    handleClick(item){

    }
  }
}
</script>

<style scoped>
  .userDropDown{
    width: 150px;
    background-color: #ffffff;
    border-radius: var(--border-radius);
    box-sizing: border-box;
    padding: 10px;
    position: absolute;
    z-index: 10000;
  }
  .userDropDown::before{
    content: '';
    display: block;
    position: absolute;
    width: 150px;
    height: 25px;
    right: 0;
    top: -25px;
  }
  .userInfo{
    width: 100%;
    border-bottom: 1px solid #323232;
    box-sizing: border-box;
    padding-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .userAvatar{
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-image: url("../../assets/user.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  .userInfoText{
    width: 80px;
    height: 40px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
  }
  .userName{
    font-size: 18px;
  }
  .actions{
    width: 100%;
    padding-top: 5px;
    box-sizing: border-box;
  }
  .actionItem{
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    border-radius: var(--border-radius);
    cursor: pointer;
  }
  .actionItem:hover{
    background-color: rgba(53, 84, 209, 0.05);
    color: #3554D1;
    transition: .1s ease-out;
  }
  .actionItemIcon{
    width: 35%;
    height: 25px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  .actionItemText{
    width: 65%;
    height: 100%;
    line-height: 35px;
    text-align: center;
    font-size: 16px;
  }
</style>
