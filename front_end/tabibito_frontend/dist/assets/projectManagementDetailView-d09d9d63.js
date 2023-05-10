import{_ as e,g as t,r as a,D as l,E as i,u as n,a as s,o,c as u,d as r,b as d,w as p,k as c,v as m,n as v,F as g,e as h,h as b,G as y,i as f,B as T,p as _,j as D}from"./index-908c153e.js";import{P as x,R as I}from"./priceItem-c23a2cd8.js";const L={name:"projectManagementDetailView",components:{PriceItem:x,RouteStep:I},beforeRouteEnter(e,t,a){a((e=>{e.axios.get("/user/login_status").then((e=>{e.data.job})).catch((t=>{e.$router.push("/forbidden")}))}))},setup(){const e=t().appContext.config.globalProperties.axios;let i=a("Basic Information");const n=l(),s=t().appContext.config.globalProperties.axios.defaults.baseURL+"/product/uploadpicture";let o=a(null),u=a(null),r=a([{key:null,value:""},{key:null,value:""},{key:null,value:""}]),d=a([]),p=a([]),c=a([]);let m=a([]),v=a("disabled_btn"),g=a(),h=a(!1),b=a([]);return{tabValue:i,imageAPI:s,resetInput(e){e.currentTarget.classList.contains("invalidInput")&&e.currentTarget.classList.remove("invalidInput")},startTime:o,endTime:u,tags:r,coverImageList:d,bannerImageList:p,galleryImageList:c,handleFinishCover:({file:e,event:t})=>{let a=(null==t?void 0:t.target).response;e.url=a,d.value.push(e)},handleFinishBanner:({file:e,event:t})=>{let a=(null==t?void 0:t.target).response;e.url=a,p.value.push(e)},handleFinishGallery:({file:e,event:t})=>{let a=(null==t?void 0:t.target).response;e.url=a,c.value.push(e)},handleRemoveImage:({file:t,fileList:a})=>{let l=-1;for(let e=0;e<a.length;e++)t.id===a[e].id&&(l=e);e.post("/product/deletepicture",{url:a[l].url}).then((e=>{if(200===e.status)return a.splice(l,1),!0}))},async beforeUpload(e){var t;let a=null==(t=e.file.file)?void 0:t.type;return!!/image/.test(a)||(n.error("You can only upload images."),!1)},secureStartTime:e=>null!=u.value?e<Date.now()||e>u.value:e<Date.now(),secureEndTime:e=>null!=o.value?e<Date.now()||e<o.value:e<Date.now(),tagOptions:a([{label:"Price",value:"Price"},{label:"Hotel",value:"Hotel"},{label:"Scenery",value:"Scenery"},{label:"Transportation Method",value:"Transportation Method"},{label:"Country",value:"Country"}]),routeDatas:m,totalDayNumber:g,totalDayNumberDisabled:h,add_step_status:v,checkAddStepStatus(){if(null!==g.value&&0!==g.value&&"0"!==g.value){new RegExp("\\D").test(g.value)?v.value="disabled_btn":v.value=""}else v.value="disabled_btn"},addStep(){"disabled_btn"===v.value?n.error("Please Enter total day number at first."):(0===m.value.length&&(h.value=!0),m.value.push({totalDayNumber:g.value,activityName:"",exactLocation:"",mapLatitude:"",mapLongitude:"",mapZoom:"",dayNumber:null,periodValue:"Morning",exactTime:null,activityPic:""}))},chargeDatas:b,currencyType:a("USD"),currencyOptions:a([{label:"USD",value:"USD"},{label:"EUR",value:"EUR"},{label:"CNY",value:"CNY"}]),addCharge(){b.value.push({chargeName:"",chargeDescription:""})},renderTag:({option:e,handleClose:t})=>f(T,{type:e.type,closable:!0,onMousedown:e=>{e.preventDefault()},onClose:e=>{e.stopPropagation(),t()}},{default:()=>e.label}),tagValue:a([])}},created(){null!==i().params.id&&this.axios.post("")},data:()=>({projectName:null,projectNameStyle:null,projectDescription:null,groupNumber:null,typeList:[],cutoffDate:null,locationText:null,mapLatitude:null,mapLongitude:null,mapZoom:null,originalPrice:null,discount:null,originalPriceStyle:null,tags:[{label:"Flight Change",value:"value1",type:"success"},{label:"Time Change",value:"value2",type:"warning"},{label:"Other change",value:"value3",type:"error"}]}),methods:{validateInteger(e,t,a){new RegExp("\\D").test(t)&&(this[a]="",e.currentTarget.classList.add("invalidInput"))},validateNumber(e,t,a){/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(t)||(this[a]="",e.currentTarget.classList.add("invalidInput"))},handleChooseType(e,t){-1!==this.typeList.indexOf(e)?(t.currentTarget.classList.remove("selectedType"),this.typeList.splice(this.typeList.indexOf(e),1)):(t.currentTarget.classList.add("selectedType"),this.typeList.push(e))},handleDeleteStep(e){this.routeDatas.splice(e,1),0===this.routeDatas.length&&(this.totalDayNumberDisabled=!1)},handleDeleteCharge(e){this.chargeDatas.splice(e,1)},submitForm(){const e=n();if(""===this.tags[0].value||""===this.tags[1].value||""===this.tags[2].value)return this.tabValue="Basic Information",void e.error("Please enter all the three tags");if(null===this.projectName||""===this.projectName)return this.tabValue="Basic Information",void(this.projectNameStyle="invalidInput");if(null===this.originalPrice||""===this.originalPrice)return this.tabValue="Price",void(this.originalPriceStyle="invalidInput");let t=[];for(let l=0;l<this.routeDatas.length;l++)t.push({location:{exact:this.routeDatas[l].exactLocation,map_latitude:this.routeDatas[l].mapLatitude,map_longitude:this.routeDatas[l].mapLongitude,map_zoom:this.routeDatas[l].mapZoom},time:this.routeDatas[l].exactTime,activity:this.routeDatas[l].activityName,picture:this.routeDatas[l].activityPic,day:this.routeDatas[l].dayNumber,time_of_day:this.routeDatas[l].periodValue});let a=[];for(let l=0;l<this.chargeDatas.length;l++)a.push({name:this.chargeDatas[l].chargeName,description:this.chargeDatas[l].chargeDescription});this.axios.post("/product/add",{name:this.projectName,description:this.projectDescription,group_number:this.groupNumber,location:{raw_loc:this.locationText,map_latitude:this.mapLatitude,map_longitude:this.mapLongitude,map_zoom:this.mapZoom},discount:this.discount,ori_price:this.originalPrice,currency:this.currencyType,tags:this.tags,cover_image:this.coverImage,banner_image:this.bannerImages,gallery:this.galleryImages,start_time:this.startTime,end_time:this.endTime,app_ddl:this.cutoffDate,fee_des:a,trips:t,types:this.typeList})}}},C=e=>(_("data-v-67e04e38"),e=e(),D(),e),N={class:"bg"},U={class:"container"},P=C((()=>r("div",{class:"titlePart"},[r("div",{class:"titleMain"},[r("h1",{class:"mainTitle"},"Add Travel Project"),r("div",{class:"slogan"},"Add a new tourism project.")])],-1))),S={class:"settings"},j={class:"tabInnerContainer"},V=C((()=>r("div",{class:"inputTitle"},"Introduction",-1))),F={class:"input_form"},B=C((()=>r("label",{class:"input_label"},"Project Name",-1))),R={class:"input_form"},k=C((()=>r("label",{class:"input_label"},"Project Description",-1))),w=C((()=>r("div",{class:"inputTitle"},"Duration",-1))),A={class:"dataPickers"},q=C((()=>r("div",{class:"inputTitle"},"Group Number",-1))),M={class:"input_form"},E=C((()=>r("label",{class:"input_label"},"Group Number",-1))),z=C((()=>r("div",{class:"inputTitle"},"Cover Image",-1))),O=C((()=>r("div",{class:"inputTitle"},"Banner Image",-1))),Z=C((()=>r("div",{class:"inputTitle"},"Gallery",-1))),G=C((()=>r("div",{class:"inputTitle"},"Tags",-1))),Y={class:"input_form"},H=["onUpdate:modelValue"],W=C((()=>r("label",{class:"input_label tag_input_label",style:{left:"200px"}},"Tag Value",-1))),$=C((()=>r("div",{class:"inputTitle"},"Types",-1))),J={class:"typesContainer"},K=[C((()=>r("div",{class:"typeTitle"},"Wildlife Tour",-1)))],Q=[C((()=>r("div",{class:"typeTitle"},"Adventure Tour",-1)))],X=[C((()=>r("div",{class:"typeTitle"},"City Tour",-1)))],ee=[C((()=>r("div",{class:"typeTitle"},"Museum Tour",-1)))],te=[C((()=>r("div",{class:"typeTitle"},"Beaches Tour",-1)))],ae={class:"tabInnerContainer"},le=C((()=>r("div",{class:"inputTitle"},"Location",-1))),ie={class:"input_form"},ne=C((()=>r("label",{class:"input_label"},"Location Text",-1))),se={class:"input_form",style:{"justify-content":"space-between"}},oe={class:"inner_input_form"},ue=C((()=>r("label",{class:"input_label"},"Map Latitude",-1))),re={class:"inner_input_form"},de=C((()=>r("label",{class:"input_label"},"Map Longitude",-1))),pe={class:"inner_input_form"},ce=C((()=>r("label",{class:"input_label"},"Map Zoom",-1))),me=C((()=>r("div",{class:"inputTitle"},"Total Day Number",-1))),ve={class:"input_form"},ge=["disabled"],he=C((()=>r("label",{class:"input_label"},"Total Day Number",-1))),be=C((()=>r("div",{class:"icon_add"},null,-1))),ye=C((()=>r("div",{class:"inputTitle"},"Original Price",-1))),fe={class:"input_form"},Te=C((()=>r("label",{class:"input_label"},"Original Price",-1))),_e=C((()=>r("div",{class:"inputTitle"},"Discount",-1))),De={class:"input_form"},xe=C((()=>r("label",{class:"input_label"},"Discount",-1))),Ie=C((()=>r("div",{class:"icon_add"},null,-1))),Le=C((()=>r("div",{class:"inputTitle"},"Title",-1))),Ce={class:"input_form"},Ne=C((()=>r("label",{class:"input_label"},"Title",-1))),Ue=C((()=>r("div",{class:"inputTitle"},"Tags",-1))),Pe={class:"input_form",style:{"justify-content":"space-between"}},Se=C((()=>r("div",{class:"inputTitle"},"Content",-1))),je={class:"input_form"},Ve=C((()=>r("label",{class:"input_label"},"Content",-1))),Fe=C((()=>r("div",{class:"icon_submit"},null,-1)));const Be=e(L,[["render",function(e,t,a,l,i,n){const f=s("n-date-picker"),T=s("n-upload"),_=s("n-select"),D=s("n-tab-pane"),x=s("route-step"),I=s("price-item"),L=s("n-input"),C=s("n-button"),Be=s("n-tabs");return o(),u("div",N,[r("div",U,[P,r("div",S,[d(Be,{value:l.tabValue,"onUpdate:value":t[39]||(t[39]=e=>l.tabValue=e),class:"card-tabs",size:"large",animated:"",style:{margin:"0 -4px"},"pane-style":"padding-left: 4px; padding-right: 4px; box-sizing: border-box;"},{default:p((()=>[d(D,{name:"Basic Information",tab:"1. Basic Information"},{default:p((()=>[r("div",j,[V,r("div",F,[c(r("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>i.projectName=e),required:"",class:v(i.projectNameStyle),onFocus:t[1]||(t[1]=e=>l.resetInput(e))},null,34),[[m,i.projectName]]),B]),r("div",R,[c(r("textarea",{"onUpdate:modelValue":t[2]||(t[2]=e=>i.projectDescription=e),required:""},null,512),[[m,i.projectDescription]]),k]),w,r("div",A,[d(f,{value:l.startTime,"onUpdate:value":t[3]||(t[3]=e=>l.startTime=e),type:"date","is-date-disabled":l.secureStartTime,size:"large",clearable:"",placeholder:"Start Date"},null,8,["value","is-date-disabled"]),d(f,{value:l.endTime,"onUpdate:value":t[4]||(t[4]=e=>l.endTime=e),type:"date",placement:"bottom-end","is-date-disabled":l.secureEndTime,size:"large",clearable:"",placeholder:"End Date"},null,8,["value","is-date-disabled"]),d(f,{value:i.cutoffDate,"onUpdate:value":t[5]||(t[5]=e=>i.cutoffDate=e),type:"date",placement:"bottom-end",size:"large",clearable:"",placeholder:"Cutoff Date"},null,8,["value"])]),q,r("div",M,[c(r("input",{"onUpdate:modelValue":t[6]||(t[6]=e=>i.groupNumber=e),required:"",onBlur:t[7]||(t[7]=e=>n.validateInteger(e,i.groupNumber,"groupNumber")),onFocus:t[8]||(t[8]=e=>l.resetInput(e))},null,544),[[m,i.groupNumber]]),E]),z,d(T,{action:l.imageAPI,"file-list":l.coverImageList,"onUpdate:fileList":t[9]||(t[9]=e=>l.coverImageList=e),"list-type":"image-card",style:{"margin-left":"10px"},onBeforeUpload:l.beforeUpload,accept:"image/*",onFinish:l.handleFinishCover,onRemove:l.handleRemoveImage,max:1},null,8,["action","file-list","onBeforeUpload","onFinish","onRemove"]),O,d(T,{action:l.imageAPI,"file-list":l.bannerImageList,"onUpdate:fileList":t[10]||(t[10]=e=>l.bannerImageList=e),"list-type":"image-card",style:{"margin-left":"10px"},onBeforeUpload:l.beforeUpload,accept:"image/*",onFinish:l.handleFinishBanner,onRemove:l.handleRemoveImage,max:4},null,8,["action","file-list","onBeforeUpload","onFinish","onRemove"]),Z,d(T,{action:l.imageAPI,"file-list":l.galleryImageList,"onUpdate:fileList":t[11]||(t[11]=e=>l.galleryImageList=e),"list-type":"image-card",style:{"margin-left":"10px"},onBeforeUpload:l.beforeUpload,accept:"image/*",onFinish:l.handleFinishGallery,onRemove:l.handleRemoveImage},null,8,["action","file-list","onBeforeUpload","onFinish","onRemove"]),G,(o(!0),u(g,null,h(i.tags,(e=>(o(),u("div",Y,[d(_,{value:e.key,"onUpdate:value":t=>e.key=t,size:"large",options:l.tagOptions,placeholder:"Select A Tag Type",style:{width:"250px","margin-right":"10px"}},null,8,["value","onUpdate:value","options"]),c(r("input",{type:"text","onUpdate:modelValue":t=>e.value=t,required:"",onFocus:t[12]||(t[12]=e=>l.resetInput(e))},null,40,H),[[m,e.value]]),W])))),256)),$,r("div",J,[r("div",{class:"type",onClick:t[13]||(t[13]=e=>n.handleChooseType("WildlifeTour",e))},K),r("div",{class:"type",onClick:t[14]||(t[14]=e=>n.handleChooseType("AdventureTour",e))},Q),r("div",{class:"type",onClick:t[15]||(t[15]=e=>n.handleChooseType("CityTour",e))},X),r("div",{class:"type",onClick:t[16]||(t[16]=e=>n.handleChooseType("MuseumTour",e))},ee),r("div",{class:"type",onClick:t[17]||(t[17]=e=>n.handleChooseType("BeachesTour",e))},te)])])])),_:1}),d(D,{name:"Location",tab:"2. Location"},{default:p((()=>[r("div",ae,[le,r("div",ie,[c(r("input",{type:"text","onUpdate:modelValue":t[18]||(t[18]=e=>i.locationText=e),required:""},null,512),[[m,i.locationText]]),ne]),r("div",se,[r("div",oe,[c(r("input",{type:"text","onUpdate:modelValue":t[19]||(t[19]=e=>i.mapLatitude=e),required:""},null,512),[[m,i.mapLatitude]]),ue]),r("div",re,[c(r("input",{type:"text","onUpdate:modelValue":t[20]||(t[20]=e=>i.mapLongitude=e),required:""},null,512),[[m,i.mapLongitude]]),de]),r("div",pe,[c(r("input",{type:"text","onUpdate:modelValue":t[21]||(t[21]=e=>i.mapZoom=e),required:""},null,512),[[m,i.mapZoom]]),ce])])])])),_:1}),d(D,{name:"Route",tab:"3. Route"},{default:p((()=>[me,r("div",ve,[c(r("input",{type:"text","onUpdate:modelValue":t[22]||(t[22]=e=>l.totalDayNumber=e),disabled:l.totalDayNumberDisabled,required:"",onChange:t[23]||(t[23]=(...e)=>l.checkAddStepStatus&&l.checkAddStepStatus(...e)),onBlur:t[24]||(t[24]=e=>n.validateInteger(e,l.totalDayNumber,"totalDayNumber")),onFocus:t[25]||(t[25]=e=>l.resetInput(e))},null,40,ge),[[m,l.totalDayNumber]]),he]),r("button",{type:"submit",class:v(["add_step_btn",l.add_step_status]),onClick:t[26]||(t[26]=(...e)=>l.addStep&&l.addStep(...e))},[be,b(" Add Step ")],2),(o(!0),u(g,null,h(l.routeDatas,((e,t)=>(o(),u("div",null,[d(x,{"step-data":e,"step-index":t,onDeleteStep:e=>n.handleDeleteStep(t)},null,8,["step-data","step-index","onDeleteStep"])])))),256))])),_:1}),d(D,{name:"Price",tab:"4. Price"},{default:p((()=>[ye,r("div",fe,[c(r("input",{type:"text","onUpdate:modelValue":t[27]||(t[27]=e=>i.originalPrice=e),required:"",style:y(i.originalPriceStyle),onBlur:t[28]||(t[28]=e=>n.validateNumber(e,i.originalPrice,"originalPrice")),onFocus:t[29]||(t[29]=e=>l.resetInput(e))},null,36),[[m,i.originalPrice]]),Te,d(_,{value:l.currencyType,"onUpdate:value":t[30]||(t[30]=e=>l.currencyType=e),size:"large",options:l.currencyOptions,placeholder:"Select Currency Unit",style:{width:"200px","margin-left":"10px"}},null,8,["value","options"])]),_e,r("div",De,[c(r("input",{type:"text","onUpdate:modelValue":t[31]||(t[31]=e=>i.discount=e),required:"",onBlur:t[32]||(t[32]=e=>n.validateNumber(e,i.discount,"discount")),onFocus:t[33]||(t[33]=e=>l.resetInput(e))},null,544),[[m,i.discount]]),xe]),r("button",{type:"submit",class:"add_step_btn",onClick:t[34]||(t[34]=(...e)=>l.addCharge&&l.addCharge(...e))},[Ie,b(" Add Charge ")]),(o(!0),u(g,null,h(l.chargeDatas,((e,t)=>(o(),u("div",null,[d(I,{"item-data":e,"item-index":t,onDeleteCharge:e=>n.handleDeleteCharge(t)},null,8,["item-data","item-index","onDeleteCharge"])])))),256))])),_:1}),d(D,{name:"Notification",tab:"5. Notification"},{default:p((()=>[Le,r("div",Ce,[r("input",{type:"text",onFocus:t[35]||(t[35]=e=>l.resetInput(e))},null,32),Ne]),Ue,r("div",Pe,[d(_,{style:{"margin-right":"20px"},value:l.tagValue,"onUpdate:value":t[36]||(t[36]=e=>l.tagValue=e),multiple:"","render-tag":l.renderTag,options:i.tags,"max-tag-count":"1"},null,8,["value","render-tag","options"]),d(L,{placeholder:"New Tag",style:{"margin-right":"20px"}}),d(C,{type:"primary"},{default:p((()=>[b("Add")])),_:1})]),Se,r("div",je,[c(r("textarea",{"onUpdate:modelValue":t[37]||(t[37]=e=>i.projectDescription=e),required:""},null,512),[[m,i.projectDescription]]),Ve])])),_:1}),d(D,{name:"Submit",tab:"6. Submit"},{default:p((()=>[r("button",{type:"submit",class:"add_step_btn",onClick:t[38]||(t[38]=(...e)=>n.submitForm&&n.submitForm(...e))},[b(" Submit "),Fe])])),_:1})])),_:1},8,["value"])])])])}],["__scopeId","data-v-67e04e38"]]);export{Be as default};
