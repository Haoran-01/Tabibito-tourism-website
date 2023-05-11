import{N as e}from"./navigationBar-928bd89d.js";import{_ as t,g as a,r as s,a as i,o as l,c as n,b as o,d as r,w as d,t as c,F as m,e as u,f as p,h,i as v,N as g,p as _,j as f}from"./index-37f49cdb.js";const b=({cancel:e,viewDetail:t})=>[{title:"Travel Name",key:"travelName"},{title:"Start Date",key:"startDate"},{title:"End Date",key:"endDate"},{title:"Create Date",key:"createDate"},{title:"Paid",key:"paid",sorter:{compare:(e,t)=>e.paid-t.paid}},{title:"Cancel",key:"cancel",render:t=>v(g,{strong:!0,secondary:!0,type:"error",onClick:()=>e(t)},{default:()=>"cancel"})},{title:"View Detail",key:"viewDetail",render:e=>v(g,{strong:!0,secondary:!0,type:"info",onClick:()=>t(e)},{default:()=>"view detail"})}],D=({viewDetail:e})=>[{title:"Travel Name",key:"travelName"},{title:"Start Date",key:"startDate"},{title:"End Date",key:"endDate"},{title:"Create Date",key:"createDate"},{title:"Paid",key:"paid",sorter:{compare:(e,t)=>e.paid-t.paid}},{title:"View Detail",key:"viewDetail",render:t=>v(g,{strong:!0,secondary:!0,type:"info",onClick:()=>e(t)},{default:()=>"view detail"})}],y=({viewDetail:e})=>[{title:"Travel Name",key:"travelName"},{title:"Start Date",key:"startDate"},{title:"End Date",key:"endDate"},{title:"Create Date",key:"createDate"},{title:"Paid",key:"paid",sorter:{compare:(e,t)=>e.paid-t.paid}},{title:"View Detail",key:"viewDetail",render:t=>v(g,{strong:!0,secondary:!0,type:"info",onClick:()=>e(t)},{default:()=>"view detail"})}],C={name:"profileView",components:{NavigationBar:e},setup(){const e=a().appContext.config.globalProperties.axios,t=s([]);let i=s({name:"",startTime:"",endTime:"",trip_id:0,trip:[{finished:"false",title:"",content:"",day:0,time_of_day:"",time:""}]}),l=s(!1);return e.post("/user/get_user_order",{order_status:"Processing"}).then((e=>{if(200===e.status)for(const a of e.data.all_orders)t.value.push({id:a.id,travelName:a.name,startDate:a.start_time,endDate:a.end_time,createDate:a.res_time,paid:(a.price*a.discount).toFixed(2)})})),{inProgressData:t,showModal:l,modalData:i,tabValue:s("Dashboard"),dashboardValue:s("Recent Trips"),orderType:s("In Progress"),inProgressColumns:b({cancel(a){e.post("/staff_portal/product_status?apifoxApiId=75345235",{id:a.id,operation:"Cancelled"}).then((e=>{for(let s of t.value)s.id===a.id&&t.value.splice(t.value.indexOf(s),1)}))},viewDetail(t){e.post("/user/get_order_detail",{id:t.id}).then((e=>{200===e.status&&(i.value=e.data)})),l.value=!0}}),completedColumns:D({viewDetail(t){e.post("/user/get_order_detail",{id:t.id}).then((e=>{200===e.status&&(i.value=e.data)})),l.value=!0}}),cancelledColumns:y({viewDetail(t){e.post("/user/get_order_detail",{id:t.id}).then((e=>{200===e.status&&(i.value=e.data)})),l.value=!0}})}},data:()=>({recentTrips:[],basicInfo:{},completedData:[],cancelledData:[],commentPage:s(1),commentPages:s(20),commentPageSize:s(10),commentNumber:0,comments:[],newNotices:s([]),oldNotices:s([])}),methods:{handleCancel(e){},handleChangePageSize(e){this.commentPages=Math.ceil(this.commentNumber/this.commentPageSize),this.axios.post("/comment/get_page",{page_number:this.commentPage,page_size:this.commentPageSize}).then((e=>{200===e.status&&(this.comments=e.data.comments)}))},handleChangePage(){this.axios.post("/comment/get_page",{page_number:this.commentPage,page_size:this.commentPageSize}).then((e=>{200===e.status&&(this.comments=e.data.comments)}))},handleDeleteComment(e){this.axios.post("/comment/delete",{id:e}).then((e=>{200===e.status&&this.axios.post("/comment/get_page",{page_number:this.commentPage,page_size:this.commentPageSize}).then((e=>{200===e.status&&(this.comments=e.data.comments)}))}))},handleCheck(e){this.axios.post("/user/check_notice",{id:e,new_status:"old"}).then((t=>{if(200===t.status){let t=-1;for(let a=0;a<this.newNotices.length;a++)this.newNotices[a].id===e&&(t=a);this.oldNotices.push(this.newNotices[t]),this.newNotices.splice(t,1)}}))},handleUncheck(e){this.axios.post("/user/check_notice",{id:e,new_status:"new"}).then((t=>{if(200===t.status){let t=-1;for(let a=0;a<this.oldNotices.length;a++)this.oldNotices[a].id===e&&(t=a);this.newNotices.unshift(this.oldNotices[t]),this.oldNotices.splice(t,1)}}))}},created(){this.axios.post("/user/dashboard/get_recent_trips").then((e=>{if(200===e.status){this.recentTrips=e.data.recentTrips;for(let e of this.recentTrips)this.axios({url:"/current.json",baseURL:"http://api.weatherapi.com/v1",params:{key:"9fa81e39ed22488fa10104307230905",q:e.raw_loc}}).then((e=>{e.status}))}})),this.axios.post("/user/getprofile",{user_id:this.$route.params.uid}).then((e=>{this.basicInfo=e.data})),this.axios.post("/comment/user_all_number").then((e=>{200===e.status&&(this.commentNumber=e.data.number,this.commentPages=Math.ceil(this.commentNumber/this.commentPageSize))})),this.axios.post("/comment/get_page",{page_number:this.commentPage,page_size:this.commentPageSize}).then((e=>{200===e.status&&(this.comments=e.data.comments)})),this.axios.post("/user/get_user_order",{user_id:this.$route.params.uid,order_status:"Completed"}).then((e=>{if(200===e.status)for(const t of e.data.all_orders)this.completedData.push({id:t.id,travelName:t.name,startDate:t.start_time,endDate:t.end_time,createDate:t.res_time,paid:(t.price*t.discount).toFixed(2)})})),this.axios.post("/user/get_user_order",{user_id:this.$route.params.uid,order_status:"Cancelled"}).then((e=>{if(200===e.status)for(const t of e.data.all_orders)this.cancelledData.push({id:t.id,travelName:t.name,startDate:t.start_time,endDate:t.end_time,createDate:t.res_time,paid:(t.price*t.discount).toFixed(2)})})),this.axios.post("/user/get_notices",{status:"new"}).then((e=>{200===e.status&&(this.newNotices=e.data.notices)})),this.axios.post("/user/get_notices",{status:"old"}).then((e=>{200===e.status&&(this.oldNotices=e.data.notices)}))}},P=e=>(_("data-v-53a342dd"),e=e(),f(),e),T={class:"bg"},k={class:"container"},w=P((()=>r("div",{class:"titlePart"},[r("div",{class:"titleMain"},[r("h1",{class:"mainTitle"},"Personal Center"),r("div",{class:"slogan"},"Manage all the information you need here")])],-1))),x={class:"settings"},N={class:"modalBody"},z={class:"orderBasic"},I=P((()=>r("div",{class:"attrTitle"},"Travel Name",-1))),S={class:"attrValue"},V=P((()=>r("div",{class:"attrTitle"},"Start Date - End Date",-1))),B={class:"attrValue"},U=P((()=>r("div",{class:"attrTitle"},"Travel Detail",-1))),M={class:"itinerary"},F=P((()=>r("div",{class:"attrTitle"},"Itinerary",-1))),j={class:"helloSection"},A=["src"],E={class:"greeting"},R={class:"recentTrip"},$={class:"recentTripTitleBar"},H={class:"recentTripName"},L=["onClick"],O={class:"recentTripBody"},W=["src"],Y=P((()=>r("div",{class:"weatherPart"},[r("div",{class:"city"}),r("div",{class:"temperature"}),r("img",{src:"",alt:"",class:"weatherImg"})],-1))),q=P((()=>r("div",{class:"aeroPart"},null,-1))),G={class:"infoCard"},J=["src"],K={class:"cardText"},Q={class:"nameBar"},X={class:"userName"},Z=P((()=>r("div",{class:"edit"}," edit info ",-1))),ee={class:"userDescription"},te=P((()=>r("div",{class:"attrTitle"},"Real Name",-1))),ae={class:"attrValue"},se=P((()=>r("div",{class:"attrTitle"},"Email",-1))),ie={class:"attrValue"},le=P((()=>r("div",{class:"attrTitle"},"Phone Number",-1))),ne={class:"attrValue"},oe=P((()=>r("div",{class:"attrTitle"},"Birthday",-1))),re={class:"attrValue"},de={class:"comment"},ce={class:"commentHead"},me={class:"leftCommentHead"},ue=P((()=>r("img",{class:"commentAvatar"},null,-1))),pe={class:"commentHeadTexts"},he={class:"commentName"},ve={class:"commentTime"},ge=P((()=>r("div",{class:"commentAction"},"delete",-1))),_e={class:"commentScore"},fe={class:"commentDescription"},be={class:"commentPictures"},De=["src"],ye={class:"notice"},Ce={class:"noticeTitleBar"},Pe={class:"noticeTitleLeft"},Te={class:"noticeTitle"},ke={class:"noticeType"},we=P((()=>r("div",{class:"noticeBadge"},null,-1))),xe={class:"noticeTime"},Ne=["onClick"],ze={class:"noticeContent"},Ie={class:"notice"},Se={class:"noticeTitleBar"},Ve={class:"noticeTitleLeft"},Be={class:"noticeTitle"},Ue={class:"noticeType"},Me={class:"noticeTime"},Fe=["onClick"],je={class:"noticeContent"};const Ae=t(C,[["render",function(e,t,a,s,v,g){const _=i("navigation-bar"),f=i("n-timeline-item"),b=i("n-timeline"),D=i("n-modal"),y=i("n-tab-pane"),C=i("n-tabs"),P=i("n-data-table"),Ae=i("n-popconfirm"),Ee=i("n-pagination");return l(),n(m,null,[o(_),r("div",T,[r("div",k,[w,r("div",x,[o(D,{show:s.showModal,"onUpdate:show":t[1]||(t[1]=e=>s.showModal=e)},{default:d((()=>[r("div",N,[r("div",z,[I,r("div",S,c(s.modalData.name),1),V,r("div",B,c(s.modalData.startTime+" - "+s.modalData.endTime),1),U,r("div",{class:"attrValue link",onClick:t[0]||(t[0]=e=>this.$router.push("/trip/"+s.modalData.trip_id))},"Go to Travel Detail")]),r("div",M,[F,(l(!0),n(m,null,u(s.modalData.trip,(e=>(l(),p(b,{style:{"margin-left":"12px","margin-top":"12px"}},{default:d((()=>[o(f,{type:e.finished,title:e.title,content:e.content,time:"day "+e.day+" "+e.time_of_day+", "+e.time},null,8,["type","title","content","time"])])),_:2},1024)))),256))])])])),_:1},8,["show"]),o(C,{value:s.tabValue,"onUpdate:value":t[6]||(t[6]=e=>s.tabValue=e),class:"card-tabs",size:"large",animated:"",style:{margin:"0 -4px"},"pane-style":"padding-left: 4px; padding-right: 4px; box-sizing: border-box;"},{default:d((()=>[o(y,{name:"Dashboard",tab:"Dashboard"},{default:d((()=>[r("div",j,[r("img",{src:v.basicInfo.avatar_url,class:"helloAvatar"},null,8,A),r("div",E,c("Hello, "+v.basicInfo.username+". Which trip do you want to enjoy today?"),1)]),o(C,{value:s.dashboardValue,"onUpdate:value":t[2]||(t[2]=e=>s.dashboardValue=e),class:"card-tabs",size:"large",animated:"",style:{margin:"0 24px"},"pane-style":"padding-left: 4px; padding-right: 4px; box-sizing: border-box;"},{default:d((()=>[o(y,{name:"Recent Trips",tab:"Recent Trips"},{default:d((()=>[(l(!0),n(m,null,u(v.recentTrips,(e=>(l(),n("div",R,[r("div",$,[r("div",H,c(e.name),1),r("div",{class:"recentTripMore",onClick:t=>this.$router.push("/trip/"+e.trip_id)},"More",8,L)]),r("div",O,[r("img",{class:"tripCover",src:e.cover_url},null,8,W),Y,q])])))),256))])),_:1}),o(y,{name:"Foot Print Wall",tab:"Foot Print Wall"})])),_:1},8,["value"])])),_:1}),o(y,{name:"Profile",tab:"Profile"},{default:d((()=>[r("div",G,[r("img",{class:"avatar",src:v.basicInfo.avatar_url},null,8,J),r("div",K,[r("div",Q,[r("div",X,c(v.basicInfo.username),1),Z]),r("div",ee,c(v.basicInfo.description),1)])]),te,r("div",ae,c(v.basicInfo.first_name+" "+v.basicInfo.last_name),1),se,r("div",ie,c(v.basicInfo.email),1),le,r("div",ne,c(v.basicInfo.phone_number),1),oe,r("div",re,c(v.basicInfo.birthday),1)])),_:1}),o(y,{name:"Orders",tab:"Orders"},{default:d((()=>[o(C,{value:s.orderType,"onUpdate:value":t[3]||(t[3]=e=>s.orderType=e),class:"card-tabs",size:"large",animated:"","pane-style":"padding-left: 4px; padding-right: 4px; box-sizing: border-box;"},{default:d((()=>[o(y,{name:"In Progress",tab:"In Progress"},{default:d((()=>[o(P,{columns:s.inProgressColumns,data:s.inProgressData},null,8,["columns","data"])])),_:1}),o(y,{name:"Completed",tab:"Completed"},{default:d((()=>[o(P,{columns:s.completedColumns,data:v.completedData},null,8,["columns","data"])])),_:1}),o(y,{name:"Cancelled",tab:"Cancelled"},{default:d((()=>[o(P,{columns:s.cancelledColumns,data:v.cancelledData},null,8,["columns","data"])])),_:1})])),_:1},8,["value"])])),_:1}),o(y,{name:"Your Comments",tab:"Your Comments"},{default:d((()=>[(l(!0),n(m,null,u(this.comments,(e=>(l(),n("div",de,[r("div",ce,[r("div",me,[ue,r("div",pe,[r("div",he,c(e.user_name),1),r("div",ve,c(e.datetime),1)])]),o(Ae,{onPositiveClick:g.handleDeleteComment},{trigger:d((()=>[ge])),default:d((()=>[h(" Are you sure you want to delete your comment? ")])),_:1},8,["onPositiveClick"])]),r("div",_e,c(e.score),1),r("p",fe,c(e.des),1),r("div",be,[(l(!0),n(m,null,u(e.pics,(e=>(l(),n("img",{class:"commentPicture",src:e},null,8,De)))),256))])])))),256)),o(Ee,{page:v.commentPage,"onUpdate:page":[t[4]||(t[4]=e=>v.commentPage=e),g.handleChangePage],"page-count":v.commentPages,"page-size":v.commentPageSize,"onUpdate:pageSize":[t[5]||(t[5]=e=>v.commentPageSize=e),g.handleChangePageSize],"show-size-picker":"","page-sizes":[10,20,30,40]},null,8,["page","page-count","page-size","onUpdate:pageSize","onUpdate:page"])])),_:1}),o(y,{name:"Notices",tab:"Notices"},{default:d((()=>[(l(!0),n(m,null,u(v.newNotices,(e=>(l(),n("div",ye,[r("div",Ce,[r("div",Pe,[r("div",Te,c(e.title),1),r("div",ke,c(e.type),1),we,r("div",xe,c(e.time),1)]),r("div",{class:"noticeCheckBt",onClick:t=>g.handleCheck(e.id)},"Check",8,Ne)]),r("div",ze,c(e.content),1)])))),256)),(l(!0),n(m,null,u(v.oldNotices,(e=>(l(),n("div",Ie,[r("div",Se,[r("div",Ve,[r("div",Be,c(e.title),1),r("div",Ue,c(e.type),1),r("div",Me,c(e.time),1)]),r("div",{class:"noticeCheckBt",onClick:t=>g.handleUncheck(e.id)},"Uncheck",8,Fe)]),r("div",je,c(e.content),1)])))),256))])),_:1})])),_:1},8,["value"])])])])],64)}],["__scopeId","data-v-53a342dd"]]);export{Ae as default};