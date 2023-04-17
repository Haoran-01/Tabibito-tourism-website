import{N as y}from"./navigationBar-ef5f0c37.js";import{F as V}from"./footerView-ad55b9ab.js";import{_ as P,u as k,r as h,o as b,c as v,a as _,b as t,w,t as n,d as f,e as l,v as d,h as E,i as T,F as z,p as A,f as F}from"./index-fbacc1f8.js";const Z={setup(){return{toast:k()}},components:{FooterView:V,navigationBar:y},name:"loginView",data(){return{countingDown:!1,remainingTime:60,countdownInterval:null,inputFirst:"",inputLast:"",inputEmail1:"",inputPassword1:"",inputConfirm:"",inputCode:""}},methods:{startCountdown(){let s=this;if(this.inputFirst===""&&this.toast.error("First name can't be blank"),/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(this.inputEmail1)||this.toast.error("This email is not valid"),this.inputLast===""&&this.toast.error("Last name can't be blank"),this.inputEmail1===""&&this.toast.error("Email can't be blank"),this.inputPassword1===""&&this.toast.error("Password can't be blank"),this.inputPassword1.length>20&&this.toast.error("Your password is too long"),this.inputPassword1.length<5&&this.toast.error("Your password is too easy"),this.inputConfirm===""&&this.toast.error("Please confirm your password"),this.inputPassword1!==this.inputConfirm&&this.toast.error("The passwords are not the same"),this.inputEmail1===""||this.inputPassword1===""||this.inputFirst===""||this.inputLast===""||this.inputConfirm==="")this.toast.error("Please finish the information above first");else{this.countingDown=!0,this.remainingTime=60,this.countdownInterval=setInterval(()=>{this.remainingTime>0?this.remainingTime--:(clearInterval(this.countdownInterval),this.countingDown=!1)},1e3);let p=this.inputEmail1;s.toast.success("Captcha send Successfully."),this.axios.post("/user/captcha",{email:p}).then(function(r){let i=r.data.code,a=r.data.message;i===200?s.toast.success("Register successfully. You can login now!"):i===400&&a==="invalidSignUpEmail"&&s.toast.error("The email is not available")}).catch(function(r){console.log(r)})}},checkRegister(){let s=this;if(this.inputFirst===""&&this.toast.error("First name can't be blank"),/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(this.inputEmail1)||this.toast.error("This email is not valid"),this.inputLast===""&&this.toast.error("Last name can't be blank"),this.inputEmail1===""&&this.toast.error("Email can't be blank"),this.inputPassword1===""&&this.toast.error("Password can't be blank"),this.inputPassword1.length>20&&this.toast.error("Your password is too long"),this.inputPassword1.length<5&&this.toast.error("Your password is too easy"),this.inputConfirm===""&&this.toast.error("Please confirm your password"),this.inputCode===""&&this.toast.error("Please verify your email first"),this.inputPassword1!==this.inputConfirm&&this.toast.error("The passwords are not the same"),!(this.inputEmail1===""||this.inputPassword1===""||this.inputFirst===""||this.inputLast===""||this.inputConfirm===""||this.inputCode==="")){let p=this.inputFirst,r=this.inputLast,i=this.inputEmail1,a=this.inputPassword1,m=this.inputConfirm,g=this.inputCode;this.axios.post("/user/register_form",{first:p,last:r,email:i,password:a,confirm:m,code:g}).then(function(u){let c=u.data.code,o=u.data.message;c===200?s.$router.push("/login"):c===400&&(o==="invalidSignUpEmail"&&s.toast.error("This email is already registered"),o==="invalidSignUpCaptcha"&&s.toast.error("The Verification Code is not correct"))}).catch(function(u){console.log(u)})}}}},C=s=>(A("data-v-45b083f0"),s=s(),F(),s),L={class:"bg"},I={class:"container"},S={class:"border"},U={class:"font_login"},D={class:"font_acc"},q={autocomplete:"off"},N={class:"input_border"},B={class:"input_form"},Y={class:"input_label"},R={class:"input_border"},$={class:"input_form"},x={class:"input_label"},M={class:"input_border"},j={class:"input_form"},G={class:"input_label"},H={class:"input_border"},J={class:"input_form"},K={class:"input_label"},O={class:"input_border"},Q={class:"input_form"},W={class:"input_label"},X={class:"input_border"},tt={class:"input_form"},st={class:"half_1"},it={class:"input_label"},et={class:"half_2"},ot={key:0,class:"add_step_btn verify"},nt={class:"input_border"},at=C(()=>t("div",{class:"icon_add"},null,-1)),rt={class:"input_border"},lt={class:"text_center"},ut={class:"other_login_btn"},dt=C(()=>t("i",{class:"google_icon"},null,-1)),pt={class:"input_border"},ct={class:"text_note"};function ht(s,e,p,r,i,a){const m=h("navigation-bar"),g=h("router-link"),u=h("n-card"),c=h("footer-view");return b(),v(z,null,[_(m),t("div",L,[t("div",I,[_(u,{class:"card"},{default:w(()=>[t("div",S,[t("h1",U,n(s.$t("reg.sign")),1),t("p",D,[f(n(s.$t("reg.alr"))+" ",1),_(g,{to:"/login",class:"font_blue"},{default:w(()=>[f(n(s.$t("reg.log")),1)]),_:1})]),t("form",q,[t("div",N,[t("div",B,[l(t("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>i.inputFirst=o),required:""},null,512),[[d,i.inputFirst]]),t("label",Y,n(s.$t("reg.fir")),1)])]),t("div",R,[t("div",$,[l(t("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=o=>i.inputLast=o),required:""},null,512),[[d,i.inputLast]]),t("label",x,n(s.$t("reg.las")),1)])]),t("div",M,[t("div",j,[l(t("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=o=>i.inputEmail1=o),required:""},null,512),[[d,i.inputEmail1]]),t("label",G,n(s.$t("reg.email")),1)])]),t("div",H,[t("div",J,[l(t("input",{type:"password","onUpdate:modelValue":e[3]||(e[3]=o=>i.inputPassword1=o),required:""},null,512),[[d,i.inputPassword1]]),t("label",K,n(s.$t("reg.pass")),1)])]),t("div",O,[t("div",Q,[l(t("input",{type:"password","onUpdate:modelValue":e[4]||(e[4]=o=>i.inputConfirm=o),required:""},null,512),[[d,i.inputConfirm]]),t("label",W,n(s.$t("reg.con")),1)])]),t("div",X,[t("div",tt,[t("div",st,[l(t("input",{type:"text","onUpdate:modelValue":e[5]||(e[5]=o=>i.inputCode=o),required:""},null,512),[[d,i.inputCode]]),t("label",it,n(s.$t("reg.ver")),1)]),t("div",et,[l(t("a",{class:"add_step_btn verify",onClick:e[6]||(e[6]=(...o)=>a.startCountdown&&a.startCountdown(...o))},n(s.$t("reg.get")),513),[[E,!i.countingDown]]),i.countingDown?(b(),v("a",ot,n(i.remainingTime)+" s ",1)):T("",!0)])])]),t("div",nt,[t("button",{type:"submit",class:"add_step_btn",onClick:e[7]||(e[7]=(...o)=>a.checkRegister&&a.checkRegister(...o))},[f(n(s.$t("sig"))+" ",1),at])])]),t("div",rt,[t("div",lt,n(s.$t("reg.or")),1),t("button",ut,[dt,f(" "+n(s.$t("reg.goo")),1)])]),t("div",pt,[t("div",ct,n(s.$t("reg.by")),1)])])]),_:1})])]),_(c)],64)}const gt=P(Z,[["render",ht],["__scopeId","data-v-45b083f0"]]);export{gt as default};
