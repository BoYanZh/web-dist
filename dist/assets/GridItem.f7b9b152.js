import{j as t,a8 as h,ai as m,e as b,w as d,aF as f,X as j,C as w,aE as x,aH as $,cr as o,al as k,ah as C,r as l,bH as v,ag as y,aP as I}from"./index.be808c1f.js";import{b as M}from"./Folder.7c926a95.js";import{a as P,M as S}from"./Layout.44438c8c.js";import{c as E}from"./useUtil.1180ee9c.js";import{p as H}from"./index.46287c3f.js";import{I as O}from"./ImageWithError.0f46b075.js";import{g as z,O as A}from"./icon.d0274306.js";const D=e=>{const{isHide:s}=E();if(s(e.obj))return null;const{setPathAs:i}=P(),r=t(m,{get color(){return h()},boxSize:"$12",get as(){return z(e.obj)}}),[c,n]=b(!1),u=d(()=>f()&&(c()||e.obj.selected)),{show:g}=M({id:1});return t(S.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return t(j,{class:"grid-item",w:"$full",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.06)",bgColor:w()}},as:H,get href(){return e.obj.name},onMouseEnter:()=>{n(!0),i(e.obj.name,e.obj.is_dir,!0)},onMouseLeave:()=>{n(!1)},onContextMenu:a=>{x(()=>{$(!1),o(e.index,!0,!0)}),g(a,{props:e.obj})},get children(){return[t(k,{class:"item-thumbnail",h:"70px",w:"$full","on:click":a=>{e.obj.type===A.IMAGE&&(a.stopPropagation(),a.preventDefault(),C.emit("gallery",e.obj.name))},pos:"relative",get children(){return[t(l,{get when(){return u()},get children(){return t(v,{pos:"absolute",left:"$1",top:"$1","on:click":a=>{a.stopPropagation()},get checked(){return e.obj.selected},onChange:a=>{o(e.index,a.target.checked)}})}}),t(l,{get when(){return e.obj.thumb},fallback:r,get children(){return t(O,{maxH:"$full",maxW:"$full",rounded:"$lg",shadow:"$md",get fallback(){return t(y,{size:"lg"})},fallbackErr:r,get src(){return e.obj.thumb},loading:"lazy"})}})]}}),t(I,{css:{whiteSpace:"nowrap",textOverflow:"ellipsis"},w:"$full",overflow:"hidden",textAlign:"center",fontSize:"$sm",get title(){return e.obj.name},get children(){return e.obj.name}})]}})}})};export{D as G};