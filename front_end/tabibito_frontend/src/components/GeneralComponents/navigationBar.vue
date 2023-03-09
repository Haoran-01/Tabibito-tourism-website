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
     <div class="logoIcon">
     </div>
     <div class="logoText"></div>
   </div>
   <div class="actions">
     <div class="simpleSettings">
       <div class="actionButton currencyButton" @mouseenter="currency_is_shown = true" @mouseleave="currency_is_shown = false">
         <div class="actionIcon" id="currencyIcon" :style="currencyIcon"></div>
         <div class="actionText" id="currencyText">{{currencyText}}</div>
       </div>
       <transition name="fade">
         <drop-down
             @mouseenter="currency_is_shown = true"
             @mouseleave="currency_is_shown = false"
             :dropdown_item="currency_item"
             v-show="currency_is_shown"
             style="position: absolute; left: 10px; top: 60px"
             @change-currency="handleCurrencyChange"
         ></drop-down>
       </transition>
       <div class="divider"></div>
       <div class="actionButton languageButton">
         <div class="actionIcon"></div>
         <div class="actionText">English</div>
       </div>
     </div>
     <div class="accountButton" @mouseenter="user_is_shown = true" @mouseleave="user_is_shown = false">
       <transition name="fade">
         <drop-down
             @mouseenter="user_is_shown = true"
             @mouseleave="user_is_shown = false"
             :dropdown_item="login_item"
             v-show="user_is_shown"
             style="position: absolute; right: 100px; top: 90px"
             @change-currency="handleCurrencyChange"
         ></drop-down>
       </transition>
     </div>
   </div>

 </header>

</template>

<script>
import {h, defineComponent, ref} from "vue";
import DropDown from "./dropDown.vue";
export default defineComponent({
  components: {DropDown},
  setup() {
    let currency_is_shown = ref(false);
    let user_is_shown = ref(false);
    let user_is_logged_in = ref(true);
    let currencyIcon = ref("background-image:url('src/assets/USD.svg')");
    let currencyText = ref('USD');
    return {
      currency_is_shown,
      user_is_shown,
      currencyIcon,
      currencyText,
      user_is_logged_in,
      handleSelect(key){
        console.log("key")
      }
    };
  },
  data(){
    return{
      currency_item: [
        {icon: "background-image:url('src/assets/USD.svg')", text: 'USD'},
        {icon: "background-image:url('src/assets/CNY.svg')", text: 'CNY'},
        {icon: "background-image:url('src/assets/EUR.svg')", text: 'EUR'},
      ],
      user_item: [
        {

        }
      ],
      login_item: [
        {icon: "background-image:url('src/assets/login.svg')", text: 'Log In'},
        {icon: "background-image:url('src/assets/signup.svg')", text: 'Sign Up'}
      ]
    }
  },
  methods: {
    handleCurrencyChange(icon, text){
      console.log(text)
      this.currencyIcon = icon;
      this.currencyText = text;
    },
  }
});


</script>

<style scoped>
.header{
  width: 100vw;
  height: 90px;
  /*background-color: #13357B;*/
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding-left: 30px;
  padding-right: 30px;

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
  position: relative;
}
.actionButton{
  width: calc(100% - 20px);
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  transition: .1s ease-in;
  border-radius: var(--border-radius);
  padding: 3px;
  cursor: pointer;
  outline: none;
}
.actionButton:hover{
  transition: .1s ease-out;
  background-color: rgba(46, 51, 56, .09);
}
.actionIcon{
  background-image: url('../../assets/USD.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 24px;
  height: 24px;
}
.actionText{
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.currencyButton{
  margin-left: 10px;
}
.languageButton{
  margin-right: 10px;
}
.languageButton .actionIcon{
  background-image: url('../../assets/language.svg');
}
.accountButton{
  width: 36px;
  height: 36px;
  border-radius: 400px;
  box-sizing: border-box;
  background-image: url("../../assets/user.svg");
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
}
.accountButton:hover{
  background-color: rgba(46, 51, 56, .09);
  transition: .1s ease-out;
}
.divider{
  margin-left: 5px;
  margin-right: 5px;
  height: 80%;
  width: 1px;
  background-color: var(--border-color);
}
.fade-enter-active{
  transition:height .25s;
}
.fade-leave-active{
transition:opacity .25s
}
.fade-enter{
  height: 0;
}
.fade-leave-to {opacity:0}
</style>