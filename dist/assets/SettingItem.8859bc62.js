import{e as t,k as c,aX as h,az as i,a7 as d,Q as m,ac as y,R as g,I as b,bN as f,T as S,bO as T,bP as k,bQ as C,bR as w,bS as O,bT as v,bU as x,t as o,bV as D,bW as I,bX as $,F as E,aZ as F}from"./index.722a3b14.js";import{u as L}from"./useT.9d81fcea.js";import{F as u}from"./index.737962cf.js";import{T as a}from"./item_type.be442da4.js";import{Q as N}from"./index.5cd8cdb2.js";const Q=e=>{const l=L();return t(F,{get w(){var n;return(n=e.w)!=null?n:"100%"},display:"flex",flexDirection:"column",get children(){return[t(c,{get when(){return!e.hideLabel},get children(){return t(h,{get for(){return e.key},display:"flex",alignItems:"center",get children(){return[i(()=>l(`settings.${e.key}`)),t(c,{get when(){return e.flag===u.DEPRECATED},get children(){return t(d,{ml:"$2",as:N,boxSize:"$5",color:"$danger9",verticalAlign:"middle",cursor:"pointer",onClick:()=>{var n;(n=e.onDelete)==null||n.call(e)}})}})]}})}}),t(m,{get fallback(){return t(y,{get children(){return l("settings_other.unknown_type")}})},get children(){return[t(g,{get when(){return[a.String,a.Number].includes(e.type)},get children(){return t(b,{get type(){return e.type===a.Number?"number":""},get id(){return e.key},get value(){return e.value},onInput:n=>{var r;return(r=e.onChange)==null?void 0:r.call(e,n.currentTarget.value)},get readOnly(){return e.flag===u.READONLY}})}}),t(g,{get when(){return e.type===a.Bool},get children(){return t(f,{get id(){return e.key},get defaultChecked(){return e.value==="true"},onChange:n=>{var r;return(r=e.onChange)==null?void 0:r.call(e,n.currentTarget.checked?"true":"false")},get readOnly(){return e.flag===u.READONLY}})}}),t(g,{get when(){return e.type===a.Text},get children(){return t(S,{get id(){return e.key},get value(){return e.value},onChange:n=>{var r;return(r=e.onChange)==null?void 0:r.call(e,n.currentTarget.value)},get readOnly(){return e.flag===u.READONLY}})}}),t(g,{get when(){return e.type===a.Select},get children(){return t(T,{get id(){return e.key},get defaultValue(){return e.value},onChange:n=>{var r;return(r=e.onChange)==null?void 0:r.call(e,n)},get readOnly(){return e.flag===u.READONLY},get children(){return[t(k,{get children(){return[t(C,{get children(){return l("global.choose")}}),t(w,{}),t(O,{})]}}),t(v,{get children(){return t(x,{get children(){return t(o,{get each(){var n;return(n=e.options)==null?void 0:n.split(",")},children:n=>t(D,{value:n,get children(){return[t(I,{get children(){return l(`settings.${e.key}s.${n}`)}}),t($,{})]}})})}})}})]}})}})]}}),t(E,{get children(){return i(()=>!!e.help,!0)()?l(`settings.${e.key}-tips`):""}})]}})};export{Q as I};
