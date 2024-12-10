import{as as he,ar as T,t as fe,aH as me,an as j,aI as V,al as W,s as X,ac as G,ao as I,a5 as ge,j as be,a0 as pe,r as S,a2 as Se,c as i,aM as ye,I as ze,H as Ce,n as we,h as z,x as _e,$ as J,g as qe,aN as Z,aO as ee,_ as Pe,az as Me,J as ke,aP as Be,w as Ae,o as De,L as Ee,aA as Te,M as Oe,O as He,R as O,Y as $e,f as P,Q as Qe,m as te,aB as je,aC as ae}from"./index.7b4d2431.js";import{Q as ne}from"./QResizeObserver.59a76f41.js";import{Q as Fe}from"./QScrollObserver.265c64f4.js";import{g as oe,s as le}from"./touch.70a9dd44.js";import{c as Ne}from"./selection.3f90489b.js";import{b as F}from"./format.a33550d6.js";import{Q as xe}from"./QPage.7b920579.js";import{u as Re}from"./use-quasar.4d36cac7.js";import{a as Ye}from"./index.2885cb15.js";import{u as Le}from"./vue-i18n.runtime.esm-bundler.522c1d5b.js";function U(t,u,d){const f=G(t);let e,n=f.left-u.event.x,l=f.top-u.event.y,a=Math.abs(n),h=Math.abs(l);const c=u.direction;c.horizontal===!0&&c.vertical!==!0?e=n<0?"left":"right":c.horizontal!==!0&&c.vertical===!0?e=l<0?"up":"down":c.up===!0&&l<0?(e="up",a>h&&(c.left===!0&&n<0?e="left":c.right===!0&&n>0&&(e="right"))):c.down===!0&&l>0?(e="down",a>h&&(c.left===!0&&n<0?e="left":c.right===!0&&n>0&&(e="right"))):c.left===!0&&n<0?(e="left",a<h&&(c.up===!0&&l<0?e="up":c.down===!0&&l>0&&(e="down"))):c.right===!0&&n>0&&(e="right",a<h&&(c.up===!0&&l<0?e="up":c.down===!0&&l>0&&(e="down")));let y=!1;if(e===void 0&&d===!1){if(u.event.isFirst===!0||u.event.lastDir===void 0)return{};e=u.event.lastDir,y=!0,e==="left"||e==="right"?(f.left-=n,a=0,n=0):(f.top-=l,h=0,l=0)}return{synthetic:y,payload:{evt:t,touch:u.event.mouse!==!0,mouse:u.event.mouse===!0,position:f,direction:e,isFirst:u.event.isFirst,isFinal:d===!0,duration:Date.now()-u.event.time,distance:{x:a,y:h},offset:{x:n,y:l},delta:{x:f.left-u.event.lastX,y:f.top-u.event.lastY}}}}let Ve=0;var re=he({name:"touch-pan",beforeMount(t,{value:u,modifiers:d}){if(d.mouse!==!0&&T.has.touch!==!0)return;function f(n,l){d.mouse===!0&&l===!0?ge(n):(d.stop===!0&&X(n),d.prevent===!0&&W(n))}const e={uid:"qvtp_"+Ve++,handler:u,modifiers:d,direction:oe(d),noop:fe,mouseStart(n){le(n,e)&&me(n)&&(j(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(n,!0))},touchStart(n){if(le(n,e)){const l=n.target;j(e,"temp",[[l,"touchmove","move","notPassiveCapture"],[l,"touchcancel","end","passiveCapture"],[l,"touchend","end","passiveCapture"]]),e.start(n)}},start(n,l){if(T.is.firefox===!0&&V(t,!0),e.lastEvt=n,l===!0||d.stop===!0){if(e.direction.all!==!0&&(l!==!0||e.modifiers.mouseAllDir!==!0)){const c=n.type.indexOf("mouse")>-1?new MouseEvent(n.type,n):new TouchEvent(n.type,n);n.defaultPrevented===!0&&W(c),n.cancelBubble===!0&&X(c),Object.assign(c,{qKeyEvent:n.qKeyEvent,qClickOutside:n.qClickOutside,qAnchorHandled:n.qAnchorHandled,qClonedBy:n.qClonedBy===void 0?[e.uid]:n.qClonedBy.concat(e.uid)}),e.initialEvent={target:n.target,event:c}}X(n)}const{left:a,top:h}=G(n);e.event={x:a,y:h,time:Date.now(),mouse:l===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:a,lastY:h}},move(n){if(e.event===void 0)return;const l=G(n),a=l.left-e.event.x,h=l.top-e.event.y;if(a===0&&h===0)return;e.lastEvt=n;const c=e.event.mouse===!0,y=()=>{f(n,c),d.preserveCursor!==!0&&(document.documentElement.style.cursor="grabbing"),c===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Ne(),e.styleCleanup=b=>{if(e.styleCleanup=void 0,d.preserveCursor!==!0&&(document.documentElement.style.cursor=""),document.body.classList.remove("non-selectable"),c===!0){const C=()=>{document.body.classList.remove("no-pointer-events--children")};b!==void 0?setTimeout(()=>{C(),b()},50):C()}else b!==void 0&&b()}};if(e.event.detected===!0){e.event.isFirst!==!0&&f(n,e.event.mouse);const{payload:b,synthetic:C}=U(n,e,!1);b!==void 0&&(e.handler(b)===!1?e.end(n):(e.styleCleanup===void 0&&e.event.isFirst===!0&&y(),e.event.lastX=b.position.left,e.event.lastY=b.position.top,e.event.lastDir=C===!0?void 0:b.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||c===!0&&e.modifiers.mouseAllDir===!0){y(),e.event.detected=!0,e.move(n);return}const p=Math.abs(a),g=Math.abs(h);p!==g&&(e.direction.horizontal===!0&&p>g||e.direction.vertical===!0&&p<g||e.direction.up===!0&&p<g&&h<0||e.direction.down===!0&&p<g&&h>0||e.direction.left===!0&&p>g&&a<0||e.direction.right===!0&&p>g&&a>0?(e.event.detected=!0,e.move(n)):e.end(n,!0))},end(n,l){if(e.event!==void 0){if(I(e,"temp"),T.is.firefox===!0&&V(t,!1),l===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(U(n===void 0?e.lastEvt:n,e).payload);const{payload:a}=U(n===void 0?e.lastEvt:n,e,!0),h=()=>{e.handler(a)};e.styleCleanup!==void 0?e.styleCleanup(h):h()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};t.__qtouchpan=e,d.mouse===!0&&j(e,"main",[[t,"mousedown","mouseStart",`passive${d.mouseCapture===!0?"Capture":""}`]]),T.has.touch===!0&&j(e,"main",[[t,"touchstart","touchStart",`passive${d.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,u){const d=t.__qtouchpan;d!==void 0&&(u.oldValue!==u.value&&(typeof value!="function"&&d.end(),d.handler=u.value),d.direction=oe(u.modifiers))},beforeUnmount(t){const u=t.__qtouchpan;u!==void 0&&(u.event!==void 0&&u.end(),I(u,"main"),I(u,"temp"),T.is.firefox===!0&&V(t,!1),u.styleCleanup!==void 0&&u.styleCleanup(),delete t.__qtouchpan)}});const ie=["vertical","horizontal"],K={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},se={prevent:!0,mouse:!0,mouseAllDir:!0},ue=t=>t>=250?50:Math.ceil(t/5);var Xe=be({name:"QScrollArea",props:{...pe,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(t,{slots:u,emit:d}){const f=S(!1),e=S(!1),n=S(!1),l={vertical:S(0),horizontal:S(0)},a={vertical:{ref:S(null),position:S(0),size:S(0)},horizontal:{ref:S(null),position:S(0),size:S(0)}},{proxy:h}=qe(),c=Se(t,h.$q);let y,p;const g=S(null),b=i(()=>"q-scrollarea"+(c.value===!0?" q-scrollarea--dark":""));a.vertical.percentage=i(()=>{const o=a.vertical.size.value-l.vertical.value;if(o<=0)return 0;const s=F(a.vertical.position.value/o,0,1);return Math.round(s*1e4)/1e4}),a.vertical.thumbHidden=i(()=>(t.visible===null?n.value:t.visible)!==!0&&f.value===!1&&e.value===!1||a.vertical.size.value<=l.vertical.value+1),a.vertical.thumbStart=i(()=>a.vertical.percentage.value*(l.vertical.value-a.vertical.thumbSize.value)),a.vertical.thumbSize=i(()=>Math.round(F(l.vertical.value*l.vertical.value/a.vertical.size.value,ue(l.vertical.value),l.vertical.value))),a.vertical.style=i(()=>({...t.thumbStyle,...t.verticalThumbStyle,top:`${a.vertical.thumbStart.value}px`,height:`${a.vertical.thumbSize.value}px`})),a.vertical.thumbClass=i(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.vertical.barClass=i(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),a.horizontal.percentage=i(()=>{const o=a.horizontal.size.value-l.horizontal.value;if(o<=0)return 0;const s=F(a.horizontal.position.value/o,0,1);return Math.round(s*1e4)/1e4}),a.horizontal.thumbHidden=i(()=>(t.visible===null?n.value:t.visible)!==!0&&f.value===!1&&e.value===!1||a.horizontal.size.value<=l.horizontal.value+1),a.horizontal.thumbStart=i(()=>a.horizontal.percentage.value*(l.horizontal.value-a.horizontal.thumbSize.value)),a.horizontal.thumbSize=i(()=>Math.round(F(l.horizontal.value*l.horizontal.value/a.horizontal.size.value,ue(l.horizontal.value),l.horizontal.value))),a.horizontal.style=i(()=>({...t.thumbStyle,...t.horizontalThumbStyle,left:`${a.horizontal.thumbStart.value}px`,width:`${a.horizontal.thumbSize.value}px`})),a.horizontal.thumbClass=i(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.horizontal.barClass=i(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const C=i(()=>a.vertical.thumbHidden.value===!0&&a.horizontal.thumbHidden.value===!0?t.contentStyle:t.contentActiveStyle),N=[[re,o=>{D(o,"vertical")},void 0,{vertical:!0,...se}]],H=[[re,o=>{D(o,"horizontal")},void 0,{horizontal:!0,...se}]];function M(){const o={};return ie.forEach(s=>{const v=a[s];o[s+"Position"]=v.position.value,o[s+"Percentage"]=v.percentage.value,o[s+"Size"]=v.size.value,o[s+"ContainerSize"]=l[s].value}),o}const k=ye(()=>{const o=M();o.ref=h,d("scroll",o)},0);function B(o,s,v){if(ie.includes(o)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(o==="vertical"?ee:Z)(g.value,s,v)}function A({height:o,width:s}){let v=!1;l.vertical.value!==o&&(l.vertical.value=o,v=!0),l.horizontal.value!==s&&(l.horizontal.value=s,v=!0),v===!0&&_()}function x({position:o}){let s=!1;a.vertical.position.value!==o.top&&(a.vertical.position.value=o.top,s=!0),a.horizontal.position.value!==o.left&&(a.horizontal.position.value=o.left,s=!0),s===!0&&_()}function $({height:o,width:s}){a.horizontal.size.value!==s&&(a.horizontal.size.value=s,_()),a.vertical.size.value!==o&&(a.vertical.size.value=o,_())}function D(o,s){const v=a[s];if(o.isFirst===!0){if(v.thumbHidden.value===!0)return;p=v.position.value,e.value=!0}else if(e.value!==!0)return;o.isFinal===!0&&(e.value=!1);const r=K[s],m=l[s].value,ce=(v.size.value-m)/(m-v.thumbSize.value),de=o.distance[r.dist],ve=p+(o.direction===r.dir?1:-1)*de*ce;Q(ve,s)}function E(o,s){const v=a[s];if(v.thumbHidden.value!==!0){const r=o[K[s].offset];if(r<v.thumbStart.value||r>v.thumbStart.value+v.thumbSize.value){const m=r-v.thumbSize.value/2;Q(m/l[s].value*v.size.value,s)}v.ref.value!==null&&v.ref.value.dispatchEvent(new MouseEvent(o.type,o))}}function R(o){E(o,"vertical")}function w(o){E(o,"horizontal")}function _(){f.value===!0?clearTimeout(y):f.value=!0,y=setTimeout(()=>{f.value=!1},t.delay),t.onScroll!==void 0&&k()}function Q(o,s){g.value[K[s].scroll]=o}function Y(){n.value=!0}function L(){n.value=!1}let q=null;return ze(()=>{q={top:a.vertical.position.value,left:a.horizontal.position.value}}),Ce(()=>{if(q===null)return;const o=g.value;o!==null&&(Z(o,q.left),ee(o,q.top))}),we(k.cancel),Object.assign(h,{getScrollTarget:()=>g.value,getScroll:M,getScrollPosition:()=>({top:a.vertical.position.value,left:a.horizontal.position.value}),getScrollPercentage:()=>({top:a.vertical.percentage.value,left:a.horizontal.percentage.value}),setScrollPosition:B,setScrollPercentage(o,s,v){B(o,s*(a[o].size.value-l[o].value),v)}}),()=>z("div",{class:b.value,onMouseenter:Y,onMouseleave:L},[z("div",{ref:g,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:t.tabindex!==void 0?t.tabindex:void 0},[z("div",{class:"q-scrollarea__content absolute",style:C.value},_e(u.default,[z(ne,{debounce:0,onResize:$})])),z(Fe,{axis:"both",onScroll:x})]),z(ne,{debounce:0,onResize:A}),z("div",{class:a.vertical.barClass.value,style:[t.barStyle,t.verticalBarStyle],"aria-hidden":"true",onMousedown:R}),z("div",{class:a.horizontal.barClass.value,style:[t.barStyle,t.horizontalBarStyle],"aria-hidden":"true",onMousedown:w}),J(z("div",{ref:a.vertical.ref,class:a.vertical.thumbClass.value,style:a.vertical.style.value,"aria-hidden":"true"}),N),J(z("div",{ref:a.horizontal.ref,class:a.horizontal.thumbClass.value,style:a.horizontal.style.value,"aria-hidden":"true"}),H)])}});const Ie=Me({name:"ScanAPP",data(){return{wholewidth:this.screenwidth-20+"px",wholeheight:this.screenheight-165+"px",handlewidth:this.screenwidth-22+"px",handleheight:this.screenheight-225+"px"}},setup(){const t=ke(),u=Be(),d=Re(),f=S(""),{t:e}=Le(),n=i({get:()=>t.state.fabchange.fab1}),l=i({get:()=>t.state.fabchange.fab2}),a=i({get:()=>t.state.fabchange.fab3}),h=i({get:()=>t.state.fabchange.fab4}),c=i({get:()=>t.state.linkchange.oldlink}),y=i({get:()=>t.state.linkchange.newlink}),p=i({get:()=>t.state.screenchange.screenwidth,set:r=>{t.commit("screenchange/screenwidthChanged",r)}}),g=i({get:()=>t.state.screenchange.screenheight,set:r=>{t.commit("screenchange/screenheightChanged",r)}}),b=i({get:()=>t.state.screenchange.screenscroll,set:r=>{t.commit("screenchange/screenScrollChanged",r)}}),C=i({get:()=>t.state.loginauth.authin}),N=i({get:()=>t.state.loginauth.login_name}),H=i({get:()=>t.state.loginauth.operator}),M=i({get:()=>t.state.settings.openid}),k=i({get:()=>t.state.langchange.lang}),B=i({get:()=>t.state.settings.server}),A=i({get:()=>t.state.scanchanged.scandata,set:r=>{t.commit("scanchanged/ScanChanged",r)}}),x=i({get:()=>t.state.scanchanged.datadetail,set:r=>{t.commit("scanchanged/ScanDataChanged",r)}}),$=i({get:()=>t.state.scanchanged.asndata,set:r=>{t.commit("scanchanged/ASNDataChanged",r)}}),D=i({get:()=>t.state.scanchanged.dndata,set:r=>{t.commit("scanchanged/DNDataChanged",r)}}),E=i({get:()=>t.state.scanchanged.bindata,set:r=>{t.commit("scanchanged/BinDataChanged",r)}}),R=i({get:()=>t.state.scanchanged.tablelist,set:r=>{t.commit("scanchanged/TableDataChanged",r)}}),w=i({get:()=>t.state.scanchanged.scanmode,set:r=>{t.commit("scanchanged/ScanModeChanged",r)}}),_=i({get:()=>t.state.scanchanged.bar_scanned,set:r=>{t.commit("scanchanged/BarScannedChanged",r)}}),Q=i({get:()=>t.state.scanchanged.apiurl,set:r=>{t.commit("scanchanged/ApiUrlChanged",r)}}),Y=i({get:()=>t.state.scanchanged.apiurlnext,set:r=>{t.commit("scanchanged/ApiUrlNextChanged",r)}}),L=i({get:()=>t.state.scanchanged.apiurlprevious,set:r=>{t.commit("scanchanged/ApiUrlPreviousChanged",r)}});function q(r){b.value=r.verticalPercentage}function o(r){Ye.get(B.value+"scanner/list/"+r+"/",{headers:{"Content-Type":'application/json, charset="utf-8"',token:M.value,language:k.value,operator:H.value}}).then(m=>{m.data.detail?d.notify({type:"negative",message:e("notice.mobile_scan.notice2")}):(A.value=m.data.code,w.value=m.data.mode,_.value=m.data.request_time,w.value==="ASN"?($.value=m.data.code,u.push({name:"asndetail"})):w.value==="DN"?D.value=m.data.code:w.value==="GOODS"?A.value=m.data.code:w.value==="BINSET"&&(E.value=m.data.code))}).catch(m=>{d.notify({type:"negative",message:e("notice.mobile_scan.notice3")})})}function s(){cordova.plugins.barcodeScanner.scan(function(r){f.value=r.text,navigator.vibrate(100)},function(r){navigator.vibrate(100)},{preferFrontCamera:!1,showFlipCameraButton:!0,showTorchButton:!0,disableSuccessBeep:!1})}function v(){let r=d.screen.width,m=d.screen.height;p.value=r,g.value=m}return Ae(f,(r,m)=>{r!==m&&(C.value==="0"?d.notify({type:"negative",message:e("notice.mobile_userlogin.notice9")}):o(r))}),De(()=>{v()}),{t:e,fab1:n,fab2:l,fab3:a,fab4:h,oldlink:c,newlink:y,screenwidth:p,screenheight:g,screenscroll:b,onScroll:q,authin:C,login_name:N,openid:M,operator:H,lang:k,baseurl:B,apiurl:Q,apiurlnext:Y,apiurlprevious:L,scandata:A,datadetail:x,tablelist:R,asndata:$,dndata:D,bindata:E,scanmode:w,bar_scanned:_,bar_check:f,thumbStyle:{right:"4px",borderRadius:"5px",backgroundColor:"#027be3",width:"5px",opacity:.75},barStyle:{right:"2px",borderRadius:"9px",backgroundColor:"#027be3",width:"9px",opacity:.2},StartScan(){window.device?s():d.notify({type:"negative",message:e("notice.mobile_scan.notice4")})},BackButton(){u.push({name:c.value})}}}});function Ue(t,u,d,f,e,n){const l=Ee("router-view");return J((Oe(),He(xe,{class:"flex flex-top"},{default:O(()=>[$e("div",{style:ae({width:t.wholewidth,height:t.wholeheight,marginTop:"10px",marginLeft:"10px"})},[P(je,{id:"scannedBarcodes",dense:"",outlined:"",square:"",debounce:"500",modelValue:t.scandata,"onUpdate:modelValue":u[0]||(u[0]=a=>t.scandata=a),label:t.$t("search")},{append:O(()=>[P(Qe,{name:"search"})]),after:O(()=>[P(te,{round:"",dense:"",flat:"",icon:"border_horizontal",onClick:t.StartScan},null,8,["onClick"])]),before:O(()=>[P(te,{round:"",dense:"",flat:"",icon:"keyboard_return",onClick:t.BackButton},null,8,["onClick"])]),_:1},8,["modelValue","label"]),P(Xe,{onScroll:t.onScroll,delay:500,"thumb-style":t.thumbStyle,"bar-style":t.barStyle,style:ae({maxWidth:t.handlewidth,width:t.handlewidth,height:t.handleheight,marginTop:"10px"})},{default:O(()=>[P(l)]),_:1},8,["onScroll","thumb-style","bar-style","style"])],4)]),_:1},512)),[[Te,!t.fab1&&!t.fab2&&!t.fab3&&!t.fab4]])}var lt=Pe(Ie,[["render",Ue]]);export{lt as default};
