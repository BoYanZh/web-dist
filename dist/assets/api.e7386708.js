import{b5 as n,b as c}from"./index.722a3b14.js";const p=(s="/",t="")=>n.post("/fs/get",{path:s,password:t}),d=(s="/",t="",e=1,a=0,o=!1,r)=>n.post("/fs/list",{path:s,password:t,page:e,per_page:a,refresh:o},{cancelToken:r}),u=(s="/",t="",e=!1)=>n.post("/fs/dirs",{path:s,password:t,force_root:e}),m=s=>n.post("/fs/mkdir",{path:s}),l=(s,t)=>n.post("/fs/rename",{path:s,name:t}),y=(s,t,e)=>n.post("/fs/move",{src_dir:s,dst_dir:t,names:e}),h=(s,t,e)=>n.post("/fs/copy",{src_dir:s,dst_dir:t,names:e}),b=(s,t)=>n.post("/fs/remove",{dir:s,names:t}),x=(s,t)=>n.put("/fs/put",void 0,{headers:{"File-Path":encodeURIComponent(s),Password:t}}),w=(s,t)=>n.post("/fs/add_aria2",{path:s,urls:t}),f=async(s,t=!0)=>{try{const e=await c.get(s,{responseType:"blob",params:t?{ts:new Date().getTime()}:void 0}),a=await e.data.text(),o=e.headers["content-type"];return{content:a,contentType:o}}catch(e){return t?await f(s,!1):{content:`Failed to fetch ${s}: ${e}`,contentType:""}}},v=async(s,t,e="",a=1,o=100)=>n.post("/fs/search",{parent:s,keywords:t,page:a,per_page:o}),T=async(s=["/"],t=-1,e=[])=>n.post("/admin/index/build",{paths:s,max_depth:t,ignore_paths:e,clear:!0}),g=async(s=["/"],t=-1,e=[])=>n.post("/admin/index/build",{paths:s,max_depth:t,ignore_paths:e,clear:!1});export{d as a,f as b,h as c,y as d,b as e,p as f,l as g,x as h,m as i,w as j,u as k,v as l,T as m,g as u};
