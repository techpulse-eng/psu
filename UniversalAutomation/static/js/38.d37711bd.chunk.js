(this["webpackJsonppowershelluniversal.adminconsole"]=this["webpackJsonppowershelluniversal.adminconsole"]||[]).push([[38],{1258:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return k}));var r=t(12),o=t(49),i=t.n(o),a=t(86),u=t(25),c=t(0),l=t(43),d=t(461),s=t(457),v=t(995),b=t(22),g=t(423),p=t(122),f=t.n(p),h=t(4),j=Object(c.lazy)((function(){return t.e(62).then(t.bind(null,1345))})),m=Object(c.lazy)((function(){return t.e(63).then(t.bind(null,1387))})),O=Object(c.lazy)((function(){return t.e(60).then(t.bind(null,1346))})),x=Object(c.lazy)((function(){return t.e(61).then(t.bind(null,1347))}));function k(){var e=Object(l.i)().id,n=Object(g.a)("/endpoint/".concat(e),{enabled:!1}).data,t=Object(b.c)([{queryKey:"/endpoint/".concat(e,"/parts"),queryFn:function(){var n=Object(a.a)(i.a.mark((function n(){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.a.get("/api/v1/endpoint/".concat(e,"/parts"));case 2:return n.abrupt("return",n.sent.data);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),enabled:!!e,refetchOnWindowFocus:!1}]),o=Object(u.a)(t,1)[0].data;return Object(h.jsx)(d.i,{resource:Object(r.a)(Object(r.a)({},n),{},{parts:o,fullUrl:"".concat(window.location.origin).concat(null===n||void 0===n?void 0:n.url)}),children:Object(h.jsxs)(d.e,{children:[Object(h.jsx)(d.a,{children:Object(h.jsx)(v.b,{children:Object(h.jsx)(v.c,{title:"Editor",height:"calc(100vh - 200px)"})})}),Object(h.jsx)(d.g,{children:Object(h.jsxs)(s.b,{direction:"vertical",size:"middle",style:{width:"100%"},children:[Object(h.jsx)(j,{}),Object(h.jsx)(m,{}),Object(h.jsx)(O,{}),Object(h.jsx)(x,{})]})})]})})}},995:function(e,n,t){"use strict";t.d(n,"b",(function(){return F})),t.d(n,"a",(function(){return K})),t.d(n,"c",(function(){return N}));var r=t(76),o=t(12),i=t(25),a=t(49),u=t.n(a),c=t(86),l=t(0),d=t.n(l),s=t(455),v=t(95),b=t(288),g=t(948),p=t(74),f=t(68),h=t(22),j=t(448),m=t(366),O=t(367),x=t(110),k=t(443),y=t(98),C=t(1041),w=t(132),I={base:"vs-dark",inherit:!0,rules:[{token:"custom-error",foreground:"d32029"},{token:"custom-verbose",foreground:"177ddc"},{token:"custom-warning",foreground:"d89614"},{token:"custom-debug",foreground:"13a8a8"}],colors:{"activityBar.background":"#060606","activityBar.foreground":"#A9A9A9","editor.background":"#060606","editor.foreground":"#ffffff4d","activityBarBadge.background":"#A9A9A9","editor.lineHighlightBackground":"#141414","editor.selectionBackground":"#141414"}},A={base:"vs",inherit:!0,rules:[{token:"custom-error",foreground:"d32029"},{token:"custom-verbose",foreground:"177ddc"},{token:"custom-warning",foreground:"d89614"},{token:"custom-debug",foreground:"13a8a8"}],colors:{"activityBar.background":"#E1ECF9","activityBar.foreground":"#A9A9A9","editor.background":"#ffffff","editor.foreground":"#000000","activityBarBadge.background":"#A9A9A9","editor.lineHighlightBackground":"#c2c2c2","editor.selectionBackground":"#e1ecf8"}},M=t(115),B=t(56),S=t(1040),E=t(461),L=t(231),T=t(122),V=t.n(T),z=t(4);C.b.config({paths:{vs:"/admin/vs"}}),C.b.init().then((function(e){e.languages.registerDocumentFormattingEditProvider("powershell",{displayName:"PowerShell",provideDocumentFormattingEdits:function(){var e=Object(c.a)(u.a.mark((function e(n,t,r){var o,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.a.post("/api/v1/editor/format",n.getValue(),{headers:{"content-type":"text/plain"}});case 2:return o=e.sent,i=o.data,e.abrupt("return",[{text:i,range:{startColumn:1,startLineNumber:1,endLineNumber:n.getLineCount(),endColumn:n.getLineMaxColumn(n.getLineCount())}}]);case 5:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}()});var n=["$","-","\\","/",":","."];e.languages.registerCompletionItemProvider("powershell",{triggerCharacters:n,provideCompletionItems:function(){var t=Object(c.a)(u.a.mark((function t(r,o,i){var a,c,l;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(-1===n.findIndex((function(e){return e===i.triggerCharacter}))){t.next=7;break}return t.next=3,V.a.post("/api/v1/editor/complete",{content:r.getValue(),cursorPosition:r.getOffsetAt(o)});case 3:return a=t.sent,c=a.data,l=null===c||void 0===c?void 0:c.map((function(n){return{insertText:n.text,label:n.text,documentation:n.help,kind:e.languages.CompletionItemKind.Property}})),t.abrupt("return",{incomplete:!1,suggestions:l});case 7:return t.abrupt("return",null);case 8:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()})}));var D=d.a.createContext(null);function F(e){var n=e.children,t=e.refetch,r=void 0===t?function(){}:t,o=d.a.useState(!1),a=Object(i.a)(o,2),l=a[0],v=a[1],b=d.a.useState(!1),g=Object(i.a)(b,2),p=g[0],f=g[1],j=Object(h.b)().mutateAsync,m=Object(w.b)().currentTheme,O=Object(M.a)().userData,x=Object(C.c)(),k=Object(L.a)({onSuccess:function(e){return s.b.success("Copied.")}}).copy,y=d.a.useRef(null),B=d.a.useCallback(function(){var e=Object(c.a)(u.a.mark((function e(n,t,o){var i,a,c,l,d,b,g,p,m,O,x,k,C,w,I,A,M;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),v(!0),"/script"===n&&(o.content=null===y||void 0===y||null===(c=y.current)||void 0===c?void 0:c.getValue()),"/endpoint"===n&&(n=null===(l=o)||void 0===l||null===(d=l.resourceInfo)||void 0===d?void 0:d.self,o.scriptBlock=null===y||void 0===y||null===(b=y.current)||void 0===b?void 0:b.getValue()),"/dashboard"===n&&(n=null===(g=o)||void 0===g||null===(p=g.resourceInfo)||void 0===p?void 0:p.self,o.content=null===y||void 0===y||null===(m=y.current)||void 0===m?void 0:m.getValue()),n.startsWith("/role")&&(n=null===(O=o)||void 0===O||null===(x=O.resourceInfo)||void 0===x?void 0:x.self,o.policy=null===y||void 0===y||null===(k=y.current)||void 0===k?void 0:k.getValue()),"/settings"===n&&(n="/settings/authentication/1",o.settings=null===y||void 0===y||null===(C=y.current)||void 0===C?void 0:C.getValue()),n.startsWith("/module")&&(n=null===(w=o)||void 0===w||null===(I=w.resourceInfo)||void 0===I?void 0:I.self,o.content=null===y||void 0===y||null===(A=y.current)||void 0===A?void 0:A.getValue()),"configuration"===(null===(i=o)||void 0===i||null===(a=i.resourceInfo)||void 0===a?void 0:a.schemaName)&&(o=null===y||void 0===y||null===(M=y.current)||void 0===M?void 0:M.getValue({preserveBOM:!0,lineEnding:"\r\n"})),e.next=11,j({key:n,action:t,resource:o},{onError:function(e){f(!1),v(!1),s.b.error(e.message)},onSuccess:function(e,t){f(!1),v(!1),s.b.success("Changes saved!"),h.a.refetchQueries(n),r()}});case 11:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),[j,r]),E=d.a.useCallback((function(e,n,t){y.current=e,n.languages.register({id:"psulog"}),n.languages.setMonarchTokensProvider("psulog",{tokenizer:{root:[[/\[error.*/,"custom-error"],[/\[verbose.*/,"custom-verbose"],[/\[warning.*/,"custom-warning"],[/\[debug.*/,"custom-debug"],[/\[information.*/,"custom-info"]]}});var o=e.getModel();o.onDidChangeContent((function(){var e=o.getVersionId();!function(e,n){var t;return function(){for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];clearTimeout(t),t=setTimeout((function(){return e.apply(void 0,o)}),n)}}(Object(c.a)(u.a.mark((function t(){var r,i,a,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=o.getVersionId(),e===r){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,V.a.post("/api/v1/editor/parse",o.getValue(),{headers:{"content-type":"text/plain"}});case 5:i=t.sent,a=i.data,c=a.map((function(e){return{startColumn:e.token.startColumn,endColumn:e.token.endColumn,startLineNumber:e.token.startLine,endLineNumber:e.token.endLine,severity:S.a.Error,message:e.message}})),n.editor.setModelMarkers(o,"powershell",c);case 9:case"end":return t.stop()}}),t)}))),300)()})),t&&e.addCommand(n.KeyMod.CtrlCmd|n.KeyCode.KEY_S,(function(){var e;return B(null===t||void 0===t||null===(e=t.resourceInfo)||void 0===e?void 0:e.parent,"update",t)})),e.addAction({id:"refresh",label:"Refresh",keybindings:[n.KeyCode.F5],precondition:null,keybindingContext:null,contextMenuGroupId:"navigation",contextMenuOrder:1.5,run:function(e){return r(),null}}),e.addAction({id:"format",label:"Format",keybindings:[n.KeyCode.F8],precondition:null,keybindingContext:null,contextMenuGroupId:"navigation",contextMenuOrder:1.5,run:function(){return e.trigger("anyString","editor.action.formatDocument",null),null}})}),[r,B]);d.a.useEffect((function(){x&&(x.editor.defineTheme("psu-dark",I),x.editor.defineTheme("psu-light",A),x.editor.setTheme("dark"===m?"psu-dark":"psu-light"))}),[m,x]);var T=d.a.useCallback((function(){var e;return k(null===y||void 0===y||null===(e=y.current)||void 0===e?void 0:e.getValue())}),[k]),F=function(){var e;return null===y||void 0===y||null===(e=y.current)||void 0===e?void 0:e.trigger("keyboard","editor.action.fontZoomIn",{})},R=function(){var e;return null===y||void 0===y||null===(e=y.current)||void 0===e?void 0:e.trigger("keyboard","editor.action.fontZoomOut",{})},K=d.a.useMemo((function(){return{isReadOnly:l,setIsReadOnly:v,onSave:B,monaco:x,editor:null===y||void 0===y?void 0:y.current,userData:O,handleEditorDidMount:E,currentTheme:m,onCopy:T,zoomIn:F,zoomOut:R,isSaving:p}}),[m,E,l,x,T,B,O,p]);return Object(z.jsx)(D.Provider,{value:K,children:n})}function R(e){var n,t,r,o=e.children,i=e.resource;return Object(z.jsx)(y.a,{requiredRoles:["Administrator","Operator"],requiredAccessControls:B.a.Edit,accessControls:null===i||void 0===i?void 0:i.accessControls,allowedWithOneWayGitSync:!1,children:Object(z.jsx)(v.a,{title:"Save",children:d.a.cloneElement(o,{type:(null===o||void 0===o||null===(n=o.props)||void 0===n?void 0:n.type)||"text",icon:(null===o||void 0===o||null===(t=o.props)||void 0===t?void 0:t.icon)||Object(z.jsx)(j.a,{}),onClick:Object(f.a)(null===o||void 0===o||null===(r=o.props)||void 0===r?void 0:r.onClick)})})})}function K(e){var n=Object.assign({},e),t=d.a.useContext(D),r=t.currentTheme,i=t.handleEditorDidMount;return Object(z.jsx)(C.a,Object(o.a)({theme:"dark"===r?"psu-dark":"psu-light",language:"powershell",loading:Object(z.jsx)(b.a,{tip:"Loading content..."}),height:"calc((100vh - 256px) - 48px)",onMount:function(e,n){return i(e,n,null)}},n))}function N(e){var n=e.title,t=e.options,i=e.showSave,a=void 0===i||i,u=e.actions,c=e.hideToolbar,s=Object(r.a)(e,["title","options","showSave","actions","hideToolbar"]),h=d.a.useContext(D),j=h.handleEditorDidMount,y=h.currentTheme,C=h.onSave,w=h.onCopy,I=h.zoomIn,A=h.zoomOut,M=h.isSaving,B=Object(E.j)().resource;return Object(z.jsx)(g.a,{bordered:!1,bodyStyle:{padding:0},title:n,extra:!c&&Object(z.jsxs)(l.Fragment,{children:[u,Object(z.jsx)(v.a,{title:"Zoom in",children:Object(z.jsx)(p.a,{type:"text",icon:Object(z.jsx)(m.a,{}),onClick:function(){return I()}})}),Object(z.jsx)(v.a,{title:"Zoom out",children:Object(z.jsx)(p.a,{type:"text",icon:Object(z.jsx)(O.a,{}),onClick:function(){return A()}})}),a&&Object(z.jsx)(R,{resource:B,children:Object(z.jsx)(p.a,{icon:M?Object(z.jsx)(x.a,{}):null,onClick:Object(f.a)((function(){var e;return C(null===B||void 0===B||null===(e=B.resourceInfo)||void 0===e?void 0:e.parent,"update",B)}))})}),Object(z.jsx)(v.a,{title:"Copy",children:Object(z.jsx)(p.a,{type:"text",icon:Object(z.jsx)(k.a,{}),onClick:function(){return w()}})}),Object(z.jsx)(E.b,{children:Object(z.jsx)(p.a,{})})]}),children:Object(z.jsx)(K,Object(o.a)(Object(o.a)({language:"powershell",height:"calc((100vh - 256px) - 48px)",value:(null===B||void 0===B?void 0:B.content)||(null===B||void 0===B?void 0:B.scriptBlock)||(null===B||void 0===B?void 0:B.settings)||(null===s||void 0===s?void 0:s.value),onMount:function(e,n){return j(e,n,B)},theme:"dark"===y?"psu-dark":"psu-light",loading:(null===s||void 0===s?void 0:s.loading)||Object(z.jsx)(b.a,{tip:"Loading content..."})},s),{},{options:Object(o.a)({wordWrap:"on",wrappingIndent:"same",minimap:{enabled:!1},lineHeight:20,lineNumbersMinChars:5,scrollBeyondLastLine:!1,hideCursorInOverviewRuler:!0,overviewRulerLanes:0,overviewRulerBorder:!1},t)}))})}}}]);
//# sourceMappingURL=38.d37711bd.chunk.js.map