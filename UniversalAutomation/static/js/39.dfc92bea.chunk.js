(this["webpackJsonppowershelluniversal.adminconsole"]=this["webpackJsonppowershelluniversal.adminconsole"]||[]).push([[39,2],{1462:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return f}));var r=t(0),i=t(415),o=t(452),a=t(954),c=t(127),s=t(453),l=t(989),d=t(455),u=t(70),m=t(209),v=t(48),j=t(3);function h(){var e=Object(c.e)(),n=e.onOk,t=e.form;return Object(j.jsxs)(r.Fragment,{children:[Object(j.jsx)(c.d,{requiredRoles:["Administrator"],requiredAccessControls:v.b.Create,allowedWithOneWayGitSync:!1,children:Object(j.jsx)(u.a,{children:"Create New Environment"})}),Object(j.jsx)(c.b,{title:"Create new environment",onClickOk:function(){n("/environment","create",{})},formName:"create_environment_form",children:Object(j.jsx)(m.b,{schemaName:"environment",children:Object(j.jsx)(m.d,{name:"create_environment_form",form:t,preserve:!1})})})]})}var b=t(456);function f(){var e=Object(i.a)("/environment",{enabled:!1,refetchOnWindowFocus:!1}),n=e.data,t=e.isLoading,r=e.refetch,u=[{key:"name",title:"Name",dataIndex:"name",width:"10%"},{key:"version",title:"Version",dataIndex:"version",width:"10%"},{key:"path",title:"Path",dataIndex:"path",width:"20%"},{key:"arguments",title:"Arguments",width:"25%",dataIndex:"arguments"},{width:"fit-content",dataIndex:"actions",render:function(e,n){return Object(j.jsxs)(o.b,{children:[Object(j.jsx)(c.a,{children:Object(j.jsx)(l.default,{record:n,allowedWithOneWayGitSync:!1})}),Object(j.jsx)(d.default,{resource:n,allowedWithOneWayGitSync:!1})]})}}];return Object(j.jsx)(a.a,{title:"Environments",subTitle:"Execution environments for PowerShell scripts within Universal.",extra:[Object(j.jsx)(b.a,{url:"config/environments"})],children:Object(j.jsx)(s.default,{title:"Environments",actions:[Object(j.jsx)(c.a,{children:Object(j.jsx)(h,{})})],data:n,columns:u,loading:t,queryFn:r})})}},983:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));t(0);var r=t(932),i=t(452),o=t(414),a=t(3);function c(){return Object(a.jsx)(r.a,{type:"info",message:Object(a.jsxs)(i.b,{align:"center",style:{width:"100%",justifyContent:"space-between"},children:["Authentication requires a license.",Object(a.jsx)(o.a.Link,{href:"https://ironmansoftware.com/powershell-universal/?rel=product",target:"_blank",children:"Buy License."})]})})}},989:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return j}));var r=t(12),i=t(74),o=(t(0),t(48)),a=t(70),c=t(209),s=t(457),l=t(127),d=t(299),u=t(983),m=t(111),v=t(3);function j(e){var n,t=e.record,j=e.schemaName,h=e.allowedWithOneWayGitSync,b=Object(i.a)(e,["record","schemaName","allowedWithOneWayGitSync"]),f=Object(s.a)().getButtonProps,O=Object(d.a)(),x=Object(l.e)(),p=x.onOk,w=x.form,y=Object(m.a)().licensed;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(l.d,{requiredRoles:["Administrator","Operator"],requiredAccessControls:o.b.Edit,accessControls:b.accessControls,allowedWithOneWayGitSync:h,children:Object(v.jsx)(a.a,Object(r.a)(Object(r.a)(Object(r.a)({},b),f({action:"edit"})),{},{action:"edit"}))}),Object(v.jsxs)(l.b,{title:"Edit Resource",onClickOk:function(){var e,n,r,i,o,a,c,s,l,d,u,m="tag"===(null===t||void 0===t||null===(e=t.resourceInfo)||void 0===e?void 0:e.schemaName)||"role"===(null===t||void 0===t||null===(n=t.resourceInfo)||void 0===n?void 0:n.schemaName)||"endpoint"===(null===t||void 0===t||null===(r=t.resourceInfo)||void 0===r?void 0:r.schemaName)||"ratelimit"===(null===t||void 0===t||null===(i=t.resourceInfo)||void 0===i?void 0:i.schemaName)||"dashboard"===(null===t||void 0===t||null===(o=t.resourceInfo)||void 0===o?void 0:o.schemaName)||"schedule"===(null===t||void 0===t||null===(a=t.resourceInfo)||void 0===a?void 0:a.schemaName)||"publishedfolder"===(null===t||void 0===t||null===(c=t.resourceInfo)||void 0===c?void 0:c.schemaName)?null===t||void 0===t||null===(s=t.resourceInfo)||void 0===s?void 0:s.self:null===t||void 0===t||null===(l=t.resourceInfo)||void 0===l?void 0:l.parent;"page"===(null===t||void 0===t||null===(d=t.resourceInfo)||void 0===d?void 0:d.schemaName)&&(m=(null===t||void 0===t||null===(u=t.resourceInfo)||void 0===u?void 0:u.self)+"?ignoreContent=true"),p(m,"update",t)},children:[Object(v.jsx)(c.b,{schemaName:j||(null===t||void 0===t||null===(n=t.resourceInfo)||void 0===n?void 0:n.schemaName),children:Object(v.jsx)(c.d,{name:"edit_form",form:w,inEditMode:!0,preserve:!1,defaultValues:O(t)})}),!y(o.e.Dashboard)&&Object(v.jsx)(u.a,{})]})]})}}}]);
//# sourceMappingURL=39.dfc92bea.chunk.js.map