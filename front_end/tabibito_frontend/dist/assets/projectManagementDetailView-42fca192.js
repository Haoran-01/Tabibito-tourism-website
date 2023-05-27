import{_ as e,g as t,E as a,r as l,b as i,o as s,c as n,e as o,t as r,d as u,w as d,G as p,i as c,y as m,m as v,v as h,p as g,k as b,H as y,l as f,F as _,f as D,I as T,j as x,C as I}from"./index-078c3e5d.js";import{S as N}from"./sideBarView-53e770ce.js";const L={props:["stepData","stepIndex"],name:"routeStep",emits:["deleteStep"],setup(e){const i=t().appContext.config.globalProperties.axios.defaults.baseURL+"/product/uploadpicture",s=a();let n=l(!0),o=l("collapseIcon"),r=l(!0),u=l([]),d=l(),p=l(),c=l(),m=l([{label:"Morning",value:"Morning"},{label:"Noon",value:"Noon"},{label:"Afternoon",value:"Afternoon"},{label:"Night",value:"Night"},{label:"Midnight",value:"Midnight"}]);if(null!=e.stepData.totalDayNumber&&e.stepData.totalDayNumber>0){r.value=!1;for(let t=0;t<parseInt(e.stepData.totalDayNumber);t++)u.value.push({label:"day "+(t+1),value:"day "+(t+1)})}else r.value=!0;return{show:n,imageAPI:i,expandButtonIcon:o,handleExpand:function(){n.value?(o.value="expandIcon",n.value=!1):(o.value="collapseIcon",n.value=!0)},isDayNumberDisabled:r,dayOptions:u,periodOptions:m,dayNumber:d,periodValue:p,exactTime:c,handleFinishImage:({file:t,event:a})=>{let l=(null==a?void 0:a.target).response;e.stepData.activityPic=l},picList:l([]),async beforeUpload(e){var t;let a=null==(t=e.file.file)?void 0:t.type;return!!/image/.test(a)||(s.error("You can only upload images."),!1)},isHourDisabled:t=>"Morning"===e.stepData.periodValue&&(t>=11||t<=6)||"Noon"===e.stepData.periodValue&&(t>13||t<11)||"Afternoon"===e.stepData.periodValue&&(t<=13||t>=19)||"Night"===e.stepData.periodValue&&t<19||"Midnight"===e.stepData.periodValue&&t>6?t:void 0}},methods:{handleDeleteStep(){this.$emit("deleteStep",this.stepIndex)}}},$={class:"stepContainer"},S={class:"stepTitle"},U={class:"actions"},C={class:"stepContent"},P={class:"inputTitle"},V={class:"input_form"},B={class:"input_label"},k={class:"inputTitle"},F={class:"input_form"},w={class:"input_label"},j={class:"input_form",style:{"justify-content":"space-between"}},q={class:"inner_input_form"},E={class:"input_label"},R={class:"inner_input_form"},A={class:"input_label"},M={class:"inner_input_form"},z={class:"input_label"},Z={class:"inputTitle"},O={class:"timeInputForm"},Y={class:"inputTitle"},H=(e=>(g("data-v-ce1576a3"),e=e(),b(),e))((()=>o("div",{style:{height:"20px"}},null,-1)));const W=e(L,[["render",function(e,t,a,l,g,b){const y=i("n-popconfirm"),f=i("n-select"),_=i("n-time-picker"),D=i("n-upload"),T=i("n-collapse-transition");return s(),n("div",$,[o("div",{class:"stepTitleBar",onClick:t[1]||(t[1]=(...e)=>l.handleExpand&&l.handleExpand(...e))},[o("div",S,r("Step "+(a.stepIndex+1)+": "+a.stepData.activityName),1),o("div",U,[u(y,{onPositiveClick:b.handleDeleteStep},{trigger:d((()=>[o("div",{class:"actionButton deleteButtonIcon",onClick:t[0]||(t[0]=p((()=>{}),["stop"]))})])),default:d((()=>[c(" "+r(e.$t("routeStep.areYouSureYouWantToDeleteThisStepTheInformationWil")),1)])),_:1},8,["onPositiveClick"]),o("div",{class:m(["actionButton",l.expandButtonIcon])},null,2)])]),u(T,{show:l.show},{default:d((()=>[o("div",C,[o("div",P,r(e.$t("routeStep.activityName")),1),o("div",V,[v(o("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>a.stepData.activityName=e),required:""},null,512),[[h,a.stepData.activityName]]),o("label",B,r(e.$t("routeStep.activityName")),1)]),o("div",k,r(e.$t("routeStep.location")),1),o("div",F,[v(o("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>a.stepData.exactLocation=e),required:""},null,512),[[h,a.stepData.exactLocation]]),o("label",w,r(e.$t("routeStep.exactLocation")),1)]),o("div",j,[o("div",q,[v(o("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=e=>a.stepData.mapLatitude=e),required:""},null,512),[[h,a.stepData.mapLatitude]]),o("label",E,r(e.$t("routeStep.mapLatitude")),1)]),o("div",R,[v(o("input",{type:"text","onUpdate:modelValue":t[5]||(t[5]=e=>a.stepData.mapLongitude=e),required:""},null,512),[[h,a.stepData.mapLongitude]]),o("label",A,r(e.$t("routeStep.mapLongitude")),1)]),o("div",M,[v(o("input",{type:"text","onUpdate:modelValue":t[6]||(t[6]=e=>a.stepData.mapZoom=e),required:""},null,512),[[h,a.stepData.mapZoom]]),o("label",z,r(e.$t("routeStep.mapZoom")),1)])]),o("div",Z,r(e.$t("routeStep.time")),1),o("div",O,[u(f,{value:a.stepData.dayNumber,"onUpdate:value":t[7]||(t[7]=e=>a.stepData.dayNumber=e),disabled:l.isDayNumberDisabled,size:"large",placeholder:e.$t("routeStep.dayNumber"),options:l.dayOptions,placement:"bottom"},null,8,["value","disabled","placeholder","options"]),u(f,{value:a.stepData.periodValue,"onUpdate:value":t[8]||(t[8]=e=>a.stepData.periodValue=e),size:"large",placeholder:e.$t("routeStep.period"),options:l.periodOptions,placement:"bottom"},null,8,["value","placeholder","options"]),u(_,{value:a.stepData.exactTime,"onUpdate:value":t[9]||(t[9]=e=>a.stepData.exactTime=e),size:"large","is-hour-disabled":l.isHourDisabled,placement:"bottom"},null,8,["value","is-hour-disabled"])]),o("div",Y,r(e.$t("routeStep.activityImage")),1),u(D,{action:l.imageAPI,"default-file-list":l.picList,"list-type":"image-card",style:{"margin-left":"10px"},onBeforeUpload:l.beforeUpload,accept:"image/*",onFinish:l.handleFinishImage,max:1},null,8,["action","default-file-list","onBeforeUpload","onFinish"]),H])])),_:1},8,["show"])])}],["__scopeId","data-v-ce1576a3"]]),G={class:"stepContainer"},K={class:"stepTitle"},J={class:"actions"},Q={class:"stepContent"},X={class:"inputTitle"},ee={class:"input_form"},te={class:"input_label"},ae={class:"inputTitle"},le={class:"input_form"},ie={class:"input_label"};const se={name:"projectManagementDetailView",components:{SideBarView:N,PriceItem:e({props:["itemData","itemIndex"],name:"priceItem",emits:["deleteCharge"],setup(e){let t=l(!0),a=l("collapseIcon");return{show:t,expandButtonIcon:a,handleExpand:function(){t.value?(a.value="expandIcon",t.value=!1):(a.value="collapseIcon",t.value=!0)}}},methods:{handleDeleteStep(){this.$emit("deleteCharge",this.itemIndex)}}},[["render",function(e,t,a,l,g,b){const y=i("n-popconfirm"),f=i("n-collapse-transition");return s(),n("div",G,[o("div",{class:"stepTitleBar",onClick:t[1]||(t[1]=(...e)=>l.handleExpand&&l.handleExpand(...e))},[o("div",K,r("Pay Item "+(a.itemIndex+1)+": "+a.itemData.chargeName),1),o("div",J,[u(y,{onPositiveClick:b.handleDeleteStep},{trigger:d((()=>[o("div",{class:"actionButton deleteButtonIcon",onClick:t[0]||(t[0]=p((()=>{}),["stop"]))})])),default:d((()=>[c(" "+r(e.$t("priceItem.areYouSureYouWantToDeleteThisStepTheInformationWil")),1)])),_:1},8,["onPositiveClick"]),o("div",{class:m(["actionButton",l.expandButtonIcon])},null,2)])]),u(f,{show:l.show},{default:d((()=>[o("div",Q,[o("div",X,r(e.$t("priceItem.chargeName")),1),o("div",ee,[v(o("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>a.itemData.chargeName=e),required:""},null,512),[[h,a.itemData.chargeName]]),o("label",te,r(e.$t("priceItem.chargeName")),1)]),o("div",ae,r(e.$t("priceItem.chargeDescription")),1),o("div",le,[v(o("textarea",{type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>a.itemData.chargeDescription=e),required:""},null,512),[[h,a.itemData.chargeDescription]]),o("label",ie,r(e.$t("priceItem.chargeDescription")),1)])])])),_:1},8,["show"])])}],["__scopeId","data-v-b9c64f5e"]]),RouteStep:W},setup(){const e=t().appContext.config.globalProperties.axios;let i=l("Basic Information");const s=a(),n=t().appContext.config.globalProperties.axios.defaults.baseURL+"/product/uploadpicture";let o=l(null),r=l(null),u=l([{key:null,value:""},{key:null,value:""},{key:null,value:""}]),d=l([]),p=l([]),c=l([]);let m=l([]),v=l("disabled_btn"),h=l(),g=l(!1),b=l([]);return{tabValue:i,imageAPI:n,resetInput(e){e.currentTarget.classList.contains("invalidInput")&&e.currentTarget.classList.remove("invalidInput")},startTime:o,endTime:r,tags:u,coverImageList:d,bannerImageList:p,galleryImageList:c,handleFinishCover:({file:e,event:t})=>{let a=(null==t?void 0:t.target).response;e.url=a},handleFinishBanner:({file:e,event:t})=>{let a=(null==t?void 0:t.target).response;e.url=a},handleFinishGallery:({file:e,event:t})=>{let a=(null==t?void 0:t.target).response;e.url=a},handleRemoveImage:({file:t,fileList:a})=>{let l=-1;for(let e=0;e<a.length;e++)t.id===a[e].id&&(l=e);e.post("/product/deletepicture",{url:a[l].url}).then((e=>{if(200===e.status)return a.splice(l,1),!0}))},async beforeUpload(e){var t;let a=null==(t=e.file.file)?void 0:t.type;return!!/image/.test(a)||(s.error("You can only upload images."),!1)},secureStartTime:e=>null!=r.value?e<Date.now()||e>r.value:e<Date.now(),secureEndTime:e=>null!=o.value?e<Date.now()||e<o.value:e<Date.now(),tagOptions:l([{label:"Price",value:"Price"},{label:"Hotel",value:"Hotel"},{label:"Scenery",value:"Scenery"},{label:"Transportation Method",value:"Transportation Method"},{label:"Country",value:"Country"}]),routeDatas:m,totalDayNumber:h,totalDayNumberDisabled:g,add_step_status:v,checkAddStepStatus(){if(null!==h.value&&0!==h.value&&"0"!==h.value&&""!==h.value){new RegExp("\\D").test(h.value)?v.value="disabled_btn":v.value=""}else v.value="disabled_btn"},addStep(){"disabled_btn"===v.value?s.error("Please Enter total day number at first."):(0===m.value.length&&(g.value=!0),m.value.push({totalDayNumber:h.value,activityName:"",exactLocation:"",mapLatitude:"",mapLongitude:"",mapZoom:"",dayNumber:null,periodValue:"Morning",exactTime:null,activityPic:""}))},chargeDatas:b,currencyType:l("USD"),currencyOptions:l([{label:"USD",value:"USD"}]),addCharge(){b.value.push({chargeName:"",chargeDescription:""})},renderTag:({option:e,handleClose:t})=>x(I,{type:e.type,closable:!0,onMousedown:e=>{e.preventDefault()},onClose:e=>{e.stopPropagation(),t()}},{default:()=>e.label}),tagValue:l([])}},created(){null!==y().params.id&&this.axios.post("")},data:()=>({projectName:null,projectNameStyle:null,projectDescription:null,groupNumber:null,videoLink:"",typeList:[],cutoffDate:null,locationText:null,mapLatitude:null,mapLongitude:null,mapZoom:null,flight_numbers:["","",""],originalPrice:null,discount:null,originalPriceStyle:null,noticeTags:[{label:"Flight Change",value:"value1",type:"success"},{label:"Time Change",value:"value2",type:"warning"},{label:"Other change",value:"value3",type:"error"}]}),methods:{validateInteger(e,t,a){new RegExp("\\D").test(t)&&(this[a]="",e.currentTarget.classList.add("invalidInput"))},validateNumber(e,t,a){/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(t)||(this[a]="",e.currentTarget.classList.add("invalidInput"))},handleChooseType(e,t){-1!==this.typeList.indexOf(e)?(t.currentTarget.classList.remove("selectedType"),this.typeList.splice(this.typeList.indexOf(e),1)):(t.currentTarget.classList.add("selectedType"),this.typeList.push(e))},handleDeleteStep(e){this.routeDatas.splice(e,1),0===this.routeDatas.length&&(this.totalDayNumberDisabled=!1)},handleDeleteCharge(e){this.chargeDatas.splice(e,1)},submitForm(){const e=f();if(""===this.tags[0].value||""===this.tags[1].value||""===this.tags[2].value)return this.tabValue="Basic Information",void e.error("Please enter all the three tags");if(null===this.projectName||""===this.projectName)return this.tabValue="Basic Information",void(this.projectNameStyle="invalidInput");if(null===this.originalPrice||""===this.originalPrice)return this.tabValue="Price",void(this.originalPriceStyle="invalidInput");let t=[];for(let n=0;n<this.routeDatas.length;n++)t.push({location:{exact:this.routeDatas[n].exactLocation,map_latitude:this.routeDatas[n].mapLatitude,map_longitude:this.routeDatas[n].mapLongitude,map_zoom:this.routeDatas[n].mapZoom},time:this.routeDatas[n].exactTime,activity:this.routeDatas[n].activityName,picture:this.routeDatas[n].activityPic,day:this.routeDatas[n].dayNumber,time_of_day:this.routeDatas[n].periodValue});let a=[];for(let n=0;n<this.chargeDatas.length;n++)a.push({name:this.chargeDatas[n].chargeName,description:this.chargeDatas[n].chargeDescription});let l=this.coverImageList[0].url,i=[];for(let n of this.bannerImageList)i.push(n.url);let s=[];for(let n of this.bannerImageList)s.push(n.url);this.axios.post("/product/add",{name:this.projectName,description:this.projectDescription,group_number:this.groupNumber,location:{raw_loc:this.locationText,map_latitude:this.mapLatitude,map_longitude:this.mapLongitude,map_zoom:this.mapZoom},total_day_number:this.totalDayNumber,discount:this.discount,ori_price:this.originalPrice,currency:this.currencyType,tags:this.tags,cover_image:l,banner_image:i,gallery:s,start_time:this.startTime,end_time:this.endTime,app_ddl:this.cutoffDate,fee_des:a,trips:t,types:this.typeList,flight_numbers:this.flight_numbers,video_link:this.videoLink,url_3d:null})}}},ne=e=>(g("data-v-bb079458"),e=e(),b(),e),oe={class:"bg"},re={class:"container"},ue={class:"titlePart"},de={class:"titleMain"},pe={class:"mainTitle"},ce={class:"slogan"},me={class:"settings"},ve={class:"tabInnerContainer"},he={class:"inputTitle"},ge={class:"input_form"},be={class:"input_label"},ye={class:"input_form"},fe={class:"input_label"},_e={class:"inputTitle"},De={class:"dataPickers"},Te={class:"inputTitle"},xe={class:"input_form"},Ie={class:"input_label"},Ne={class:"inputTitle"},Le={class:"input_form"},$e={class:"input_label"},Se={class:"inputTitle"},Ue={class:"inputTitle"},Ce={class:"inputTitle"},Pe={class:"inputTitle"},Ve={class:"input_form"},Be=["onUpdate:modelValue"],ke={class:"input_label tag_input_label",style:{left:"200px"}},Fe={class:"inputTitle"},we={class:"typesContainer"},je={class:"typeTitle"},qe={class:"typeTitle"},Ee={class:"typeTitle"},Re={class:"typeTitle"},Ae={class:"typeTitle"},Me={class:"tabInnerContainer"},ze={class:"inputTitle"},Ze={class:"input_form"},Oe={class:"input_label"},Ye={class:"input_form",style:{"justify-content":"space-between"}},He={class:"inner_input_form"},We={class:"input_label"},Ge={class:"inner_input_form"},Ke={class:"input_label"},Je={class:"inner_input_form"},Qe={class:"input_label"},Xe={class:"inputTitle"},et={class:"input_form"},tt=["disabled"],at={class:"input_label"},lt={class:"inputTitle"},it={class:"input_form",style:{"justify-content":"space-between"}},st={class:"inner_input_form"},nt={class:"input_label"},ot={class:"inner_input_form"},rt={class:"input_label"},ut={class:"inner_input_form"},dt={class:"input_label"},pt=ne((()=>o("div",{class:"icon_add"},null,-1))),ct={class:"inputTitle"},mt={class:"input_form"},vt={class:"input_label"},ht={class:"inputTitle"},gt={class:"input_form"},bt={class:"input_label"},yt=ne((()=>o("div",{class:"icon_add"},null,-1))),ft=ne((()=>o("div",{class:"icon_submit"},null,-1)));const _t=e(se,[["render",function(e,t,a,l,p,g){const b=i("side-bar-view"),y=i("n-date-picker"),f=i("n-upload"),x=i("n-select"),I=i("n-tab-pane"),N=i("route-step"),L=i("price-item"),$=i("n-tabs");return s(),n("div",oe,[o("div",null,[u(b)]),o("div",re,[o("div",ue,[o("div",de,[o("h1",pe,r(e.$t("PMDV.addTravelProject")),1),o("div",ce,r(e.$t("traveldetails.addANewTourismProject")),1)])]),o("div",me,[u($,{value:l.tabValue,"onUpdate:value":t[47]||(t[47]=e=>l.tabValue=e),class:"card-tabs",size:"large",animated:"",style:{margin:"0 -4px"},"pane-style":"padding-left: 4px; padding-right: 4px; box-sizing: border-box;"},{default:d((()=>[u(I,{name:"Basic Information",tab:"1. Basic Information"},{default:d((()=>[o("div",ve,[o("div",he,r(e.$t("traveldetails.introduction")),1),o("div",ge,[v(o("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>p.projectName=e),required:"",class:m(p.projectNameStyle),onFocus:t[1]||(t[1]=e=>l.resetInput(e))},null,34),[[h,p.projectName]]),o("label",be,r(e.$t("traveldetails.projectName")),1)]),o("div",ye,[v(o("textarea",{"onUpdate:modelValue":t[2]||(t[2]=e=>p.projectDescription=e),required:""},null,512),[[h,p.projectDescription]]),o("label",fe,r(e.$t("traveldetails.projectDescription")),1)]),o("div",_e,r(e.$t("searchPage.duration")),1),o("div",De,[u(y,{value:l.startTime,"onUpdate:value":t[3]||(t[3]=e=>l.startTime=e),type:"date","is-date-disabled":l.secureStartTime,size:"large",clearable:"",placeholder:e.$t("homepage.searchPart.st")},null,8,["value","is-date-disabled","placeholder"]),u(y,{value:l.endTime,"onUpdate:value":t[4]||(t[4]=e=>l.endTime=e),type:"date",placement:"bottom-end","is-date-disabled":l.secureEndTime,size:"large",clearable:"",placeholder:e.$t("homepage.searchPart.et")},null,8,["value","is-date-disabled","placeholder"]),u(y,{value:p.cutoffDate,"onUpdate:value":t[5]||(t[5]=e=>p.cutoffDate=e),type:"date",placement:"bottom-end",size:"large",clearable:"",placeholder:e.$t("traveldetails.cutoffDate")},null,8,["value","placeholder"])]),o("div",Te,r(e.$t("traveldetails.groupNumber")),1),o("div",xe,[v(o("input",{"onUpdate:modelValue":t[6]||(t[6]=e=>p.groupNumber=e),required:"",onBlur:t[7]||(t[7]=e=>g.validateInteger(e,p.groupNumber,"groupNumber")),onFocus:t[8]||(t[8]=e=>l.resetInput(e))},null,544),[[h,p.groupNumber]]),o("label",Ie,r(e.$t("traveldetails.groupNumber")),1)]),o("div",Ne,r(e.$t("traveldetails.youtubeVideo")),1),o("div",Le,[v(o("input",{"onUpdate:modelValue":t[9]||(t[9]=e=>p.videoLink=e),required:"",onFocus:t[10]||(t[10]=e=>l.resetInput(e))},null,544),[[h,p.videoLink]]),o("label",$e,r(e.$t("traveldetails.videoLink")),1)]),o("div",Se,r(e.$t("traveldetails.coverImage")),1),u(f,{action:l.imageAPI,"file-list":l.coverImageList,"onUpdate:fileList":t[11]||(t[11]=e=>l.coverImageList=e),"list-type":"image-card",style:{"margin-left":"10px"},onBeforeUpload:l.beforeUpload,accept:"image/*",onFinish:l.handleFinishCover,onRemove:l.handleRemoveImage,max:1},null,8,["action","file-list","onBeforeUpload","onFinish","onRemove"]),o("div",Ue,r(e.$t("traveldetails.bannerImage")),1),u(f,{action:l.imageAPI,"file-list":l.bannerImageList,"onUpdate:fileList":t[12]||(t[12]=e=>l.bannerImageList=e),"list-type":"image-card",style:{"margin-left":"10px"},onBeforeUpload:l.beforeUpload,accept:"image/*",onFinish:l.handleFinishBanner,onRemove:l.handleRemoveImage,max:4},null,8,["action","file-list","onBeforeUpload","onFinish","onRemove"]),o("div",Ce,r(e.$t("traveldetails.gallery")),1),u(f,{action:l.imageAPI,"file-list":l.galleryImageList,"onUpdate:fileList":t[13]||(t[13]=e=>l.galleryImageList=e),"list-type":"image-card",style:{"margin-left":"10px"},onBeforeUpload:l.beforeUpload,accept:"image/*",onFinish:l.handleFinishGallery,onRemove:l.handleRemoveImage},null,8,["action","file-list","onBeforeUpload","onFinish","onRemove"]),o("div",Pe,r(e.$t("homepage.searchPart.tags")),1),c(" "+r(l.tags)+" ",1),(s(!0),n(_,null,D(l.tags,(a=>(s(),n("div",Ve,[u(x,{value:a.key,"onUpdate:value":e=>a.key=e,size:"large",options:l.tagOptions,placeholder:e.$t("traveldetails.selectATagType"),style:{width:"250px","margin-right":"10px"}},null,8,["value","onUpdate:value","options","placeholder"]),v(o("input",{type:"text","onUpdate:modelValue":e=>a.value=e,required:"",onFocus:t[14]||(t[14]=e=>l.resetInput(e))},null,40,Be),[[h,a.value]]),o("label",ke,r(e.$t("traveldetails.tagValue")),1)])))),256)),o("div",Fe,r(e.$t("traveldetails.types")),1),o("div",we,[o("div",{class:"type",onClick:t[15]||(t[15]=e=>g.handleChooseType("WildlifeTour",e))},[o("div",je,r(e.$t("chooseTourTypes.wildlifeTour")),1)]),o("div",{class:"type",onClick:t[16]||(t[16]=e=>g.handleChooseType("AdventureTour",e))},[o("div",qe,r(e.$t("chooseTourTypes.adventureTour")),1)]),o("div",{class:"type",onClick:t[17]||(t[17]=e=>g.handleChooseType("CityTour",e))},[o("div",Ee,r(e.$t("traveldetails.cityTour")),1)]),o("div",{class:"type",onClick:t[18]||(t[18]=e=>g.handleChooseType("MuseumTour",e))},[o("div",Re,r(e.$t("traveldetails.museumTour")),1)]),o("div",{class:"type",onClick:t[19]||(t[19]=e=>g.handleChooseType("BeachesTour",e))},[o("div",Ae,r(e.$t("chooseTourTypes.beachesTour")),1)])])])])),_:1}),u(I,{name:"Location",tab:"2. Location"},{default:d((()=>[o("div",Me,[o("div",ze,r(e.$t("homepage.searchPart.loc")),1),o("div",Ze,[v(o("input",{type:"text","onUpdate:modelValue":t[20]||(t[20]=e=>p.locationText=e),required:""},null,512),[[h,p.locationText]]),o("label",Oe,r(e.$t("PMDV.locationText")),1)]),o("div",Ye,[o("div",He,[v(o("input",{type:"text","onUpdate:modelValue":t[21]||(t[21]=e=>p.mapLatitude=e),required:"",onBlur:t[22]||(t[22]=e=>g.validateInteger(e,p.mapLatitude,"mapLatitude")),onFocus:t[23]||(t[23]=e=>l.resetInput(e))},null,544),[[h,p.mapLatitude]]),o("label",We,r(e.$t("routeStep.mapLatitude")),1)]),o("div",Ge,[v(o("input",{type:"text","onUpdate:modelValue":t[24]||(t[24]=e=>p.mapLongitude=e),onBlur:t[25]||(t[25]=e=>g.validateInteger(e,p.mapLongitude,"mapLongitude")),required:"",onFocus:t[26]||(t[26]=e=>l.resetInput(e))},null,544),[[h,p.mapLongitude]]),o("label",Ke,r(e.$t("routeStep.mapLongitude")),1)]),o("div",Je,[v(o("input",{type:"text","onUpdate:modelValue":t[27]||(t[27]=e=>p.mapZoom=e),onBlur:t[28]||(t[28]=e=>g.validateInteger(e,p.mapZoom,"mapZoom")),required:"",onFocus:t[29]||(t[29]=e=>l.resetInput(e))},null,544),[[h,p.mapZoom]]),o("label",Qe,r(e.$t("routeStep.mapZoom")),1)])])])])),_:1}),u(I,{name:"Route",tab:"3. Route"},{default:d((()=>[o("div",Xe,r(e.$t("traveldetails.totalDayNumber")),1),o("div",et,[v(o("input",{type:"text","onUpdate:modelValue":t[30]||(t[30]=e=>l.totalDayNumber=e),disabled:l.totalDayNumberDisabled,required:"",onKeyup:t[31]||(t[31]=(...e)=>l.checkAddStepStatus&&l.checkAddStepStatus(...e)),onBlur:t[32]||(t[32]=e=>g.validateInteger(e,l.totalDayNumber,"totalDayNumber")),onFocus:t[33]||(t[33]=e=>l.resetInput(e))},null,40,tt),[[h,l.totalDayNumber]]),o("label",at,r(e.$t("reservationEdit.totalDayNumber")),1)]),o("div",lt,r(e.$t("reservationEdit.flightNumber")),1),o("div",it,[o("div",st,[v(o("input",{type:"text","onUpdate:modelValue":t[34]||(t[34]=e=>p.flight_numbers[0]=e),required:""},null,512),[[h,p.flight_numbers[0]]]),o("label",nt,r(e.$t("reservationEdit.flightNumber1")),1)]),o("div",ot,[v(o("input",{type:"text","onUpdate:modelValue":t[35]||(t[35]=e=>p.flight_numbers[1]=e),required:""},null,512),[[h,p.flight_numbers[1]]]),o("label",rt,r(e.$t("reservationEdit.flightNumber2")),1)]),o("div",ut,[v(o("input",{type:"text","onUpdate:modelValue":t[36]||(t[36]=e=>p.flight_numbers[2]=e),required:""},null,512),[[h,p.flight_numbers[2]]]),o("label",dt,r(e.$t("reservationEdit.flightNumber3")),1)])]),o("button",{type:"submit",class:m(["add_step_btn",l.add_step_status]),onClick:t[37]||(t[37]=(...e)=>l.addStep&&l.addStep(...e))},[pt,c(" "+r(e.$t("traveldetails.addStep")),1)],2),(s(!0),n(_,null,D(l.routeDatas,((e,t)=>(s(),n("div",null,[u(N,{"step-data":e,"step-index":t,onDeleteStep:e=>g.handleDeleteStep(t)},null,8,["step-data","step-index","onDeleteStep"])])))),256))])),_:1}),u(I,{name:"Price",tab:"4. Price"},{default:d((()=>[o("div",ct,r(e.$t("traveldetails.originalPrice")),1),o("div",mt,[v(o("input",{type:"text","onUpdate:modelValue":t[38]||(t[38]=e=>p.originalPrice=e),required:"",style:T(p.originalPriceStyle),onBlur:t[39]||(t[39]=e=>g.validateNumber(e,p.originalPrice,"originalPrice")),onFocus:t[40]||(t[40]=e=>l.resetInput(e))},null,36),[[h,p.originalPrice]]),o("label",vt,r(e.$t("traveldetails.originalPrice")),1),u(x,{value:l.currencyType,"onUpdate:value":t[41]||(t[41]=e=>l.currencyType=e),size:"large",options:l.currencyOptions,placeholder:e.$t("traveldetails.selectCurrencyUnit"),style:{width:"200px","margin-left":"10px"}},null,8,["value","options","placeholder"])]),o("div",ht,r(e.$t("traveldetails.discount")),1),o("div",gt,[v(o("input",{type:"text","onUpdate:modelValue":t[42]||(t[42]=e=>p.discount=e),required:"",onBlur:t[43]||(t[43]=e=>g.validateNumber(e,p.discount,"discount")),onFocus:t[44]||(t[44]=e=>l.resetInput(e))},null,544),[[h,p.discount]]),o("label",bt,r(e.$t("reservationEdit.discount")),1)]),o("button",{type:"submit",class:"add_step_btn",onClick:t[45]||(t[45]=(...e)=>l.addCharge&&l.addCharge(...e))},[yt,c(" "+r(e.$t("traveldetails.addCharge")),1)]),(s(!0),n(_,null,D(l.chargeDatas,((e,t)=>(s(),n("div",null,[u(L,{"item-data":e,"item-index":t,onDeleteCharge:e=>g.handleDeleteCharge(t)},null,8,["item-data","item-index","onDeleteCharge"])])))),256))])),_:1}),u(I,{name:"Submit",tab:"5. Submit"},{default:d((()=>[o("button",{type:"submit",class:"add_step_btn",onClick:t[46]||(t[46]=(...e)=>g.submitForm&&g.submitForm(...e))},[c(r(e.$t("traveldetails.submit"))+" ",1),ft])])),_:1})])),_:1},8,["value"])])])])}],["__scopeId","data-v-bb079458"]]);export{_t as default};
