import{u as p,bs as x,a as d,b5 as g,e as t,V as C,bf as k,aZ as o,aX as m,t as v,B as _,bd as h,n as F,Y as I,bg as S,az as c,I as T,bN as L,T as E,bq as M,k as q,F as z}from"./index.722a3b14.js";import{F as B}from"./FolderTree.726b7de8.js";import{u as b}from"./useT.9d81fcea.js";import"./index.5cd8cdb2.js";import"./api.e7386708.js";const D=e=>{const r=b();return t(o,{w:"$full",display:"flex",flexDirection:"column",get children(){return[t(m,{get for(){return e.name},display:"flex",alignItems:"center",get children(){return r(`metas.${e.name}`)}}),t(S,{w:"$full",get direction(){return e.type==="bool"?"row":{"@initial":"column","@md":"row"}},gap:"$2",get children(){return[c(()=>c(()=>e.type==="string",!0)()?t(T,{get id(){return e.name},get value(){return e.value},onInput:a=>e.onChange(a.currentTarget.value)}):c(()=>e.type==="bool",!0)()?t(L,{get id(){return e.name},get checked(){return e.value},onChange:a=>e.onChange(a.currentTarget.checked)}):t(E,{get id(){return e.name},get value(){return e.value},onChange:a=>e.onChange(a.currentTarget.value)})),t(o,{w:"fit-content",display:"flex",get children(){return t(M,{css:{whiteSpace:"nowrap"},get id(){return`${e.name}_sub`},onChange:a=>e.onSub(a.currentTarget.checked),color:"$neutral10",fontSize:"$sm",get checked(){return e.sub},get children(){return r("metas.apply_sub")}})}})]}}),t(q,{get when(){return e.help},get children(){return t(z,{get children(){return r(`metas.${e.name}_help`)}})}})]}})},X=()=>{const e=b(),{params:r,back:a}=p(),{id:u}=r,[l,s]=x({id:0,path:"",password:"",p_sub:!1,write:!1,w_sub:!1,hide:"",h_sub:!1,readme:"",r_sub:!1}),[f,w]=d(()=>g.get(`/admin/meta/get?id=${u}`));u&&(async()=>{const n=await w();h(n,s)})();const[y,$]=d(()=>g.post(`/admin/meta/${u?"update":"create"}`,l));return t(I,{get loading(){return f()},get children(){return t(C,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[t(k,{get children(){return e(`global.${u?"edit":"add"}`)}}),t(o,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[t(m,{for:"path",display:"flex",alignItems:"center",get children(){return e("metas.path")}}),t(B,{id:"path",get value(){return l.path},onChange:n=>s("path",n)})]}}),t(v,{each:[{name:"password",type:"string"},{name:"write",type:"bool"},{name:"hide",type:"text",help:!0},{name:"readme",type:"text",help:!0}],children:n=>t(D,{get name(){return n.name},get type(){return n.type},get value(){return l[n.name]},onChange:i=>s(n.name,i),get sub(){return l[`${n.name[0]}_sub`]},onSub:i=>s(`${n.name[0]}_sub`,i),get help(){return n.help}})}),t(_,{get loading(){return y()},onClick:async()=>{const n=await $();h(n,()=>{F.success(e("global.save_success")),a()})},get children(){return e(`global.${u?"save":"add"}`)}})]}})}})};export{X as default};
