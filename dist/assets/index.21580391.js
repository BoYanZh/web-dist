import{e,t as b,a4 as k,r as V,an as v,ao as A,bj as u,ag as z,af as B,u as p,L as y,y as C,k as _,as as h,bk as g,d as x,bl as E,al as l,a9 as i,ay as L,ab as n,ac as r,bm as M,bn as U,aI as W,a0 as w,au as T,bo as Y,bp as H,n as N,b0 as j,aU as F,aV as X,aW as q,aX as J,aY as K,ax as f,a_ as D,a$ as R,bq as Q,br as Z,bs as G}from"./index.0dd565a4.js";import{u as d}from"./useT.8636173f.js";import{b as e1,a as t1}from"./useTitle.5abfb25e.js";import{A as n1,e as r1,f as o1,g as a1,h as i1,i as s1,j as c1,k as l1,l as m1,m as u1,n as g1,o as d1,p as _1,B as h1,q as p1,r as E1,s as f1}from"./index.65eeb018.js";var c=(t=>(t[t.SINGLE=0]="SINGLE",t[t.SITE=1]="SITE",t[t.STYLE=2]="STYLE",t[t.PREVIEW=3]="PREVIEW",t[t.GLOBAL=4]="GLOBAL",t[t.ARIA2=5]="ARIA2",t[t.INDEX=6]="INDEX",t))(c||{}),I1=(t=>(t[t.PUBLIC=0]="PUBLIC",t[t.PRIVATE=1]="PRIVATE",t[t.READONLY=2]="READONLY",t[t.DEPRECATED=3]="DEPRECATED",t))(I1||{});const $1=t=>{const o=V(()=>{if(!v.is_admin(A())){if(t.role===void 0)return!1;if(t.role===u.GENERAL&&!v.is_general(A()))return!1}return!0});return e(B,{get fallback(){return e(v1,t)},get children(){return[e(z,{get when(){return!o()},children:null}),e(z,{get when(){return t.children},get children(){return e(A1,t)}})]}})},v1=t=>{const{pathname:o}=p(),a=d(),s=()=>o()===t.to;return e(n1,{display:"flex",as:y,get href(){return t.to},onClick:()=>{S()},w:"$full",alignItems:"center",get _hover(){return{bgColor:s()?"$info4":C(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return s()?"$info4":""},get color(){return s()?"$info11":""},get external(){return t.external},get children(){return[e(_,{get when(){return t.icon},get children(){return e(h,{mr:"$2",get as(){return t.icon}})}}),e(g,{get children(){return a(t.title)}})]}})},A1=t=>{const{pathname:o}=p(),[a,s]=x(o().includes(t.to)),O=d();return e(i,{w:"$full",get children(){return[e(E,{justifyContent:"space-between",onClick:()=>{s(!a())},w:"$full",alignItems:"center",get _hover(){return{bgColor:C()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[e(l,{get children(){return[e(_,{get when(){return t.icon},get children(){return e(h,{mr:"$2",get as(){return t.icon}})}}),e(g,{get children(){return O(t.title)}})]}}),e(h,{as:r1,get transform(){return a()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),e(_,{get when(){return a()},get children(){return e(i,{pl:"$2",get children(){return e(I,{get items(){return t.children}})}})}})]}})},I=t=>e(k,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return e(b,{get each(){return t.items},children:o=>e($1,o)})}});function z1(t){return L({a:{viewBox:"0 0 24 24"},c:'<path d="M5.385 6.136c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-1.438 2.63c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.465-2.63c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.499-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm-1.088 5.592c.794 0 1.438-.654 1.438-1.461s-.644-1.461-1.438-1.461-1.438.654-1.438 1.461.643 1.461 1.438 1.461zm5.464-5.592c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111S11.4 7.247 12 7.247s1.088-.498 1.088-1.111zm.35-4.675c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461S11.206 0 12 0s1.438.654 1.438 1.461zm-.35 0C13.088.848 12.6.35 12 .35s-1.088.498-1.088 1.111S11.4 2.572 12 2.572s1.088-.498 1.088-1.111zm.35 8.806c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.499 1.088-1.111zm4.376-4.131c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939 1.461c.794 0 1.438-.654 1.438-1.461s-.644-1.461-1.438-1.461-1.438.654-1.438 1.461.644 1.461 1.438 1.461zm-4.027 1.209c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.643-1.461-1.438-1.461zm4.027 0c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zM3.947 12.857a1.45 1.45 0 00-1.438 1.461c0 .807.644 1.461 1.438 1.461s1.438-.654 1.438-1.461a1.45 1.45 0 00-1.438-1.461zm5.465 1.5c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.655 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zM12 12.896c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.464 1.461c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.655 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939-1.461c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zM3.947 16.948c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.465 1.5c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm4.376 0c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm.35 4.091c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111S11.4 23.65 12 23.65s1.088-.498 1.088-1.111zm4.376-4.091c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939-1.461c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461z"/>'},t)}function T1(t){return L({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},t)}const m=n(()=>r(()=>import("./Common.064cfe9b.js"),["assets/Common.064cfe9b.js","assets/index.0dd565a4.js","assets/index.659f4289.css","assets/useT.8636173f.js","assets/useTitle.5abfb25e.js","assets/SettingItem.b23670c5.js","assets/item_type.be442da4.js","assets/index.65eeb018.js","assets/ResponsiveGrid.a37d31df.js"])),$=[{title:"manage.sidemenu.profile",icon:o1,to:"/@manage",role:u.GUEST,component:n(()=>r(()=>import("./Profile.9be36358.js"),["assets/Profile.9be36358.js","assets/index.0dd565a4.js","assets/index.659f4289.css","assets/useT.8636173f.js","assets/useTitle.5abfb25e.js","assets/index.65eeb018.js"]))},{title:"manage.sidemenu.settings",icon:a1,to:"/@manage/settings",children:[{title:"manage.sidemenu.site",icon:i1,to:"/@manage/settings/site",component:()=>e(m,{get group(){return c.SITE}})},{title:"manage.sidemenu.style",icon:s1,to:"/@manage/settings/style",component:()=>e(m,{get group(){return c.STYLE}})},{title:"manage.sidemenu.preview",icon:c1,to:"/@manage/settings/preview",component:()=>e(m,{get group(){return c.PREVIEW}})},{title:"manage.sidemenu.global",icon:l1,to:"/@manage/settings/global",component:()=>e(m,{get group(){return c.GLOBAL}})},{title:"manage.sidemenu.other",icon:m1,to:"/@manage/settings/other",component:n(()=>r(()=>import("./Other.1270481a.js"),["assets/Other.1270481a.js","assets/index.0dd565a4.js","assets/index.659f4289.css","assets/useT.8636173f.js","assets/useTitle.5abfb25e.js","assets/useUtil.02abdd36.js","assets/api.3963b0e7.js","assets/SettingItem.b23670c5.js","assets/item_type.be442da4.js","assets/index.65eeb018.js"]))}]},{title:"manage.sidemenu.tasks",icon:T1,to:"/@manage/tasks",children:[{title:"manage.sidemenu.aria2",icon:u1,to:"/@manage/tasks/aria2",component:n(()=>r(()=>import("./Aria2.a70c19dc.js"),["assets/Aria2.a70c19dc.js","assets/index.0dd565a4.js","assets/index.659f4289.css","assets/useTitle.5abfb25e.js","assets/useT.8636173f.js","assets/Tasks.8f787317.js"]))},{title:"manage.sidemenu.upload",icon:g1,to:"/@manage/tasks/upload",component:n(()=>r(()=>import("./Upload.a50b29a3.js"),["assets/Upload.a50b29a3.js","assets/index.0dd565a4.js","assets/index.659f4289.css","assets/useTitle.5abfb25e.js","assets/useT.8636173f.js","assets/Tasks.8f787317.js"]))},{title:"manage.sidemenu.copy",icon:M,to:"/@manage/tasks/copy",component:n(()=>r(()=>import("./Copy.b2da0269.js"),["assets/Copy.b2da0269.js","assets/index.0dd565a4.js","assets/index.659f4289.css","assets/useTitle.5abfb25e.js","assets/useT.8636173f.js","assets/Tasks.8f787317.js"]))}]},{title:"manage.sidemenu.users",icon:d1,to:"/@manage/users",component:n(()=>r(()=>import("./Users.d23b89e5.js"),["assets/Users.d23b89e5.js","assets/index.0dd565a4.js","assets/index.659f4289.css","assets/useT.8636173f.js","assets/useTitle.5abfb25e.js","assets/DeletePopover.43a06d04.js"]))},{title:"manage.sidemenu.storages",icon:_1,to:"/@manage/storages",component:n(()=>r(()=>import("./Storages.8d279e9e.js"),["assets/Storages.8d279e9e.js","assets/index.0dd565a4.js","assets/index.659f4289.css","assets/useT.8636173f.js","assets/useTitle.5abfb25e.js","assets/DeletePopover.43a06d04.js"]))},{title:"manage.sidemenu.metas",icon:z1,to:"/@manage/metas",component:n(()=>r(()=>import("./Metas.8d45a756.js"),["assets/Metas.8d45a756.js","assets/index.0dd565a4.js","assets/index.659f4289.css","assets/useT.8636173f.js","assets/useTitle.5abfb25e.js","assets/DeletePopover.43a06d04.js"]))},{title:"manage.sidemenu.indexes",icon:h1,to:"/@manage/indexes",component:n(()=>r(()=>import("./indexes.0500feb8.js"),["assets/indexes.0500feb8.js","assets/index.0dd565a4.js","assets/index.659f4289.css","assets/api.3963b0e7.js","assets/useT.8636173f.js","assets/Common.064cfe9b.js","assets/useTitle.5abfb25e.js","assets/SettingItem.b23670c5.js","assets/item_type.be442da4.js","assets/index.65eeb018.js","assets/ResponsiveGrid.a37d31df.js"]))},{title:"manage.sidemenu.backup-restore",to:"/@manage/backup-restore",icon:p1,component:n(()=>r(()=>import("./backup-restore.04f1b86b.js"),["assets/backup-restore.04f1b86b.js","assets/index.0dd565a4.js","assets/index.659f4289.css","assets/useT.8636173f.js"]))},{title:"manage.sidemenu.about",icon:E1,to:"/@manage/about",role:u.GUEST,component:n(()=>r(()=>import("./About.d3ae4e57.js"),["assets/About.d3ae4e57.js","assets/index.0dd565a4.js","assets/index.659f4289.css","assets/Markdown.db66292e.js"]))},{title:"manage.sidemenu.home",icon:U,to:"/",role:u.GUEST,external:!0}],{isOpen:b1,onOpen:C1,onClose:S}=W(),L1=()=>{const t=d(),{to:o}=p();return e(i,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return w("$background","$neutral2")()},get children(){return[e(E,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[e(l,{spacing:"$2",get children(){return[e(T,{"aria-label":"menu",get icon(){return e(f1,{})},display:{"@sm":"none"},onClick:C1,size:"sm"}),e(g,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:()=>{o("/@manage")},get children(){return t("manage.title")}})]}}),e(l,{spacing:"$1",get children(){return e(T,{"aria-label":"logout",get icon(){return e(Y,{})},onClick:()=>{H(),N.success(t("manage.logout_success")),o(`/@login?redirect=${encodeURIComponent(location.pathname)}`)},size:"sm"})}})]}}),e(j,{get opened(){return b1()},placement:"left",onClose:S,get children(){return[e(F,{}),e(X,{get children(){return[e(q,{}),e(J,{color:"$info9",get children(){return t("manage.title")}}),e(K,{get children(){return[e(I,{items:$}),e(f,{get children(){return e(l,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[e(D,{}),e(R,{})]}})}})]}})]}})]}})]}})},w1=[{to:"/storages/add",component:n(()=>r(()=>import("./AddOrEdit.4d2cd50e.js"),["assets/AddOrEdit.4d2cd50e.js","assets/index.0dd565a4.js","assets/index.659f4289.css","assets/useT.8636173f.js","assets/item_type.be442da4.js","assets/ResponsiveGrid.a37d31df.js"]))},{to:"/storages/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.4d2cd50e.js"),["assets/AddOrEdit.4d2cd50e.js","assets/index.0dd565a4.js","assets/index.659f4289.css","assets/useT.8636173f.js","assets/item_type.be442da4.js","assets/ResponsiveGrid.a37d31df.js"]))},{to:"/users/add",component:n(()=>r(()=>import("./AddOrEdit.da14960a.js"),["assets/AddOrEdit.da14960a.js","assets/index.0dd565a4.js","assets/index.659f4289.css","assets/FolderTree.8b2adb2f.js","assets/index.65eeb018.js","assets/api.3963b0e7.js","assets/useT.8636173f.js"]))},{to:"/users/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.da14960a.js"),["assets/AddOrEdit.da14960a.js","assets/index.0dd565a4.js","assets/index.659f4289.css","assets/FolderTree.8b2adb2f.js","assets/index.65eeb018.js","assets/api.3963b0e7.js","assets/useT.8636173f.js"]))},{to:"/metas/add",component:n(()=>r(()=>import("./AddOrEdit.2b53dd45.js"),["assets/AddOrEdit.2b53dd45.js","assets/index.0dd565a4.js","assets/index.659f4289.css","assets/FolderTree.8b2adb2f.js","assets/index.65eeb018.js","assets/api.3963b0e7.js","assets/useT.8636173f.js"]))},{to:"/metas/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.2b53dd45.js"),["assets/AddOrEdit.2b53dd45.js","assets/index.0dd565a4.js","assets/index.659f4289.css","assets/FolderTree.8b2adb2f.js","assets/index.65eeb018.js","assets/api.3963b0e7.js","assets/useT.8636173f.js"]))},{to:"/2fa",component:n(()=>r(()=>import("./2fa.548bb563.js"),["assets/2fa.548bb563.js","assets/index.0dd565a4.js","assets/index.659f4289.css","assets/useT.8636173f.js"]))},{to:"/messenger",component:n(()=>r(()=>import("./Messenger.f967cf47.js"),["assets/Messenger.f967cf47.js","assets/index.0dd565a4.js","assets/index.659f4289.css","assets/useT.8636173f.js"]))}],D1=t=>(e1(t.title),e(f,{h:"$full",get children(){return e(g,{get children(){return t.title}})}})),P=(t,o=[])=>(t.forEach(a=>{a.children?P(a.children,o):o.push({to:Q(a.to,"/@manage"),component:a.component||(()=>e(D1,{get title(){return a.title},get to(){return a.to||"empty"}}))})}),o),R1=P($).concat(w1),S1=()=>{const t=d();return t1(()=>t("manage.title")),e(i,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[e(L1,{}),e(E,{w:"$full",h:"calc(100vh - 64px)",get children(){return[e(i,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return w("$background","$neutral2")()},overflowY:"auto",get children(){return[e(I,{items:$}),e(f,{get children(){return e(l,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[e(D,{}),e(R,{})]}})}})]}}),e(i,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return e(Z,{get children(){return e(b,{each:R1,children:o=>e(G,{get path(){return o.to},get component(){return o.component}})})}})}})]}})]}})},B1=Object.freeze(Object.defineProperty({__proto__:null,default:S1},Symbol.toStringTag,{value:"Module"}));export{I1 as F,c as G,B1 as i};
