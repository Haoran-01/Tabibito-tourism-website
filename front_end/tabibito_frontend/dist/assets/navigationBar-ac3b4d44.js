import{_ as e,o as s,c as n,d as o,F as t,e as a,G as i,t as r,J as c,s as l,q as u,r as d,g as h,y as g,H as p,a as v,b as _,w as m,k as x,l as y,a9 as w,f as C,m as b,p as f,j as k}from"./index-5baf022e.js";const I={class:"dropdown"},T={class:"dropdownContainer"},$=["onClick"],D={class:"dropdownItemText"};const M=e({props:["is_currency","dropdown_item"],name:"dropDown.vue",methods:{handleClick(e){this.is_currency?this.$emit("changeCurrency",e.icon,e.text):this.$router.push(e.path)}},emits:["changeCurrency"]},[["render",function(e,c,l,u,d,h){return s(),n("div",I,[o("div",T,[(s(!0),n(t,null,a(l.dropdown_item,(e=>(s(),n("div",{class:"dropdownItem",onClick:s=>h.handleClick(e)},[o("div",{class:"dropdownItemIcon",style:i(e.icon)},null,4),o("div",D,r(e.text),1)],8,$)))),256))])])}],["__scopeId","data-v-67025f05"]]),B={setup:()=>({action_items:[{icon:"background-image:url('src/assets/profile.svg')",text:"Profile",path:"/user/profile"},{icon:"background-image:url('src/assets/logout.svg')",text:"Log out",path:"/login"}]}),name:"userDropDown",methods:{handleClick(e){const s=c();"/login"===e.path&&this.axios.get("/user/logout").then((n=>{200===n.status&&(s.user_login_status=!1,s.user_id=0,s.job="",this.$router.push(e.path))})),"/user/profile"===e.path&&this.$router.push(e.path+"/"+s.user_id)}}},L={class:"userDropDown"},P=l('<div class="userInfo" data-v-a7ef3875><div class="userAvatar" data-v-a7ef3875></div><div class="userInfoText" data-v-a7ef3875><div class="userName" data-v-a7ef3875>Hello</div><div class="userRole" data-v-a7ef3875></div></div></div>',1),j={class:"actions"},S=["onClick"],W={class:"actionItemText"};const z=u({props:{isTransparent:Boolean,isIniTextWhite:Boolean},components:{DropDown:M,userDropDown:e(B,[["render",function(e,c,l,u,d,h){return s(),n("div",L,[P,o("div",j,[(s(!0),n(t,null,a(u.action_items,(e=>(s(),n("div",{class:"actionItem",onClick:s=>h.handleClick(e)},[o("div",{class:"actionItemIcon",style:i(e.icon)},null,4),o("div",W,r(e.text),1)],8,S)))),256))])])}],["__scopeId","data-v-a7ef3875"]])},setup(e){const s=c();let n=d(!1),o=d(!1),t=d(!1);h().appContext.config.globalProperties.axios.get("/user/login_status").then((e=>{t.value=null!==e.data.id,t.value&&(s.user_id=e.data.id,s.name=e.data.name),s.user_login_status=t.value}));let a=d("background-image:url('src/assets/chat.png')"),i=d("USD"),r=d("background-color: white;"),l=d(""),u=d("");return e.isTransparent?(r=d("background-color: 00000000;"),e.isIniTextWhite&&(l=d("filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(346deg) brightness(101%) contrast(104%);"),u=d("right: 100px;")),g((()=>{window.addEventListener("scroll",(function(){0===(document.documentElement.scrollTop||document.body.scrollTop)?(r.value="background-color: 00000000; transition: .2s;",e.isIniTextWhite&&(l.value="filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(346deg) brightness(101%) contrast(104%); transition: .2s;",u.value="right: 100px;")):(r.value="background-color: white; transition: .2s; box-shadow: 0px 10px 30px 0px #05103608;",l.value="color: black; transition: .2s;",u.value="right: 100px;")}),!0)}))):r=d("background-color: white; box-shadow: 0px 10px 30px 0px #05103608;"),{currency_is_shown:n,user_is_shown:o,currencyIcon:a,currencyText:i,user_is_logged_in:t,backgroundColor:r,currencyColor:l,dropDownPosition:u}},data(){return{currency_item:d([{icon:"background-image:url('src/assets/USD.svg')",text:this.$t("navi.chat")}]),user_item:[{}],login_item:[{icon:"background-image:url('src/assets/login.svg')",text:this.$t("navi.login"),path:"/login"},{icon:"background-image:url('src/assets/signup.svg')",text:this.$t("navi.signup"),path:"/register"}]}},methods:{handleCurrencyChange(e,s){this.currencyIcon=e,this.currencyText=s},changeLang(){const e=p();"en"===this.$i18n.locale?(this.$i18n.locale="zh",e.language="zh"):(this.$i18n.locale="en",e.language="en"),this.axios.post("/user/set_language",{language:this.$i18n.locale})}}}),A=e=>(f("data-v-d87d95bd"),e=e(),k(),e),E={class:"content"},H=[A((()=>o("div",{class:"logoIcon"},null,-1))),A((()=>o("div",{class:"logoText"},"Tabibito",-1)))],N={class:"simpleSettings"},U={class:"actionText",id:"currencyText"},q=A((()=>o("div",{class:"divider"},null,-1))),F=A((()=>o("div",{class:"actionIcon"},null,-1))),G={class:"actionText"};const J=e(z,[["render",function(e,t,a,c,l,u){const d=v("drop-down"),h=v("user-drop-down");return s(),n("header",{class:"header",style:i(e.backgroundColor)},[o("div",E,[o("div",{class:"logoArea",onClick:t[0]||(t[0]=e=>this.$router.push("/"))},H),o("div",{class:"actions",style:i(e.currencyColor)},[o("div",N,[o("div",{class:"actionButton currencyButton",onClick:t[1]||(t[1]=e=>this.$router.push("/chat"))},[o("div",{class:"actionIcon",id:"currencyIcon",style:i(e.currencyIcon)},null,4),o("div",U,r(e.$t("navi.chat")),1)]),_(w,{name:"fade"},{default:m((()=>[x(_(d,{onMouseenter:t[2]||(t[2]=s=>e.currency_is_shown=!0),onMouseleave:t[3]||(t[3]=s=>e.currency_is_shown=!1),dropdown_item:e.currency_item,is_currency:!0,style:{position:"absolute",left:"10px",top:"60px"},onChangeCurrency:e.handleCurrencyChange},null,8,["dropdown_item","onChangeCurrency"]),[[y,e.currency_is_shown]])])),_:1}),q,o("div",{class:"actionButton languageButton",onClick:t[4]||(t[4]=s=>e.changeLang())},[F,o("div",G,r(e.$t("navi.lang")),1)])]),o("div",{class:"accountButton",onMouseenter:t[9]||(t[9]=s=>e.user_is_shown=!0),onMouseleave:t[10]||(t[10]=s=>e.user_is_shown=!1)},[_(w,{name:"fade"},{default:m((()=>[e.user_is_logged_in?b("",!0):x((s(),C(d,{key:0,onMouseenter:t[5]||(t[5]=s=>e.user_is_shown=!0),onMouseleave:t[6]||(t[6]=s=>e.user_is_shown=!1),dropdown_item:e.login_item,is_currency:!1,style:i([{position:"absolute",right:"100px",top:"60px"},e.dropDownPosition]),onChangeCurrency:e.handleCurrencyChange},null,8,["dropdown_item","style","onChangeCurrency"])),[[y,e.user_is_shown]])])),_:1}),_(w,{name:"fade"},{default:m((()=>[e.user_is_logged_in?x((s(),C(h,{key:0,onMouseenter:t[7]||(t[7]=s=>e.user_is_shown=!0),onMouseleave:t[8]||(t[8]=s=>e.user_is_shown=!1),style:{position:"absolute",right:"0",top:"60px"}},null,512)),[[y,e.user_is_shown]]):b("",!0)])),_:1})],32)],4)])],4)}],["__scopeId","data-v-d87d95bd"]]);export{J as N};
