(this["webpackJsonppowershelluniversal.adminconsole"]=this["webpackJsonppowershelluniversal.adminconsole"]||[]).push([[36,2],{1442:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return b}));t(0);var o=t(415),i=t(72),r=t.n(i),c=t(453),l=t(302),a=t.n(l),d=t(454),s=t(37),u=t(452),v=t(455),f=t(989),h=t(127),j=t(3);r.a.extend(a.a);var m=[{title:"Description",dataIndex:"description",key:"description"},{title:"Next Execution",key:"nextExecution",render:function(e,n){return Object(s.c)(null===n||void 0===n?void 0:n.nextExecution)}},{title:"Environment",key:"environment",dataIndex:"environment",render:function(e){return e||"Default"}},{key:"runAs",title:"Run As",render:function(e,n){return(null===n||void 0===n?void 0:n.credential)||"Default"}},{width:"fit-content",dataIndex:"actions",editable:!1,render:function(e,n){return Object(j.jsxs)(u.b,{children:[Object(j.jsx)(h.a,{children:Object(j.jsx)(f.default,{record:n,schemaName:"schedule",allowedWithOneWayGitSync:!1})}),Object(j.jsx)(v.default,{resource:n,allowedWithOneWayGitSync:!1})]})}}];function b(){var e=Object(d.j)().resource,n=Object(o.a)("/schedule",{select:function(n){return n.filter((function(n){return(null===n||void 0===n?void 0:n.script)===(null===e||void 0===e?void 0:e.fullPath)}))},enabled:!!e,refetchOnMount:!1,refetchOnWindowFocus:!1}),t=n.data,i=n.isLoading;return Object(j.jsx)(c.default,{columns:m,data:t,loading:i})}},983:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));t(0);var o=t(932),i=t(452),r=t(414),c=t(3);function l(){return Object(c.jsx)(o.a,{type:"info",message:Object(c.jsxs)(i.b,{align:"center",style:{width:"100%",justifyContent:"space-between"},children:["Authentication requires a license.",Object(c.jsx)(r.a.Link,{href:"https://ironmansoftware.com/powershell-universal/?rel=product",target:"_blank",children:"Buy License."})]})})}},989:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return h}));var o=t(12),i=t(74),r=(t(0),t(48)),c=t(70),l=t(209),a=t(457),d=t(127),s=t(299),u=t(983),v=t(111),f=t(3);function h(e){var n,t=e.record,h=e.schemaName,j=e.allowedWithOneWayGitSync,m=Object(i.a)(e,["record","schemaName","allowedWithOneWayGitSync"]),b=Object(a.a)().getButtonProps,O=Object(s.a)(),x=Object(d.e)(),p=x.onOk,y=x.form,w=Object(v.a)().licensed;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(d.d,{requiredRoles:["Administrator","Operator"],requiredAccessControls:r.b.Edit,accessControls:m.accessControls,allowedWithOneWayGitSync:j,children:Object(f.jsx)(c.a,Object(o.a)(Object(o.a)(Object(o.a)({},m),b({action:"edit"})),{},{action:"edit"}))}),Object(f.jsxs)(d.b,{title:"Edit Resource",onClickOk:function(){var e,n,o,i,r,c,l,a,d,s,u,v="tag"===(null===t||void 0===t||null===(e=t.resourceInfo)||void 0===e?void 0:e.schemaName)||"role"===(null===t||void 0===t||null===(n=t.resourceInfo)||void 0===n?void 0:n.schemaName)||"endpoint"===(null===t||void 0===t||null===(o=t.resourceInfo)||void 0===o?void 0:o.schemaName)||"ratelimit"===(null===t||void 0===t||null===(i=t.resourceInfo)||void 0===i?void 0:i.schemaName)||"dashboard"===(null===t||void 0===t||null===(r=t.resourceInfo)||void 0===r?void 0:r.schemaName)||"schedule"===(null===t||void 0===t||null===(c=t.resourceInfo)||void 0===c?void 0:c.schemaName)||"publishedfolder"===(null===t||void 0===t||null===(l=t.resourceInfo)||void 0===l?void 0:l.schemaName)?null===t||void 0===t||null===(a=t.resourceInfo)||void 0===a?void 0:a.self:null===t||void 0===t||null===(d=t.resourceInfo)||void 0===d?void 0:d.parent;"page"===(null===t||void 0===t||null===(s=t.resourceInfo)||void 0===s?void 0:s.schemaName)&&(v=(null===t||void 0===t||null===(u=t.resourceInfo)||void 0===u?void 0:u.self)+"?ignoreContent=true"),p(v,"update",t)},children:[Object(f.jsx)(l.b,{schemaName:h||(null===t||void 0===t||null===(n=t.resourceInfo)||void 0===n?void 0:n.schemaName),children:Object(f.jsx)(l.d,{name:"edit_form",form:y,inEditMode:!0,preserve:!1,defaultValues:O(t)})}),!w(r.e.Dashboard)&&Object(f.jsx)(u.a,{})]})]})}}}]);
//# sourceMappingURL=36.6a16e8d5.chunk.js.map