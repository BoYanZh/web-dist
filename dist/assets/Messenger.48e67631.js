import{e,bf as i,a4 as w,n as y,d as R,a as r,b5 as o,bs as b,ao as k,V as c,t as x,ax as C,ah as L,I as T,$ as B,B as g,h as F,aL as H,ch as N}from"./index.722a3b14.js";import{u as V}from"./useT.9d81fcea.js";const W=t=>e(i,{get children(){return t.content}}),z=t=>e(w,{get src(){return t.content}}),D={string:W,image:z},_=()=>{const t=V();y.info(t("manage.messenger-tips"));const[a,l]=R(""),[u,d]=r(()=>o.post("/admin/message/get")),[p,h]=r(()=>o.post("/admin/message/send",{message:a()})),[m,S]=b([]),s=async()=>{const n=await d();F(n,I=>{S(N($=>$.push(I)))})},f=async()=>{const n=await h();H(n)},v=setInterval(s,1e3);return k(()=>clearInterval(v)),e(c,{spacing:"$2",h:"$full",alignItems:"start",get children(){return[e(c,{w:"$full",spacing:"$2",alignItems:"start",p:"$2",rounded:"$lg",border:"1px solid var(--hope-colors-neutral6)",get children(){return[e(i,{size:"xl",get children(){return t("manage.received_msgs")}}),e(x,{each:m,children:n=>e(C,L({get component(){return D[n.type]}},n))})]}}),e(T,{w:"$full",get value(){return a()},onInput:n=>l(n.currentTarget.value)}),e(B,{spacing:"$2",get children(){return[e(g,{colorScheme:"accent",get loading(){return u()},onClick:s,get children(){return t("manage.receive")}}),e(g,{get loading(){return p()},onClick:f,get children(){return t("manage.send")}})]}})]}})};export{_ as Messenger,D as Shower,_ as default};
