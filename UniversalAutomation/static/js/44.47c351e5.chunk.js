(this["webpackJsonppowershelluniversal.adminconsole"]=this["webpackJsonppowershelluniversal.adminconsole"]||[]).push([[44,6],{1501:function(e,t,n){"use strict";n.r(t);var a=n(460),i=n(115),s=n(56),r=n(992),d=n(43),c=n(423),o=n(68),l=n(949),u=n(457),b=n(422),f=n(4);function j(e,t){return Object(f.jsx)(b.a.Text,{style:{fontFamily:"SFProDisplay-Regular",fontSize:14},copyable:t,children:e})}t.default=function(){var e=Object(d.i)().id,t=Object(i.a)().licensed,n=Object(c.a)("/dashboard/".concat(e,"/diagnostics"),{enabled:!!e&&t(s.d.Dashboard),select:function(e){return null===e||void 0===e?void 0:e.sessions}}).data,b=[{title:"Id",key:"id",dataIndex:"id"},{title:"User Name",key:"userName",dataIndex:"userName"},{title:"Last Active",key:"lastTouched",dataIndex:"lastTouched",render:function(e){return Object(o.c)(e)}},{title:"Endpoints",key:"endpoints",dataIndex:"endpoints",render:function(e,t){return t?t.endpoints.length:0}}];return t(s.d.Dashboard)?Object(f.jsx)(a.default,{rowKey:function(e){return e.id},data:n,columns:b,expandable:{expandedRowRender:function(e){return Object(f.jsx)(l.b,{size:"default",dataSource:e.endpoints,renderItem:function(e){return Object(f.jsxs)(l.b.Item,{style:{padding:12,paddingLeft:48,paddingRight:0},children:[Object(f.jsx)(l.b.Item.Meta,{title:j(e.id,!0)}),Object(f.jsxs)(u.b,{style:{padding:0,margin:0},children:[j("Average Execution Time:"),j("".concat(e.averageExecutionTime))]})]})}})}}}):Object(f.jsx)(r.default,{title:"Sessions are only available for licensed instances."})}},992:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));n(0);var a=n(922),i=n(74),s=n(604),r=n(4);function d(e){var t=e.title;return Object(r.jsx)(a.a,{title:t,status:"warning",extra:Object(r.jsx)(i.a,{icon:Object(r.jsx)(s.a,{}),onClick:function(){window.location.href="https://ironmansoftware.com/powershell-universal?rel=product"},children:"Buy License"})})}}}]);
//# sourceMappingURL=44.47c351e5.chunk.js.map