import{d as i,a,b5 as o,e as t,bf as $,c1 as M,ah as S,B as c,bd as g,n as v,I as O,$ as R,Y as U}from"./index.722a3b14.js";import{u as x}from"./useT.9d81fcea.js";import{b as D}from"./useTitle.1d8cd58b.js";import{c as E}from"./useUtil.dccc0110.js";import{G as b}from"./index.737962cf.js";import{I as C}from"./SettingItem.8859bc62.js";import"./api.e7386708.js";import"./index.5cd8cdb2.js";import"./item_type.be442da4.js";const V=()=>{const s=x();D("manage.sidemenu.other");const[u,l]=i(""),[m,d]=i(""),[p,h]=i(""),[k,I]=i([]),[L,T]=a(()=>o.get(`/admin/setting/list?groups=${b.ARIA2},${b.SINGLE}`)),[A,G]=a(()=>o.post("/admin/setting/set_aria2",{uri:u(),secret:m()}));(async()=>{const e=await T();g(e,n=>{var _,f,y;l(((_=n.find(r=>r.key==="aria2_uri"))==null?void 0:_.value)||""),d(((f=n.find(r=>r.key==="aria2_secret"))==null?void 0:f.value)||""),h(((y=n.find(r=>r.key==="token"))==null?void 0:y.value)||""),I(n)})})();const[w,B]=a(()=>o.post("/admin/setting/reset_token")),{copy:H}=E();return t(U,{get loading(){return L()},get children(){return[t($,{mb:"$2",get children(){return s("settings_other.aria2")}}),t(M,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[t(C,S(()=>k().find(e=>e.key==="aria2_uri"),{get value(){return u()},onChange:e=>l(e)})),t(C,S(()=>k().find(e=>e.key==="aria2_secret"),{get value(){return m()},onChange:e=>d(e)}))]}}),t(c,{my:"$2",get loading(){return A()},onClick:async()=>{const e=await G();g(e,n=>{v.success(`${s("settings_other.aria2_version")} ${n}`)})},get children(){return s("settings_other.set_aria2")}}),t($,{my:"$2",get children(){return s("settings.token")}}),t(O,{get value(){return p()},readOnly:!0}),t(R,{my:"$2",spacing:"$2",get children(){return[t(c,{onClick:()=>{H(p())},get children(){return s("settings_other.copy_token")}}),t(c,{colorScheme:"danger",get loading(){return w()},onClick:async()=>{const e=await B();g(e,n=>{v.success(s("settings_other.reset_token_success")),h(n)})},get children(){return s("settings_other.reset_token")}})]}})]}})};export{V as default};
