import{_ as f,aD as b,r as l,L as h,c as s,V,a3 as c,R as v,S as $,U as y,X as S,f as o,aE as r,aF as w}from"./index.826c72d5.js";import{Q as x}from"./QPage.4a995e35.js";const U=b({data(){return{}},computed:{screenwidth:{get(){return this.$store.state.screenchange.screenwidth}},screenheight:{get(){return this.$store.state.screenchange.screenheight}}},setup(){l(""),l(""),l(""),l(""),l(0);const e=h(),t=s({get:()=>e.state.fabchange.fab1}),i=s({get:()=>e.state.fabchange.fab2}),d=s({get:()=>e.state.fabchange.fab3}),p=s({get:()=>e.state.fabchange.fab4}),g=s({get:()=>e.state.settings.apptitle,set:n=>{e.commit("settings/APPTitle",n)}}),a=s({get:()=>e.state.settings.server,set:n=>{e.commit("settings/Server",n)}}),u=s({get:()=>e.state.settings.openid,set:n=>{e.commit("settings/Openid",n)}}),m=s({get:()=>e.state.settings.slogan,set:n=>{e.commit("settings/Slogan",n)}});return{fab1:t,fab2:i,fab3:d,fab4:p,apptitle:g,server:a,openid:u,slogan:m}}});function q(e,t,i,d,p,g){return V((v(),$(x,{class:"flex flex-top"},{default:y(()=>[S("div",{style:w({width:e.screenwidth+"px",height:e.screenheight-160+"px",marginTop:"10px"})},[o(r,{dense:"",outlined:"",square:"",readonly:"",modelValue:e.apptitle,"onUpdate:modelValue":t[0]||(t[0]=a=>e.apptitle=a),label:e.$t("index.app_title"),style:{margin:"0 15px 0 15px"}},null,8,["modelValue","label"]),o(r,{dense:"",outlined:"",square:"",readonly:"",modelValue:e.slogan,"onUpdate:modelValue":t[1]||(t[1]=a=>e.slogan=a),label:e.$t("index.slogan"),style:{margin:"15px 15px 0 15px"}},null,8,["modelValue","label"]),o(r,{dense:"",outlined:"",square:"",modelValue:e.openid,"onUpdate:modelValue":t[2]||(t[2]=a=>e.openid=a),label:e.$t("index.your_openid"),style:{margin:"15px 15px 0 15px"}},null,8,["modelValue","label"]),o(r,{dense:"",outlined:"",square:"",modelValue:e.server,"onUpdate:modelValue":t[3]||(t[3]=a=>e.server=a),label:e.$t("index.server"),style:{margin:"15px 15px 0 15px"}},null,8,["modelValue","label"])],4)]),_:1},512)),[[c,!e.fab1&&!e.fab2&&!e.fab3&&!e.fab4]])}var Q=f(U,[["render",q]]);export{Q as default};
