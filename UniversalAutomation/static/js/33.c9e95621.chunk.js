(this["webpackJsonppowershelluniversal.adminconsole"]=this["webpackJsonppowershelluniversal.adminconsole"]||[]).push([[33,1],{1383:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return b}));var r=t(0),o=t(423),i=t(457),a=t(941),c=t(74),s=t(131),l=t(460),d=t(982),u=t(462),m=t(212),h=t(56),v=t(4);function j(){var e=Object(s.e)(),n=e.onOk,t=e.form;return Object(v.jsxs)(r.Fragment,{children:[Object(v.jsx)(s.d,{requiredRoles:["Administrator"],requiredAccessControls:h.a.Create,allowedWithOneWayGitSync:!1,children:Object(v.jsx)(c.a,{children:"Create New Environment"})}),Object(v.jsx)(s.b,{title:"Create new environment",onClickOk:function(){n("/environment","create",{})},formName:"create_environment_form",children:Object(v.jsx)(m.b,{schemaName:"environment",children:Object(v.jsx)(m.d,{name:"create_environment_form",form:t,preserve:!1})})})]})}var f=t(623);function b(){var e=Object(o.a)("/environment",{enabled:!1,refetchOnWindowFocus:!1}),n=e.data,t=e.isLoading,r=e.refetch,m=[{key:"name",title:"Name",dataIndex:"name",width:"10%"},{key:"version",title:"Version",dataIndex:"version",width:"10%"},{key:"path",title:"Path",dataIndex:"path",width:"20%"},{key:"arguments",title:"Arguments",width:"25%",dataIndex:"arguments"},{key:"persistentRunspace",title:"Persistent Runspace",dataIndex:"persistentRunspace",render:function(e,n){return(null===n||void 0===n?void 0:n.persistentRunspace)?"True":"False"}},{key:"highPerformanceRunspacePool",title:"High Performance Runspace Pool",dataIndex:"highPerformanceRunspacePool",render:function(e,n){return(null===n||void 0===n?void 0:n.highPerformanceRunspacePool)?"True":"False"}},{key:"maxRunspaces",title:"Maximum Runspaces",dataIndex:"maxRunspaces"},{width:"fit-content",dataIndex:"actions",render:function(e,n){return Object(v.jsxs)(i.b,{children:[Object(v.jsx)(s.a,{children:Object(v.jsx)(d.default,{record:n,allowedWithOneWayGitSync:!1})}),Object(v.jsx)(u.default,{resource:n,allowedWithOneWayGitSync:!1})]})}}];return Object(v.jsx)(a.a,{title:"Environments",subTitle:"Execution environments for PowerShell scripts within Universal.",extra:[Object(v.jsx)(c.a,{icon:Object(v.jsx)(f.a,{}),href:"https://docs.powershelluniversal.com/config/environments",target:"_blank",children:"Documentation"})],children:Object(v.jsx)(l.default,{title:"Environments",actions:[Object(v.jsx)(s.a,{children:Object(v.jsx)(j,{})})],data:n,columns:m,loading:t,queryFn:r})})}},978:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));t(0);var r=t(925),o=t(457),i=t(422),a=t(4);function c(){return Object(a.jsx)(r.a,{type:"info",message:Object(a.jsxs)(o.b,{align:"center",style:{width:"100%",justifyContent:"space-between"},children:["Authentication requires a license.",Object(a.jsx)(i.a.Link,{href:"https://ironmansoftware.com/powershell-universal/?rel=product",target:"_blank",children:"Buy License."})]})})}},982:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return v}));var r=t(12),o=t(76),i=(t(0),t(56)),a=t(74),c=t(212),s=t(463),l=t(131),d=t(303),u=t(978),m=t(115),h=t(4);function v(e){var n,t=e.record,v=e.schemaName,j=e.allowedWithOneWayGitSync,f=Object(o.a)(e,["record","schemaName","allowedWithOneWayGitSync"]),b=Object(s.a)().getButtonProps,O=Object(d.a)(),p=Object(l.e)(),x=p.onOk,w=p.form,y=Object(m.a)().licensed;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(l.d,{requiredRoles:["Administrator","Operator"],requiredAccessControls:i.a.Edit,accessControls:f.accessControls,allowedWithOneWayGitSync:j,children:Object(h.jsx)(a.a,Object(r.a)(Object(r.a)(Object(r.a)({},f),b({action:"edit"})),{},{action:"edit"}))}),Object(h.jsxs)(l.b,{title:"Edit Resource",onClickOk:function(){var e,n,r,o,i,a,c,s,l,d,u,m="tag"===(null===t||void 0===t||null===(e=t.resourceInfo)||void 0===e?void 0:e.schemaName)||"role"===(null===t||void 0===t||null===(n=t.resourceInfo)||void 0===n?void 0:n.schemaName)||"endpoint"===(null===t||void 0===t||null===(r=t.resourceInfo)||void 0===r?void 0:r.schemaName)||"ratelimit"===(null===t||void 0===t||null===(o=t.resourceInfo)||void 0===o?void 0:o.schemaName)||"dashboard"===(null===t||void 0===t||null===(i=t.resourceInfo)||void 0===i?void 0:i.schemaName)||"schedule"===(null===t||void 0===t||null===(a=t.resourceInfo)||void 0===a?void 0:a.schemaName)||"publishedfolder"===(null===t||void 0===t||null===(c=t.resourceInfo)||void 0===c?void 0:c.schemaName)?null===t||void 0===t||null===(s=t.resourceInfo)||void 0===s?void 0:s.self:null===t||void 0===t||null===(l=t.resourceInfo)||void 0===l?void 0:l.parent;"page"===(null===t||void 0===t||null===(d=t.resourceInfo)||void 0===d?void 0:d.schemaName)&&(m=(null===t||void 0===t||null===(u=t.resourceInfo)||void 0===u?void 0:u.self)+"?ignoreContent=true"),x(m,"update",t)},children:[Object(h.jsx)(c.b,{schemaName:v||(null===t||void 0===t||null===(n=t.resourceInfo)||void 0===n?void 0:n.schemaName),children:Object(h.jsx)(c.d,{name:"edit_form",form:w,inEditMode:!0,preserve:!1,defaultValues:O(t)})}),!y(i.d.Dashboard)&&Object(h.jsx)(u.a,{})]})]})}}}]);
//# sourceMappingURL=33.c9e95621.chunk.js.map