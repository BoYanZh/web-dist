import{u as b,a as c,bb as i,d as u,e as t,k as v,a4 as w,bk as k,ap as x,I,B as S,aj as $,ao as g,n as R,bi as _,aR as C,c4 as D}from"./index.0dd565a4.js";import{u as F}from"./useT.8636173f.js";const q=()=>{const{back:r}=b(),[d,l]=c(()=>i.post("/auth/2fa/generate")),a=F(),[n,p]=u(),f=async()=>{if(g().otp){R.warning(a("users.2fa_already_enabled")),r();return}const e=await l();_(e,p)},[s,h]=u("");f();const[y,m]=c(()=>{var e;return i.post("/auth/2fa/verify",{code:s(),secret:(e=n())==null?void 0:e.secret})}),o=async()=>{const e=await m();C(e,()=>{D({...g(),otp:!0}),r()})};return t($,{get loading(){return d()},get children(){return t(v,{get when(){return n()},get children(){return t(w,{spacing:"$2",alignItems:"start",get children(){return[t(k,{get children(){return a("users.scan_qr")}}),t(x,{boxSize:"$xs",rounded:"$lg",get src(){var e;return(e=n())==null?void 0:e.qr}}),t(I,{maxW:"$xs",get placeholder(){return a("users.input_code")},get value(){return s()},onInput:e=>h(e.currentTarget.value),onKeyDown:e=>{e.key==="Enter"&&o()}}),t(S,{get loading(){return y()},onClick:o,get children(){return a("users.verify")}})]}})}})}})};export{q as default};
