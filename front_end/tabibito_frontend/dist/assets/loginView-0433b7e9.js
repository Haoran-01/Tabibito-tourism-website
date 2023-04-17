import{N as w}from"./navigationBar-ef5f0c37.js";import{F as k}from"./footerView-ad55b9ab.js";import{_ as V,u as $,g as E,r as _,o as P,c as C,a as l,b as o,w as u,t as e,d as c,e as f,v as g,F as y,p as B,f as I}from"./index-fbacc1f8.js";const N={setup(){const t=$(),s=E().appContext.config.globalProperties.axios;return s.defaults.withCredentials=!0,{toast:t}},components:{FooterView:k,navigationBar:w},name:"loginView",data(){return{inputEmail:"",inputPassword:"",from:""}},beforeRouteEnter(t,s,d){d(i=>{i.from=s})},methods:{checkLogin(){event.preventDefault();let t=this;if(this.inputEmail===""&&this.toast.error("Email can't be blank"),this.inputPassword===""&&this.toast.error("Password can't be blank"),!(this.inputEmail===""||this.inputPassword==="")){let s=this.inputEmail,d=this.inputPassword;this.axios.post("/user/login_form",{email:s,password:d}).then(function(i){let n=i.data.code,a=i.data.message;n===200?i.data.job==="Customer"?t.from.path==="/login"||t.from.path==="/register"?t.$router.push("/"):t.$router.push(t.from.path):t.$router.push("/management"):n===400&&(a==="email"?t.toast.error("Email is not correct"):a==="password"&&t.toast.error("Password is not correct"))}).catch(function(i){console.log(i)})}}}},m=t=>(B("data-v-1df93c9e"),t=t(),I(),t),x={class:"bg"},F={class:"container"},S={class:"border"},D={class:"font_login"},L={class:"font_acc"},T={autocomplete:"off"},q={class:"input_border"},U={class:"input_form"},j={class:"input_label"},A={class:"input_border"},M={class:"input_form"},R={class:"input_label"},z={class:"input_border"},G={class:"input_border"},H=m(()=>o("div",{class:"icon_add"},null,-1)),J={class:"input_border"},K={class:"text_center"},O={class:"other_login_btn"},Q=m(()=>o("i",{class:"google_icon"},null,-1)),W={class:"input_border"},X={class:"text_note"};function Y(t,s,d,i,n,a){const h=_("navigation-bar"),p=_("router-link"),v=_("n-card"),b=_("footer-view");return P(),C(y,null,[l(h),o("div",x,[o("div",F,[l(v,{class:"card"},{default:u(()=>[o("div",S,[o("h1",D,e(t.$t("login.welcome")),1),o("p",L,[c(e(t.$t("login.noAccount"))+" ",1),l(p,{to:"/register",class:"font_blue"},{default:u(()=>[c(e(t.$t("login.signup")),1)]),_:1})]),o("form",T,[o("div",q,[o("div",U,[f(o("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=r=>n.inputEmail=r),required:""},null,512),[[g,n.inputEmail]]),o("label",j,e(t.$t("login.email")),1)])]),o("div",A,[o("div",M,[f(o("input",{type:"password","onUpdate:modelValue":s[1]||(s[1]=r=>n.inputPassword=r),required:""},null,512),[[g,n.inputPassword]]),o("label",R,e(t.$t("login.password")),1)])]),o("div",z,[l(p,{to:"/forget",class:"forget_link"},{default:u(()=>[c(e(t.$t("login.forget")),1)]),_:1})]),o("div",G,[o("button",{type:"submit",class:"add_step_btn",onClick:s[2]||(s[2]=(...r)=>a.checkLogin&&a.checkLogin(...r))},[c(e(t.$t("login.signin"))+" ",1),H])])]),o("div",J,[o("div",K,e(t.$t("login.signin2")),1),o("button",O,[Q,c(" "+e(t.$t("login.google")),1)])]),o("div",W,[o("div",X,e(t.$t("login.agree")),1)])])]),_:1})])]),l(b)],64)}const st=V(N,[["render",Y],["__scopeId","data-v-1df93c9e"]]);export{st as default};
