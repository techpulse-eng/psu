(this["webpackJsonppowershelluniversal.adminconsole"]=this["webpackJsonppowershelluniversal.adminconsole"]||[]).push([[43],{1142:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var a=n(634),i=n(629),r=n(639),o=n(636),s=n(455),c=n(95),d=n(391),l=n(164),u=n(74),b=n(122),h=n.n(b),j=n(98),v=n(22),f=(n(0),n(924)),O=n(4);function x(e){var t=e.dashboard,n=e.allowedWithOneWayGitSync,b=Object(f.a)((function(e){return h.a.put("/api/v1/dashboard/".concat(e,"/status")).then((function(e){return e.data}))}),{onError:function(e,t,n){s.b.error("Dashboard ".concat(t,"; ").concat(null===e||void 0===e?void 0:e.message))},onSuccess:function(e,t){v.a.refetchQueries("/dashboard/".concat(t)),v.a.refetchQueries("/dashboard/diagnostics/memory",{stale:!0,active:!0,inactive:!0}),v.a.refetchQueries("/dashboard/diagnostics/endpoints",{stale:!0,active:!0,inactive:!0}),v.a.refetchQueries("/dashboard/diagnostics/sessions",{stale:!0,active:!0,inactive:!0}),v.a.refetchQueries("/dashboard",{stale:!0})}}),x=b.isLoading,m=b.mutateAsync,g=Object(f.a)((function(e){return h.a.put("/api/v1/dashboard/".concat(e,"/status/restart")).then((function(e){return e.data}))}),{onError:function(e,t,n){s.b.error("Dashboard ".concat(t,"; ").concat(null===e||void 0===e?void 0:e.message))},onSuccess:function(e,t){v.a.refetchQueries("/dashboard",{stale:!0}),v.a.refetchQueries("/dashboard/".concat(t),{stale:!0}),v.a.refetchQueries("/dashboard/diagnostics/endpoints",{stale:!0}),v.a.refetchQueries("/dashboard/diagnostics/sessions",{stale:!0}),v.a.refetchQueries("/dashboard/diagnostics/memory",{stale:!0})}}),p=g.isLoading,y=g.mutateAsync,w=Object(f.a)((function(e){return h.a.delete("/api/v1/dashboard/".concat(e,"/status")).then((function(e){return e.data}))}),{onError:function(e,t,n){s.b.error("Dashboard ".concat(t,"; ").concat(null===e||void 0===e?void 0:e.message))},onSuccess:function(e,t){v.a.refetchQueries("/dashboard",{stale:!0}),v.a.refetchQueries("/dashboard/".concat(t)),v.a.refetchQueries("/dashboard/diagnostics/endpoints",{stale:!0}),v.a.refetchQueries("/dashboard/diagnostics/sessions",{stale:!0}),v.a.refetchQueries("/dashboard/diagnostics/memory",{stale:!0})}}),k=w.isLoading,S=w.mutateAsync;return Object(O.jsx)(j.a,{requiredRoles:["Operator","Administrator"],allowedWithOneWayGitSync:n,children:Object(O.jsx)(c.a,{title:"Power",children:Object(O.jsx)(d.a,{getPopupContainer:function(){return document.getElementsByTagName("body")[0]},placement:"bottomCenter",trigger:["click"],overlay:function(){return Object(O.jsxs)(l.a,{onClick:function(e){return function(e){return"start"===e?m(null===t||void 0===t?void 0:t.id):"stop"===e?S(null===t||void 0===t?void 0:t.id):"restart"===e?y(null===t||void 0===t?void 0:t.id):null}(e.key)},children:[Object(O.jsx)(l.a.Item,{disabled:1===(null===t||void 0===t?void 0:t.status),icon:Object(O.jsx)(a.a,{}),children:"Start"},"start"),Object(O.jsx)(l.a.Item,{disabled:0===(null===t||void 0===t?void 0:t.status),icon:Object(O.jsx)(i.a,{}),children:"Stop"},"stop"),Object(O.jsx)(l.a.Item,{disabled:0===(null===t||void 0===t?void 0:t.status),icon:Object(O.jsx)(r.a,{}),children:"Restart"},"restart")]},null===t||void 0===t?void 0:t.id)},children:Object(O.jsx)(u.a,{loading:k||x||p,icon:Object(O.jsx)(o.a,{}),type:"text"})})})})}},1330:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return L}));var a=n(166),i=n(25),r=n(0),o=n.n(r),s=n(95),c=n(694),d=n(457),l=n(941),u=n(926),b=n(74),h=n(230),j=n(138),v=n(68),f=n(423),O=n(131),x=n(461),m=n(1142),g=n(651),p=n(624),y=n(652),w=n(602),k=n(590),S=n(623),Q=n(38),W=n(4),I=o.a.lazy((function(){return Promise.resolve().then(n.bind(null,460))})),z=o.a.lazy((function(){return n.e(1).then(n.bind(null,982))})),C=o.a.lazy((function(){return Promise.resolve().then(n.bind(null,462))})),A=o.a.lazy((function(){return n.e(2).then(n.bind(null,1006))})),F=o.a.lazy((function(){return n.e(17).then(n.bind(null,1354))})),E=o.a.lazy((function(){return n.e(70).then(n.bind(null,1358))})),P=o.a.lazy((function(){return n.e(71).then(n.bind(null,1359))})),D=o.a.lazy((function(){return n.e(72).then(n.bind(null,1360))})),G=o.a.lazy((function(){return n.e(39).then(n.bind(null,1361))})),R=o.a.lazy((function(){return n.e(68).then(n.bind(null,1143))}));function L(){var e="true"===localStorage.getItem("ud-advanced"),t=o.a.useState([]),n=Object(i.a)(t,2),r=n[0],L=n[1],N=o.a.useState(e),T=Object(i.a)(N,2),U=T[0],q=T[1],B=Object(f.a)("/dashboard",{refetchOnWindowFocus:!1}),J=B.data,M=B.isLoading,_=Object(f.a)("/dashboard/diagnostics/endpoints",{enabled:!!J}).data,H=Object(f.a)("/dashboard/diagnostics/sessions",{enabled:!!J}).data,K=[{key:"status",title:"Status",dataIndex:"status",render:function(e,t){var n=Object(v.q)(t.status),a=Object(W.jsx)(o.a.Fragment,{});return t.maintenance&&(a=Object(W.jsx)(s.a,{title:"Maintenance mode enabled",children:Object(W.jsx)(g.a,{style:{marginRight:"5px"}})})),Object(W.jsxs)(W.Fragment,{children:[a,n]})}},{key:"name",title:"Name",dataIndex:"name"},{key:"baseUrl",title:"Url",dataIndex:"baseUrl"},{key:"role",title:"Authentication",dataIndex:"role",align:"center",render:function(e,t){var n,a;return t.authenticated?(null===(n=t.role)||void 0===n?void 0:n.length)>0?null===t||void 0===t||null===(a=t.role)||void 0===a?void 0:a.map((function(e){return Object(W.jsx)(c.a,{color:"blue",children:e},e)})):Object(W.jsx)(s.a,{title:"Authentication enabled",children:Object(W.jsx)(p.a,{})}):Object(W.jsx)(s.a,{title:"Authentication disabled",children:Object(W.jsx)(y.a,{})})}},{key:"tags",title:"Tags",dataIndex:"tags",editable:!1,render:function(e,t){var n,i;return(null===(n=t.tag)||void 0===n?void 0:n.length)>0?null===t||void 0===t||null===(i=t.tag)||void 0===i?void 0:i.map((function(e){return Object(W.jsx)(c.a,{color:null===e||void 0===e?void 0:e.color,style:{cursor:"pointer"},onClick:function(){r.find((function(t){return t.name===e.name}))||L([].concat(Object(a.a)(r),[e]))},children:null===e||void 0===e?void 0:e.name},null===e||void 0===e?void 0:e.name)})):null}},{width:"fit-content",dataIndex:"actions",render:function(e,t){return Object(W.jsxs)(d.b,{children:[U&&Object(W.jsx)(m.a,{dashboard:t,allowedWithOneWayGitSync:!0}),Object(W.jsx)(R,{dashboard:t}),Object(W.jsx)(O.a,{children:Object(W.jsx)(z,{record:t,allowedWithOneWayGitSync:!1})}),Object(W.jsx)(A,{to:"".concat(null===t||void 0===t?void 0:t.id),allowedWithOneWayGitSync:!1}),Object(W.jsx)(C,{resource:t,allowedWithOneWayGitSync:!1})]})}}];return Object(W.jsx)(l.a,{title:"Dashboards",subTitle:"Advanced, highly customizable web pages built with PowerShell.",extra:[Object(W.jsx)(u.default,{checkedChildren:"Advanced",unCheckedChildren:"Basic",onChange:function(e){return t=e,localStorage.setItem("ud-advanced",t.toString()),void q(t);var t},checked:U}),Object(W.jsx)(Q.b,{to:"/admin/dashboards/frameworks",children:Object(W.jsx)(b.a,{icon:Object(W.jsx)(w.a,{}),children:"Frameworks"})}),Object(W.jsx)(Q.b,{to:"/admin/dashboards/modules",children:Object(W.jsx)(b.a,{icon:Object(W.jsx)(g.a,{}),children:"Components"})}),Object(W.jsx)(Q.b,{to:"/admin/dashboards/marketplace",children:Object(W.jsx)(b.a,{icon:Object(W.jsx)(k.a,{}),children:"Marketplace"})}),Object(W.jsx)(b.a,{icon:Object(W.jsx)(S.a,{}),href:"https://docs.powershelluniversal.com/userinterfaces/dashboards",target:"_blank",children:"Documentation"})],children:Object(W.jsxs)(x.i,{children:[Object(W.jsx)(x.f,{children:U&&Object(W.jsxs)(h.a,{justify:"space-between",gutter:16,children:[Object(W.jsx)(j.a,{flex:1,children:Object(W.jsx)(P,{running:null===J||void 0===J?void 0:J.filter((function(e){return 1===e.status})).length,total:null===J||void 0===J?void 0:J.length})}),Object(W.jsx)(j.a,{flex:1,children:Object(W.jsx)(F,{})}),Object(W.jsx)(j.a,{flex:1,children:Object(W.jsx)(E,{totalEndpoints:null===_||void 0===_?void 0:_.totalEndpoints})}),Object(W.jsx)(j.a,{flex:1,children:Object(W.jsx)(D,{totalSessions:null===H||void 0===H?void 0:H.totalSessions})})]})}),Object(W.jsx)(x.d,{children:Object(W.jsx)(I,{title:"Dashboards",actions:[r.map((function(e){return Object(W.jsx)(c.a,{color:e.color,closable:!0,onClose:function(){L(r.filter((function(t){return t.name!==e.name})))},children:e.name})})),Object(W.jsx)(O.a,{children:Object(W.jsx)(G,{})})],rowExpandable:function(){return U},expandedRowRender:function(e){var t,n;return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)("p",{style:{margin:0},children:e.description}),Object(W.jsxs)("p",{style:{margin:0},children:["Environment: ",null===(null===e||void 0===e?void 0:e.environment)?"Default":null===e||void 0===e?void 0:e.environment]}),Object(W.jsxs)("p",{style:{margin:0},children:["File Path: ",e.filePath]}),Object(W.jsxs)("p",{style:{margin:0},children:["Framework: ","".concat(null===(t=e.dashboardFramework)||void 0===t?void 0:t.name," [").concat(null===(n=e.dashboardFramework)||void 0===n?void 0:n.version,"]")]}),Object(W.jsxs)("p",{style:{margin:0},children:["Process: ",(null===e||void 0===e?void 0:e.processName)?"".concat(e.processName," [").concat(e.processId,"]"):"-"]})]})},data:null===J||void 0===J?void 0:J.filter((function(e){var t;return 0===r.length||e.tag&&(null===(t=e.tag)||void 0===t?void 0:t.find((function(e){return r.find((function(t){return t.name===e.name}))})))})),columns:K,loading:M})})]})})}}}]);
//# sourceMappingURL=43.ffa4dee9.chunk.js.map