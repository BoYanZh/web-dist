import{u as m,a as u,bb as h,e,a0 as S,bh as w,al as s,a6 as d,by as C,W as x,a9 as B,B as o,aR as p,bi as b,n as v,a4 as $,d as y,a1 as _,t as D}from"./index.0dd565a4.js";import{u as f}from"./useT.8636173f.js";import{b as L}from"./useTitle.5abfb25e.js";import{D as M}from"./DeletePopover.43a06d04.js";const R=t=>{const r=f(),{to:l}=m(),[i,g]=u(()=>h.post(`/admin/storage/delete?id=${t.storage.id}`)),[c,n]=u(()=>h.post(`/admin/storage/${t.storage.disabled?"enable":"disable"}?id=${t.storage.id}`));return e($,{w:"$full",spacing:"$2",rounded:"$lg",border:"1px solid $neutral7",get background(){return S("$neutral2","$neutral3")()},p:"$3",get _hover(){return{border:`1px solid ${w()}`}},get children(){return[e(s,{spacing:"$2",get children(){return[e(d,{fontWeight:"$medium",css:{wordBreak:"break-all"},get children(){return t.storage.mount_path}}),e(C,{colorScheme:"info",get children(){return r(`drivers.drivers.${t.storage.driver}`)}})]}}),e(s,{get children(){return[e(d,{get children(){return[x(()=>r("storages.common.status")),":\xA0"]}}),e(B,{css:{wordBreak:"break-all"},overflowX:"auto",get innerHTML(){return t.storage.status}})]}}),e(d,{css:{wordBreak:"break-all"},get children(){return t.storage.remark}}),e(s,{spacing:"$2",get children(){return[e(o,{onClick:()=>{l(`/@manage/storages/edit/${t.storage.id}`)},get children(){return r("global.edit")}}),e(o,{get loading(){return c()},colorScheme:"warning",onClick:async()=>{const a=await n();p(a,()=>{t.refresh()})},get children(){return r(`global.${t.storage.disabled?"enable":"disable"}`)}}),e(M,{get name(){return t.storage.mount_path},get loading(){return i()},onClick:async()=>{const a=await g();b(a,()=>{v.success(r("global.delete_success")),t.refresh()})}})]}})]}})},O=()=>{const t=f();L("manage.sidemenu.storages");const{to:r}=m(),[l,i]=u(()=>h.get("/admin/storage/list")),[g,c]=y([]),n=async()=>{const a=await i();b(a,k=>c(k.content))};return n(),e($,{spacing:"$3",alignItems:"start",w:"$full",get children(){return[e(s,{spacing:"$2",get children(){return[e(o,{colorScheme:"accent",get loading(){return l()},onClick:n,get children(){return t("global.refresh")}}),e(o,{onClick:()=>{r("/@manage/storages/add")},get children(){return t("global.add")}})]}}),e(_,{w:"$full",gap:"$2_5",templateColumns:{"@initial":"1fr","@lg":"repeat(auto-fill, minmax(324px, 1fr))"},get children(){return e(D,{get each(){return g()},children:a=>e(R,{storage:a,refresh:n})})}})]}})};export{O as default};
