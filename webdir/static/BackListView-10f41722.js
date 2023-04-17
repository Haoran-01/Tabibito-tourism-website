import{_ as w,k as v,u as B,q as S,A as g,r as _,o as C,c as D,a as r,b as e,w as k,F as N,y as b,B as h,m as U,p as L,f as V}from "./index-fbacc1f8.js";import{N as z}from "./navigationBar-ef5f0c37.js";const A={name:"staffView",components:{NavigationBar:z},setup(){let o=v();const s=B(),l=S(),c=v([]),i=g(()=>c.value.reduce((t, {columnKey:a,order:p})=>(t[a]=p,t),{})),m=v({pageSize:10,onUpdatePage:x,pageCount:2}),u=g(()=>[{title:"Tourism Title",key:"name"},{title:"Start Time",key:"start_time"},{title:"End Time",key:"end_time"},{title:"Deadline",key:"app_ddl"},{title:"Price",sortOrder:i.value.price||!1,key:"price",sorter:{compare:(t, a)=>t.price-a.price,multiple:1}},{title:"Discount",sortOrder:i.value.discount||!1,key:"discount",sorter:{compare:(t, a)=>t.discount-a.discount,multiple:1}},{title:"Mark",sortOrder:i.value.mark||!1,key:"mark",sorter:{compare:(t, a)=>t.mark-a.mark,multiple:1}},{title:"Status",sortOrder:i.value.status||!1,key:"status"},{title:"Launch",key:"actions",render(t){return b(h,{strong:!0,size:"large",type:"success",bordered:!0,secondary:!0,onClick:()=>f(t)},{default:()=>"Launch"})}},{title:"Delist",key:"actions",render(t){return b(h,{strong:!0,size:"large",type:"warning",bordered:!0,secondary:!0,onClick:()=>y(t)},{default:()=>"Delist"})}},{title:"Edit",key:"actions",render(t){return b(h,{strong:!0,size:"large",type:"info",bordered:!0,secondary:!0,onClick:()=>T(t)},{default:()=>"Edit"})}}]);function n(t){console.log(t),c.value=[].concat(t)}function f(t){this.axios.post("/staff_portal/product_status",{operation:"Launched",id:`${t.id}`}).then(a=>{a.data.code===200?s.success("This program is launched successfully",{position:"bottom-right"}):s.warning("This program has already been launched",{position:"bottom-right"})})}function y(t){this.axios.post("/staff_portal/product_status",{operation:"Delisted",id:`${t.id}`}).then(a=>{a.data.code===200?s.success("This program is delisted successfully",{position:"bottom-right"}):s.warning("This program has already been delisted",{position:"bottom-right"})})}function T(t){l.push(`/management/project_detail/${t.id}`)}function x(t){this.axios.post("/staff_portal/product_list",{page:t}).then(function(a){this.data=a.data.products}).catch(function(a){console.log(a)})}return{route:l,columns:u,handleUpdateSorter:n,data:o,pagination:m,toast:s}},created(){this.axios.post("/staff_portal/product_list",{page:1}).then(o=>{o.status===200&&(this.data=o.data.products)})},methods:{}},d= o=>(L("data-v-fcecbd84"),o=o(),V(),o),E={class:"TManager"},O={class:"TCon"},R={class:"TTit"},I={class:"TCol"},M=d(()=>e("h1",{class:"TTex1"},"Travel Programs List",-1)),P=d(()=>e("div",{class:"TTex2"},"Manage the tourism programs",-1)),$={class:"but"},j=d(()=>e("button",{class:"nBtn nBtn1"}," Back To Dashboard ",-1)),F=d(()=>e("button",{class:"nBtn nBtn2"}," Add New Program ",-1)),q=d(()=>e("div",{class:"TAuto"},null,-1)),K={class:"TTable"},G={class:"main"},H={class:"tableArea"},J={class:"mainTable"},Q=U('<footer class="footer -type-1" data-v-fcecbd84><div class="container" data-v-fcecbd84><div class="contact-foot-layout" data-v-fcecbd84><div class="row contact-foot" data-v-fcecbd84><div class="col-auto" data-v-fcecbd84><div class="row contact-foot-sub" data-v-fcecbd84><div class="col-auto" data-v-fcecbd84><div class="contact-foot-text" data-v-fcecbd84> © 2023 Tabibito All rights reserved. </div></div></div></div><div class="col-auto" data-v-fcecbd84><div class="row contact-foot-sub2" data-v-fcecbd84><div class="col-auto" data-v-fcecbd84><div class="contact-foot-sub2-in" data-v-fcecbd84><button class="contact-foot-sub2-btn" data-v-fcecbd84><i class="icon-globe contact-foot-sub2-icon" data-v-fcecbd84></i><span class="underline" data-v-fcecbd84>English (US)</span></button><button class="contact-foot-sub2-btn2" data-v-fcecbd84><i class="icon-usd contact-foot-sub2-icon" data-v-fcecbd84></i><span class="underline" data-v-fcecbd84>USD</span></button></div></div><div class="col-auto" data-v-fcecbd84><div class="contact-foot-icons" data-v-fcecbd84><a href="#" data-v-fcecbd84><i class="icon-facebook text-14" data-v-fcecbd84></i></a><a href="#" data-v-fcecbd84><i class="icon-twitter text-14" data-v-fcecbd84></i></a><a href="#" data-v-fcecbd84><i class="icon-instagram text-14" data-v-fcecbd84></i></a><a href="#" data-v-fcecbd84><i class="icon-linkedin text-14" data-v-fcecbd84></i></a></div></div></div></div></div></div></div></footer>',1);function W(o, s, l, c, i, m){const u=_("navigation-bar"),n=_("router-link"),f=_("n-data-table");return C(),D(N,null,[r(u,{"is-transparent":!0,class:"zup"}),e("div",E,[e("div",O,[e("div",R,[e("div",I,[M,P,e("div",$,[r(n,{to:"/management",style:{"text-decoration":"none"}},{default:k(()=>[j]),_:1}),r(n,{to:"/management/project_detail/add",style:{"text-decoration":"none"}},{default:k(()=>[F]),_:1})])]),q]),e("div",K,[e("div",G,[e("div",H,[e("div",J,[r(f,{columns:c.columns,data:c.data,pagination:c.pagination,"onUpdate:sorter":c.handleUpdateSorter},null,8,["columns","data","pagination","onUpdate:sorter"])])])])]),Q])])],64)}const Z=w(A,[["render",W],["__scopeId","data-v-fcecbd84"]]);export{Z as default};
