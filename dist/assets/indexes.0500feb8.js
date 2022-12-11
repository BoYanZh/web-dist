import{bD as p,aa as k,d as N,a as o,bb as u,e,bk as c,k as g,al as m,a0 as L,as as M,a4 as h,a6 as i,W as s,by as d,bH as z,B as l,bi as I,aR as f}from"./index.0dd565a4.js";import{m as R}from"./api.3963b0e7.js";import{u as T}from"./useT.8636173f.js";import{G as j}from"./index.21580391.js";import q from"./Common.064cfe9b.js";import"./useTitle.5abfb25e.js";import"./index.65eeb018.js";import"./SettingItem.b23670c5.js";import"./item_type.be442da4.js";import"./ResponsiveGrid.a37d31df.js";const D=k('<svg width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" stroke-opacity=".3" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.3s" values="60;0"></animate></path><path stroke-dasharray="15" stroke-dashoffset="15" d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"></animate><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></path></g></svg>'),H=k('<svg width="1em" height="1em" viewBox="0 0 24 24"><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path fill="currentColor" fill-opacity="0" stroke-dasharray="60" stroke-dashoffset="60" d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"></animate><animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.15s" values="0;0.3"></animate></path><path fill="none" stroke-dasharray="14" stroke-dashoffset="14" d="M8 12L11 15L16 10"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="14;0"></animate></path></g></svg>');function P(n){return(()=>{const r=D.cloneNode(!0);return p(r,n,!0,!0),r})()}function G(n){return(()=>{const r=H.cloneNode(!0);return p(r,n,!0,!0),r})()}const Q=()=>{const n=T(),[r,b]=N(),[C,w]=o(()=>u.get("/admin/index/progress")),a=async()=>{const t=await w();I(t,B=>{b(B)})};a();const[$,x]=o(R),_=async()=>{const t=await x();f(t),a()},[y,v]=o(()=>u.post("/admin/index/stop")),S=async()=>{const t=await v();f(t),a()};return e(h,{spacing:"$2",w:"$full",alignItems:"start",get children(){return[e(c,{get children(){return n("manage.sidemenu.settings")}}),e(q,{get group(){return j.INDEX}}),e(c,{get children(){return n("indexes.current")}}),e(g,{get when(){return r()},get children(){return e(m,{spacing:"$2",w:"fit-content",shadow:"$md",rounded:"$lg",get bg(){return L("","$neutral3")()},get children(){return[e(M,{boxSize:"$28",color:"$accent9",p:"$2",get as(){var t;return(t=r())!=null&&t.is_done?G:P}}),e(h,{spacing:"$2",flex:"1",alignItems:"start",mr:"$2",get children(){return[e(i,{get children(){return[s(()=>n("indexes.obj_count")),":",e(d,{colorScheme:"info",ml:"$2",get children(){var t;return(t=r())==null?void 0:t.obj_count}})]}}),e(i,{get children(){return[s(()=>n("indexes.last_done_time")),":",e(d,{colorScheme:"accent",ml:"$2",get children(){return s(()=>!!r().last_done_time,!0)()?z(r().last_done_time):n("indexes.unknown")}})]}}),e(g,{get when(){var t;return(t=r())==null?void 0:t.error},get children(){return e(i,{css:{wordBreak:"break-all"},get children(){return[s(()=>n("indexes.error")),":",e(d,{colorScheme:"danger",ml:"$2",get children(){return r().error}})]}})}})]}})]}})}}),e(m,{spacing:"$2",get children(){return[e(l,{colorScheme:"accent",onClick:[a,void 0],get loading(){return C()},get children(){return n("global.refresh")}}),e(l,{colorScheme:"warning",onClick:[S,void 0],get loading(){return y()},get children(){return n("indexes.stop")}}),e(l,{onClick:[_,void 0],get loading(){return $()},get children(){var t;return n(`indexes.${(t=r())!=null&&t.is_done?"rebuild":"build"}`)}})]}})]}})};export{Q as default};
