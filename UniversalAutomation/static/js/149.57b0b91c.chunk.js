(this["webpackJsonppowershelluniversal.adminconsole"]=this["webpackJsonppowershelluniversal.adminconsole"]||[]).push([[149],{1401:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var i=n(0),r=n.n(i),o=n(48),a=n(415),l=n(452),c=n(954),d=n(127),s=n(37),u=n(111),v=n(456),b=n(3),j=r.a.lazy((function(){return n.e(132).then(n.bind(null,1004))})),h=r.a.lazy((function(){return Promise.resolve().then(n.bind(null,453))})),p=r.a.lazy((function(){return n.e(2).then(n.bind(null,989))})),g=r.a.lazy((function(){return Promise.resolve().then(n.bind(null,455))})),x=r.a.lazy((function(){return n.e(8).then(n.bind(null,1003))})),y=r.a.lazy((function(){return n.e(148).then(n.bind(null,1426))}));function O(){var e=Object(u.a)().licensed,t=Object(a.a)("/trigger",{enabled:!1,refetchOnWindowFocus:!1}),n=t.data,i=t.isLoading,r=t.refetch,O=[{key:"name",dataIndex:"name",title:"Name"},{key:"triggerScript",dataIndex:"triggerScript",title:"Trigger",render:function(e,t){return Object(b.jsx)(j,{to:"/admin/automation/scripts/".concat(null===t||void 0===t?void 0:t.triggerScript),text:null===t||void 0===t?void 0:t.triggerScript})}},{key:"eventType",dataIndex:"eventType",title:"Event",render:function(e){return Object(s.q)(e)}},{key:"triggerType",title:"Type",render:function(e,t){var n=t.dashboard,i=t.script,r=t.protectRule;return null===n&&null===i&&null===r?"Global":"Resource"}},{key:"environment",dataIndex:"environment",title:"Environment"},{key:"resource",dataIndex:"resource",title:"Resource",render:function(e,t){return(null===t||void 0===t?void 0:t.script)?Object(b.jsx)(j,{to:"/admin/automation/scripts/".concat(null===t||void 0===t?void 0:t.script),text:null===t||void 0===t?void 0:t.script}):(null===t||void 0===t?void 0:t.dashboard)?Object(b.jsx)(j,{to:"/admin/dashboards/".concat(null===t||void 0===t?void 0:t.dashboard),text:null===t||void 0===t?void 0:t.dashboard}):(null===t||void 0===t?void 0:t.protectRule)?Object(b.jsx)(j,{to:"/admin/security/protect",text:null===t||void 0===t?void 0:t.protectRule}):void 0}},{width:"fit-content",dataIndex:"actions",editable:!1,render:function(e,t){return Object(b.jsxs)(l.b,{children:[Object(b.jsx)(d.a,{children:Object(b.jsx)(p,{record:t,allowedWithOneWayGitSync:!1})}),Object(b.jsx)(g,{resource:t,allowedWithOneWayGitSync:!1})]})}}];return e(o.e.Automation)?Object(b.jsx)(c.a,{title:"Triggers",subTitle:"Trigger scripts when certain events happen within Universal.",extra:[Object(b.jsx)(v.a,{url:"automation/triggers"})],children:Object(b.jsx)(h,{title:"Triggers",actions:[Object(b.jsx)(d.a,{children:Object(b.jsx)(y,{})})],columns:O,data:n,loading:i,queryFn:r})}):Object(b.jsx)(x,{title:"Triggers are only available for licensed instances."})}}}]);
//# sourceMappingURL=149.57b0b91c.chunk.js.map