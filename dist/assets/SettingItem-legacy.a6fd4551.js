!function(){function e(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}System.register(["./index-legacy.29f8afad.js","./index-legacy.b630972f.js","./item_type-legacy.d1f1c701.js","./index-legacy.ea377ae1.js"],(function(r){"use strict";var n,t,u,l,i,a,c,o,g,d,f,h,v,b,y,s,p,m,O,w,k,j,C,x,D,S,T,E;return{setters:[function(e){n=e.d,t=e.f,u=e.m,l=e.aZ,i=e.aB,a=e.ah,c=e.R,o=e.aj,g=e.U,d=e.I,f=e.bQ,h=e.T,v=e.bR,b=e.bS,y=e.bT,s=e.bU,p=e.bV,m=e.bW,O=e.bX,w=e.v,k=e.bY,j=e.bZ,C=e.b_,x=e.F,D=e.a$},function(e){S=e.F},function(e){T=e.T},function(e){E=e.S}],execute:function(){r("I",(function(r){var R=n();return t(D,{get w(){var e;return null!==(e=r.w)&&void 0!==e?e:"100%"},display:"flex",flexDirection:"column",get children(){return[t(u,{get when(){return!r.hideLabel},get children(){var n,c;return t(l,(n={},"for",(c={}).for=c.for||{},c.for.get=function(){return r.key},e(n,"display","flex"),e(n,"alignItems","center"),"children",c.children=c.children||{},c.children.get=function(){return[i((function(){return R("settings.".concat(r.key))})),t(u,{get when(){return r.flag===S.DEPRECATED},get children(){return t(a,{ml:"$2",as:E,boxSize:"$5",color:"$danger9",verticalAlign:"middle",cursor:"pointer",onClick:function(){var e;null===(e=r.onDelete)||void 0===e||e.call(r)}})}})]},function(e,r){for(var n in r)(l=r[n]).configurable=l.enumerable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,n,l);if(Object.getOwnPropertySymbols)for(var t=Object.getOwnPropertySymbols(r),u=0;u<t.length;u++){var l,i=t[u];(l=r[i]).configurable=l.enumerable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,i,l)}}(n,c),n))}}),t(c,{get fallback(){return t(o,{get children(){return R("settings_other.unknown_type")}})},get children(){return[t(g,{get when(){return[T.String,T.Number].includes(r.type)},get children(){return t(d,{get type(){return r.type===T.Number?"number":""},get id(){return r.key},get value(){return r.value},onInput:function(e){var n;return null===(n=r.onChange)||void 0===n?void 0:n.call(r,e.currentTarget.value)},get readOnly(){return r.flag===S.READONLY}})}}),t(g,{get when(){return r.type===T.Bool},get children(){return t(f,{get id(){return r.key},get defaultChecked(){return"true"===r.value},onChange:function(e){var n;return null===(n=r.onChange)||void 0===n?void 0:n.call(r,e.currentTarget.checked?"true":"false")},get readOnly(){return r.flag===S.READONLY}})}}),t(g,{get when(){return r.type===T.Text},get children(){return t(h,{get id(){return r.key},get value(){return r.value},onChange:function(e){var n;return null===(n=r.onChange)||void 0===n?void 0:n.call(r,e.currentTarget.value)},get readOnly(){return r.flag===S.READONLY}})}}),t(g,{get when(){return r.type===T.Select},get children(){return t(v,{get id(){return r.key},get defaultValue(){return r.value},onChange:function(e){var n;return null===(n=r.onChange)||void 0===n?void 0:n.call(r,e)},get readOnly(){return r.flag===S.READONLY},get children(){return[t(b,{get children(){return[t(y,{get children(){return R("global.choose")}}),t(s,{}),t(p,{})]}}),t(m,{get children(){return t(O,{get children(){return t(w,{get each(){var e;return null===(e=r.options)||void 0===e?void 0:e.split(",")},children:function(e){return t(k,{value:e,get children(){return[t(j,{get children(){return R("settings.".concat(r.key,"s.").concat(e))}}),t(C,{})]}})}})}})}})]}})}})]}}),t(x,{get children(){return i((function(){return!!r.help}),!0)()?R("settings.".concat(r.key,"-tips")):""}})]}})}))}}}))}();
