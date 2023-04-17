import{N as E}from"./navigationBar-ef5f0c37.js";import{_ as f,r as i,o as g,c as p,b as s,t as e,a as o,w as n,F as V,j as B,n as J,p as y,f as $,k as U,d as v}from"./index-fbacc1f8.js";import{A as k}from"./ArrowBack-bcfa98aa.js";import{A as x}from"./ArrowForward-bdffe69d.js";import{F as S}from"./footerView-ad55b9ab.js";const j="/assets/LDL-dc66b4c8.jpg",H="/assets/HFH-e2b9f29a.jpg",N="/assets/YHR-e333f0cb.jpg",Y="/assets/ZJH-7bc15a3f.jpg",W="/assets/XWB-50821244.jpg",D="/assets/WWJ-fe0b99f8.jpg";const L={components:{ArrowBack:k,ArrowForward:x},name:"ourTeamView"},d=t=>(y("data-v-13189674"),t=t(),$(),t),X={style:{overflow:"hidden"}},q={class:"layout-our-team-pt layout-our-team-pb"},M={class:"container"},Q={class:"row our-team-nav"},R={class:"col-auto"},Z={class:"sectionTitle-our-team"},G={class:"sectionTitle__title"},K=d(()=>s("p",{class:"sectionTitle__text"},"Come to know our team!",-1)),O={class:"our-team-contents"},z=d(()=>s("div",null,[s("img",{class:"carousel-img",src:j}),s("div",{class:"name-bar-our-team"},[s("div",{class:"our-team-name"},"Donglin Liu"),s("div",{class:"our-team-job"},"Front-End")])],-1)),ss=d(()=>s("div",null,[s("img",{class:"carousel-img",src:H}),s("div",{class:"name-bar-our-team"},[s("div",{class:"our-team-name"},"Feihe Huang"),s("div",{class:"our-team-job"},"Front-End")])],-1)),ts=d(()=>s("div",null,[s("img",{class:"carousel-img",src:N}),s("div",{class:"name-bar-our-team"},[s("div",{class:"our-team-name"},"Haoran Yan"),s("div",{class:"our-team-job"},"Back-End")])],-1)),os=d(()=>s("div",null,[s("img",{class:"carousel-img",src:Y}),s("div",{class:"name-bar-our-team"},[s("div",{class:"our-team-name"},"Jiahe Zhang"),s("div",{class:"our-team-job"},"Front-End")])],-1)),es=d(()=>s("div",null,[s("img",{class:"carousel-img",src:W}),s("div",{class:"name-bar-our-team"},[s("div",{class:"our-team-name"},"Wenbei Xie"),s("div",{class:"our-team-job"},"Front-End")])],-1)),as=d(()=>s("div",null,[s("img",{class:"carousel-img",src:D}),s("div",{class:"name-bar-our-team"},[s("div",{class:"our-team-name"},"Wenjie Wu"),s("div",{class:"our-team-job"},"Back-End")])],-1)),ns={class:"custom-arrow"},is=["onClick"],cs=["onClick"],ls={class:"custom-dots"},rs=["onClick"];function ds(t,_,C,F,I,T){const r=i("ArrowBack"),l=i("n-icon"),m=i("ArrowForward"),w=i("n-carousel");return g(),p("body",X,[s("section",q,[s("div",M,[s("div",Q,[s("div",R,[s("div",Z,[s("h2",G,e(t.$t("our.team")),1),K])])]),s("div",O,[o(w,{"slides-per-view":4,"space-between":20,loop:!1,autoplay:"","show-arrow":""},{arrow:n(({prev:u,next:h})=>[s("div",ns,[s("button",{type:"button",class:"custom-arrow--left",onClick:u},[o(l,null,{default:n(()=>[o(r)]),_:1})],8,is),s("button",{type:"button",class:"custom-arrow--right",onClick:h},[o(l,null,{default:n(()=>[o(m)]),_:1})],8,cs)])]),dots:n(({total:u,currentIndex:h,to:P})=>[s("ul",ls,[(g(!0),p(V,null,B(u,A=>(g(),p("li",{key:A,class:J({["is-active"]:h===A-1}),onClick:Pt=>P(A-1)},null,10,rs))),128))])]),default:n(()=>[z,ss,ts,os,es,as]),_:1})])])])])}const _s=f(L,[["render",ds],["__scopeId","data-v-13189674"]]),b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAb1SURBVHgB7Z05UBtJFIafBGVwYJc2drAisLGd2BvYRNRqgdxADnhj7hASmwTIwAURiaHIQc4Ba4sICAwRVxVoqyBeCgIozn1/e954JDHSnAih/qrkuVr09K/3Xh/T045QEdnf34+dn58nbm5u4tFo9A2fimPfuBzPSn7En3QkElFbTvcvfydVWVm5XlNTc0RFIkJ3iEWwBAvxgXJF8gqETfHf/fbo0aPUXQp6JwLu7u4mrq+ve3k3wZ8YhQyLOQ0xa2trkxQyoQkIa7u8vOxl4froDkSzAZY5dHV1lXr16lWaQiBwAe+JcNmkOV5OP3/+fIgCJlABd3Z2PrLrfKLgYlvQKIt88eLFNAVEIAJubm7GKyoqvqJyoNIgyR7SH4RbR8knbHW97B4/Skg80Ix7hseQTzxbIGLdxcXFJxauj0oYdulxdul+8ognAeGynHGSP2/oYbDOLt3ixaVdCwjx2Py/0/2tKLySZhH/ciuiKwEfsHiCaxEdC1gG4gmuRHQkYBmJJzgW0VEzBhUGlY94AAYzj5ZGoYQFBeS20tgDqm3d8BbNtEKJ8rqw0TX7SmUMl7//5cuX43bXbQU04t4Puj8DAsXiiOPhH3bx0NaFWbwx0uKBGPr5dhdvFdDoIzaTRoF+vl2/OWrzhYLBs9yAJrfVyjkC8vD7fR7PKyZxfp6TM3CSUYmUYYPZLUf80KrG+tAqwwI5WCZIi5ePWLYVZgioY58jeq0HpoDb29uodeOkKUSMQ11CDqwWqJstDuF6wrRCVYkYMwb+I41TzMpEWSCmW5DGDbHT09MEdsSFtfu6hN04obbG8Z+kcYUxOYoiOv55h+Pgb9HLy8u3pPEE4mCUx7oSpPEEx8F4JQXQeD4+PqaZmRna2tpS+8+ePaPu7m61zWZ1dZXm5ubo8PBQHbe2tlJLSwt5oVj5CphVG+Fxru9+5rXghtra2tT26dOn6hwKAwYHB6mjo8NMi8IODw/n/A0UZHR0lEohXyuYFYta2Neo88TEhCpEU1MTLS4u0tramioAmJycNNMhjRQCVsJdR1paWlLWMj8/rz6lkK8VNbfbMqnbE/KroyBiCfLryzWwsLCgtnV1ddTV1aX2UQhJC/cCYln4WOns7FTn4Iph5OsV3xb4+vVrtV1ZWTHPwWUAP4gxz8n1xsbGjO9DAABhJI7JsfwdWAmEgFDv378PJV+PqErEF/hVJZjjZlBIHq1Qv/jIyIiZ7uTkRG3FWgRrwEcaXEdcam5uVq6IgsJdgbhoWPl6wfcES7gcblxuRG744ODAPC/pgJMbFReDQHBdfDe7dg0jXy/4FlDiEgqIQI6AnkwmVYGk8EAKn+0u1uMnT56Y++3t7WoLMVB4iV9h5+sWCJgmj+Am5UatBUQMevfundqXIC5xyWodAG04gIJarQSCCCistbYMM1+XHPmyQOsvJ7WjIDcoNydBG0JI4YHUgohdAq5L3JudnVVbNEXEasLK1wPpip6eHs9D+VVVVeqmcNMoCPY3NjZU4XFOegYoDPaRZm9vT1kH0k5NTSlLwzVUHFJoiCXuicYuN1hpeXkZ45ZUX18fWr5u4fvainDDcpr3O8gHqC2t3SQgtaE18MOCcM7a9kK6gYEB09XwNxoaGtT3YH3Y4ntohmCLc9KUCTJfL+CVsgj/Yn28M0YBIAWBi+X7VVEgsZTb+q2lki8zFDGexnnvz5QxmMUaxeuhpPFEdXX1etSYppAmjVvS5lM5vFtLGldgKAvbqPVA4xx+FKKMTgloxMGirTtQijx+/DiFrRLQiIP/kMYRaP/JFDezK8dV8jhpHCHuCzImWHKbEM+H9cTy/KRra2tr5CB7MOELafLCnpqx7kKGgFyZwI11ZWJPmj8p64kMAY3AqK3QBra+mewXbnLeVDLmyuANpThprGTEPiFnQBVWmO3nmtzYJ9i+K+d3xsIDI8nWd+s8ENsh/aurq79JVygAHmm7qoetgAiWbIFl78qFFujJ+1AJ78myiGVbK6PsLN50vjQF10wwFthBPCyriZhc3g02oIJlLvhYE7Uyx0ME0DSVDwhfjibe62VPcgl+2RNBL7yTi1766Reeln5yPbUDGSAjHlRcpwcCKgwv4gFfCzDyQ+pxFrKXShg0Vaqqqj57XfnX9wqW7NIfS3SFjyN0FPKtCeOEwJYAZRFxIx+oBMBTSHRVg1gCNNBFaA1rvNeL0GJUpVDvwg2BCiiwkJ9ZSMz4itP9AAMCX6qrq8drAl7lPBQBAdyaN4kiW2RowgmhCWjFmAGGj695iA6BUCkIx66aopC5EwEF+c8I6KeYeEc5TsGAvus3VA4P8j8jsAOCnp2dvcXb31z43+mnoDHj7ansZlEa/3A6bFEZbGD/rgXL5n/rZI6A+LGCSAAAAABJRU5ErkJggg==";const ms={name:"overheardFromTravelersView"},c=t=>(y("data-v-ae8cbae9"),t=t(),$(),t),us={class:"sectionBg layoutPt layoutPb",style:{overflow:"hidden"}},hs=c(()=>s("div",{class:"sectionItemBg sectionMx"},null,-1)),vs={class:"container"},gs={class:"row sectionTitleLayout"},ps={class:"col-auto"},bs={class:"sectionTitle -md"},ws={class:"sectionOverheardTitle"},As={class:"sectionOverheardText"},fs=c(()=>s("h4",{class:"commentTitle"},"Hotel Equatorial Melaka",-1)),ys=c(()=>s("p",{class:"commentText"},' "Our family was traveling via bullet train between cities in Japan with our luggage the location for this hotel made that so easy. Agoda price was fantastic!"',-1)),$s=c(()=>s("div",{class:"commentFooter"},[s("div",{class:"col-auto"},[s("img",{class:"commentAvatar",src:b,alt:"image"})]),s("div",{class:"col-auto"},[s("div",{class:"commentName"},"Courtney Henry"),s("div",{class:"commentJob"},"Web Designer")])],-1)),Cs=c(()=>s("h4",{class:"commentTitle"},"Hotel Equatorial Melaka",-1)),Fs=c(()=>s("p",{class:"commentText"},' "Our family was traveling via bullet train between cities in Japan with our luggage the location for this hotel made that so easy. Agoda price was fantastic!"',-1)),Is=c(()=>s("div",{class:"commentFooter"},[s("div",{class:"col-auto"},[s("img",{class:"commentAvatar",src:b,alt:"image"})]),s("div",{class:"col-auto"},[s("div",{class:"commentName"},"Courtney Henry"),s("div",{class:"commentJob"},"Web Designer")])],-1)),Ts=c(()=>s("h4",{class:"commentTitle"},"Hotel Equatorial Melaka",-1)),Vs=c(()=>s("p",{class:"commentText"},' "Our family was traveling via bullet train between cities in Japan with our luggage the location for this hotel made that so easy. Agoda price was fantastic!"',-1)),Ps=c(()=>s("div",{class:"commentFooter"},[s("div",{class:"col-auto"},[s("img",{class:"commentAvatar",src:b,alt:"image"})]),s("div",{class:"col-auto"},[s("div",{class:"commentName"},"Courtney Henry"),s("div",{class:"commentJob"},"Web Designer")])],-1)),Es=c(()=>s("h4",{class:"commentTitle"},"Hotel Equatorial Melaka",-1)),Bs=c(()=>s("p",{class:"commentText"},' "Our family was traveling via bullet train between cities in Japan with our luggage the location for this hotel made that so easy. Agoda price was fantastic!"',-1)),Js=c(()=>s("div",{class:"commentFooter"},[s("div",{class:"col-auto"},[s("img",{class:"commentAvatar",src:b,alt:"image"})]),s("div",{class:"col-auto"},[s("div",{class:"commentName"},"Courtney Henry"),s("div",{class:"commentJob"},"Web Designer")])],-1));function Us(t,_,C,F,I,T){const r=i("n-card"),l=i("n-carousel-item"),m=i("n-carousel");return g(),p("section",us,[hs,s("div",vs,[s("div",gs,[s("div",ps,[s("div",bs,[s("h2",ws,e(t.$t("overheard.overheard")),1),s("p",As,e(t.$t("overheard.these")),1)])])]),o(m,{effect:"card","prev-slide-style":"transform: translateX(-150%) translateZ(-800px);","next-slide-style":"transform: translateX(50%) translateZ(-800px);",id:"carousel","show-dots":!1},{default:n(()=>[o(l,{style:{width:"50%"}},{default:n(()=>[o(r,{size:"large",segmented:{content:!0,footer:"soft"}},{default:n(()=>[fs,ys,$s]),_:1})]),_:1}),o(l,{style:{width:"50%"}},{default:n(()=>[o(r,{size:"large",segmented:{content:!0,footer:"soft"}},{default:n(()=>[Cs,Fs,Is]),_:1})]),_:1}),o(l,{style:{width:"50%"}},{default:n(()=>[o(r,{size:"large",segmented:{content:!0,footer:"soft"}},{default:n(()=>[Ts,Vs,Ps]),_:1})]),_:1}),o(l,{style:{width:"50%"}},{default:n(()=>[o(r,{size:"large",segmented:{content:!0,footer:"soft"}},{default:n(()=>[Es,Bs,Js]),_:1})]),_:1})]),_:1})])])}const ks=f(ms,[["render",Us],["__scopeId","data-v-ae8cbae9"]]);const xs={name:"aboutUsView",components:{FooterView:S,OverheardFromTravelersView:ks,OurTeamView:_s,NavigationBar:E},setup(){const t=U(null);return{numberAnimationInstRef:t,handleClick(){var _;(_=t.value)==null||_.play()}}}},a=t=>(y("data-v-631c7a69"),t=t(),$(),t),Ss=a(()=>s("div",{style:{height:"91px","z-index":"-100"}},null,-1)),js={class:"cover"},Hs={class:"coverSlogans"},Ns={class:"mainSlogan"},Ys={class:"subSlogan"},Ws={class:"whyChooseUsSection"},Ds={class:"whyChooseTextContainer"},Ls={class:"whyChooseTextArea"},Xs={class:"whyChooseTitle"},qs={class:"whyChooseSlogan"},Ms={class:"advantages"},Qs={class:"advantage"},Rs=a(()=>s("div",{class:"advantageIcon shieldIcon"},null,-1)),Zs={class:"advantageName"},Gs={class:"advantageText"},Ks={class:"advantage"},Os=a(()=>s("div",{class:"advantageIcon bookingIcon"},null,-1)),zs={class:"advantageName"},st={class:"advantageText"},tt={class:"advantage"},ot=a(()=>s("div",{class:"advantageIcon careIcon"},null,-1)),et={class:"advantageName"},at={class:"advantageText"},nt={class:"companyIntroSection"},it={class:"companyIntroTexts"},ct={class:"companyIntroTitle"},lt={class:"companyIntroSlogan"},rt={class:"companyIntroDescription"},dt=a(()=>s("br",null,null,-1)),_t=a(()=>s("br",null,null,-1)),mt=a(()=>s("br",null,null,-1)),ut=a(()=>s("br",null,null,-1)),ht=a(()=>s("br",null,null,-1)),vt=a(()=>s("br",null,null,-1)),gt=a(()=>s("br",null,null,-1)),pt=a(()=>s("br",null,null,-1)),bt=a(()=>s("div",{class:"companyIntroImage"},null,-1)),wt={class:"statistics"},At={class:"figure"},ft=a(()=>s("div",{class:"figureName"},"Reviews",-1)),yt={class:"figure"},$t=a(()=>s("div",{class:"figureName"},"Travel Projects",-1)),Ct={class:"figure"},Ft=a(()=>s("div",{class:"figureName"},"Happy customers",-1)),It={class:"figure"},Tt=a(()=>s("div",{class:"figureName"},"Monthly Income",-1));function Vt(t,_,C,F,I,T){const r=i("navigation-bar"),l=i("n-number-animation"),m=i("n-divider"),w=i("our-team-view"),u=i("overheard-from-travelers-view"),h=i("footer-view");return g(),p(V,null,[o(r,{"is-ini-text-white":!1,"is-transparent":!1}),Ss,s("div",js,[s("div",Hs,[s("h1",Ns,e(t.$t("aboutUsPage.mainSlogan")),1),s("div",Ys,e(t.$t("aboutUsPage.subSlogan")),1)])]),s("div",Ws,[s("div",Ds,[s("div",Ls,[s("h2",Xs,e(t.$t("aboutUsPage.whyChooseTitle")),1),s("div",qs,e(t.$t("aboutUsPage.whyChooseSlogan")),1)])]),s("div",Ms,[s("div",Qs,[Rs,s("h4",Zs,e(t.$t("aboutUsPage.advantageName1")),1),s("div",Gs,e(t.$t("aboutUsPage.advantageText1")),1)]),s("div",Ks,[Os,s("h4",zs,e(t.$t("aboutUsPage.advantageName2")),1),s("div",st,e(t.$t("aboutUsPage.advantageText2")),1)]),s("div",tt,[ot,s("h4",et,e(t.$t("aboutUsPage.advantageName3")),1),s("div",at,e(t.$t("aboutUsPage.advantageText3")),1)])])]),s("div",nt,[s("div",it,[s("h2",ct,e(t.$t("aboutUsPage.companyIntroTitle")),1),s("div",lt,e(t.$t("aboutUsPage.companyIntroSlogan")),1),s("div",rt,[v(e(t.$t("aboutUsPage.intro1")),1),dt,_t,v(" "+e(t.$t("aboutUsPage.intro2"))+" ",1),mt,ut,v(e(t.$t("aboutUsPage.intro3"))+" ",1),ht,vt,v(e(t.$t("aboutUsPage.intro4"))+" ",1),gt,pt,v(e(t.$t("aboutUsPage.intro5")),1)])]),bt]),s("div",wt,[s("div",At,[o(l,{"show-separator":"",from:0,to:0,class:"mainFigure"}),ft]),s("div",yt,[o(l,{"show-separator":"",from:0,to:0,class:"mainFigure"}),$t]),s("div",Ct,[o(l,{"show-separator":"",from:0,to:0,class:"mainFigure"}),Ft]),s("div",It,[o(l,{"show-separator":"",from:0,to:0,class:"mainFigure"}),Tt])]),o(m),o(w),o(u),o(h)],64)}const xt=f(xs,[["render",Vt],["__scopeId","data-v-631c7a69"]]);export{xt as default};