import{d as V,a as o,bb as i,e as r,al as L,B as h,a4 as k,t as W,a6 as _,h as b,n as Y}from"./index.0dd565a4.js";import{u as q}from"./useT.8636173f.js";const $={success:{icon:"\u2705",color:"$success9"},error:{icon:"\u274C",color:"$danger9"},info:{icon:"\u2139\uFE0F",color:"$info9"}},z=e=>r(L,{w:"$full",spacing:"$1",get children(){return[r(_,{get children(){return $[e.type].icon}}),r(_,{get color(){return $[e.type].color},get children(){return e.msg}})]}}),Q=()=>{const e=q();let g;const[f,d]=V([]),n=(t,a)=>{d(c=>[...c,{type:a,msg:t}]),g.scrollTop=g.scrollHeight},[y,S]=o(()=>i.get("/admin/setting/list")),[w,R]=o(()=>i.get("/admin/user/list")),[U,j]=o(()=>i.get("/admin/meta/list")),[v,M]=o(()=>i.get("/admin/storage/list")),B=()=>y()||w()||U()||v(),O=async()=>{n(e("br.start_backup"),"info");const t={settings:[],users:[],storages:[],metas:[]};for(const a of[{name:"settings",fn:S,page:!1},{name:"users",fn:R,page:!0},{name:"storages",fn:M,page:!0},{name:"metas",fn:j,page:!0}]){const c=await a.fn();b(c,l=>{n(e("br.success_backup_item",{item:e(`manage.sidemenu.${a.name}`)}),"success"),a.page?t[a.name]=l.content:t[a.name]=l},l=>{n(e("br.failed_backup_item",{item:e(`manage.sidemenu.${a.name}`)})+":"+l,"error")})}G("alist_backup_"+new Date().toLocaleString()+".json",t),n(e("br.finish_backup"),"info")},[T,x]=o(t=>i.post("/admin/setting/save",t)),[C,D]=o(t=>i.post("/admin/user/create",t)),[F,N]=o(t=>i.post("/admin/storage/create",t)),[E,H]=o(t=>i.post("/admin/meta/create",t)),I=()=>T()||C()||F()||E(),J=async()=>{n(e("br.start_restore"),"info");const t=document.createElement("input");t.type="file",t.accept="application/json",t.onchange=async a=>{const c=a.target.files;if(!c||c.length===0){Y.warning(e("br.no_file"));return}const l=c[0],p=new FileReader;p.onload=async()=>{const u=JSON.parse(p.result);b(await x(u.settings.filter(s=>s.key!=="version")),()=>{n(e("br.success_restore_item",{item:e("manage.sidemenu.settings")}),"success")},s=>{n(e("br.failed_restore_item",{item:e("manage.sidemenu.settings")})+":"+s,"error")});for(const s of[{name:"users",fn:D,data:u.users,key:"username"},{name:"storages",fn:N,data:u.storages,key:"mount_path"},{name:"metas",fn:H,data:u.metas,key:"path"}])for(const m of s.data)m.id=0,b(await s.fn(m),()=>{n(e("br.success_restore_item",{item:e(`manage.sidemenu.${s.name}`)})+`-[${m[s.key]}]`,"success")},A=>{n(e("br.failed_restore_item",{item:e(`manage.sidemenu.${s.name}`)})+` [ ${m[s.key]} ] :`+A,"error")});n(e("br.finish_restore"),"info")},p.readAsText(l)},t.click()};return r(k,{spacing:"$2",w:"$full",get children(){return[r(L,{spacing:"$2",alignItems:"start",w:"$full",get children(){return[r(h,{get loading(){return B()},onClick:()=>{O()},colorScheme:"accent",get children(){return e("br.backup")}}),r(h,{get loading(){return I()},onClick:()=>{J()},get children(){return e("br.restore")}})]}}),r(k,{p:"$2",ref(t){const a=g;typeof a=="function"?a(t):g=t},w:"$full",alignItems:"start",rounded:"$md",h:"70vh",bg:"$neutral3",overflowY:"auto",spacing:"$1",get children(){return r(W,{get each(){return f()},children:t=>r(z,t)})}})]}})};function G(e,g){const f=new Blob([JSON.stringify(g,null,2)],{type:"application/json"}),d=URL.createObjectURL(f),n=document.createElement("a");n.href=d,n.download=e,n.click(),URL.revokeObjectURL(d)}export{Q as default};
