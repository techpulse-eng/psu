(this["webpackJsonppowershelluniversal.adminconsole"]=this["webpackJsonppowershelluniversal.adminconsole"]||[]).push([[108],{1403:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var i=n(12),a=n(0),o=n.n(a),r=n(452),l=n(414),c=n(954),d=n(415),s=n(440),u=n(72),p=n.n(u),m=n(43),b=n(3),j=o.a.lazy((function(){return Promise.resolve().then(n.bind(null,453))}));function v(){var e,t=Object(m.i)().instanceId,n=Object(d.a)("/terminal/instance/".concat(t,"/history")),a=n.data,o=n.isLoading,u=Object(d.a)("/terminal/instance/".concat(t)).data,v=[{title:"Timestamp",dataIndex:"timeStamp",key:"timeStamp",render:function(e,t){return Object(b.jsxs)(r.b,{children:[Object(b.jsx)(l.a.Text,{type:"secondary",style:{fontSize:12},children:Object(b.jsx)(s.a,{style:{color:"inherit",fontSize:"inherit"}})}),Object(b.jsx)(l.a.Text,{type:"secondary",style:{fontSize:12},children:p()().to(p()(null===t||void 0===t?void 0:t.timeStamp))})]})}},{title:"Input",dataIndex:"input",key:"input",sorter:function(e,t){return e.input.localeCompare(t.input)}}];return Object(b.jsx)(c.a,{title:null===u||void 0===u?void 0:u.terminal,subTitle:"".concat(null===u||void 0===u||null===(e=u.identity)||void 0===e?void 0:e.name," (").concat(null===u||void 0===u?void 0:u.id,")"),children:Object(b.jsx)(j,{title:"Terminal Command History",columns:v,data:null===a||void 0===a?void 0:a.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{key:e.id})})),loading:o,expandable:{expandedRowRender:function(e){return Object(b.jsx)("pre",{children:e.output})},rowExpandable:function(e){return!0}}})})}}}]);
//# sourceMappingURL=108.c8b0d9a6.chunk.js.map