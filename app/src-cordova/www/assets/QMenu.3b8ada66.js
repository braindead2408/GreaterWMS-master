import{j as ae,y as ne,a4 as se,aa as ue,z as le,r as b,c as u,a6 as ie,ab as re,ac as ce,ad as fe,A as de,ae as ve,w as A,af as ge,ag as he,ah as me,ai as M,aj as ke,ak as Pe,h as D,k as Te,al as ye,n as Ce,g as Se,am as Oe,an as qe,ao as Be,a9 as Ee}from"./index.37336b5e.js";import{u as Fe,v as R,a as xe,b as we,c as be,p as H,r as j,s as Ae,d as Me}from"./ClosePopup.5d8e6128.js";var He=ae({name:"QMenu",inheritAttrs:!1,props:{...Fe,...ne,...se,...ue,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:R},self:{type:String,validator:R},offset:{type:Array,validator:xe},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...le,"click","escape-key"],setup(t,{slots:K,emit:c,attrs:d}){let l=null,f,i,v;const T=Se(),{proxy:g}=T,{$q:o}=g,a=b(null),n=b(!1),Q=u(()=>t.persistent!==!0&&t.noRouteDismiss!==!0),W=ie(t,o),{registerTick:_,removeTick:z}=re(),{registerTimeout:y}=ce(),{transition:I,transitionStyle:L}=fe(t,n),{localScrollTarget:C,changeScrollEvent:U,unconfigureScrollTarget:$}=we(t,x),{anchorEl:s,canShow:G}=be({showing:n}),{hide:S}=de({showing:n,canShow:G,handleShow:Y,handleHide:Z,hideOnRouteChange:Q,processOnMount:!0}),{showPortal:O,hidePortal:q,renderPortal:J}=ve(T,a,ee),h={anchorEl:s,innerRef:a,onClickOutside(e){if(t.persistent!==!0&&n.value===!0)return S(e),(e.type==="touchstart"||e.target.classList.contains("q-dialog__backdrop"))&&Ee(e),!0}},B=u(()=>H(t.anchor||(t.cover===!0?"center middle":"bottom start"),o.lang.rtl)),N=u(()=>t.cover===!0?B.value:H(t.self||"top start",o.lang.rtl)),V=u(()=>(t.square===!0?" q-menu--square":"")+(W.value===!0?" q-menu--dark q-dark":"")),X=u(()=>t.autoClose===!0?{onClick:p}:{}),E=u(()=>n.value===!0&&t.persistent!==!0);A(E,e=>{e===!0?(Oe(k),Me(h)):(M(k),j(h))});function m(){qe(()=>{let e=a.value;e&&e.contains(document.activeElement)!==!0&&(e=e.querySelector("[autofocus], [data-autofocus]")||e,e.focus({preventScroll:!0}))})}function Y(e){if(l=t.noRefocus===!1?document.activeElement:null,ge(w),O(),x(),f=void 0,e!==void 0&&(t.touchPosition||t.contextMenu)){const P=he(e);if(P.left!==void 0){const{top:te,left:oe}=s.value.getBoundingClientRect();f={left:P.left-oe,top:P.top-te}}}i===void 0&&(i=A(()=>o.screen.width+"|"+o.screen.height+"|"+t.self+"|"+t.anchor+"|"+o.lang.rtl,r)),t.noFocus!==!0&&document.activeElement.blur(),_(()=>{r(),t.noFocus!==!0&&m()}),y(()=>{o.platform.is.ios===!0&&(v=t.autoClose,a.value.click()),r(),O(!0),c("show",e)},t.transitionDuration)}function Z(e){z(),q(),F(!0),l!==null&&(e===void 0||e.qClickOutside!==!0)&&(l.focus(),l=null),y(()=>{q(!0),c("hide",e)},t.transitionDuration)}function F(e){f=void 0,i!==void 0&&(i(),i=void 0),(e===!0||n.value===!0)&&(me(w),$(),j(h),M(k)),e!==!0&&(l=null)}function x(){(s.value!==null||t.scrollTarget!==void 0)&&(C.value=ke(s.value,t.scrollTarget),U(C.value,r))}function p(e){v!==!0?(Pe(g,e),c("click",e)):v=!1}function w(e){E.value===!0&&t.noFocus!==!0&&Be(a.value,e.target)!==!0&&m()}function k(e){c("escape-key"),S(e)}function r(){const e=a.value;e===null||s.value===null||Ae({el:e,offset:t.offset,anchorEl:s.value,anchorOrigin:B.value,selfOrigin:N.value,absoluteOffset:f,fit:t.fit,cover:t.cover,maxHeight:t.maxHeight,maxWidth:t.maxWidth})}function ee(){return D(ye,{name:I.value,appear:!0},()=>n.value===!0?D("div",{role:"menu",...d,ref:a,tabindex:-1,class:["q-menu q-position-engine scroll"+V.value,d.class],style:[d.style,L.value],...X.value},Te(K.default)):null)}return Ce(F),Object.assign(g,{focus:m,updatePosition:r}),J}});export{He as Q};
