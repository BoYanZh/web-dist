import{e as o,Y as i,o as n,bC as d}from"./index.722a3b14.js";import{d as m}from"./useUtil.dccc0110.js";import{M as s}from"./Markdown.8ce9f2c6.js";import"./api.e7386708.js";import"./useT.9d81fcea.js";const f=()=>{const[t]=m(),a=e=>n.obj.name.endsWith(".md")?e:"```"+d(n.obj.name)+`
`+e+"\n```";return o(i,{get loading(){return t.loading},get children(){return o(s,{get children(){var e,r;return a((r=(e=t())==null?void 0:e.content)!=null?r:"")}})}})};export{f as default};
