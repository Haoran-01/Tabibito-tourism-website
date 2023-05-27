import{S as e}from"./sideBarView-53e770ce.js";import{i as t,t as n,u as i,a as s,b as a,c as r,d as o,e as l}from"./index-b2557976.js";import{z as c,K as d,L as u,M as _,D as h,g as v,O as p,P as f,x as g,Q as m,j as b,R as y,S as w,_ as z,o as x,c as C,r as k,s as O,b as E,e as S,t as V,d as $,w as A,i as T,F as L,f as j,q as F,p as D,k as M}from"./index-078c3e5d.js";import{F as N}from"./footerView-56bc7c4c.js";import{N as H}from"./navigationBar-2b8cf318.js";var R=null;var P=null;function W(e,t){void 0===t&&(t={});var n=document.createElement(e);return Object.keys(t).forEach((function(e){n[e]=t[e]})),n}function q(e,t,n){return(window.getComputedStyle(e,n||null)||{display:"none"})[t]}function B(e){if(!document.documentElement.contains(e))return{detached:!0,rendered:!1};for(var t=e;t!==document;){if("none"===q(t,"display"))return{detached:!1,rendered:!1};t=t.parentNode}return{detached:!1,rendered:!0}}var I=0,U=null;function G(e,t){var n,i;if(e.__resize_mutation_handler__||(e.__resize_mutation_handler__=K.bind(e)),!e.__resize_listeners__)if(e.__resize_listeners__=[],window.ResizeObserver){var s=e.offsetWidth,a=e.offsetHeight,r=new ResizeObserver((function(){(e.__resize_observer_triggered__||(e.__resize_observer_triggered__=!0,e.offsetWidth!==s||e.offsetHeight!==a))&&Z(e)})),o=B(e),l=o.detached,c=o.rendered;e.__resize_observer_triggered__=!1===l&&!1===c,e.__resize_observer__=r,r.observe(e)}else if(e.attachEvent&&e.addEventListener)e.__resize_legacy_resize_handler__=function(){Z(e)},e.attachEvent("onresize",e.__resize_legacy_resize_handler__),document.addEventListener("DOMSubtreeModified",e.__resize_mutation_handler__);else if(I||(n='.resize-triggers{visibility:hidden;opacity:0;pointer-events:none}.resize-contract-trigger,.resize-contract-trigger:before,.resize-expand-trigger,.resize-triggers{content:"";position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden}.resize-contract-trigger,.resize-expand-trigger{background:#eee;overflow:auto}.resize-contract-trigger:before{width:200%;height:200%}',(i=document.createElement("style")).styleSheet?i.styleSheet.cssText=n:i.appendChild(document.createTextNode(n)),(document.querySelector("head")||document.body).appendChild(i),U=i),function(e){var t=q(e,"position");t&&"static"!==t||(e.style.position="relative");e.__resize_old_position__=t,e.__resize_last__={};var n=W("div",{className:"resize-triggers"}),i=W("div",{className:"resize-expand-trigger"}),s=W("div"),a=W("div",{className:"resize-contract-trigger"});i.appendChild(s),n.appendChild(i),n.appendChild(a),e.appendChild(n),e.__resize_triggers__={triggers:n,expand:i,expandChild:s,contract:a},J(e),e.addEventListener("scroll",Q,!0),e.__resize_last__={width:e.offsetWidth,height:e.offsetHeight}}(e),e.__resize_rendered__=B(e).rendered,window.MutationObserver){var d=new MutationObserver(e.__resize_mutation_handler__);d.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),e.__resize_mutation_observer__=d}e.__resize_listeners__.push(t),I++}function K(){var e=B(this),t=e.rendered,n=e.detached;t!==this.__resize_rendered__&&(!n&&this.__resize_triggers__&&(J(this),this.addEventListener("scroll",Q,!0)),this.__resize_rendered__=t,Z(this))}function Q(){var e,t,n=this;J(this),this.__resize_raf__&&(e=this.__resize_raf__,P||(P=(window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(e){clearTimeout(e)}).bind(window)),P(e)),this.__resize_raf__=(t=function(){var e,t,i,s,a,r,o=(t=(e=n).__resize_last__,i=t.width,s=t.height,a=e.offsetWidth,r=e.offsetHeight,a!==i||r!==s?{width:a,height:r}:null);o&&(n.__resize_last__=o,Z(n))},R||(R=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){return setTimeout(e,16)}).bind(window)),R(t))}function Z(e){e&&e.__resize_listeners__&&e.__resize_listeners__.forEach((function(t){t.call(e,e)}))}function J(e){var t=e.__resize_triggers__,n=t.expand,i=t.expandChild,s=t.contract,a=s.scrollWidth,r=s.scrollHeight,o=n.offsetWidth,l=n.offsetHeight,c=n.scrollWidth,d=n.scrollHeight;s.scrollLeft=a,s.scrollTop=r,i.style.width=o+1+"px",i.style.height=l+1+"px",n.scrollLeft=c,n.scrollTop=d}var X=function(){return X=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},X.apply(this,arguments)},Y=["getWidth","getHeight","getDom","getOption","resize","dispatchAction","convertToPixel","convertFromPixel","containPixel","getDataURL","getConnectedDataURL","appendData","clear","isDisposed","dispose"];var ee={autoresize:Boolean},te=/^on[^a-z]/,ne=function(e){return te.test(e)};function ie(e,t){var n=w(e);return n&&"object"==typeof n&&"value"in n?n.value||t:n||t}var se={loading:Boolean,loadingOptions:Object},ae=null,re=[],oe=[];!function(e,t){if(e&&"undefined"!=typeof document){var n,i=!0===t.prepend?"prepend":"append",s=!0===t.singleTag,a="string"==typeof t.container?document.querySelector(t.container):document.getElementsByTagName("head")[0];if(s){var r=re.indexOf(a);-1===r&&(r=re.push(a)-1,oe[r]={}),n=oe[r]&&oe[r][i]?oe[r][i]:oe[r][i]=o()}else n=o();65279===e.charCodeAt(0)&&(e=e.substring(1)),n.styleSheet?n.styleSheet.cssText+=e:n.appendChild(document.createTextNode(e))}function o(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),t.attributes)for(var n=Object.keys(t.attributes),s=0;s<n.length;s++)e.setAttribute(n[s],t.attributes[n[s]]);var r="prepend"===i?"afterbegin":"beforeend";return a.insertAdjacentElement(r,e),e}}("x-vue-echarts{display:block;width:100%;height:100%;min-width:0}\n",{});var le=function(){if(null!=ae)return ae;if("undefined"==typeof HTMLElement||"undefined"==typeof customElements)return ae=!1;try{new Function("tag","class EChartsElement extends HTMLElement {\n  __dispose = null;\n\n  disconnectedCallback() {\n    if (this.__dispose) {\n      this.__dispose();\n      this.__dispose = null;\n    }\n  }\n}\n\nif (customElements.get(tag) == null) {\n  customElements.define(tag, EChartsElement);\n}\n")("x-vue-echarts")}catch(e){return ae=!1}return ae=!0}(),ce=c({name:"echarts",props:X(X({option:Object,theme:{type:[Object,String]},initOptions:Object,updateOptions:Object,group:String,manualUpdate:Boolean},ee),se),emits:{},inheritAttrs:!1,setup:function(e,i){var s=i.attrs,a=d(),r=d(),o=d(),l=u("ecTheme",null),c=u("ecInitOptions",null),b=u("ecUpdateOptions",null),w=_(e),z=w.autoresize,x=w.manualUpdate,C=w.loading,k=w.loadingOptions,O=h((function(){return o.value||e.option||null})),E=h((function(){return e.theme||ie(l,{})})),S=h((function(){return e.initOptions||ie(c,{})})),V=h((function(){return e.updateOptions||ie(b,{})})),$=h((function(){return function(e){var t={};for(var n in e)ne(n)||(t[n]=e[n]);return t}(s)})),A=v().proxy.$listeners;function T(n){if(a.value){var i=r.value=t(a.value,E.value,S.value);e.group&&(i.group=e.group);var o=A;o||(o={},Object.keys(s).filter((function(e){return 0===e.indexOf("on")&&e.length>2})).forEach((function(e){var t=e.charAt(2).toLowerCase()+e.slice(3);"Once"===t.substring(t.length-4)&&(t="~".concat(t.substring(0,t.length-4))),o[t]=s[e]}))),Object.keys(o).forEach((function(e){var t=o[e];if(t){var n=e.toLowerCase();"~"===n.charAt(0)&&(n=n.substring(1),t.__once__=!0);var s=i;if(0===n.indexOf("zr:")&&(s=i.getZr(),n=n.substring(3)),t.__once__){delete t.__once__;var a=t;t=function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];a.apply(void 0,e),s.off(n,t)}}s.on(n,t)}})),z.value?y((function(){i&&!i.isDisposed()&&i.resize(),l()})):l()}function l(){var e=n||O.value;e&&i.setOption(e,V.value)}}function L(){r.value&&(r.value.dispose(),r.value=void 0)}var j=null;p(x,(function(t){"function"==typeof j&&(j(),j=null),t||(j=p((function(){return e.option}),(function(e,t){e&&(r.value?r.value.setOption(e,X({notMerge:e!==t},V.value)):T())}),{deep:!0}))}),{immediate:!0}),p([E,S],(function(){L(),T()}),{deep:!0}),f((function(){e.group&&r.value&&(r.value.group=e.group)}));var F,D,M,N,H,R=function(e){return t=Object.create(null),Y.forEach((function(n){var i;t[n]=(i=n,function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];if(!e.value)throw new Error("ECharts is not initialized yet.");return e.value[i].apply(e.value,t)})})),t;var t}(r);return F=r,D=C,M=k,N=u("ecLoadingOptions",{}),H=h((function(){return X(X({},ie(N,{})),null==M?void 0:M.value)})),f((function(){var e=F.value;e&&(D.value?e.showLoading(H.value):e.hideLoading())})),function(e,t,i){var s=null;p([i,e,t],(function(e,t,i){var a=e[0],r=e[1],o=e[2];a&&r&&o&&(s=n((function(){r.resize()}),100),G(a,s)),i((function(){s&&a&&function(e,t){var n=e.__resize_listeners__;if(n){if(t&&n.splice(n.indexOf(t),1),!n.length||!t){if(e.detachEvent&&e.removeEventListener)return e.detachEvent("onresize",e.__resize_legacy_resize_handler__),void document.removeEventListener("DOMSubtreeModified",e.__resize_mutation_handler__);e.__resize_observer__?(e.__resize_observer__.unobserve(e),e.__resize_observer__.disconnect(),e.__resize_observer__=null):(e.__resize_mutation_observer__&&(e.__resize_mutation_observer__.disconnect(),e.__resize_mutation_observer__=null),e.removeEventListener("scroll",Q),e.removeChild(e.__resize_triggers__.triggers),e.__resize_triggers__=null),e.__resize_listeners__=null}!--I&&U&&U.parentNode.removeChild(U)}}(a,s)}))}))}(r,z,a),g((function(){T()})),m((function(){le&&a.value?a.value.__dispose=L:L()})),X({chart:r,root:a,setOption:function(t,n){e.manualUpdate&&(o.value=t),r.value?r.value.setOption(t,n||{}):T(t)},nonEventAttrs:$},R)},render:function(){var e=X({},this.nonEventAttrs);return e.ref="root",e.class=e.class?["echarts"].concat(e.class):"echarts",b("x-vue-echarts",e)}});const de={class:"one1",id:"chart1"};const ue=z({name:"chartDataOne",mounted(){document.getElementById("chart1").innerHTML='<iframe src="../../../dist/orders_of_types_15.html" frameborder="0" style="width:100%;height:600px;"></iframe>'}},[["render",function(e,t,n,i,s,a){return x(),C("div",de)}]]);i([s,a,r,o,l]);const _e=c({name:"rightContentView",components:{ChartDataOne:ue,FooterView:N,VChart:ce},provide:{ecTheme:"light"},setup(){const e=k(!1),t=O(),n=k({textStyle:{fontFamily:'Inter, "Helvetica Neue", Arial, sans-serif'},title:{text:"Life Expectancy vs. GDP by country"},legend:{right:10,data:["1990","2015"]},xAxis:{splitLine:{lineStyle:{type:"dashed"}}},yAxis:{splitLine:{lineStyle:{type:"dashed"}},scale:!0}});return{route:t,options:[{label:"Travel Types Visualisation",key:"data"},{label:"Tourist Areas Visualisation",key:"Maps"},{label:"Reservation Rates Visualisation",key:"Rates"}],showDropdown:e,handleSelect(e){"data"===e?t.push("/chartsData"):"Maps"===e&&t.push("/chartsMaps"),"Rates"===e&&t.push("/chartsRates")},handleClick(){e.value=!e.value},scatter:n}},data:()=>({earns:[],items:[]}),mounted(){this.initChart(),this.axios.get("/staff_portal/recent_product_list").then((e=>{this.items=e.data.orders})).catch((e=>{})),this.axios.get("/staff_portal/get_statistic").then((e=>{this.earns=e.data})).catch((e=>{}))},methods:{initChart(){const e=this.$refs.chart;t(e).setOption({title:{text:"Visitors Trends "},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["Autumn","Winter","Spring","Summer"]},toolbox:{feature:{saveAsImage:{}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}],yAxis:[{type:"value"}],series:[{name:"Autumn",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[220,182,191,234,290,330,310]},{name:"Winter",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[150,232,201,154,190,330,410]},{name:"Spring",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[320,332,301,334,390,330,320]},{name:"Summer",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[520,632,601,634,990,995,1e3]}]})}}}),he=e=>(D("data-v-59b1b156"),e=e(),M(),e),ve={class:"dashboard_content"},pe={class:"row dash_head y-gap-20 pb-60 lg:pb-40 md:pb-32"},fe={class:"col-auto"},ge={class:"dash_title"},me=he((()=>S("div",{class:"dash_text"},null,-1))),be=he((()=>S("div",{class:"col-auto"},null,-1))),ye={class:"row y-gap-30"},we={class:"col-xl-3 col-md-6"},ze={class:"block_sub_wrap"},xe={class:"row block_content"},Ce={class:"col-auto"},ke={class:"block_title"},Oe={class:"block_money"},Ee={class:"col-auto"},Se=["alt"],Ve={class:"col-xl-3 col-md-6"},$e={class:"block_sub_wrap"},Ae={class:"row block_content"},Te={class:"col-auto"},Le={class:"block_title"},je={class:"block_money"},Fe=he((()=>S("div",{class:"col-auto"},[S("img",{src:"/assets/2-63fb1faf.svg",alt:"icon"})],-1))),De={class:"col-xl-3 col-md-6"},Me={class:"block_sub_wrap"},Ne={class:"row block_content"},He={class:"col-auto"},Re={class:"block_title"},Pe={class:"block_money"},We=he((()=>S("div",{class:"col-auto"},[S("img",{src:"/assets/3-bf09f399.svg",alt:"icon"})],-1))),qe={class:"col-xl-3 col-md-6"},Be={class:"block_sub_wrap"},Ie={class:"row block_content"},Ue={class:"col-auto"},Ge={class:"block_title"},Ke={class:"block_money"},Qe=he((()=>S("div",{class:"col-auto"},[S("img",{src:"/assets/4-4297a11e.svg",alt:"icon"})],-1))),Ze={class:"row y-gap-30 statistics_and_recent_wrap"},Je={class:"statistics_wrap"},Xe={class:"statistics_wrap_sub"},Ye={class:"statistics_head"},et={class:"statistics_title"},tt={class:"dropdown"},nt={class:"echarts"},it={style:{display:"flex"}},st={ref:"chart",style:{height:"500px",width:"700px",scale:"0.8"}},at={class:"col-xl-5 col-md-6"},rt={class:"table_wrap"},ot={class:"table_head"},lt={class:"table_head_text"},ct={class:""},dt=he((()=>S("th",null,"#",-1))),ut={class:"table_money"},_t={key:0,class:"table_pending"},ht={key:1,class:"table_confirm"},vt={key:2,class:"table_reject"},pt=he((()=>S("br",null,null,-1)));const ft=z(_e,[["render",function(e,t,n,i,s,a){const r=E("n-button"),o=E("n-dropdown"),l=E("chart-data-one"),c=E("n-scrollbar"),d=E("n-table");return x(),C("body",null,[S("div",ve,[S("div",pe,[S("div",fe,[S("h1",ge,V(e.$t("rightContentView.dashboard")),1),me]),be]),S("div",ye,[S("div",we,[S("div",ze,[S("div",xe,[S("div",Ce,[S("div",ke,V(e.$t("rightContentView.monthlyPending")),1),S("div",Oe,"$"+V(Number(e.earns.month_pending).toFixed(2)),1)]),S("div",Ee,[S("img",{src:"/assets/1-78725cd6.svg",alt:e.$t("rightContentView.icon")},null,8,Se)])])])]),S("div",Ve,[S("div",$e,[S("div",Ae,[S("div",Te,[S("div",Le,V(e.$t("rightContentView.monthlyEarning")),1),S("div",je,"$"+V(Number(e.earns.month_earning).toFixed(2)),1)]),Fe])])]),S("div",De,[S("div",Me,[S("div",Ne,[S("div",He,[S("div",Re,V(e.$t("rightContentView.quarterlyPending")),1),S("div",Pe,"$"+V(Number(e.earns.quarterly_pending).toFixed(2)),1)]),We])])]),S("div",qe,[S("div",Be,[S("div",Ie,[S("div",Ue,[S("div",Ge,V(e.$t("rightContentView.quarterlyEarning")),1),S("div",Ke,"$"+V(Number(e.earns.quarterly_earning).toFixed(2)),1)]),Qe])])])]),S("div",Ze,[S("div",Je,[S("div",Xe,[S("div",Ye,[S("h2",et,V(e.$t("rightContentView.visualisationCharts")),1),S("div",tt,[$(o,{trigger:"hover",options:e.options,onSelect:e.handleSelect},{default:A((()=>[$(r,null,{default:A((()=>[T(V(e.$t("rightContentView.moreCharts")),1)])),_:1})])),_:1},8,["options","onSelect"])])]),$(c,{"x-scrollable":""},{default:A((()=>[S("div",nt,[S("figure",it,[$(l,{style:{width:"930px",scale:"0.85","margin-left":"-200px"}}),S("div",st,null,512)])])])),_:1})])]),S("div",at,[S("div",rt,[S("div",ot,[S("h2",lt,V(e.$t("rightContentView.recentBookings")),1),S("div",ct,[S("h4",{class:"table_head_href",onClick:t[0]||(t[0]=e=>this.$router.push("/management/reservation_list"))},V(e.$t("rightContentView.viewAll")),1)])]),$(d,{bordered:!1,"single-line":!1},{default:A((()=>[S("thead",null,[S("tr",null,[dt,S("th",null,V(e.$t("rightContentView.item")),1),S("th",null,V(e.$t("rightContentView.total")),1),S("th",null,V(e.$t("rightContentView.paid")),1),S("th",null,V(e.$t("rightContentView.status")),1),S("th",null,V(e.$t("rightContentView.createdAt")),1)])]),S("tbody",null,[(x(!0),C(L,null,j(e.items,((t,n)=>(x(),C("tr",{key:n},[S("td",null,V(e.$t("rightContentView.key",{expr:n+1})),1),S("td",null,V(t.destination),1),S("td",ut,"$"+V(t.price),1),S("td",null,"$"+V(t.discount),1),S("td",null,["Processing"===t.status?(x(),C("div",_t,V(e.$t("rightContentView.processing")),1)):"Completed"===t.status?(x(),C("div",ht,V(e.$t("rightContentView.completed")),1)):"Cancelled"===t.status?(x(),C("div",vt,V(e.$t("rightContentView.cancelled")),1)):F("",!0)]),S("td",null,[T(V(t.date),1),pt,T(V(t.time),1)])])))),128))])])),_:1})])])])])])}],["__scopeId","data-v-59b1b156"]]),gt={class:"portal"},mt={class:"dashboard_main"},bt=z({__name:"staffPortalView",setup:t=>(t,n)=>(x(),C("section",null,[$(H,{"is-transparent":!0,class:"zup"}),S("div",gt,[$(e),S("div",mt,[$(ft)])])]))},[["__scopeId","data-v-9b4aba77"]]);export{bt as default};