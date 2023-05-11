import{_ as t,r as a,u as e,x as s,C as o,a as i,o as r,c as n,b as d,d as l,w as c,F as u,i as p,N as m,s as v,p as g,j as f}from"./index-37f49cdb.js";import{N as h}from"./navigationBar-928bd89d.js";import{S as y}from"./sideBarView-ba0ff3b9.js";const b={name:"staffView",components:{SideBarView:y,NavigationBar:h},setup(){let t=a();const i=e(),r=s(),n=a([]),d=o((()=>n.value.reduce(((t,{columnKey:a,order:e})=>(t[a]=e,t)),{}))),l=a({pageSize:10,onUpdatePage:function(t){this.axios.post("/staff_portal/product_list",{page:t}).then((function(t){this.data=t.data.products})).catch((function(t){}))},pageCount:2}),c=o((()=>[{title:"Tourism Title",key:"name"},{title:"Start Time",key:"start_time"},{title:"End Time",key:"end_time"},{title:"Deadline",key:"app_ddl"},{title:"Price",sortOrder:d.value.price||!1,key:"price",sorter:{compare:(t,a)=>t.price-a.price,multiple:1}},{title:"Discount",sortOrder:d.value.discount||!1,key:"discount",sorter:{compare:(t,a)=>t.discount-a.discount,multiple:1}},{title:"Mark",sortOrder:d.value.mark||!1,key:"mark",sorter:{compare:(t,a)=>t.mark-a.mark,multiple:1}},{title:"Status",sortOrder:d.value.status||!1,key:"status"},{title:"Launch",key:"actions",render:t=>p(m,{strong:!0,size:"large",type:"success",bordered:!0,secondary:!0,onClick:()=>function(t){this.axios.post("/staff_portal/product_status",{operation:"Launched",id:`${t.id}`}).then((t=>{200===t.data.code?i.success("This program is launched successfully",{position:"bottom-right"}):i.warning("This program has already been launched",{position:"bottom-right"})}))}(t)},{default:()=>"Launch"})},{title:"Delist",key:"actions",render:t=>p(m,{strong:!0,size:"large",type:"warning",bordered:!0,secondary:!0,onClick:()=>function(t){this.axios.post("/staff_portal/product_status",{operation:"Delisted",id:`${t.id}`}).then((t=>{200===t.data.code?i.success("This program is delisted successfully",{position:"bottom-right"}):i.warning("This program has already been delisted",{position:"bottom-right"})}))}(t)},{default:()=>"Delist"})},{title:"Edit",key:"actions",render:t=>p(m,{strong:!0,size:"large",type:"info",bordered:!0,secondary:!0,onClick:()=>function(t){r.push(`/management/project_detail/${t.id}`)}(t)},{default:()=>"Edit"})}]));return{route:r,columns:c,handleUpdateSorter:function(t){n.value=[].concat(t)},data:t,pagination:l,toast:i}},created(){this.axios.post("/staff_portal/product_list",{page:1}).then((t=>{200===t.status&&(this.data=t.data.products)}))},methods:{}},T=t=>(g("data-v-7814e371"),t=t(),f(),t),k={class:"TManager"},_={class:"TCon"},x={class:"TTit"},w=T((()=>l("div",{class:"TCol"},[l("h1",{class:"TTex1"},"Travel Programs List"),l("div",{class:"TTex2"},"Manage the tourism programs")],-1))),B={class:"TAuto"},C={class:"but"},S=T((()=>l("button",{class:"nBtn nBtn1"}," Back To Dashboard ",-1))),j=T((()=>l("button",{class:"nBtn nBtn2"}," Add New Program ",-1))),D={class:"TTable"},z={class:"main"},U={class:"tableArea"},A={class:"mainTable"},L=v('<footer class="footer -type-1" data-v-7814e371><div class="container" data-v-7814e371><div class="contact-foot-layout" data-v-7814e371><div class="row contact-foot" data-v-7814e371><div class="col-auto" data-v-7814e371><div class="row contact-foot-sub" data-v-7814e371><div class="col-auto" data-v-7814e371><div class="contact-foot-text" data-v-7814e371> © 2023 Tabibito All rights reserved. </div></div></div></div></div></div></div></footer>',1);const N=t(b,[["render",function(t,a,e,s,o,p){const m=i("navigation-bar"),v=i("side-bar-view"),g=i("router-link"),f=i("n-data-table"),h=i("n-scrollbar");return r(),n(u,null,[d(m,{"is-transparent":!0,class:"zup"}),l("div",k,[l("div",null,[d(v)]),l("div",_,[l("div",x,[w,l("div",B,[l("div",C,[d(g,{to:"/management",style:{"text-decoration":"none"}},{default:c((()=>[S])),_:1}),d(g,{to:"/management/project_detail/add",style:{"text-decoration":"none"}},{default:c((()=>[j])),_:1})])])]),l("div",D,[l("div",z,[l("div",U,[d(h,{"x-scrollabl":"",trigger:"none"},{default:c((()=>[l("div",A,[d(f,{columns:s.columns,data:s.data,pagination:s.pagination,"onUpdate:sorter":s.handleUpdateSorter},null,8,["columns","data","pagination","onUpdate:sorter"])])])),_:1})])])]),L])])],64)}],["__scopeId","data-v-7814e371"]]);export{N as default};