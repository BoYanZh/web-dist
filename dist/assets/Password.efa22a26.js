import{u as i,e,bf as u,I as c,_ as g,H as p,bK as m,$ as o,bg as d,bc as a,B as s,V as h}from"./index.722a3b14.js";import{u as f}from"./useT.9d81fcea.js";import{a as $}from"./Layout.0df09880.js";import{L as b}from"./index.5cd8cdb2.js";import"./useTitle.1d8cd58b.js";import"./Markdown.8ce9f2c6.js";import"./api.e7386708.js";import"./useUtil.dccc0110.js";import"./index.bb8f3574.js";import"./FolderTree.726b7de8.js";const H=()=>{const t=f(),{refresh:n}=$(),{back:l}=i();return e(h,{w:{"@initial":"$full","@md":"$lg"},p:"$8",spacing:"$3",alignItems:"start",get children(){return[e(u,{get children(){return t("home.input_password")}}),e(c,{type:"password",get value(){return g()},get background(){return p("$neutral3","$neutral2")()},onKeyDown:r=>{r.key==="Enter"&&n(!0)},onInput:r=>m(r.currentTarget.value)}),e(o,{w:"$full",justifyContent:"space-between",get children(){return[e(d,{fontSize:"$sm",color:"$neutral10",direction:{"@initial":"column","@sm":"row"},columnGap:"$1",get children(){return[e(a,{get children(){return t("global.have_account")}}),e(a,{color:"$info9",as:b,get href(){return`/@login?redirect=${encodeURIComponent(location.pathname)}`},get children(){return t("global.go_login")}})]}}),e(o,{spacing:"$2",get children(){return[e(s,{colorScheme:"neutral",onClick:l,get children(){return t("global.back")}}),e(s,{onClick:()=>n(!0),get children(){return t("global.ok")}})]}})]}})]}})};export{H as default};
