(this["webpackJsonppowershelluniversal.adminconsole"]=this["webpackJsonppowershelluniversal.adminconsole"]||[]).push([[19,108],{1019:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return l}));var i=n(12),c=(n(0),n(948)),o=n(941),a=n(43),r=n(4);function l(t){var e=Object(a.h)();return Object(r.jsx)(c.a,{bordered:!1,bodyStyle:{padding:0},children:Object(r.jsx)(o.a,Object(i.a)(Object(i.a)({},t),{},{ghost:!0,onBack:function(){return e(-1)}}))})}},1136:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n(12),c=n(76),o=(n(0),n(95)),a=n(74),r=n(43),l=n(600),s=n(98),j=n(4);function u(t){var e=t.job,n=Object(c.a)(t,["job"]),u=Object(r.h)(),d=Object(r.g)();return Object(j.jsx)(s.a,{requiredRoles:["Administrator"],children:Object(j.jsx)(o.a,{title:(null===e||void 0===e?void 0:e.isScriptDeleted)?"Script deleted":"Go to script",children:Object(j.jsx)(a.a,Object(i.a)(Object(i.a)({type:"text",icon:Object(j.jsx)(l.a,{})},n),{},{disabled:null===e||void 0===e?void 0:e.isScriptDeleted,"aria-label":"view script ".concat(null===e||void 0===e?void 0:e.scriptFullPath," button"),onClick:function(){return u("/admin/automation/scripts/".concat(null===e||void 0===e?void 0:e.scriptFullPath),{state:{from:null===d||void 0===d?void 0:d.pathname}})}}))})})}},1137:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var i=n(12),c=n(76),o=(n(0),n(22)),a=n(918),r=n(95),l=n(74),s=n(98),j=n(647),u=n(4);function d(t){var e=t.job,n=Object(c.a)(t,["job"]),d=Object(o.b)(),b=d.mutateAsync,O=d.isLoading;return 1===(null===e||void 0===e?void 0:e.status)||4===(null===e||void 0===e?void 0:e.status)?Object(u.jsx)(s.a,{requiredRoles:["Administrator"],children:Object(u.jsx)(a.a,{autoAdjustOverflow:!0,arrowPointAtCenter:!0,color:"red",okText:"Yes",cancelText:"No",title:"Are you sure you want to stop this job?",onConfirm:function(){b({key:"/job/".concat(null===e||void 0===e?void 0:e.id),action:"delete"})},children:Object(u.jsx)(r.a,{title:"Stop Job",children:Object(u.jsx)(l.a,Object(i.a)({"aria-label":"cancel job ".concat(null===e||void 0===e?void 0:e.id," button"),loading:O,type:"text",icon:Object(u.jsx)(j.a,{})},n))})})}):null}},1377:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return B}));var i=n(25),c=n(0),o=n.n(c),a=n(461),r=n(1019),l=n(423),s=n(56),j=n(43),u=n(948),d=n(74),b=n(178),O=n(4),v=Object(c.lazy)((function(){return n.e(80).then(n.bind(null,1494))})),h=Object(c.lazy)((function(){return n.e(78).then(n.bind(null,1495))})),x=Object(c.lazy)((function(){return n.e(79).then(n.bind(null,1496))}));function p(){var t=Object(c.useState)("pipeline"),e=Object(i.a)(t,2),n=e[0],o=e[1],r={pipeline:Object(O.jsx)(v,{}),errors:Object(O.jsx)(h,{}),parameters:Object(O.jsx)(x,{})};return Object(O.jsx)(u.a,{bordered:!1,headStyle:{borderBottom:0,height:64},bodyStyle:{paddingTop:24},tabList:[{key:"pipeline",tab:"Pipeline"},{key:"errors",tab:"Errors"},{key:"parameters",tab:"Parameters"}],activeTabKey:n,onTabChange:function(t){return o(t)},tabProps:{type:"line",tabBarStyle:{height:64}},tabBarExtraContent:Object(O.jsx)(a.h,{children:Object(O.jsx)(d.a,{})}),children:Object(O.jsx)(b.a,{tip:"Loading ".concat(n),children:r[n]})})}var f=n(131),m=n(515),y=n(68),g=n(1135),S=n(1137),w=n(1136),k=n(95),P=n(230),T=n(138),C=n(457),z=o.a.lazy((function(){return Promise.all([n.e(0),n.e(28)]).then(n.bind(null,1493))})),A=o.a.lazy((function(){return Promise.resolve().then(n.bind(null,672))}));function B(){var t=Object(j.i)().id,e=o.a.useState(!0),n=Object(i.a)(e,2),c=n[0],u=n[1],d=o.a.useState(1e3),b=Object(i.a)(d,2),v=b[0],h=b[1],x=Object(l.a)("/job/".concat(t),{enabled:!!t,refetchOnWindowFocus:!1,refetchInterval:v,onSuccess:function(t){t.status!==s.g.Running&&t.status!==s.g.Canceling&&t.status!==s.g.Queued&&h(!1)}}).data;return Object(O.jsxs)(a.i,{resource:x,children:[Object(O.jsx)(a.f,{children:Object(O.jsx)(r.default,{title:null===x||void 0===x?void 0:x.id,subTitle:"#".concat(null===x||void 0===x?void 0:x.scriptFullPath),tags:3===(null===x||void 0===x?void 0:x.status)?Object(O.jsx)(k.a,{title:(null===x||void 0===x?void 0:x.output)||(null===x||void 0===x?void 0:x.statusDescription),color:"red",children:Object(y.r)(null===x||void 0===x?void 0:x.status)}):Object(O.jsx)(k.a,{title:(null===x||void 0===x?void 0:x.output)||(null===x||void 0===x?void 0:x.statusDescription),children:Object(y.r)(null===x||void 0===x?void 0:x.status)}),extra:4===(null===x||void 0===x?void 0:x.status)?[Object(O.jsx)(f.a,{children:Object(O.jsx)(m.a,{job:x,feedbackComplete:function(){return h(1e3)}})}),Object(O.jsx)(w.a,{job:x}),Object(O.jsx)(S.a,{job:x})]:[Object(O.jsx)(w.a,{job:x}),Object(O.jsx)(S.a,{job:x})],children:Object(O.jsxs)(P.a,{children:[Object(O.jsx)(T.a,{span:12,children:Object(O.jsxs)(C.b,{direction:"vertical",size:"small",children:[Object(y.e)(x),Object(O.jsx)(g.a,{job:x})]})}),Object(O.jsx)(T.a,{span:12,children:Object(O.jsx)(A,{job:x})})]})})}),Object(O.jsxs)(a.e,{children:[Object(O.jsx)(a.a,{children:Object(O.jsx)(z,{job:x,refetchInterval:v,showTimestamp:c,setShowTimestamp:function(){return u(!c)}})}),Object(O.jsx)(a.g,{children:Object(O.jsx)(p,{})})]})]})}}}]);
//# sourceMappingURL=19.5b4e037b.chunk.js.map