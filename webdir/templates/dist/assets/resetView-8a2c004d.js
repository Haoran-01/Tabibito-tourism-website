import{N as g}from"./navigationBar-a86738af.js";import{F as w}from"./footerView-d7f3339b.js";import{_ as V,g as $,r as l,o as k,c as y,a as c,b as e,w as p,t as s,d,e as u,v as f,F as C,p as I,f as B}from"./index-24337c0d.js";const N={components:{FooterView:w,navigationBar:g},name:"loginView",setup(){const t=$().appContext.config.globalProperties.axios;t.defaults.withCredentials=!0},data(){return{countingDown:!1,remainingTime:60,countdownInterval:null,p1:"",p2:""}},methods:{reset(){let t=this;this.p1===""&&this.toast.error("Password name can't be blank"),this.p2===""&&this.toast.error("Please confirm your password"),this.p1!==this.p2&&this.toast.error("The passwords are not the same");let o=this.p1,_=this.p2;this.axios.post("/user/reset_password",{password:o,confirm:_}).then(function(r){let n=r.data.code,a=r.data.message;n===200?t.$router.push("/login"):n===400&&a==="email"&&t.toast.error("Email is not registered")}).catch(function(r){console.log(r)})}}},x=t=>(I("data-v-e5bf34cb"),t=t(),B(),t),F={class:"bg"},S={class:"container"},T={class:"border"},D={class:"font_login"},P={class:"font_acc"},q={autocomplete:"off"},E={class:"input_border"},U={class:"input_form"},M={class:"input_label"},j={class:"input_border"},z={class:"input_form"},A={class:"input_label"},G={class:"input_border"},H={class:"input_border"},J={class:"text_center"},K={class:"other_login_btn"},L=x(()=>e("i",{class:"google_icon"},null,-1)),O={class:"input_border"},Q={class:"text_note"};function R(t,o,_,r,n,a){const h=l("navigation-bar"),m=l("router-link"),v=l("n-card"),b=l("footer-view");return k(),y(C,null,[c(h),e("div",F,[e("div",S,[c(v,{class:"card"},{default:p(()=>[e("div",T,[e("h1",D,s(t.$t("reset.reset")),1),e("p",P,[d(s(t.$t("reset.rem"))+" ",1),c(m,{to:"/login",class:"font_blue"},{default:p(()=>[d(s(t.$t("reset.log")),1)]),_:1})]),e("form",q,[e("div",E,[e("div",U,[u(e("input",{type:"password","onUpdate:modelValue":o[0]||(o[0]=i=>n.p1=i),required:""},null,512),[[f,n.p1]]),e("label",M,s(t.$t("reset.enter")),1)])]),e("div",j,[e("div",z,[u(e("input",{type:"password","onUpdate:modelValue":o[1]||(o[1]=i=>n.p2=i),required:""},null,512),[[f,n.p2]]),e("label",A,s(t.$t("reset.con")),1)])]),e("div",G,[e("div",{class:"add_step_btn c",onClick:o[2]||(o[2]=(...i)=>a.reset&&a.reset(...i))},s(t.$t("reset.res"))+" ",1)])]),e("div",H,[e("div",J,s(t.$t("reset.or")),1),e("button",K,[L,d(" "+s(t.$t("reset.goo")),1)])]),e("div",O,[e("div",Q,s(t.$t("reset.rese")),1)])])]),_:1})])]),c(b)],64)}const Z=V(N,[["render",R],["__scopeId","data-v-e5bf34cb"]]);export{Z as default};
