(this["webpackJsonppowershelluniversal.adminconsole"]=this["webpackJsonppowershelluniversal.adminconsole"]||[]).push([[23,30,100,102],{1076:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));var l=n(12),i=(n(0),n(301)),a=n(423),r=n(4);function o(e){var t=Object(a.a)("/environment"),n=t.data,o=t.isLoading;return Object(r.jsxs)(i.default,Object(l.a)(Object(l.a)({},e),{},{loading:o,children:[Object(r.jsx)(i.default.Option,{value:null,children:"Default"},"default"),null===n||void 0===n?void 0:n.map((function(e){return Object(r.jsx)(i.default.Option,{value:e.name,children:e.name},e.name)}))]}))}},1079:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var l=n(12),i=n(0),a=n.n(i),r=n(301),o=n(423),c=n(38),d=n(4);function u(e){var t=Object(o.a)("/variable").data,n=null===t||void 0===t?void 0:t.filter((function(e){return"PSCredential"===e.type&&!e.disableRunAsSupport}));return Object(d.jsxs)(a.a.Fragment,{children:[Object(d.jsxs)(r.default,Object(l.a)(Object(l.a)({},e),{},{children:[Object(d.jsx)(r.default.Option,{value:null,children:"Default"},"default"),null===n||void 0===n?void 0:n.map((function(e){return Object(d.jsx)(r.default.Option,{value:e.name,children:e.name},e.name)}))]})),0===(null===n||void 0===n?void 0:n.length)&&Object(d.jsx)(c.b,{to:"/admin/platform/variables",style:{float:"right",padding:0},children:"Add Run As Credential"})]})}},1146:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return C}));var l=n(12),i=n(25),a=n(76),r=n(0),o=n.n(r),c=n(74),d=n(230),u=n(138),s=n(422),j=n(301),v=n(56),f=n(131),b=n(146),p=n(919),h=n(691),m=n(940),O=n(926),x=n(452),y=n(271),g=n(1079),S=n(1076),w=n(4);function k(e){var t=e.parameters,n=e.form,i=e.showGoTo,a=e.script,r=null===t||void 0===t?void 0:t.filter((function(e){return 3!==e.displayType})).map((function(e){return Object(b.a)({},e.name,e.defaultValue)}));return Object(w.jsxs)(p.a,{form:n,layout:"horizontal",name:"dynamic_parameters_form",labelCol:{span:6},wrapperCol:{span:18},initialValues:Object(l.a)(Object(l.a)({},r),{},{gotoJob:!0,environment:"Default"}),children:[null===t||void 0===t?void 0:t.map((function(e){var t,n,i={};return 3!==e.displayType&&e.defaultValue&&(i.initialValue=e.defaultValue),Object(w.jsx)(p.a.Item,Object(l.a)(Object(l.a)({name:e.name,label:e.displayName||e.name,required:e.required,tooltip:e.helpText,rules:[{required:e.required,message:"".concat(e.name," can't be empty.")}]},i),{},{children:0===e.displayType?Object(w.jsx)(h.default,{}):1===e.displayType?Object(w.jsx)(m.default,{defaultValue:0}):2===e.displayType?Object(w.jsx)(O.default,{}):3===e.displayType?Object(w.jsx)(x.a,{showTime:!0,format:"DD-MM-YYYY HH:mm:ss"}):4===e.displayType?Object(w.jsx)(j.default,{children:null===(t=e.validValues)||void 0===t?void 0:t.map((function(e){return Object(w.jsx)(j.default.Option,{value:e,children:e},e)}))}):5===e.displayType?Object(w.jsx)(g.default,{}):6===e.displayType?Object(w.jsx)(j.default,{mode:"tags",tokenSeparators:[",",";"],children:null===(n=e.validValues)||void 0===n?void 0:n.map((function(e){return Object(w.jsx)(j.default.Option,{value:e,children:e},e)}))}):null}),e.id)})),!a.environment&&Object(w.jsx)(p.a.Item,{name:"environment",label:"Environment",children:Object(w.jsx)(S.default,{})}),!a.credential&&Object(w.jsx)(p.a.Item,{name:"credential",label:"Run As",children:Object(w.jsx)(g.default,{})}),i&&Object(w.jsx)(p.a.Item,{name:"gotoJob",tooltip:"Automatically navigate to job page when done.",valuePropName:"checked",label:"Go To Job",children:Object(w.jsx)(y.default,{})})]})}var P=n(633);function C(e){var t,n,b,p,h=e.script,m=Object(a.a)(e,["script"]),O=null===h||void 0===h||null===(t=h.scriptParameters)||void 0===t?void 0:t.map((function(e){return e.parameterSet})).filter((function(e){return"Default"!==e})).filter((function(e,t,n){return n.indexOf(e)===t})),x=o.a.useState((null===h||void 0===h?void 0:h.defaultParameterSet)||O&&O[0]),y=Object(i.a)(x,2),g=y[0],S=y[1],C=Object(f.e)(),T=C.form,D=C.onOk,I=function(e){var t=null!==T.getFieldValue(null===e||void 0===e?void 0:e.name)?T.getFieldValue(null===e||void 0===e?void 0:e.name):null===e||void 0===e?void 0:e.defaultValue;return"System.String[]"===(null===e||void 0===e?void 0:e.type)?JSON.stringify(t):t};return Object(w.jsxs)(r.Fragment,{children:[Object(w.jsx)(f.d,{requiredRoles:["Administrator","Operator","Execute"],requiredAccessControls:v.a.Execute,accessControls:null===h||void 0===h?void 0:h.accessControls,allowedWithOneWayGitSync:!0,children:Object(w.jsx)(c.a,Object(l.a)({type:"primary",icon:Object(w.jsx)(P.a,{})},m))}),Object(w.jsxs)(f.b,{title:"Run ".concat(null===h||void 0===h?void 0:h.fullPath),onClickOk:function(){var e;D("/script/path/".concat(null===h||void 0===h?void 0:h.fullPath),"create",{jobParameters:null===h||void 0===h||null===(e=h.scriptParameters)||void 0===e?void 0:e.filter((function(e){return e.parameterSet===g||"Default"===e.parameterSet})).map((function(e){return{name:null===e||void 0===e?void 0:e.name,type:e.type,value:I(e),displayType:e.displayType}}))})},width:0!==(null===h||void 0===h||null===(n=h.scriptParameters)||void 0===n?void 0:n.length)?1e3:500,children:[Object(w.jsxs)(d.a,{style:{marginBottom:"10px"},children:[Object(w.jsx)(u.a,{span:6}),Object(w.jsxs)(u.a,{span:18,children:[null===h||void 0===h?void 0:h.longDescription,null===h||void 0===h||null===(b=h.links)||void 0===b?void 0:b.map((function(e){return Object(w.jsx)("p",{children:Object(w.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:e})})}))]})]}),(null===O||void 0===O?void 0:O.length)>1&&Object(w.jsxs)(d.a,{style:{marginBottom:"20px"},children:[Object(w.jsx)(u.a,{span:6,style:{textAlign:"right",paddingRight:"10px"},children:Object(w.jsx)(s.a,{children:"Parameter Set:"})}),Object(w.jsx)(u.a,{span:18,children:Object(w.jsx)(j.default,{id:"parameterSet",onChange:function(e){return S(e.toString())},value:g,style:{width:"100%"},defaultValue:null===h||void 0===h?void 0:h.defaultParameterSet,children:null===O||void 0===O?void 0:O.map((function(e){return Object(w.jsx)(j.default.Option,{value:e,children:e},e)}))})})]}),Object(w.jsx)(k,{parameters:null===h||void 0===h||null===(p=h.scriptParameters)||void 0===p?void 0:p.filter((function(e){return 0===(null===O||void 0===O?void 0:O.length)||e.parameterSet===g||"Default"===e.parameterSet})),form:T,showGoTo:!0,script:h})]})]})}},1324:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return N}));var l=n(166),i=n(12),a=n(25),r=n(0),o=n.n(r),c=n(131),d=n(423),u=n(690),s=n(301),j=n(694),v=n(457),f=n(95),b=n(941),p=n(74),h=n(930),m=n(422),O=n(56),x=n(71),y=n.n(x),g=n(466),S=n.n(g),w=n(307),k=n.n(w),P=n(1146),C=n(633),T=n(623),D=n(613),I=n(132),V=n(115),A=n(4),W=o.a.lazy((function(){return Promise.resolve().then(n.bind(null,460))})),z=o.a.lazy((function(){return n.e(1).then(n.bind(null,982))})),G=o.a.lazy((function(){return n.e(81).then(n.bind(null,1350))})),R=o.a.lazy((function(){return n.e(91).then(n.bind(null,1351))})),q=o.a.lazy((function(){return Promise.resolve().then(n.bind(null,462))})),E=o.a.lazy((function(){return n.e(2).then(n.bind(null,1006))})),F=u.a.DirectoryTree,J=s.default.Option;function N(){var e=localStorage.getItem("script-view"),t=o.a.useState([]),n=Object(a.a)(t,2),r=n[0],u=n[1],x=o.a.useState(""),y=Object(a.a)(x,2),g=y[0],S=y[1],w=o.a.useState(e||"folder"),k=Object(a.a)(w,2),N=k[0],L=k[1],Y=Object(I.b)().currentTheme,_=Object(V.a)().settings,B=Object(d.a)("/folder"),H=B.data,M=B.isLoading,K=Object(d.a)("/script",{select:function(e){return e.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{environment:"Default"===e.environment?null:e.environment})}))}}),Q=K.data,U=K.isLoading,X=(M?function(){return[]}:function(){var e={title:"Repository",key:"",children:[]};return H.filter((function(e){return e.type===O.e.Script})).forEach((function(t){t.path.split(null===_||void 0===_?void 0:_.pathDivider).reduce((function(e,n,l,i){return e[n]||(e[n]={children:[]},e.children.push({title:n,key:t.path,children:e[n].children})),e[n]}),e)})),[e]})(),Z=[{key:"name",title:"Name",dataIndex:"name"},{key:"fullPath",title:"Path",dataIndex:"fullPath"},{key:"description",title:"Description",dataIndex:"description"},{key:"environment",title:"Environment",dataIndex:"environment",width:"min-content",align:"center",render:function(e,t){return null===(null===t||void 0===t?void 0:t.environment)?"Default":null===t||void 0===t?void 0:t.environment}},{key:"tags",title:"Tags",dataIndex:"tags",editable:!1,render:function(e,t){var n,i;return(null===(n=t.tag)||void 0===n?void 0:n.length)>0?null===t||void 0===t||null===(i=t.tag)||void 0===i?void 0:i.map((function(e){return Object(A.jsx)(j.a,{color:null===e||void 0===e?void 0:e.color,style:{cursor:"pointer"},onClick:function(){r.find((function(t){return t.name===e.name}))||u([].concat(Object(l.a)(r),[e]))},children:null===e||void 0===e?void 0:e.name},null===e||void 0===e?void 0:e.name)})):null}},{width:"fit-content",dataIndex:"actions",render:function(e,t){var n;return Object(A.jsxs)(v.b,{children:[Object(A.jsx)(c.a,{children:Object(A.jsx)(f.a,{title:"Invoke script",children:Object(A.jsx)(P.default,{accessControls:null===t||void 0===t?void 0:t.accessControls,script:t,icon:Object(A.jsx)(C.a,{}),type:"text"})})},t.id+"run"),Object(A.jsx)(c.a,{children:Object(A.jsx)(z,{accessControls:null===t||void 0===t?void 0:t.accessControls,record:t,allowedWithOneWayGitSync:!1})},t.id+"edit"),Object(A.jsx)(E,{allowedWithOneWayGitSync:!1,accessControls:null===t||void 0===t?void 0:t.accessControls,to:null===t||void 0===t?void 0:t.fullPath}),Object(A.jsx)(q,{allowedWithOneWayGitSync:!1,resource:Object(i.a)(Object(i.a)({},t),{},{resourceInfo:Object(i.a)(Object(i.a)({},null===t||void 0===t?void 0:t.resourceInfo),{},{self:"".concat(null===t||void 0===t||null===(n=t.resourceInfo)||void 0===n?void 0:n.parent,"/").concat(null===t||void 0===t?void 0:t.id)})})})]})}}];return Object(A.jsx)(b.a,{title:"Scripts",subTitle:"PowerShell scripts that can be manually executed or scheduled.",extra:[Object(A.jsx)(p.a,{icon:Object(A.jsx)(T.a,{}),href:"https://docs.powershelluniversal.com/automation/scripts",target:"_blank",children:"Documentation"},"scripts-documentation")],style:{height:"100%"},children:Object(A.jsxs)(h.a,{hasSider:(null===X||void 0===X?void 0:X.length)>0&&"folder"===N,style:{height:"100%",backgroundColor:"dark"===Y?"#141414":"white"},children:[(null===X||void 0===X?void 0:X.length)>0&&"folder"===N&&Object(A.jsx)(h.a.Sider,{theme:Y,children:Object(A.jsxs)("div",{style:{width:"100%"},children:[Object(A.jsx)("div",{className:"ant-table-title",style:{backgroundColor:"dark"===Y?"#141414":"white",width:"100%",height:"64px",padding:"20px"},children:Object(A.jsx)(m.a,{children:"Folders"})}),Object(A.jsx)("div",{style:{height:"54px",backgroundColor:"dark"===Y?"#1d1d1d":"#fafafa"}}),Object(A.jsx)(F,{defaultExpandAll:!0,treeData:X,onSelect:function(e){return S(e[0].toString())},style:{height:"100%"}})]})}),Object(A.jsx)(h.a.Content,{children:Object(A.jsx)(W,{title:"Scripts",actions:[r.map((function(e){return Object(A.jsx)(j.a,{color:e.color,closable:!0,onClose:function(){u(r.filter((function(t){return t.name!==e.name})))},children:e.name})})),Object(A.jsx)(c.a,{children:Object(A.jsx)(G,{parentPath:g,type:O.e.Script})},"folder-modal"),Object(A.jsx)(c.a,{children:Object(A.jsx)(R,{folderPath:g})},"script-modal"),Object(A.jsxs)(s.default,{value:N,onChange:function(e){localStorage.setItem("script-view",e),L(e)},suffixIcon:Object(A.jsx)(D.a,{}),children:[Object(A.jsx)(J,{value:"folder",children:"Folder"}),Object(A.jsx)(J,{value:"list",children:"List"})]},"view-select")],data:function(){var e=null===Q||void 0===Q?void 0:Q.filter((function(e){var t;return 0===r.length||e.tag&&(null===(t=e.tag)||void 0===t?void 0:t.find((function(e){return r.find((function(t){return t.name===e.name}))})))}));return null===e||void 0===e?void 0:e.filter((function(e){return"list"===N||""!==g&&e.fullPath.startsWith(g)||""===g&&-1===e.fullPath.indexOf(null===_||void 0===_?void 0:_.pathDivider)}))}(),columns:Z,loading:U})})]})})}y.a.extend(S.a),y.a.extend(k.a)}}]);
//# sourceMappingURL=23.6ab2fd4c.chunk.js.map