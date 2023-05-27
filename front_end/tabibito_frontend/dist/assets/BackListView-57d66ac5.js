import{_ as t,r as a,l as e,s,D as o,b as i,o as r,c as n,d,e as l,t as c,w as u,F as p,j as m,N as g,a as f}from"./index-078c3e5d.js";import{N as v}from"./navigationBar-2b8cf318.js";import{S as b}from"./sideBarView-53e770ce.js";const h={class:"TManager"},k={class:"TCon"},y={class:"TTit"},T={class:"TCol"},_={class:"TTex1"},w={class:"TTex2"},x={class:"TAuto"},L={class:"but"},B={class:"nBtn nBtn1"},$={class:"nBtn nBtn2"},D={class:"TTable"},S={class:"main"},j={class:"tableArea"},C={class:"mainTable"},z={class:"footer -type-1"},P={class:"container"},U={class:"contact-foot-layout"},N={class:"row contact-foot"},O={class:"col-auto"},A={class:"row contact-foot-sub"},E={class:"col-auto"},V={class:"contact-foot-text"};const M=t({name:"staffView",components:{SideBarView:b,NavigationBar:v},setup(){let t=a();const i=e(),r=s(),n=a([]),d=o((()=>n.value.reduce(((t,{columnKey:a,order:e})=>(t[a]=e,t)),{}))),l=a({pageSize:10,onUpdatePage:function(t){},pageCount:2}),c=o((()=>[{title:"Tourism Title",key:"name"},{title:"Start Time",key:"start_time"},{title:"End Time",key:"end_time"},{title:"Deadline",key:"app_ddl"},{title:"Price",sortOrder:d.value.price||!1,key:"price",sorter:{compare:(t,a)=>t.price-a.price,multiple:1}},{title:"Discount",sortOrder:d.value.discount||!1,key:"discount",sorter:{compare:(t,a)=>t.discount-a.discount,multiple:1}},{title:"Mark",sortOrder:d.value.mark||!1,key:"mark",sorter:{compare:(t,a)=>t.mark-a.mark,multiple:1}},{title:"Status",sortOrder:d.value.status||!1,key:"status"},{title:"Launch",key:"actions",render:t=>m(g,{strong:!0,size:"large",type:"success",bordered:!0,secondary:!0,onClick:()=>function(t){f.post("/staff_portal/product_status",{operation:"Launched",id:`${t.id}`}).then((t=>{200===t.data.code?i.success("This program is launched successfully",{position:"bottom-right"}):i.warning("This program has already been launched",{position:"bottom-right"})}))}(t)},{default:()=>"Launch"})},{title:"Delist",key:"actions",render:t=>m(g,{strong:!0,size:"large",type:"warning",bordered:!0,secondary:!0,onClick:()=>function(t){f.post("/staff_portal/product_status",{operation:"Delisted",id:`${t.id}`}).then((t=>{200===t.data.code?i.success("This program is delisted successfully",{position:"bottom-right"}):i.warning("This program has already been delisted",{position:"bottom-right"})}))}(t)},{default:()=>"Delist"})},{title:"Edit",key:"actions",render:t=>m(g,{strong:!0,size:"large",type:"info",bordered:!0,secondary:!0,onClick:()=>function(t){r.push(`/management/project_detail/${t.id}`)}(t)},{default:()=>"Edit"})}]));return{route:r,columns:c,handleUpdateSorter:function(t){n.value=[].concat(t)},data:t,pagination:l,toast:i}},created(){this.axios.post("/staff_portal/product_list",{page:1}).then((t=>{200===t.status&&(this.data=t.data.products)}))},methods:{}},[["render",function(t,a,e,s,o,m){const g=i("navigation-bar"),f=i("side-bar-view"),v=i("router-link"),b=i("n-data-table"),M=i("n-scrollbar");return r(),n(p,null,[d(g,{"is-transparent":!0,class:"zup"}),l("div",h,[l("div",null,[d(f)]),l("div",k,[l("div",y,[l("div",T,[l("h1",_,c(t.$t("backList.travelProgramsList")),1),l("div",w,c(t.$t("backList.manageTheTourismPrograms")),1)]),l("div",x,[l("div",L,[d(v,{to:"/management",style:{"text-decoration":"none"}},{default:u((()=>[l("button",B,c(t.$t("backList.backToDashboard")),1)])),_:1}),d(v,{to:"/management/project_detail/add",style:{"text-decoration":"none"}},{default:u((()=>[l("button",$,c(t.$t("backList.addNewProgram")),1)])),_:1})])])]),l("div",D,[l("div",S,[l("div",j,[d(M,{"x-scrollabl":"",trigger:"none"},{default:u((()=>[l("div",C,[d(b,{columns:s.columns,data:s.data,pagination:s.pagination,"onUpdate:sorter":s.handleUpdateSorter},null,8,["columns","data","pagination","onUpdate:sorter"])])])),_:1})])])]),l("footer",z,[l("div",P,[l("div",U,[l("div",N,[l("div",O,[l("div",A,[l("div",E,[l("div",V,c(t.$t("backList.TabibitoAllRightsReserved")),1)])])])])])])])])])],64)}],["__scopeId","data-v-8126dd7d"]]);export{M as default};
