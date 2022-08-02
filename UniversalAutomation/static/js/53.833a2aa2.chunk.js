(this["webpackJsonppowershelluniversal.adminconsole"]=this["webpackJsonppowershelluniversal.adminconsole"]||[]).push([[53,2],{1006:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return j}));var n=a(12),i=a(76),r=(a(0),a(98)),c=a(95),s=a(74),o=a(38),l=a(600),d=a(56),u=a(4);function j(e){var t=e.to,a=e.accessControls,j=e.allowedWithOneWayGitSync,b=Object(i.a)(e,["to","accessControls","allowedWithOneWayGitSync"]);return Object(u.jsx)(r.a,{requiredRoles:["Administrator","Operator"],requiredAccessControls:d.a.Edit,accessControls:a,allowedWithOneWayGitSync:j,children:Object(u.jsx)(c.a,{title:"Edit Details",children:Object(u.jsx)(o.b,{to:t,children:Object(u.jsx)(s.a,Object(n.a)({type:"text",icon:Object(u.jsx)(l.a,{})},b))})})})}},1342:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return R}));var n=a(49),i=a.n(n),r=a(12),c=a(86),s=a(25),o=a(0),l=a.n(o),d=a(423),u=a(22),j=a(301),b=a(919),h=a(456),m=a(95),O=a(74),p=a(920),f=a(691),y=a(926),x=a(455),g=a(457),v=a(918),k=a(941),S=a(56),I=a(460),w=a(158),C=a(445),W=a(623),T=a(1006),q=a(303),A=a(98),F=a(4),B=l.a.lazy((function(){return Promise.resolve().then(a.bind(null,462))})),D=j.default.Option,E=function(e){var t=l.a.useState(!1),a=Object(s.a)(t,2),n=a[0],o=a[1],d=l.a.useState(!1),j=Object(s.a)(d,2),y=j[0],x=j[1],g=b.a.useForm(),v=Object(s.a)(g,1)[0],k=Object(u.b)().mutateAsync,S=Object(q.a)(),I=l.a.useCallback(Object(c.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.validateFields();case 2:return a=t.sent,x(!0),t.next=6,k(Object(r.a)({key:"/settings/authentication/".concat(e.resource.id),action:"update"},S(Object(r.a)(Object(r.a)({},e.resource),a))),{onError:function(e){var t;o(!1),x(!1),h.a.error({message:"Error",description:null===(t=e.response)||void 0===t?void 0:t.data,icon:Object(F.jsx)(w.a,{style:{color:"red"}})})},onSuccess:function(e,t){x(!1),o(!1),u.a.refetchQueries("/settings/authentication")}});case 6:case"end":return t.stop()}}),t)}))),[v,k,S,e.resource]);return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(A.a,{requiredRoles:["Administrator","Operator"],allowedWithOneWayGitSync:!1,children:Object(F.jsx)(m.a,{title:"Edit",children:Object(F.jsx)(O.a,{onClick:function(){return o(!0)},icon:Object(F.jsx)(C.a,{}),type:"text"})})}),Object(F.jsx)(p.a,{title:"SAML2 Options",visible:n,onCancel:function(){return o(!1)},footer:[Object(F.jsx)(O.a,{href:"https://docs.powershelluniversal.com/config/security/saml2",target:"_blank",type:"primary",style:{float:"left"},children:"Learn More"},"link"),Object(F.jsx)(O.a,{onClick:function(){o(!1)},children:"Cancel"},"back"),Object(F.jsx)(O.a,{type:"primary",onClick:function(){I()},loading:y,children:"Save"},"submit")],children:Object(F.jsxs)(b.a,{size:"small",form:v,layout:"vertical",initialValues:Object(r.a)({},e.resource),children:[Object(F.jsx)(b.a.Item,{name:"entityID",label:"Entity ID",tooltip:"The service provider entity ID.",style:{marginBottom:0},rules:[{required:!0,message:"The entity ID is required"}],children:Object(F.jsx)(f.default,{})}),Object(F.jsx)(b.a.Item,{name:"IdentityProviderEntityId",label:"Identity Provider Entity ID",tooltip:"The identity provider entity ID. This will be used as the metadata address if none is specified.",rules:[{required:!0,message:"The identity provider entity ID is required"}],style:{marginBottom:0},children:Object(F.jsx)(f.default,{})}),Object(F.jsx)(b.a.Item,{name:"metadataAddress",label:"Metadata Address",tooltip:"The metadata address if it is different than the identity provider ID.",style:{marginBottom:0},children:Object(F.jsx)(f.default,{})}),Object(F.jsx)(b.a.Item,{name:"callbackPath",label:"Return URL",tooltip:"The return URL after authentication has been completed.",style:{marginBottom:0},children:Object(F.jsx)(f.default,{})}),Object(F.jsx)(b.a.Item,{name:"serviceCertificate",label:"Service Certificate",tooltip:"The certificate responsible for signing requests. This can be a path to a file or the distinguished named of a certificate.",style:{marginBottom:0},children:Object(F.jsx)(f.default,{})})]})})]})},L=function(e){var t=l.a.useState(!1),a=Object(s.a)(t,2),n=a[0],o=a[1],d=l.a.useState(!1),x=Object(s.a)(d,2),g=x[0],v=x[1],k=b.a.useForm(),S=Object(s.a)(k,1)[0],I=Object(u.b)().mutateAsync,W=Object(q.a)(),T=l.a.useCallback(Object(c.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.validateFields();case 2:return a=t.sent,v(!0),t.next=6,I(Object(r.a)({key:"/settings/authentication/".concat(e.resource.id),action:"update"},W(Object(r.a)(Object(r.a)({},e.resource),a))),{onError:function(e){var t;o(!1),v(!1),h.a.error({message:"Error",description:null===(t=e.response)||void 0===t?void 0:t.data,icon:Object(F.jsx)(w.a,{style:{color:"red"}})})},onSuccess:function(e,t){v(!1),o(!1),u.a.refetchQueries("/settings/authentication")}});case 6:case"end":return t.stop()}}),t)}))),[S,I,W,e.resource]);return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(A.a,{requiredRoles:["Administrator","Operator"],allowedWithOneWayGitSync:!1,children:Object(F.jsx)(m.a,{title:"Edit",children:Object(F.jsx)(O.a,{onClick:function(){return o(!0)},icon:Object(F.jsx)(C.a,{}),type:"text"})})}),Object(F.jsx)(p.a,{title:"WS-Federation Options",visible:n,onCancel:function(){return o(!1)},footer:[Object(F.jsx)(O.a,{href:"https://docs.powershelluniversal.com/config/security/ws-federation",target:"_blank",type:"primary",style:{float:"left"},children:"Learn More"},"link"),Object(F.jsx)(O.a,{onClick:function(){o(!1)},children:"Cancel"},"back"),Object(F.jsx)(O.a,{type:"primary",onClick:function(){T()},loading:g,children:"Save"},"submit")],children:Object(F.jsxs)(b.a,{size:"small",form:S,layout:"vertical",initialValues:Object(r.a)({},e.resource),children:[Object(F.jsx)(b.a.Item,{name:"callbackPath",label:"Callback Path",tooltip:"The callback path that the WS-Federation provider will use.",style:{marginBottom:0},rules:[{required:!0,message:"The callback path is required!"}],children:Object(F.jsx)(f.default,{})}),Object(F.jsx)(b.a.Item,{name:"metadataAddress",label:"Metadata Address",tooltip:"The meta data address.",rules:[{required:!0,message:"The metadata address is required!"}],style:{marginBottom:0},children:Object(F.jsx)(f.default,{})}),Object(F.jsx)(b.a.Item,{name:"wtrealm",label:"WTrealm",tooltip:"The WTRealm.",rules:[{required:!0,message:"The Wtrealm is required!"}],style:{marginBottom:0},children:Object(F.jsx)(f.default,{})}),Object(F.jsx)(b.a.Item,{name:"wreply",label:"Wreply",tooltip:"The Wreply.",rules:[{required:!0,message:"The Wreply is required!"}],style:{marginBottom:0},children:Object(F.jsx)(f.default,{})}),Object(F.jsx)(b.a.Item,{name:"useTokenLifetime",label:"Use Token Lifetime",tooltip:"Indicates that the authentication session lifetime (e.g. cookies) should match that of the authentication token.",style:{marginBottom:0},valuePropName:"checked",children:Object(F.jsx)(y.default,{})}),Object(F.jsx)(b.a.Item,{name:"correlationCookieSameSite",label:"Correlation Cookie SameSite",tooltip:"List of permissions to request.",style:{marginBottom:0},children:Object(F.jsxs)(j.default,{children:[Object(F.jsx)(j.default.Option,{value:"none",children:"None"}),Object(F.jsx)(j.default.Option,{value:"lax",children:"Lax"}),Object(F.jsx)(j.default.Option,{value:"strict",children:"Strict"})]})})]})})]})},G=function(e){var t=l.a.useState(!1),a=Object(s.a)(t,2),n=a[0],o=a[1],d=l.a.useState(!1),x=Object(s.a)(d,2),g=x[0],v=x[1],k=b.a.useForm(),S=Object(s.a)(k,1)[0],I=Object(u.b)().mutateAsync,W=Object(q.a)(),T=l.a.useCallback(Object(c.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.validateFields();case 2:return a=t.sent,v(!0),t.next=6,I(Object(r.a)({key:"/settings/authentication/".concat(e.resource.id),action:"update"},W(Object(r.a)(Object(r.a)({},e.resource),a))),{onError:function(e){var t;o(!1),v(!1),h.a.error({message:"Error",description:null===(t=e.response)||void 0===t?void 0:t.data,icon:Object(F.jsx)(w.a,{style:{color:"red"}})})},onSuccess:function(e,t){v(!1),o(!1),u.a.refetchQueries("/settings/authentication")}});case 6:case"end":return t.stop()}}),t)}))),[S,I,W,e.resource]);return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(A.a,{requiredRoles:["Administrator","Operator"],allowedWithOneWayGitSync:!1,children:Object(F.jsx)(m.a,{title:"Edit",children:Object(F.jsx)(O.a,{onClick:function(){return o(!0)},icon:Object(F.jsx)(C.a,{}),type:"text"})})}),Object(F.jsx)(p.a,{title:"OpenID Connect Options",visible:n,onCancel:function(){return o(!1)},footer:[Object(F.jsx)(O.a,{href:"https://docs.powershelluniversal.com/config/security/openid-connect",target:"_blank",type:"primary",style:{float:"left"},children:"Learn More"},"link"),Object(F.jsx)(O.a,{onClick:function(){o(!1)},children:"Cancel"},"back"),Object(F.jsx)(O.a,{type:"primary",onClick:function(){T()},loading:g,children:"Save"},"submit")],children:Object(F.jsxs)(b.a,{size:"small",form:S,layout:"vertical",initialValues:Object(r.a)({},e.resource),children:[Object(F.jsx)(b.a.Item,{name:"callbackPath",label:"Callback Path",tooltip:"The callback path that the OpenID Connect provider will use.",style:{marginBottom:0},rules:[{required:!0,message:"The callback path is required!"}],children:Object(F.jsx)(f.default,{})}),Object(F.jsx)(b.a.Item,{name:"clientId",label:"Client ID",tooltip:"The client ID used to register this application.",rules:[{required:!0,message:"The client ID is required!"}],style:{marginBottom:0},children:Object(F.jsx)(f.default,{})}),Object(F.jsx)(b.a.Item,{name:"clientSecret",label:"Client Secret",tooltip:"The client secret used to identify this application.",style:{marginBottom:0},children:Object(F.jsx)(f.default,{})}),Object(F.jsx)(b.a.Item,{name:"authority",label:"Authority",tooltip:"The URL to the authority authenticating the request.",style:{marginBottom:0},rules:[{required:!0,message:"The authority is required!"}],children:Object(F.jsx)(f.default,{})}),Object(F.jsx)(b.a.Item,{name:"resource",label:"Resource",tooltip:"An additional resource to request access to via an access token.",style:{marginBottom:0},children:Object(F.jsx)(f.default,{})}),Object(F.jsx)(b.a.Item,{name:"responseType",label:"Response Type",tooltip:"The OpenID Connect response type. Specify code, token, and\\or token_id separated by spaces",rules:[{required:!0,message:"Response type is required!"}],style:{marginBottom:0},children:Object(F.jsx)(f.default,{})}),Object(F.jsx)(b.a.Item,{name:"saveTokens",label:"Save Tokens",tooltip:"Defines whether access and refresh tokens should be stored.",style:{marginBottom:0},valuePropName:"checked",children:Object(F.jsx)(y.default,{})}),Object(F.jsx)(b.a.Item,{name:"useTokenLifetime",label:"Use Token Lifetime",tooltip:"Indicates that the authentication session lifetime (e.g. cookies) should match that of the authentication token.",style:{marginBottom:0},valuePropName:"checked",children:Object(F.jsx)(y.default,{})}),Object(F.jsx)(b.a.Item,{name:"getClaimsFromUserInfoEndpoint",label:"Get Claims From User Info Endpoint",tooltip:"Whether to retrieve additional claims or not after creating an identity from id_token received from token endpoint. ",style:{marginBottom:0},valuePropName:"checked",children:Object(F.jsx)(y.default,{})}),Object(F.jsx)(b.a.Item,{name:"scopes",label:"Scopes",tooltip:"List of permissions to request. Separate scopes by spaces",style:{marginBottom:0},children:Object(F.jsx)(f.default,{})}),Object(F.jsx)(b.a.Item,{name:"correlationCookieSameSite",label:"Correlation Cookie SameSite",tooltip:"List of permissions to request.",style:{marginBottom:0},children:Object(F.jsxs)(j.default,{children:[Object(F.jsx)(j.default.Option,{value:"none",children:"None"}),Object(F.jsx)(j.default.Option,{value:"lax",children:"Lax"}),Object(F.jsx)(j.default.Option,{value:"strict",children:"Strict"})]})})]})})]})};function R(){var e=Object(u.b)().mutateAsync,t=l.a.useState(!1),a=Object(s.a)(t,2),n=a[0],o=a[1],b=Object(d.a)("/settings/authentication",{refetchOnWindowFocus:!1}),m=b.data,p=b.isLoading,f=b.refetch,C=l.a.useCallback(function(){var t=Object(c.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(1!==m.filter((function(e){return!e.disabled})).length||a.disabled){t.next=3;break}return x.b.error("You must have at least one enabled authentication method."),t.abrupt("return");case 3:return t.next=5,e(Object(r.a)(Object(r.a)({key:"/settings/authentication/".concat(a.id),action:"update"},a),{},{disabled:!a.disabled}),{onSuccess:function(e,t){f()}});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[e,f,m]),q=l.a.useCallback(function(){var t=Object(c.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o(!0),t.next=3,e({key:"/settings/authentication",action:"create",type:a,disabled:!0},{onError:function(e){o(!1),h.a.error({message:"Error",description:e.response.data,icon:Object(F.jsx)(w.a,{style:{color:"red"}})})},onSuccess:function(e,t){o(!1),f()}});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[e,f]),R=[S.b.Form,S.b.OpenIDConnect,S.b.Saml2,S.b.Windows,S.b.WSFederation].filter((function(e){return-1===(null===m||void 0===m?void 0:m.map((function(e){return e.type})).indexOf(e))})),P=function(e){switch(e){case S.b.Form:return"Form";case S.b.Windows:return"Windows";case S.b.OpenIDConnect:return"OpenID Connect";case S.b.WSFederation:return"WS-Federation";case S.b.Saml2:return"SAML2"}},M=[{key:"type",title:"Type",dataIndex:"type",editable:!1,sorter:function(e,t){return P(e.type).localeCompare(P(t.type))},sortDirections:["descend"],render:function(e,t){return Object(F.jsx)(g.b,{children:P(t.type)})}},{key:"source",title:"Source",dataIndex:"source",editable:!1},{key:"enabled",title:"Enabled",dataIndex:"enabled",editable:!1,render:function(e,t){return Object(F.jsx)(v.a,{disabled:"appsettings.json"===t.source,okText:"Yes",cancelText:"No",onConfirm:function(){return C(t)},title:"Are you sure you want to ".concat(t.disabled?"enabled":"disable"," this authentication method? You may lose access to the admin console if not configured properly."),children:Object(F.jsx)(y.default,{disabled:"appsettings.json"===t.source,checked:!t.disabled})})}},{width:"fit-content",dataIndex:"actions",editable:!1,render:function(e,t){return"appsettings.json"===t.source?Object(F.jsx)(F.Fragment,{}):t.type===S.b.Form?Object(F.jsx)(g.b,{children:Object(F.jsx)(T.default,{to:"".concat(null===t||void 0===t?void 0:t.id),allowedWithOneWayGitSync:!1})}):t.type===S.b.OpenIDConnect?Object(F.jsxs)(g.b,{children:[Object(F.jsx)(G,{resource:t,allowedWithOneWayGitSync:!1}),Object(F.jsx)(B,{resource:t,refetch:["/settings/authentication"],allowedWithOneWayGitSync:!1})]}):t.type===S.b.WSFederation?Object(F.jsxs)(g.b,{children:[Object(F.jsx)(L,{resource:t,allowedWithOneWayGitSync:!1}),Object(F.jsx)(B,{resource:t,refetch:["/settings/authentication"],allowedWithOneWayGitSync:!1})]}):t.type===S.b.Saml2?Object(F.jsxs)(g.b,{children:[Object(F.jsx)(E,{resource:t,allowedWithOneWayGitSync:!1}),Object(F.jsx)(B,{resource:t,refetch:["/settings/authentication"],allowedWithOneWayGitSync:!1})]}):Object(F.jsx)(g.b,{children:Object(F.jsx)(B,{resource:t,refetch:["/settings/authentication"],allowedWithOneWayGitSync:!1})})}}];return Object(F.jsx)(k.a,{title:"Authentication",subTitle:"Authentication methods for the platform.",extra:[R.length>0&&Object(F.jsx)(A.a,{requiredRoles:["Administrator","Operator"],allowedWithOneWayGitSync:!1,children:Object(F.jsx)(j.default,{style:{width:250},placeholder:"Add Authentication Method",onChange:q,loading:n,disabled:n,children:R.map((function(e){return Object(F.jsx)(D,{value:e,children:P(e)},e)}))})}),Object(F.jsx)(O.a,{icon:Object(F.jsx)(W.a,{}),href:"https://docs.powershelluniversal.com/config/security#forms-authentication",target:"_blank",children:"Documentation"})],children:Object(F.jsx)(I.default,{title:"Authentication",data:m,columns:M,loading:p,queryFn:f})})}}}]);
//# sourceMappingURL=53.833a2aa2.chunk.js.map