import{N as e}from"./navigationBar-4addfdc8.js";import t from"./rightSettingView-611324a8.js";import{_ as a,g as s,r as i,a as n,o,c as l,b as r,d,w as c,t as m,F as p,e as u,f as h,h as g,i as v,N as _,p as f,j as D}from"./index-d8eefb82.js";import"./ArrowForwardOutline-76c1dc4e.js";const y=({cancel:e,viewDetail:t})=>[{title:"Travel Name",key:"travelName"},{title:"Start Date",key:"startDate"},{title:"End Date",key:"endDate"},{title:"Create Date",key:"createDate"},{title:"Paid",key:"paid",sorter:{compare:(e,t)=>e.paid-t.paid}},{title:"Cancel",key:"cancel",render:t=>v(_,{strong:!0,secondary:!0,type:"error",onClick:()=>e(t)},{default:()=>"cancel"})},{title:"View Detail",key:"viewDetail",render:e=>v(_,{strong:!0,secondary:!0,type:"info",onClick:()=>t(e)},{default:()=>"view detail"})}],b=({viewDetail:e})=>[{title:"Travel Name",key:"travelName"},{title:"Start Date",key:"startDate"},{title:"End Date",key:"endDate"},{title:"Create Date",key:"createDate"},{title:"Paid",key:"paid",sorter:{compare:(e,t)=>e.paid-t.paid}},{title:"View Detail",key:"viewDetail",render:t=>v(_,{strong:!0,secondary:!0,type:"info",onClick:()=>e(t)},{default:()=>"view detail"})}],C=({viewDetail:e})=>[{title:"Travel Name",key:"travelName"},{title:"Start Date",key:"startDate"},{title:"End Date",key:"endDate"},{title:"Create Date",key:"createDate"},{title:"Paid",key:"paid",sorter:{compare:(e,t)=>e.paid-t.paid}},{title:"View Detail",key:"viewDetail",render:t=>v(_,{strong:!0,secondary:!0,type:"info",onClick:()=>e(t)},{default:()=>"view detail"})}],P={name:"profileView",components:{RightSettingView:t,NavigationBar:e},setup(){const e=s().appContext.config.globalProperties.axios,t=i([]);let a=i({name:"",startTime:"",endTime:"",trip_id:0,trip:[{finished:"false",title:"",content:"",day:0,time_of_day:"",time:""}]}),n=i(!1);return e.post("/user/get_user_order",{order_status:"Processing"}).then((e=>{if(200===e.status)for(const a of e.data.all_orders)t.value.push({id:a.id,travelName:a.name,startDate:a.start_time,endDate:a.end_time,createDate:a.res_time,paid:(a.price*a.discount).toFixed(2)})})),{inProgressData:t,showModal:n,modalData:a,tabValue:i("Dashboard"),dashboardValue:i("Recent Trips"),orderType:i("In Progress"),inProgressColumns:y({cancel(a){e.post("/staff_portal/product_status?apifoxApiId=75345235",{id:a.id,operation:"Cancelled"}).then((e=>{for(let s of t.value)s.id===a.id&&t.value.splice(t.value.indexOf(s),1)}))},viewDetail(t){e.post("/user/get_order_detail",{id:t.id}).then((e=>{200===e.status&&(a.value=e.data)})),n.value=!0}}),completedColumns:b({viewDetail(t){e.post("/user/get_order_detail",{id:t.id}).then((e=>{200===e.status&&(a.value=e.data)})),n.value=!0}}),cancelledColumns:C({viewDetail(t){e.post("/user/get_order_detail",{id:t.id}).then((e=>{200===e.status&&(a.value=e.data)})),n.value=!0}})}},data:()=>({recentTrips:[],basicInfo:{},completedData:[],cancelledData:[],commentPage:i(1),commentPages:i(20),commentPageSize:i(10),commentNumber:0,comments:[],newNotices:i([]),oldNotices:i([])}),methods:{handleCancel(e){},handleChangePageSize(e){this.commentPages=Math.ceil(this.commentNumber/this.commentPageSize),this.axios.post("/comment/get_page",{page_number:this.commentPage,page_size:this.commentPageSize}).then((e=>{200===e.status&&(this.comments=e.data.comments)}))},handleChangePage(){this.axios.post("/comment/get_page",{page_number:this.commentPage,page_size:this.commentPageSize}).then((e=>{200===e.status&&(this.comments=e.data.comments)}))},handleDeleteComment(e){this.axios.post("/comment/delete",{id:e}).then((e=>{200===e.status&&this.axios.post("/comment/get_page",{page_number:this.commentPage,page_size:this.commentPageSize}).then((e=>{200===e.status&&(this.comments=e.data.comments)}))}))},handleCheck(e){this.axios.post("/user/check_notice",{id:e,new_status:"old"}).then((t=>{if(200===t.status){let t=-1;for(let a=0;a<this.newNotices.length;a++)this.newNotices[a].id===e&&(t=a);this.oldNotices.push(this.newNotices[t]),this.newNotices.splice(t,1)}}))},handleUncheck(e){this.axios.post("/user/check_notice",{id:e,new_status:"new"}).then((t=>{if(200===t.status){let t=-1;for(let a=0;a<this.oldNotices.length;a++)this.oldNotices[a].id===e&&(t=a);this.newNotices.unshift(this.oldNotices[t]),this.oldNotices.splice(t,1)}}))}},created(){this.axios.post("/user/dashboard/get_recent_trips").then((e=>{if(200===e.status){this.recentTrips=e.data.recentTrips;for(let e of this.recentTrips)this.axios({url:"/current.json",baseURL:"http://api.weatherapi.com/v1",params:{key:"9fa81e39ed22488fa10104307230905",q:e.raw_loc}}).then((e=>{e.status}))}})),this.axios.post("/user/getprofile",{user_id:this.$route.params.uid}).then((e=>{this.basicInfo=e.data})),this.axios.post("/comment/user_all_number").then((e=>{200===e.status&&(this.commentNumber=e.data.number,this.commentPages=Math.ceil(this.commentNumber/this.commentPageSize))})),this.axios.post("/comment/get_page",{page_number:this.commentPage,page_size:this.commentPageSize}).then((e=>{200===e.status&&(this.comments=e.data.comments)})),this.axios.post("/user/get_user_order",{user_id:this.$route.params.uid,order_status:"Completed"}).then((e=>{if(200===e.status)for(const t of e.data.all_orders)this.completedData.push({id:t.id,travelName:t.name,startDate:t.start_time,endDate:t.end_time,createDate:t.res_time,paid:(t.price*t.discount).toFixed(2)})})),this.axios.post("/user/get_user_order",{user_id:this.$route.params.uid,order_status:"Cancelled"}).then((e=>{if(200===e.status)for(const t of e.data.all_orders)this.cancelledData.push({id:t.id,travelName:t.name,startDate:t.start_time,endDate:t.end_time,createDate:t.res_time,paid:(t.price*t.discount).toFixed(2)})})),this.axios.post("/user/get_notices",{status:"new"}).then((e=>{200===e.status&&(this.newNotices=e.data.notices)})),this.axios.post("/user/get_notices",{status:"old"}).then((e=>{200===e.status&&(this.oldNotices=e.data.notices)}))}},w=e=>(f("data-v-dfeff59a"),e=e(),D(),e),k={class:"bg"},T={class:"container"},x=w((()=>d("div",{class:"titlePart"},[d("div",{class:"titleMain"},[d("h1",{class:"mainTitle"},"Personal Center"),d("div",{class:"slogan"},"Manage all the information you need here")])],-1))),N={class:"settings"},z={class:"modalBody"},S={class:"orderBasic"},V=w((()=>d("div",{class:"attrTitle"},"Travel Name",-1))),U={class:"attrValue"},B=w((()=>d("div",{class:"attrTitle"},"Start Date - End Date",-1))),I={class:"attrValue"},M=w((()=>d("div",{class:"attrTitle"},"Travel Detail",-1))),j={class:"itinerary"},F=w((()=>d("div",{class:"attrTitle"},"Itinerary",-1))),A={class:"helloSection"},R=["src"],$={class:"greeting"},E={class:"recentTrip"},H={class:"recentTripTitleBar"},O={class:"recentTripName"},L=["onClick"],W={class:"recentTripBody"},Y=["src"],q=w((()=>d("div",{class:"weatherPart"},[d("div",{class:"city"}),d("div",{class:"temperature"}),d("img",{src:"",alt:"",class:"weatherImg"})],-1))),G=w((()=>d("div",{class:"aeroPart"},null,-1))),J={class:"comment"},K={class:"commentHead"},Q={class:"leftCommentHead"},X=w((()=>d("img",{class:"commentAvatar"},null,-1))),Z={class:"commentHeadTexts"},ee={class:"commentName"},te={class:"commentTime"},ae=w((()=>d("div",{class:"commentAction"},"delete",-1))),se={class:"commentScore"},ie={class:"commentDescription"},ne={class:"commentPictures"},oe=["src"],le={class:"notice"},re={class:"noticeTitleBar"},de={class:"noticeTitleLeft"},ce={class:"noticeTitle"},me={class:"noticeType"},pe=w((()=>d("div",{class:"noticeBadge"},null,-1))),ue={class:"noticeTime"},he=["onClick"],ge={class:"noticeContent"},ve={class:"notice"},_e={class:"noticeTitleBar"},fe={class:"noticeTitleLeft"},De={class:"noticeTitle"},ye={class:"noticeType"},be={class:"noticeTime"},Ce=["onClick"],Pe={class:"noticeContent"};const we=a(P,[["render",function(e,t,a,s,i,v){const _=n("navigation-bar"),f=n("n-timeline-item"),D=n("n-timeline"),y=n("n-modal"),b=n("n-tab-pane"),C=n("n-tabs"),P=n("right-setting-view"),w=n("n-data-table"),we=n("n-popconfirm"),ke=n("n-pagination");return o(),l(p,null,[r(_),d("div",k,[d("div",T,[x,d("div",N,[r(y,{show:s.showModal,"onUpdate:show":t[1]||(t[1]=e=>s.showModal=e)},{default:c((()=>[d("div",z,[d("div",S,[V,d("div",U,m(s.modalData.name),1),B,d("div",I,m(s.modalData.startTime+" - "+s.modalData.endTime),1),M,d("div",{class:"attrValue link",onClick:t[0]||(t[0]=e=>this.$router.push("/trip/"+s.modalData.trip_id))},"Go to Travel Detail")]),d("div",j,[F,(o(!0),l(p,null,u(s.modalData.trip,(e=>(o(),h(D,{style:{"margin-left":"12px","margin-top":"12px"}},{default:c((()=>[r(f,{type:e.finished,title:e.title,content:e.content,time:"day "+e.day+" "+e.time_of_day+", "+e.time},null,8,["type","title","content","time"])])),_:2},1024)))),256))])])])),_:1},8,["show"]),r(C,{value:s.tabValue,"onUpdate:value":t[6]||(t[6]=e=>s.tabValue=e),class:"card-tabs",size:"large",animated:"",style:{margin:"0 -4px"},"pane-style":"padding-left: 4px; padding-right: 4px; box-sizing: border-box;"},{default:c((()=>[r(b,{name:"Dashboard",tab:"Dashboard"},{default:c((()=>[d("div",A,[d("img",{src:i.basicInfo.avatar_url,class:"helloAvatar"},null,8,R),d("div",$,m("Hello, "+i.basicInfo.username+". Which trip do you want to enjoy today?"),1)]),r(C,{value:s.dashboardValue,"onUpdate:value":t[2]||(t[2]=e=>s.dashboardValue=e),class:"card-tabs",size:"large",animated:"",style:{margin:"0 24px"},"pane-style":"padding-left: 4px; padding-right: 4px; box-sizing: border-box;"},{default:c((()=>[r(b,{name:"Recent Trips",tab:"Recent Trips"},{default:c((()=>[(o(!0),l(p,null,u(i.recentTrips,(e=>(o(),l("div",E,[d("div",H,[d("div",O,m(e.name),1),d("div",{class:"recentTripMore",onClick:t=>this.$router.push("/trip/"+e.trip_id)},"More",8,L)]),d("div",W,[d("img",{class:"tripCover",src:e.cover_url},null,8,Y),q,G])])))),256))])),_:1}),r(b,{name:"Foot Print Wall",tab:"Foot Print Wall"})])),_:1},8,["value"])])),_:1}),r(b,{name:"Profile",tab:"Profile"},{default:c((()=>[r(P)])),_:1}),r(b,{name:"Orders",tab:"Orders"},{default:c((()=>[r(C,{value:s.orderType,"onUpdate:value":t[3]||(t[3]=e=>s.orderType=e),class:"card-tabs",size:"large",animated:"","pane-style":"padding-left: 4px; padding-right: 4px; box-sizing: border-box;"},{default:c((()=>[r(b,{name:"In Progress",tab:"In Progress"},{default:c((()=>[r(w,{columns:s.inProgressColumns,data:s.inProgressData},null,8,["columns","data"])])),_:1}),r(b,{name:"Completed",tab:"Completed"},{default:c((()=>[r(w,{columns:s.completedColumns,data:i.completedData},null,8,["columns","data"])])),_:1}),r(b,{name:"Cancelled",tab:"Cancelled"},{default:c((()=>[r(w,{columns:s.cancelledColumns,data:i.cancelledData},null,8,["columns","data"])])),_:1})])),_:1},8,["value"])])),_:1}),r(b,{name:"Your Comments",tab:"Your Comments"},{default:c((()=>[(o(!0),l(p,null,u(this.comments,(e=>(o(),l("div",J,[d("div",K,[d("div",Q,[X,d("div",Z,[d("div",ee,m(e.user_name),1),d("div",te,m(e.datetime),1)])]),r(we,{onPositiveClick:v.handleDeleteComment},{trigger:c((()=>[ae])),default:c((()=>[g(" Are you sure you want to delete your comment? ")])),_:1},8,["onPositiveClick"])]),d("div",se,m(e.score),1),d("p",ie,m(e.des),1),d("div",ne,[(o(!0),l(p,null,u(e.pics,(e=>(o(),l("img",{class:"commentPicture",src:e},null,8,oe)))),256))])])))),256)),r(ke,{page:i.commentPage,"onUpdate:page":[t[4]||(t[4]=e=>i.commentPage=e),v.handleChangePage],"page-count":i.commentPages,"page-size":i.commentPageSize,"onUpdate:pageSize":[t[5]||(t[5]=e=>i.commentPageSize=e),v.handleChangePageSize],"show-size-picker":"","page-sizes":[10,20,30,40]},null,8,["page","page-count","page-size","onUpdate:pageSize","onUpdate:page"])])),_:1}),r(b,{name:"Notices",tab:"Notices"},{default:c((()=>[(o(!0),l(p,null,u(i.newNotices,(e=>(o(),l("div",le,[d("div",re,[d("div",de,[d("div",ce,m(e.title),1),d("div",me,m(e.type),1),pe,d("div",ue,m(e.time),1)]),d("div",{class:"noticeCheckBt",onClick:t=>v.handleCheck(e.id)},"Check",8,he)]),d("div",ge,m(e.content),1)])))),256)),(o(!0),l(p,null,u(i.oldNotices,(e=>(o(),l("div",ve,[d("div",_e,[d("div",fe,[d("div",De,m(e.title),1),d("div",ye,m(e.type),1),d("div",be,m(e.time),1)]),d("div",{class:"noticeCheckBt",onClick:t=>v.handleUncheck(e.id)},"Uncheck",8,Ce)]),d("div",Pe,m(e.content),1)])))),256))])),_:1})])),_:1},8,["value"])])])])],64)}],["__scopeId","data-v-dfeff59a"]]);export{we as default};
