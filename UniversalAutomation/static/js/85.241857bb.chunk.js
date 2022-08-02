(this["webpackJsonppowershelluniversal.adminconsole"]=this["webpackJsonppowershelluniversal.adminconsole"]||[]).push([[85],{1446:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return M}));var i=n(49),a=n.n(i),r=n(84),c=n(27),s=n(0),o=n(928),l=n(452),d=n(280),j=n(92),u=n(696),b=n(954),h=n(70),O=n(414),x=n(12),g=n(415),m=n(48),p=n(37),f=n(952),v=n(1038),y=n(3);function w(e){var t=e.sha,n=e.path,i=Object(g.a)("/gitstatus/diff/".concat(t,"/").concat(n)),a=i.data;return i.isLoading?Object(y.jsx)(d.a,{}):Object(y.jsx)(v.a,{original:null===a||void 0===a?void 0:a.item1,modified:null===a||void 0===a?void 0:a.item2,height:300})}var k=[{title:"Path",dataIndex:"path",key:"path"},{title:"Type",dataIndex:"type",key:"type",render:function(e,t){return Object(p.k)(t.type)}}],S=function(e){var t=e.commitId,n=Object(g.a)("/gitStatus/".concat(t)),i=n.data,a=n.isLoading;return Object(y.jsx)(f.a,{dataSource:i,columns:k,loading:a,expandable:{expandedRowRender:function(e){return Object(y.jsx)(w,{sha:e.commitId,path:e.path})},rowExpandable:function(e){return e.type===m.g.Modified}}})},I=[{title:"Id",dataIndex:"id",key:"id"},{title:"Result",key:"result",render:function(e,t){return Object(p.l)(t.result)}},{title:"Result Message",dataIndex:"resultMessage",key:"resultMessage"},{title:"Timestamp",dataIndex:"timestamp",key:"timestamp",render:function(e,t){return Object(p.c)(null===t||void 0===t?void 0:t.timestamp)}}];function T(e){var t=e.data,n=e.isLoading;return Object(y.jsx)(f.a,{dataSource:null===t||void 0===t?void 0:t.filter((function(e){return 0!==e.changes})).map((function(e){return Object(x.a)(Object(x.a)({},e),{},{key:e.id})})),columns:I,loading:n,expandable:{expandedRowRender:function(e){return Object(y.jsx)(S,{commitId:e.commitId})},rowExpandable:function(){return!0}}})}var R=n(456),z=n(127),G=n(209);function L(e){var t=e.initialValues,n=Object(z.e)(),i=n.onOk,a=n.form;return Object(y.jsxs)(s.Fragment,{children:[Object(y.jsx)(z.d,{requiredRoles:["Administrator"],requiredAccessControls:m.b.Create,allowedWithOneWayGitSync:!0,children:Object(y.jsx)(h.a,{children:"Git Settings"})}),Object(y.jsx)(z.b,{title:"Git Settings",onClickOk:function(){i("/git/settings","create",{})},formName:"update_git_settings_form",children:Object(y.jsx)(G.b,{schemaName:"gitSettings",children:Object(y.jsx)(G.d,{initialValues:t,name:"update_git_settings_form",form:a,preserve:!1})})})]})}var P=n(440),W=n(636),_=n(117),N=n.n(_),B=n(72),C=n.n(B);function M(){var e,t=Object(g.a)("/gitStatus"),n=t.data,i=t.isLoading,x=t.refetch,p=Object(g.a)("/git/settings"),f=p.data,v=p.isLoading,w=Object(s.useState)(!1),k=Object(c.a)(w,2),S=k[0],I=k[1];if(!f)return Object(y.jsx)(o.a,{title:"Git synchronization is disabled",subTitle:"You can configure git settings below.",extra:[Object(y.jsxs)(l.b,{children:[Object(y.jsx)(z.a,{children:Object(y.jsx)(L,{initialValues:null})}),Object(y.jsx)(R.a,{url:"config/git"})]})]});if(v)return Object(y.jsx)(d.a,{});f.syncBehavior===m.h.TwoWay?e=Object(y.jsx)(j.a,{title:"PowerShell Universal is pushing and pulling changes from git.",children:Object(y.jsx)(u.a,{color:"blue",children:"Two-Way"})}):f.syncBehavior===m.h.OneWay?e=Object(y.jsx)(j.a,{title:"PowerShell Universal is running in read-only mode and pulling changes from git.",children:Object(y.jsx)(u.a,{color:"blue",children:"One-Way"})}):f.syncBehavior===m.h.PushOnly&&(e=Object(y.jsx)(j.a,{title:"PowerShell Universal is pushing changes but will not pull changes.",children:Object(y.jsx)(u.a,{color:"blue",children:"Push Only"})}));var G=function(){var e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I(!0),e.next=3,N.a.get("/api/v1/git/sync");case 3:I(!1),x();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_="Never",B="Never;";return n&&(_=C()().to(n[0].timestamp),B=C()(n[0].timestamp).toString()),Object(y.jsx)(b.a,{title:"Git",subTitle:"Git synchronization pulls and pushes to a remote repository.",extra:[Object(y.jsxs)(l.b,{children:[Object(y.jsxs)(j.a,{title:B,children:[Object(y.jsx)(P.a,{})," ",_]}),Object(y.jsx)(h.a,{icon:Object(y.jsx)(W.a,{}),loading:S,onClick:G,children:"Synchronize Now"}),Object(y.jsx)(z.a,{children:Object(y.jsx)(L,{initialValues:f})}),Object(y.jsx)(R.a,{url:"config/git"})]})],tags:e,children:Object(y.jsxs)(l.b,{direction:"vertical",style:{width:"100%"},children:[Object(y.jsxs)(l.b,{direction:"horizontal",children:[Object(y.jsxs)(l.b,{direction:"horizontal",children:[Object(y.jsx)(O.a.Text,{strong:!0,children:"Remote:"}),Object(y.jsx)(O.a.Text,{code:!0,children:f.remote})]}),Object(y.jsxs)(l.b,{direction:"horizontal",children:[Object(y.jsx)(O.a.Text,{strong:!0,children:"Branch:"}),Object(y.jsx)(O.a.Text,{code:!0,children:f.remote})]})]}),Object(y.jsx)(T,{data:n,isLoading:i})]})})}}}]);
//# sourceMappingURL=85.241857bb.chunk.js.map