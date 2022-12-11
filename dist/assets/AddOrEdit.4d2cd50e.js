import{e as t,b1 as E,af as P,ax as G,ag as s,I as C,bQ as H,T as J,bR as M,bS as z,bT as Q,bU as U,bV as W,bW as X,bX as Y,t as S,bY as Z,bZ as K,b_ as p,k as _,F as ee,b3 as te,u as ne,a as v,bb as f,d as re,bw as T,bk as ae,cj as ie,P as k,B as de,n as x,z as ue,bi as y,aj as ge}from"./index.0dd565a4.js";import{u as I}from"./useT.8636173f.js";import{T as u}from"./item_type.be442da4.js";import{R as ce}from"./ResponsiveGrid.a37d31df.js";const b=e=>{const d=I();return t(te,{w:"$full",display:"flex",flexDirection:"column",get required(){return e.required},get children(){return[t(E,{get for(){return e.name},display:"flex",alignItems:"center",get children(){var n;return d(((n=e.full_name_path)!=null?n:e.driver==="common")?`storages.common.${e.name}`:`drivers.${e.driver}.${e.name}`)}}),t(P,{get fallback(){return t(G,{get children(){return d("settings.unknown_type")}})},get children(){return[t(s,{get when(){return e.type===u.String},get children(){return t(C,{get id(){return e.name},get readOnly(){return e.readonly},get value(){return e.value},get onInput(){return e.type===u.String?n=>{var r;return(r=e.onChange)==null?void 0:r.call(e,n.currentTarget.value)}:void 0}})}}),t(s,{get when(){return e.type===u.Number},get children(){return t(C,{type:"number",get id(){return e.name},get readOnly(){return e.readonly},get value(){return e.value},get onInput(){return e.type===u.Number?n=>{var r;return(r=e.onChange)==null?void 0:r.call(e,parseInt(n.currentTarget.value))}:void 0}})}}),t(s,{get when(){return e.type===u.Bool},get children(){return t(H,{get id(){return e.name},get readOnly(){return e.readonly},get defaultChecked(){return e.value},get onChange(){return e.type===u.Bool?n=>{var r;return(r=e.onChange)==null?void 0:r.call(e,n.currentTarget.checked)}:void 0}})}}),t(s,{get when(){return e.type===u.Text},get children(){return t(J,{get id(){return e.name},get readOnly(){return e.readonly},get value(){return e.value},get onChange(){return e.type===u.Text?n=>{var r;return(r=e.onChange)==null?void 0:r.call(e,n.currentTarget.value)}:void 0}})}}),t(s,{get when(){return e.type===u.Select},get children(){return t(M,{get id(){return e.name},get readOnly(){return e.readonly},get defaultValue(){return e.value},get onChange(){return e.type===u.Select?n=>{var r;return(r=e.onChange)==null?void 0:r.call(e,n)}:void 0},get children(){return[t(z,{get children(){return[t(Q,{get children(){return d("global.choose")}}),t(U,{}),t(W,{})]}}),t(X,{get children(){return t(Y,{get children(){return t(S,{get each(){var n;return(n=e.options)==null?void 0:n.split(",")},children:n=>t(Z,{value:n,get children(){return[t(K,{get children(){var r;return d(((r=e.options_prefix)!=null?r:e.driver==="common"?`storages.common.${e.name}s`:`drivers.${e.driver}.${e.name}s`)+`.${n}`)}}),t(p,{})]}})})}})}})]}})}})]}}),t(_,{get when(){return e.help},get children(){return t(ee,{get children(){return d(e.driver==="common"?`storages.common.${e.name}-tips`:`drivers.${e.driver}.${e.name}-tips`)}})}})]}})};function O(e,d){switch(e){case u.Bool:return d?d==="true":!1;case u.Number:return d?parseInt(d):0;default:return d||""}}const ve=()=>{const e=I(),{params:d,back:n,to:r}=ne(),{id:c}=d,[L,R]=v(()=>f.get("/admin/driver/list"),!0),[l,w]=re({}),B=async()=>{const a=await R();y(a,w)},[F,j]=v(()=>f.get(`/admin/storage/get?id=${c}`),!0),[N,D]=v(()=>f.get(`/admin/driver/info?driver=${g.driver}`),!0);c?(async()=>{const a=await j();y(a,async i=>{o(i),m(JSON.parse(i.addition));const h=await D();y(h,A=>w({[g.driver]:A}))})})():B();const[g,o]=T({}),[$,m]=T({}),[V,q]=v(()=>(o("addition",JSON.stringify($)),f.post(`/admin/storage/${c?"update":"create"}`,g)));return t(ge,{get loading(){return c?F()||N():L()},get children(){return[t(ae,{mb:"$2",get children(){return e(`global.${c?"edit":"add"}`)}}),t(ce,{get children(){return[t(b,{name:"driver",default:"",readonly:c!==void 0,required:!0,get type(){return u.Select},get options(){return c?g.driver:Object.keys(l()).join(",")},get value(){return g.driver},full_name_path:"storages.common.driver",options_prefix:"drivers.drivers",driver:"drivers",onChange:a=>{for(const i of l()[a].common)o(i.name,O(i.type,i.default));m(ie(i=>{for(const h in i)delete i[h]}));for(const i of l()[a].additional)m(i.name,O(i.type,i.default));o("driver",a)}}),t(_,{get when(){return l()[g.driver]},get children(){return[t(S,{get each(){return l()[g.driver].common},children:a=>t(b,k(a,{driver:"common",get value(){return g[a.name]},onChange:i=>{o(a.name,i)}}))}),t(S,{get each(){return l()[g.driver].additional},children:a=>t(b,k(a,{get driver(){return g.driver},get value(){return $[a.name]},onChange:i=>{m(a.name,i)}}))})]}})]}}),t(de,{mt:"$2",get loading(){return V()},onClick:async()=>{l()[g.driver].config.need_ms&&(x.info(e("manage.add_storage-tips")),window.open(ue("/@manage/messenger"),"_blank"));const a=await q();y(a,()=>{x.success(e("global.save_success")),n()},(i,h)=>{a.data.id&&r(`/@manage/storages/edit/${a.data.id}`)})},get children(){return e(`global.${c?"save":"add"}`)}})]}})};export{ve as default};
