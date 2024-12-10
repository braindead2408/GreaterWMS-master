import{Q as v}from"./QItemLabel.b44e0eb3.js";import{Q as ie,a as X,b as L}from"./QList.13560f45.js";import{_ as le,aD as ce,L as de,aS as ue,r as k,c as o,w,o as re,R as q,$ as U,f as n,U as s,aT as ge,F,Y as g,Z as u,a1 as Y,a0 as me,aU as pe,X as Z,V as z,S as fe,m as I,aV as ve,aE as he,a3 as be}from"./index.9442fcb0.js";import{Q as _e,a as ye,b as ke}from"./QBar.a73bb241.js";import{C as Ce}from"./ClosePopup.12f3a814.js";import{u as De}from"./use-quasar.3334dda7.js";import{a as N}from"./index.9b9dbd7c.js";import{u as Se}from"./vue-i18n.runtime.esm-bundler.68d42e6d.js";import"./selection.e92febc6.js";import"./axios.d3fea899.js";const $e=ce({name:"PickingList",data(){return{}},setup(){const e=de();ue();const i=De(),h=k(0),m=k({}),C=k(!1),D=k([]),l=k(""),{t:c}=Se(),E=o({get:()=>e.state.fabchange.fab1}),H=o({get:()=>e.state.fabchange.fab2}),K=o({get:()=>e.state.fabchange.fab3}),W=o({get:()=>e.state.fabchange.fab4}),O=o({get:()=>e.state.screenchange.screenscroll}),T=o({get:()=>e.state.loginauth.authin}),j=o({get:()=>e.state.loginauth.login_name}),b=o({get:()=>e.state.loginauth.operator}),_=o({get:()=>e.state.settings.openid}),y=o({get:()=>e.state.langchange.lang}),f=o({get:()=>e.state.settings.server}),B=o({get:()=>e.state.scanchanged.scandata,set:a=>{e.commit("scanchanged/ScanChanged",a)}}),x=o({get:()=>e.state.scanchanged.datadetail,set:a=>{e.commit("scanchanged/ScanDataChanged",a)}}),ee=o({get:()=>e.state.scanchanged.asndata,set:a=>{e.commit("scanchanged/ASNDataChanged",a)}}),ae=o({get:()=>e.state.scanchanged.dndata,set:a=>{e.commit("scanchanged/DNDataChanged",a)}}),te=o({get:()=>e.state.scanchanged.bindata,set:a=>{e.commit("scanchanged/BinDataChanged",a)}}),S=o({get:()=>e.state.scanchanged.tablelist,set:a=>{e.commit("scanchanged/TableDataChanged",a)}}),$=o({get:()=>e.state.scanchanged.scanmode,set:a=>{e.commit("scanchanged/ScanModeChanged",a)}}),A=o({get:()=>e.state.scanchanged.bar_scanned}),r=o({get:()=>e.state.scanchanged.apiurl,set:a=>{e.commit("scanchanged/ApiUrlChanged",a)}}),Q=o({get:()=>e.state.scanchanged.apiurlnext,set:a=>{e.commit("scanchanged/ApiUrlNextChanged",a)}}),P=o({get:()=>e.state.scanchanged.apiurlprevious,set:a=>{e.commit("scanchanged/ApiUrlPreviousChanged",a)}});function M(a){if(a!==null){var t=f.value.split(":"),d=a.split(":");return t[0]!==d[0]?t[0]+":"+d[1]:d}else return null}function V(a){S.value=[],r.value=f.value+"dn/pickinglistfilter/?pick_qty__gt=0&picking_status=0",R(a)}function R(a){N.get(r.value+a,{headers:{"Content-Type":'application/json, charset="utf-8"',token:_.value,language:y.value,operator:b.value}}).then(t=>{if(t.data.detail)i.notify({type:"negative",message:c("notice.mobile_scan.notice1")});else{var d=[];S.value.forEach(p=>{d.push(p)}),t.data.results.forEach(p=>{d.push(p)}),S.value=d,P.value=M(t.data.previous),Q.value=M(t.data.next)}}).catch(t=>{i.notify({type:"negative",message:c("notice.mobile_scan.notice3")})})}function ne(a){m.value=JSON.parse(JSON.stringify(a)),C.value=!0}function J(){C.value=!1}function oe(a){r.value=f.value+"dn/list/?dn_code="+m.value.dn_code,N.get(r.value,{headers:{"Content-Type":'application/json, charset="utf-8"',token:_.value,language:y.value,operator:b.value}}).then(t=>{t.data.detail?i.notify({type:"negative",message:c("notice.mobile_scan.notice1")}):se(t.data.results[0])}).catch(t=>{i.notify({type:"negative",message:c("notice.mobile_scan.notice3")})})}function se(a){if(m.value.picked_qty===""||m.value.picked_qty===0)i.notify({type:"negative",message:c("notice.mobile_dn.notice12")});else{r.value=f.value+"dn/picked/"+a.id+"/";const t={creater:j.value,customer:a.customer,dn_code:a.dn_code,goodsData:[m.value]};N.post(r.value,t,{headers:{"Content-Type":"application/json",token:_.value,language:y.value,operator:b.value}}).then(d=>{d.data.detail||i.notify({message:c("notice.mobile_dn.notice13")}),J(),V("")}).catch(d=>{i.notify({message:c("notice.network_error")})})}}function G(a){r.value=f.value+"binset/?bin_name__icontains=",N.get(r.value+a,{headers:{"Content-Type":'application/json, charset="utf-8"',token:_.value,language:y.value,operator:b.value}}).then(t=>{if(!t.data.detail){var d=[];D.value=[],t.data.results.forEach(p=>{d.push(p.bin_name)}),D.value=d}}).catch(t=>{i.notify({type:"negative",message:c("notice.mobile_scan.notice3")})})}return w(l,(a,t)=>{a.length>=2&&G(a)}),w(A,(a,t)=>{$.value==="GOODS"?V("&goods_code="+B.value):$.value==="DN"&&V("&dn_code="+B.value)}),w(O,(a,t)=>{a===1?Q.value!==null&&(r.value=Q.value,h.value=1):h.value=0}),w(h,(a,t)=>{a===1&&(T.value==="0"?i.notify({type:"negative",message:c("notice.mobile_userlogin.notice9")}):R(""))}),re(()=>{T.value==="0"?i.notify({type:"negative",message:c("notice.mobile_userlogin.notice9")}):($.value="DN",V(""))}),{t:c,fab1:E,fab2:H,fab3:K,fab4:W,screenscroll:O,authin:T,login_name:j,openid:_,operator:b,lang:y,requestauth:h,baseurl:f,apiurl:r,apiurlnext:Q,apiurlprevious:P,scandata:B,datadetail:x,tablelist:S,asndata:ee,dndata:ae,bindata:te,scanmode:$,bar_scanned:A,submitdata:m,dialogForm:C,dataSubmit:ne,cancelSubmitData:J,submitData:oe,options:D,optionsChange:l,error1:c("notice.mobile_asn.notice11"),setOptions:G,filterFn(a,t,d){if(a.length<2){d();return}t(()=>{const p=a.toLowerCase();l.value=p})}}}}),Qe={style:{float:"right",padding:"15px 15px 15px 0"}};function Ve(e,i,h,m,C,D){return q(),U(F,null,[n(ie,{bordered:"",padding:""},{default:s(()=>[n(X,null,{default:s(()=>[n(L,null,{default:s(()=>[n(v,{overline:""},{default:s(()=>[g(u(e.$t("outbound.pickinglist")),1)]),_:1}),n(v,{caption:""},{default:s(()=>[g(u(e.$t("notice.mobile_dn.notice11")),1)]),_:1})]),_:1})]),_:1}),n(Y,{spaced:""}),(q(!0),U(F,null,me(e.tablelist,(l,c)=>(q(),U(F,{key:c},[n(X,null,{default:s(()=>[n(L,{onClick:E=>e.dataSubmit(l)},{default:s(()=>[n(v,null,{default:s(()=>[g(u(l.dn_code),1)]),_:2},1024),n(v,{caption:"",lines:"2"},{default:s(()=>[g(u(e.$t("goods.view_goodslist.goods_code"))+": "+u(l.goods_code),1)]),_:2},1024)]),_:2},1032,["onClick"]),n(L,{side:"",top:""},{default:s(()=>[n(v,{caption:""},{default:s(()=>[g(u(e.$t("notice.mobile_dn.notice14"))+u(l.bin_name),1)]),_:2},1024),n(v,{caption:""},{default:s(()=>[g(u(e.$t("notice.mobile_dn.notice15"))+u(l.pick_qty),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),z(n(Y,{spaced:"",inset:"item"},null,512),[[be,c+1!==e.tablelist.length]])],64))),128))]),_:1}),n(ge,{modelValue:e.dialogForm,"onUpdate:modelValue":i[2]||(i[2]=l=>e.dialogForm=l)},{default:s(()=>[n(pe,{class:"shadow-24"},{default:s(()=>[n(_e,{class:"bg-light-blue-10 text-white rounded-borders",style:{height:"50px"}},{default:s(()=>[Z("div",null,u(e.submitdata.goods_code),1),n(ye),z((q(),fe(I,{dense:"",flat:"",icon:"close"},{default:s(()=>[n(ke,null,{default:s(()=>[g(u(e.$t("index.close")),1)]),_:1})]),_:1})),[[Ce]])]),_:1}),n(ve,{class:"scroll"},{default:s(()=>[n(he,{dense:"",outlined:"",square:"",debounce:"500",modelValue:e.submitdata.picked_qty,"onUpdate:modelValue":i[0]||(i[0]=l=>e.submitdata.picked_qty=l),modelModifiers:{number:!0},type:"number",label:e.$t("stock.view_stocklist.goods_qty"),style:{"margin-bottom":"5px"},onClick:i[1]||(i[1]=l=>e.submitdata.picked_qty=""),rules:[l=>l&&l>0||e.error1]},null,8,["modelValue","label","rules"])]),_:1}),Z("div",Qe,[n(I,{color:"white","text-color":"black",style:{"margin-right":"25px"},onClick:e.cancelSubmitData},{default:s(()=>[g(u(e.$t("cancel")),1)]),_:1},8,["onClick"]),n(I,{color:"primary",onClick:e.submitData},{default:s(()=>[g(u(e.$t("submit")),1)]),_:1},8,["onClick"])])]),_:1})]),_:1},8,["modelValue"])],64)}var Oe=le($e,[["render",Ve]]);export{Oe as default};
