import{h as e,au as P,ax as _,al as T,a1 as o,a4 as l,bP as x,b5 as L,az as v,cm as $,cY as k,a as f,k as d,cZ as A,a5 as w,at as D,aj as S,C as m,ap as V,G as j,aq as R,cE as O,S as g,aI as C,ae as I,cH as M,L as z,c_ as F,V as t,W as n,b as B,cI as W,c$ as H,m as U,bc as X,Y as G,Z as Y,ar as Z}from"./index.0d2838ba.js";import{g as q,O as u}from"./icon.0cb7e809.js";import{o as J}from"./index.17db7dfc.js";import{T as K}from"./Layout.3a5bcf8c.js";const N=r=>e(l,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[e(P,{boxSize:"$20",get fallback(){return e(_,{get color(){return T()},boxSize:"$20",get as(){return q(o.obj)}})},get src(){return o.obj.thumb}}),e(l,{spacing:"$2",get children(){return[e(x,{size:"lg",css:{wordBreak:"break-all"},get children(){return o.obj.name}}),e(L,{color:"$neutral10",size:"sm",get children(){return[v(()=>$(o.obj.size))," \xB7 ",v(()=>k(o.obj.modified))]}})]}}),e(l,{spacing:"$2",get children(){return r.children}})]}}),y=()=>{const r=f(),a=d(()=>A(o.obj.name)),{currentObjLink:i}=w();return e(g,{get when(){return a().length},get children(){return e(D,{get children(){return[e(S,{as:m,colorScheme:"success",get rightIcon(){return e(_,{as:J})},get children(){return r("home.preview.open_with")}}),e(V,{get children(){return e(j,{get each(){return a()},children:s=>e(R,{as:"a",target:"_blank",get href(){return O(s.value,{raw_url:o.raw_url,name:o.obj.name,d_url:i(!0)})},get children(){return s.key}})})}})]}})}})},p=r=>{const a=f(),{copyCurrentRawLink:i}=C();return e(N,{get children(){return[e(I,{spacing:"$2",get children(){return[e(m,{colorScheme:"accent",onClick:()=>i(!0),get children(){return a("home.toolbar.copy_link")}}),e(m,{as:"a",get href(){return o.raw_url},target:"_blank",get children(){return a("home.preview.download")}})]}}),e(g,{get when(){return r.openWith},get children(){return e(y,{})}})]}})},Q=Object.freeze(Object.defineProperty({__proto__:null,Download:p,default:p},Symbol.toStringTag,{value:"Module"})),ee=r=>{const{currentObjLink:a}=w(),i=d(()=>O(r.scheme,{raw_url:o.raw_url,name:o.obj.name,d_url:a(!0),ts:!0}));return e(F,{w:"$full",h:"70vh",get children(){return[e(M.iframe,{w:"$full",h:"$full",get src(){return i()}}),e(_,{pos:"absolute",right:"$2",bottom:"$10","aria-label":"Open in new tab",as:K,onClick:()=>{window.open(i(),"_blank")},cursor:"pointer",rounded:"$md",get bgColor(){return z()},p:"$1",boxSize:"$7"})]}})},re=r=>()=>e(ee,{scheme:r}),te=[{name:"HTML render",exts:["html"],component:t(()=>n(()=>import("./html.bd119550.js"),["assets/html.bd119550.js","assets/index.0d2838ba.js","assets/index.c4c82a28.css"]))},{name:"Aliyun Video Previewer",type:u.VIDEO,provider:/^Aliyundrive(Open)?$/,component:t(()=>n(()=>import("./aliyun_video.7df88b8e.js"),["assets/aliyun_video.7df88b8e.js","assets/index.0d2838ba.js","assets/index.c4c82a28.css","assets/icon.0cb7e809.js","assets/index.17db7dfc.js","assets/Layout.3a5bcf8c.js","assets/useTitle.e59a434b.js","assets/index.31ebc1c6.js","assets/FolderTree.174f4509.js","assets/index.41251028.js","assets/video_box.ae19ad4f.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/hls.a7aae47b.js"]))},{name:"Markdown",type:u.TEXT,component:t(()=>n(()=>import("./markdown.bae5d117.js"),["assets/markdown.bae5d117.js","assets/index.0d2838ba.js","assets/index.c4c82a28.css"]))},{name:"Markdown with word wrap",type:u.TEXT,component:t(()=>n(()=>import("./markdown_with_word_wrap.4ed6c7f0.js"),["assets/markdown_with_word_wrap.4ed6c7f0.js","assets/index.0d2838ba.js","assets/index.c4c82a28.css"]))},{name:"Url Open",exts:["url"],component:t(()=>n(()=>import("./url.23eb8c58.js"),["assets/url.23eb8c58.js","assets/index.0d2838ba.js","assets/index.c4c82a28.css","assets/icon.0cb7e809.js","assets/index.17db7dfc.js","assets/Layout.3a5bcf8c.js","assets/useTitle.e59a434b.js","assets/index.31ebc1c6.js","assets/FolderTree.174f4509.js","assets/index.41251028.js"]))},{name:"Text Editor",type:u.TEXT,exts:["url"],component:t(()=>n(()=>import("./text-editor.9a9bff6f.js"),["assets/text-editor.9a9bff6f.js","assets/index.0d2838ba.js","assets/index.c4c82a28.css","assets/index.a0d16ac3.js"]))},{name:"Image",type:u.IMAGE,component:t(()=>n(()=>import("./image.7ec03814.js"),["assets/image.7ec03814.js","assets/index.0d2838ba.js","assets/index.c4c82a28.css","assets/ImageWithError.f77b690d.js"]))},{name:"Video",type:u.VIDEO,component:t(()=>n(()=>import("./video.9cc5727e.js"),["assets/video.9cc5727e.js","assets/index.0d2838ba.js","assets/index.c4c82a28.css","assets/icon.0cb7e809.js","assets/index.17db7dfc.js","assets/Layout.3a5bcf8c.js","assets/useTitle.e59a434b.js","assets/index.31ebc1c6.js","assets/FolderTree.174f4509.js","assets/index.41251028.js","assets/video_box.ae19ad4f.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/hls.a7aae47b.js"]))},{name:"Audio",type:u.AUDIO,component:t(()=>n(()=>import("./audio.9d1cfb3a.js"),["assets/audio.9d1cfb3a.js","assets/audio.e5b5af14.css","assets/index.0d2838ba.js","assets/index.c4c82a28.css","assets/icon.0cb7e809.js","assets/index.17db7dfc.js","assets/Layout.3a5bcf8c.js","assets/useTitle.e59a434b.js","assets/index.31ebc1c6.js","assets/FolderTree.174f4509.js","assets/index.41251028.js"]))},{name:"Ipa",exts:["ipa","tipa"],component:t(()=>n(()=>import("./ipa.b4264020.js"),["assets/ipa.b4264020.js","assets/index.0d2838ba.js","assets/index.c4c82a28.css","assets/icon.0cb7e809.js","assets/index.17db7dfc.js","assets/Layout.3a5bcf8c.js","assets/useTitle.e59a434b.js","assets/index.31ebc1c6.js","assets/FolderTree.174f4509.js","assets/index.41251028.js"]))},{name:"Plist",exts:["plist"],component:t(()=>n(()=>import("./plist.2811897e.js"),["assets/plist.2811897e.js","assets/index.0d2838ba.js","assets/index.c4c82a28.css","assets/icon.0cb7e809.js","assets/index.17db7dfc.js","assets/Layout.3a5bcf8c.js","assets/useTitle.e59a434b.js","assets/index.31ebc1c6.js","assets/FolderTree.174f4509.js","assets/index.41251028.js"]))},{name:"Aliyun Office Previewer",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/^Aliyundrive(Share)?$/,component:t(()=>n(()=>import("./aliyun_office.1536f4f1.js"),["assets/aliyun_office.1536f4f1.js","assets/index.0d2838ba.js","assets/index.c4c82a28.css"]))},{name:"Asciinema",exts:["cast"],component:t(()=>n(()=>import("./asciinema.ba0955d5.js"),["assets/asciinema.ba0955d5.js","assets/asciinema.53412307.css","assets/index.0d2838ba.js","assets/index.c4c82a28.css"]))},{name:"Video360",type:u.VIDEO,component:t(()=>n(()=>import("./video360.0da583fb.js"),["assets/video360.0da583fb.js","assets/video360.f0192288.css","assets/index.0d2838ba.js","assets/index.c4c82a28.css","assets/video_box.ae19ad4f.js","assets/icon.0cb7e809.js","assets/index.17db7dfc.js","assets/Layout.3a5bcf8c.js","assets/useTitle.e59a434b.js","assets/index.31ebc1c6.js","assets/FolderTree.174f4509.js","assets/index.41251028.js","assets/_commonjs-dynamic-modules.30ae7933.js"]))}],ne=r=>{var E;const{searchParams:a}=B(),i=u[(E=a.type)==null?void 0:E.toUpperCase()],s=[];return te.forEach(c=>{var b;c.provider&&!c.provider.test(r.provider)||(c.type===r.type||i&&c.type===i||c.exts==="*"||((b=c.exts)==null?void 0:b.includes(W(r.name).toLowerCase())))&&s.push({name:c.name,component:c.component})}),H(r.name).forEach(c=>{s.push({name:c.key,component:re(c.value)})}),s.push({name:"Download",component:t(()=>n(()=>Promise.resolve().then(()=>Q),void 0))}),s},oe=()=>{const r=d(()=>ne({...o.obj,provider:o.provider})),[a,i]=U(r()[0]);return e(g,{get when(){return r().length>1},get fallback(){return e(p,{openWith:!0})},get children(){return e(l,{w:"$full",spacing:"$2",get children(){return[e(I,{w:"$full",spacing:"$2",get children(){return[e(X,{alwaysShowBorder:!0,get value(){return a().name},onChange:s=>{i(r().find(h=>h.name===s))},get options(){return r().map(s=>({value:s.name}))}}),e(y,{})]}}),e(G,{get fallback(){return e(Y,{})},get children(){return e(Z,{get component(){return a().component}})}})]}})}})},ue=Object.freeze(Object.defineProperty({__proto__:null,default:oe},Symbol.toStringTag,{value:"Module"}));export{N as F,ue as a};