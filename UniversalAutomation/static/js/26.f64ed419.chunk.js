(this["webpackJsonppowershelluniversal.adminconsole"]=this["webpackJsonppowershelluniversal.adminconsole"]||[]).push([[26,2,108],{1006:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var r=n(12),o=n(76),i=(n(0),n(98)),a=n(95),u=n(74),c=n(38),l=n(600),d=n(56),s=n(4);function v(e){var t=e.to,n=e.accessControls,v=e.allowedWithOneWayGitSync,b=Object(o.a)(e,["to","accessControls","allowedWithOneWayGitSync"]);return Object(s.jsx)(i.a,{requiredRoles:["Administrator","Operator"],requiredAccessControls:d.a.Edit,accessControls:n,allowedWithOneWayGitSync:v,children:Object(s.jsx)(a.a,{title:"Edit Details",children:Object(s.jsx)(c.b,{to:t,children:Object(s.jsx)(u.a,Object(r.a)({type:"text",icon:Object(s.jsx)(l.a,{})},b))})})})}},1019:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var r=n(12),o=(n(0),n(948)),i=n(941),a=n(43),u=n(4);function c(e){var t=Object(a.h)();return Object(u.jsx)(o.a,{bordered:!1,bodyStyle:{padding:0},children:Object(u.jsx)(i.a,Object(r.a)(Object(r.a)({},e),{},{ghost:!0,onBack:function(){return t(-1)}}))})}},1340:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var r=n(12),o=(n(695),n(0),n(43)),i=n(995),a=n(461),u=n(22),c=n(423),l=n(1019),d=n(460),s=n(457),v=n(74),b=n(462),f=n(1006),g=n(68),j=n(4);function p(){var e,t=Object(o.i)().id,n=Object(c.a)("/role/".concat(t),{enabled:!!t,initialData:function(){var e;return(null===(e=u.a.getQueryData("/role"))||void 0===e?void 0:e.find((function(e){return(null===e||void 0===e?void 0:e.id)===parseInt(t)})))||null}}).data,p=Object(c.a)("/role/".concat(t,"/identity"),{enabled:!!n}),h=p.data,m=p.isLoading;function O(e){return"Admin"===e.name||"System"===e.name}var x=[{key:"name",title:"Name",dataIndex:"name"},{width:"fit-content",dataIndex:"actions",render:function(e,t){return Object(j.jsxs)(s.b,{children:[Object(j.jsx)(f.default,{to:"/security/identities/".concat(null===t||void 0===t?void 0:t.id),allowedWithOneWayGitSync:!1}),Object(j.jsx)(b.default,{hidden:O(t),resource:t,allowedWithOneWayGitSync:!1})]})}}];return Object(j.jsxs)(a.c,{resource:Object(r.a)(Object(r.a)({},n),{},{resourceInfo:Object(r.a)(Object(r.a)({},n.resourceInfo),{},{parent:null===n||void 0===n||null===(e=n.resourceInfo)||void 0===e?void 0:e.self}),content:null===n||void 0===n?void 0:n.policy}),children:[Object(j.jsx)(a.f,{children:Object(j.jsx)(l.default,{title:Object(g.b)(null===n||void 0===n?void 0:n.name),subTitle:"#".concat(null===n||void 0===n?void 0:n.id)})}),Object(j.jsxs)(a.e,{children:[Object(j.jsx)(a.a,{children:Object(j.jsx)(i.b,{children:Object(j.jsx)(i.c,{title:"Policy Editor"})})}),Object(j.jsx)(a.g,{children:Object(j.jsx)(d.default,{actions:[Object(j.jsx)(a.h,{children:Object(j.jsx)(v.a,{})})],title:"Identities",data:h,columns:x,loading:m})})]})]})}},995:function(e,t,n){"use strict";n.d(t,"b",(function(){return R})),n.d(t,"a",(function(){return N})),n.d(t,"c",(function(){return P}));var r=n(76),o=n(12),i=n(25),a=n(49),u=n.n(a),c=n(86),l=n(0),d=n.n(l),s=n(455),v=n(95),b=n(288),f=n(948),g=n(74),j=n(68),p=n(22),h=n(448),m=n(366),O=n(367),x=n(110),y=n(443),k=n(98),C=n(1041),w=n(132),I={base:"vs-dark",inherit:!0,rules:[{token:"custom-error",foreground:"d32029"},{token:"custom-verbose",foreground:"177ddc"},{token:"custom-warning",foreground:"d89614"},{token:"custom-debug",foreground:"13a8a8"}],colors:{"activityBar.background":"#060606","activityBar.foreground":"#A9A9A9","editor.background":"#060606","editor.foreground":"#ffffff4d","activityBarBadge.background":"#A9A9A9","editor.lineHighlightBackground":"#141414","editor.selectionBackground":"#141414"}},S={base:"vs",inherit:!0,rules:[{token:"custom-error",foreground:"d32029"},{token:"custom-verbose",foreground:"177ddc"},{token:"custom-warning",foreground:"d89614"},{token:"custom-debug",foreground:"13a8a8"}],colors:{"activityBar.background":"#E1ECF9","activityBar.foreground":"#A9A9A9","editor.background":"#ffffff","editor.foreground":"#000000","activityBarBadge.background":"#A9A9A9","editor.lineHighlightBackground":"#c2c2c2","editor.selectionBackground":"#e1ecf8"}},A=n(115),B=n(56),M=n(1040),E=n(461),L=n(231),W=n(122),T=n.n(W),V=n(4);C.b.config({paths:{vs:"/admin/vs"}}),C.b.init().then((function(e){e.languages.registerDocumentFormattingEditProvider("powershell",{displayName:"PowerShell",provideDocumentFormattingEdits:function(){var e=Object(c.a)(u.a.mark((function e(t,n,r){var o,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.post("/api/v1/editor/format",t.getValue(),{headers:{"content-type":"text/plain"}});case 2:return o=e.sent,i=o.data,e.abrupt("return",[{text:i,range:{startColumn:1,startLineNumber:1,endLineNumber:t.getLineCount(),endColumn:t.getLineMaxColumn(t.getLineCount())}}]);case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()});var t=["$","-","\\","/",":","."];e.languages.registerCompletionItemProvider("powershell",{triggerCharacters:t,provideCompletionItems:function(){var n=Object(c.a)(u.a.mark((function n(r,o,i){var a,c,l;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(-1===t.findIndex((function(e){return e===i.triggerCharacter}))){n.next=7;break}return n.next=3,T.a.post("/api/v1/editor/complete",{content:r.getValue(),cursorPosition:r.getOffsetAt(o)});case 3:return a=n.sent,c=a.data,l=null===c||void 0===c?void 0:c.map((function(t){return{insertText:t.text,label:t.text,documentation:t.help,kind:e.languages.CompletionItemKind.Property}})),n.abrupt("return",{incomplete:!1,suggestions:l});case 7:return n.abrupt("return",null);case 8:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}()})}));var D=d.a.createContext(null);function R(e){var t=e.children,n=e.refetch,r=void 0===n?function(){}:n,o=d.a.useState(!1),a=Object(i.a)(o,2),l=a[0],v=a[1],b=d.a.useState(!1),f=Object(i.a)(b,2),g=f[0],j=f[1],h=Object(p.b)().mutateAsync,m=Object(w.b)().currentTheme,O=Object(A.a)().userData,x=Object(C.c)(),y=Object(L.a)({onSuccess:function(e){return s.b.success("Copied.")}}).copy,k=d.a.useRef(null),B=d.a.useCallback(function(){var e=Object(c.a)(u.a.mark((function e(t,n,o){var i,a,c,l,d,b,f,g,m,O,x,y,C,w,I,S,A;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),v(!0),"/script"===t&&(o.content=null===k||void 0===k||null===(c=k.current)||void 0===c?void 0:c.getValue()),"/endpoint"===t&&(t=null===(l=o)||void 0===l||null===(d=l.resourceInfo)||void 0===d?void 0:d.self,o.scriptBlock=null===k||void 0===k||null===(b=k.current)||void 0===b?void 0:b.getValue()),"/dashboard"===t&&(t=null===(f=o)||void 0===f||null===(g=f.resourceInfo)||void 0===g?void 0:g.self,o.content=null===k||void 0===k||null===(m=k.current)||void 0===m?void 0:m.getValue()),t.startsWith("/role")&&(t=null===(O=o)||void 0===O||null===(x=O.resourceInfo)||void 0===x?void 0:x.self,o.policy=null===k||void 0===k||null===(y=k.current)||void 0===y?void 0:y.getValue()),"/settings"===t&&(t="/settings/authentication/1",o.settings=null===k||void 0===k||null===(C=k.current)||void 0===C?void 0:C.getValue()),t.startsWith("/module")&&(t=null===(w=o)||void 0===w||null===(I=w.resourceInfo)||void 0===I?void 0:I.self,o.content=null===k||void 0===k||null===(S=k.current)||void 0===S?void 0:S.getValue()),"configuration"===(null===(i=o)||void 0===i||null===(a=i.resourceInfo)||void 0===a?void 0:a.schemaName)&&(o=null===k||void 0===k||null===(A=k.current)||void 0===A?void 0:A.getValue({preserveBOM:!0,lineEnding:"\r\n"})),e.next=11,h({key:t,action:n,resource:o},{onError:function(e){j(!1),v(!1),s.b.error(e.message)},onSuccess:function(e,n){j(!1),v(!1),s.b.success("Changes saved!"),p.a.refetchQueries(t),r()}});case 11:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),[h,r]),E=d.a.useCallback((function(e,t,n){k.current=e,t.languages.register({id:"psulog"}),t.languages.setMonarchTokensProvider("psulog",{tokenizer:{root:[[/\[error.*/,"custom-error"],[/\[verbose.*/,"custom-verbose"],[/\[warning.*/,"custom-warning"],[/\[debug.*/,"custom-debug"],[/\[information.*/,"custom-info"]]}});var o=e.getModel();o.onDidChangeContent((function(){var e=o.getVersionId();!function(e,t){var n;return function(){for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];clearTimeout(n),n=setTimeout((function(){return e.apply(void 0,o)}),t)}}(Object(c.a)(u.a.mark((function n(){var r,i,a,c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=o.getVersionId(),e===r){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,T.a.post("/api/v1/editor/parse",o.getValue(),{headers:{"content-type":"text/plain"}});case 5:i=n.sent,a=i.data,c=a.map((function(e){return{startColumn:e.token.startColumn,endColumn:e.token.endColumn,startLineNumber:e.token.startLine,endLineNumber:e.token.endLine,severity:M.a.Error,message:e.message}})),t.editor.setModelMarkers(o,"powershell",c);case 9:case"end":return n.stop()}}),n)}))),300)()})),n&&e.addCommand(t.KeyMod.CtrlCmd|t.KeyCode.KEY_S,(function(){var e;return B(null===n||void 0===n||null===(e=n.resourceInfo)||void 0===e?void 0:e.parent,"update",n)})),e.addAction({id:"refresh",label:"Refresh",keybindings:[t.KeyCode.F5],precondition:null,keybindingContext:null,contextMenuGroupId:"navigation",contextMenuOrder:1.5,run:function(e){return r(),null}}),e.addAction({id:"format",label:"Format",keybindings:[t.KeyCode.F8],precondition:null,keybindingContext:null,contextMenuGroupId:"navigation",contextMenuOrder:1.5,run:function(){return e.trigger("anyString","editor.action.formatDocument",null),null}})}),[r,B]);d.a.useEffect((function(){x&&(x.editor.defineTheme("psu-dark",I),x.editor.defineTheme("psu-light",S),x.editor.setTheme("dark"===m?"psu-dark":"psu-light"))}),[m,x]);var W=d.a.useCallback((function(){var e;return y(null===k||void 0===k||null===(e=k.current)||void 0===e?void 0:e.getValue())}),[y]),R=function(){var e;return null===k||void 0===k||null===(e=k.current)||void 0===e?void 0:e.trigger("keyboard","editor.action.fontZoomIn",{})},G=function(){var e;return null===k||void 0===k||null===(e=k.current)||void 0===e?void 0:e.trigger("keyboard","editor.action.fontZoomOut",{})},N=d.a.useMemo((function(){return{isReadOnly:l,setIsReadOnly:v,onSave:B,monaco:x,editor:null===k||void 0===k?void 0:k.current,userData:O,handleEditorDidMount:E,currentTheme:m,onCopy:W,zoomIn:R,zoomOut:G,isSaving:g}}),[m,E,l,x,W,B,O,g]);return Object(V.jsx)(D.Provider,{value:N,children:t})}function G(e){var t,n,r,o=e.children,i=e.resource;return Object(V.jsx)(k.a,{requiredRoles:["Administrator","Operator"],requiredAccessControls:B.a.Edit,accessControls:null===i||void 0===i?void 0:i.accessControls,allowedWithOneWayGitSync:!1,children:Object(V.jsx)(v.a,{title:"Save",children:d.a.cloneElement(o,{type:(null===o||void 0===o||null===(t=o.props)||void 0===t?void 0:t.type)||"text",icon:(null===o||void 0===o||null===(n=o.props)||void 0===n?void 0:n.icon)||Object(V.jsx)(h.a,{}),onClick:Object(j.a)(null===o||void 0===o||null===(r=o.props)||void 0===r?void 0:r.onClick)})})})}function N(e){var t=Object.assign({},e),n=d.a.useContext(D),r=n.currentTheme,i=n.handleEditorDidMount;return Object(V.jsx)(C.a,Object(o.a)({theme:"dark"===r?"psu-dark":"psu-light",language:"powershell",loading:Object(V.jsx)(b.a,{tip:"Loading content..."}),height:"calc((100vh - 256px) - 48px)",onMount:function(e,t){return i(e,t,null)}},t))}function P(e){var t=e.title,n=e.options,i=e.showSave,a=void 0===i||i,u=e.actions,c=e.hideToolbar,s=Object(r.a)(e,["title","options","showSave","actions","hideToolbar"]),p=d.a.useContext(D),h=p.handleEditorDidMount,k=p.currentTheme,C=p.onSave,w=p.onCopy,I=p.zoomIn,S=p.zoomOut,A=p.isSaving,B=Object(E.j)().resource;return Object(V.jsx)(f.a,{bordered:!1,bodyStyle:{padding:0},title:t,extra:!c&&Object(V.jsxs)(l.Fragment,{children:[u,Object(V.jsx)(v.a,{title:"Zoom in",children:Object(V.jsx)(g.a,{type:"text",icon:Object(V.jsx)(m.a,{}),onClick:function(){return I()}})}),Object(V.jsx)(v.a,{title:"Zoom out",children:Object(V.jsx)(g.a,{type:"text",icon:Object(V.jsx)(O.a,{}),onClick:function(){return S()}})}),a&&Object(V.jsx)(G,{resource:B,children:Object(V.jsx)(g.a,{icon:A?Object(V.jsx)(x.a,{}):null,onClick:Object(j.a)((function(){var e;return C(null===B||void 0===B||null===(e=B.resourceInfo)||void 0===e?void 0:e.parent,"update",B)}))})}),Object(V.jsx)(v.a,{title:"Copy",children:Object(V.jsx)(g.a,{type:"text",icon:Object(V.jsx)(y.a,{}),onClick:function(){return w()}})}),Object(V.jsx)(E.b,{children:Object(V.jsx)(g.a,{})})]}),children:Object(V.jsx)(N,Object(o.a)(Object(o.a)({language:"powershell",height:"calc((100vh - 256px) - 48px)",value:(null===B||void 0===B?void 0:B.content)||(null===B||void 0===B?void 0:B.scriptBlock)||(null===B||void 0===B?void 0:B.settings)||(null===s||void 0===s?void 0:s.value),onMount:function(e,t){return h(e,t,B)},theme:"dark"===k?"psu-dark":"psu-light",loading:(null===s||void 0===s?void 0:s.loading)||Object(V.jsx)(b.a,{tip:"Loading content..."})},s),{},{options:Object(o.a)({wordWrap:"on",wrappingIndent:"same",minimap:{enabled:!1},lineHeight:20,lineNumbersMinChars:5,scrollBeyondLastLine:!1,hideCursorInOverviewRuler:!0,overviewRulerLanes:0,overviewRulerBorder:!1},n)}))})}}}]);
//# sourceMappingURL=26.f64ed419.chunk.js.map