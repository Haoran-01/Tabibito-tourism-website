import{_ as t,r as e,u as a,x as s,C as o,a as i,o as r,c as n,b as d,d as l,w as c,F as u,i as p,N as f,s as m,p as v,j as g}from"./index-6bfe40dc.js";import{N as h}from"./navigationBar-a9774400.js";import{S as y}from"./sideBarView-e6adce52.js";const b={name:"staffView",components:{SideBarView:y,NavigationBar:h},setup(){let t=e();const i=a(),r=s(),n=e([]),d=o((()=>n.value.reduce(((t,{columnKey:e,order:a})=>(t[e]=a,t)),{}))),l=e({pageSize:10,onUpdatePage:function(e){this.axios.post("/staff_portal/change_order_status",{page:e}).then((function(e){t=e.data.all_orders})).catch((function(t){}))}}),c=o((()=>[{title:"Tourism Title",key:"name"},{title:"Start Time",key:"start_time"},{title:"End Time",key:"end_time"},{title:"Reservation Time",key:"res_time"},{title:"Price",sortOrder:d.value.price||!1,key:"price",sorter:{compare:(t,e)=>t.price-e.price,multiple:1}},{title:"Discount",sortOrder:d.value.discount||!1,key:"discount",sorter:{compare:(t,e)=>t.discount-e.discount,multiple:1}},{title:"Booking Holder",sortOrder:d.value.mark||!1,key:"holder"},{title:"Status",sortOrder:d.value.status||!1,key:"status"},{title:"Success",key:"actions",render:t=>p(f,{strong:!0,size:"large",type:"success",bordered:!0,secondary:!0,onClick:()=>function(t){this.axios.post("/staff_portal/change_order_status",{operation:"Completed",id:`${t.id}`}).then((t=>{200===t.data.code?i.success("This program is completed successfully",{position:"bottom-right"}):i.warning("This program has already been completed or canceled",{position:"bottom-right"})}))}(t)},{default:()=>"Complete"})},{title:"Cancel",key:"actions",render:t=>p(f,{strong:!0,size:"large",type:"warning",bordered:!0,secondary:!0,onClick:()=>function(t){this.axios.post("/staff_portal/change_order_status",{operation:"Cancelled",id:`${t.id}`}).then((t=>{200===t.data.code?i.success("This program is canceled successfully",{position:"bottom-right"}):i.warning("This program has already been canceled or completed",{position:"bottom-right"})}))}(t)},{default:()=>"Cancel"})},{title:"Delete",key:"actions",render:t=>p(f,{strong:!0,size:"large",type:"error",bordered:!0,secondary:!0,onClick:()=>function(t){this.axios.post("/staff_portal/change_order_status",{operation:"Delete",id:`${t.id}`}).then((t=>{200===t.data.code&&i.success("This program is deleted successfully",{position:"bottom-right"})}))}(t)},{default:()=>"Delete"})},{title:"Edit",key:"actions",render:t=>p(f,{strong:!0,size:"large",type:"info",bordered:!0,secondary:!0,onClick:()=>function(t){r.push(`/management/reservation_edit/${t.id}`)}(t)},{default:()=>"Edit"})}]));return{route:r,columns:c,handleUpdateSorter:function(t){n.value=[].concat(t)},data:t,pagination:l,toast:i}},created(){this.axios.post("/staff_portal/view_all",{page:1}).then((t=>{200===t.status&&(this.data=t.data.all_orders)}))},methods:{}},_=t=>(v("data-v-d32df082"),t=t(),g(),t),T={class:"TManager"},k={class:"TCon"},x={class:"TTit"},w=_((()=>l("div",{class:"TCol"},[l("h1",{class:"TTex1"},"Reservation List"),l("div",{class:"TTex2"},"Manage the tourism programs")],-1))),C={class:"TAuto"},B={class:"but"},S=_((()=>l("button",{class:"nBtn nBtn1"}," Back To Dashboard ",-1))),z=_((()=>l("button",{class:"nBtn nBtn2"}," View all Programs ",-1))),j={class:"TTable"},D={class:"main"},U={class:"tableArea"},O={class:"mainTable"},V=m('<footer class="footer -type-1" data-v-d32df082><div class="container" data-v-d32df082><div class="contact-foot-layout" data-v-d32df082><div class="row contact-foot" data-v-d32df082><div class="col-auto" data-v-d32df082><div class="row contact-foot-sub" data-v-d32df082><div class="col-auto" data-v-d32df082><div class="contact-foot-text" data-v-d32df082> © 2023 Tabibito All rights reserved. </div></div></div></div></div></div></div></footer>',1);const $=t(b,[["render",function(t,e,a,s,o,p){const f=i("navigation-bar"),m=i("side-bar-view"),v=i("router-link"),g=i("n-data-table"),h=i("n-scrollbar");return r(),n(u,null,[d(f,{"is-transparent":!0,class:"zup"}),l("div",T,[l("div",null,[d(m)]),l("div",k,[l("div",x,[w,l("div",C,[l("div",B,[d(v,{to:"/management",style:{"text-decoration":"none"}},{default:c((()=>[S])),_:1}),d(v,{to:"/management/project_list",style:{"text-decoration":"none"}},{default:c((()=>[z])),_:1})])])]),l("div",j,[l("div",D,[l("div",U,[d(h,{"x-scrollabl":"",trigger:"none"},{default:c((()=>[l("div",O,[d(g,{columns:s.columns,data:s.data,pagination:s.pagination,"onUpdate:sorter":s.handleUpdateSorter},null,8,["columns","data","pagination","onUpdate:sorter"])])])),_:1})])])]),V])])],64)}],["__scopeId","data-v-d32df082"]]);export{$ as default};
