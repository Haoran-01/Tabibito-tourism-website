<template>
 <header class="header">
<!--   <div class="leftHeader">
     <div class="logoArea">
       <div class="logoIcon"></div>
       <div class="logoText"></div>
     </div>
     <div class="menu"></div>
   </div>-->
   <div class="logoArea">
     <div class="logoIcon"></div>
     <div class="logoText"></div>
   </div>
   <div class="actions">
     <div class="simpleSettings">
       <n-dropdown :options="options">
         <div class="actionButton currencyButton">
           <div class="actionIcon"></div>
           <div class="actionText">USD</div>
         </div>
<!--         <template #dropdown>
           <el-dropdown-menu>
             <el-dropdown-item class="dropdownItem" disabled>
               <el-icon><IconUsdCircle/></el-icon>USD</el-dropdown-item>
             <el-dropdown-item class="dropdownItem" divided command="test">
               <el-icon><CurrencyCnyLine/></el-icon>CNY</el-dropdown-item>
             <el-dropdown-item class="dropdownItem">
               <el-icon><EuroCircle/></el-icon>EUR
             </el-dropdown-item>
           </el-dropdown-menu>
         </template>-->
       </n-dropdown>
       <div class="divider"></div>
       <div class="actionButton languageButton">
         <div class="actionIcon"></div>
         <div class="actionText">English</div>
       </div>
     </div>
     <div class="accountButton"></div>
   </div>
 </header>
</template>

<script>
import usdCircle from '@iconify-icons/uil/usd-circle';
import euroCircle from '@iconify-icons/uil/euro-circle';
import CurrencyCnyLine from '@iconify-icons/mingcute/currency-cny-line';
import { h, defineComponent } from "vue";
import { NIcon } from "naive-ui";

const renderIcon = (icon) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    });
  };
};


export default defineComponent({
  setup() {
    return {
      options: [
        {
          label: "用户资料",
          key: "profile",
          icon: renderIcon(usdCircle)
        },
        {
          label: "编辑用户资料",
          key: "editProfile",
          icon: renderIcon(CurrencyCnyLine)
        },
        {
          label: "退出登录",
          key: "logout",
          icon: renderIcon(euroCircle)
        }
      ]
    };
  }
});


</script>

<style scoped>
.header{
  width: calc(100vw - 60px);
  height: 90px;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 30px;
  margin-right: 30px;
}
.leftHeader{
  width: auto;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
}
.logoArea{
  width: 140px;
  height: 100%;
  background-color: antiquewhite;
}
.menu{
  width: 590px;
  height: 100%;
  background-color: aqua;
}
.actions{
  height: 100%;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.simpleSettings{
  width: 240px;
  height: 30px;
  display: grid;
  grid-template-columns: 1fr 11px 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  box-sizing: border-box;

}
.actionButton{
  width: calc(100% - 20px);
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  transition: .1s ease-in;
  border-radius: var(--el-border-radius-small);
  padding: 3px;
  cursor: pointer;
  outline: none;
}
.actionButton:hover{
  transition: .1s ease-out;
  background-color: aqua;
}
.actionIcon{
  background-image: url("../../assets/USD.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 24px;
  height: 24px;
}
.actionText{
  color: white;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.currencyButton{
  margin-left: 10px;
}
.languageButton{
  margin-right: 10px;
}
.divider{
  margin-left: 5px;
  margin-right: 5px;
  height: 80%;
  width: 1px;
  background-color: var(--el-border-color);
}
</style>