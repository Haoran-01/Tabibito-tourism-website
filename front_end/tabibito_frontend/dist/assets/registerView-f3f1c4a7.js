import{N as t}from"./navigationBar-eb2995a3.js";import{F as s}from"./footerView-63148a8a.js";import{_ as i,u as a,a as e,o as n,c as r,b as o,d as l,w as u,t as p,h as d,k as c,v as h,l as m,m as g,F as f,p as b,j as v}from"./index-908c153e.js";const _={setup:()=>({toast:a()}),components:{FooterView:s,navigationBar:t},name:"loginView",data:()=>({countingDown:!1,remainingTime:60,countdownInterval:null,inputFirst:"",inputLast:"",inputEmail1:"",inputPassword1:"",inputConfirm:"",inputCode:""}),methods:{startCountdown(){let t=this;""===this.inputFirst&&this.toast.error("First name can't be blank");if(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(this.inputEmail1)||this.toast.error("This email is not valid"),""===this.inputLast&&this.toast.error("Last name can't be blank"),""===this.inputEmail1&&this.toast.error("Email can't be blank"),""===this.inputPassword1&&this.toast.error("Password can't be blank"),this.inputPassword1.length>20&&this.toast.error("Your password is too long"),this.inputPassword1.length<5&&this.toast.error("Your password is too easy"),""===this.inputConfirm&&this.toast.error("Please confirm your password"),this.inputPassword1!==this.inputConfirm&&this.toast.error("The passwords are not the same"),""===this.inputEmail1||""===this.inputPassword1||""===this.inputFirst||""===this.inputLast||""===this.inputConfirm)this.toast.error("Please finish the information above first");else{this.countingDown=!0,this.remainingTime=60,this.countdownInterval=setInterval((()=>{this.remainingTime>0?this.remainingTime--:(clearInterval(this.countdownInterval),this.countingDown=!1)}),1e3);let s=this.inputEmail1;t.toast.success("Captcha send Successfully."),this.axios.post("/user/captcha",{email:s}).then((function(s){let i=s.data.code,a=s.data.message;200===i?t.toast.success("Register successfully. You can login now!"):400===i&&"invalidSignUpEmail"===a&&t.toast.error("The email is not available")})).catch((function(t){}))}},checkRegister(){let t=this;""===this.inputFirst&&this.toast.error("First name can't be blank");if(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(this.inputEmail1)||this.toast.error("This email is not valid"),""===this.inputLast&&this.toast.error("Last name can't be blank"),""===this.inputEmail1&&this.toast.error("Email can't be blank"),""===this.inputPassword1&&this.toast.error("Password can't be blank"),this.inputPassword1.length>20&&this.toast.error("Your password is too long"),this.inputPassword1.length<5&&this.toast.error("Your password is too easy"),""===this.inputConfirm&&this.toast.error("Please confirm your password"),""===this.inputCode&&this.toast.error("Please verify your email first"),this.inputPassword1!==this.inputConfirm&&this.toast.error("The passwords are not the same"),""===this.inputEmail1||""===this.inputPassword1||""===this.inputFirst||""===this.inputLast||""===this.inputConfirm||""===this.inputCode);else{let s=this.inputFirst,i=this.inputLast,a=this.inputEmail1,e=this.inputPassword1,n=this.inputConfirm,r=this.inputCode;this.axios.post("/user/register_form",{first:s,last:i,email:a,password:e,confirm:n,code:r}).then((function(s){let i=s.data.code,a=s.data.message;200===i?t.$router.push("/login"):400===i&&("invalidSignUpEmail"===a&&t.toast.error("This email is already registered"),"invalidSignUpCaptcha"===a&&t.toast.error("The Verification Code is not correct"))})).catch((function(t){}))}}}},w=t=>(b("data-v-197a40a4"),t=t(),v(),t),C={class:"bg"},y={class:"container"},P={class:"border"},$={class:"font_login"},k={class:"font_acc"},E={autocomplete:"off"},z={class:"input_border"},A={class:"input_form"},Z={class:"input_label"},F={class:"input_border"},T={class:"input_form"},x={class:"input_label"},L={class:"input_border"},V={class:"input_form"},U={class:"input_label"},q={class:"input_border"},I={class:"input_form"},D={class:"input_label"},Y={class:"input_border"},j={class:"input_form"},R={class:"input_label"},S={class:"input_border"},B={class:"input_form"},N={class:"half_1"},G={class:"input_label"},H={class:"half_2"},J={key:0,class:"add_step_btn verify"},K={class:"input_border"},M=w((()=>l("div",{class:"icon_add"},null,-1))),O={class:"input_border"},Q={class:"text_center"},W={class:"other_login_btn"},X=w((()=>l("i",{class:"google_icon"},null,-1))),tt={class:"input_border"},st={class:"text_note"};const it=i(_,[["render",function(t,s,i,a,b,v){const _=e("navigation-bar"),w=e("router-link"),it=e("n-card"),at=e("footer-view");return n(),r(f,null,[o(_),l("div",C,[l("div",y,[o(it,{class:"card"},{default:u((()=>[l("div",P,[l("h1",$,p(t.$t("reg.sign")),1),l("p",k,[d(p(t.$t("reg.alr"))+" ",1),o(w,{to:"/login",class:"font_blue"},{default:u((()=>[d(p(t.$t("reg.log")),1)])),_:1})]),l("form",E,[l("div",z,[l("div",A,[c(l("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=t=>b.inputFirst=t),required:""},null,512),[[h,b.inputFirst]]),l("label",Z,p(t.$t("reg.fir")),1)])]),l("div",F,[l("div",T,[c(l("input",{type:"text","onUpdate:modelValue":s[1]||(s[1]=t=>b.inputLast=t),required:""},null,512),[[h,b.inputLast]]),l("label",x,p(t.$t("reg.las")),1)])]),l("div",L,[l("div",V,[c(l("input",{type:"text","onUpdate:modelValue":s[2]||(s[2]=t=>b.inputEmail1=t),required:""},null,512),[[h,b.inputEmail1]]),l("label",U,p(t.$t("reg.email")),1)])]),l("div",q,[l("div",I,[c(l("input",{type:"password","onUpdate:modelValue":s[3]||(s[3]=t=>b.inputPassword1=t),required:""},null,512),[[h,b.inputPassword1]]),l("label",D,p(t.$t("reg.pass")),1)])]),l("div",Y,[l("div",j,[c(l("input",{type:"password","onUpdate:modelValue":s[4]||(s[4]=t=>b.inputConfirm=t),required:""},null,512),[[h,b.inputConfirm]]),l("label",R,p(t.$t("reg.con")),1)])]),l("div",S,[l("div",B,[l("div",N,[c(l("input",{type:"text","onUpdate:modelValue":s[5]||(s[5]=t=>b.inputCode=t),required:""},null,512),[[h,b.inputCode]]),l("label",G,p(t.$t("reg.ver")),1)]),l("div",H,[c(l("a",{class:"add_step_btn verify",onClick:s[6]||(s[6]=(...t)=>v.startCountdown&&v.startCountdown(...t))},p(t.$t("reg.get")),513),[[m,!b.countingDown]]),b.countingDown?(n(),r("a",J,p(b.remainingTime)+" s ",1)):g("",!0)])])]),l("div",K,[l("button",{type:"submit",class:"add_step_btn",onClick:s[7]||(s[7]=(...t)=>v.checkRegister&&v.checkRegister(...t))},[d(p(t.$t("reg.sig"))+" ",1),M])])]),l("div",O,[l("div",Q,p(t.$t("reg.or")),1),l("button",W,[X,d(" "+p(t.$t("reg.goo")),1)])]),l("div",tt,[l("div",st,p(t.$t("reg.by")),1)])])])),_:1})])]),o(at)],64)}],["__scopeId","data-v-197a40a4"]]);export{it as default};
