(this["webpackJsonppowershelluniversal.adminconsole"]=this["webpackJsonppowershelluniversal.adminconsole"]||[]).push([[54],{1338:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return f}));var r=t(49),o=t.n(r),i=t(86),a=(t(0),t(43)),u=t(995),c=t(461),l=t(138),s=t(423),d=t(122),v=t.n(d),g=t(4);function f(){var e=Object(a.i)().name,n=Object(s.a)("/settings/configuration/".concat(e),Object(i.a)(o.a.mark((function n(){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,v.a.get("/api/v1/configuration/".concat(e));case 2:return n.next=4,n.sent.data;case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)}))),{enabled:!!e}).data;return Object(g.jsx)(c.c,{resource:{content:n,resourceInfo:{parent:"/configuration/".concat(e),self:"/configuration/".concat(e),schemaName:"configuration"}},children:Object(g.jsx)(c.e,{children:Object(g.jsx)(l.a,{span:24,children:Object(g.jsx)(u.b,{children:Object(g.jsx)(u.c,{title:"Code Editor"})})})})})}},995:function(e,n,t){"use strict";t.d(n,"b",(function(){return R})),t.d(n,"a",(function(){return P})),t.d(n,"c",(function(){return K}));var r=t(76),o=t(12),i=t(25),a=t(49),u=t.n(a),c=t(86),l=t(0),s=t.n(l),d=t(455),v=t(95),g=t(288),f=t(948),p=t(74),b=t(68),m=t(22),h=t(448),j=t(366),x=t(367),O=t(110),k=t(443),C=t(98),y=t(1041),w=t(132),I={base:"vs-dark",inherit:!0,rules:[{token:"custom-error",foreground:"d32029"},{token:"custom-verbose",foreground:"177ddc"},{token:"custom-warning",foreground:"d89614"},{token:"custom-debug",foreground:"13a8a8"}],colors:{"activityBar.background":"#060606","activityBar.foreground":"#A9A9A9","editor.background":"#060606","editor.foreground":"#ffffff4d","activityBarBadge.background":"#A9A9A9","editor.lineHighlightBackground":"#141414","editor.selectionBackground":"#141414"}},A={base:"vs",inherit:!0,rules:[{token:"custom-error",foreground:"d32029"},{token:"custom-verbose",foreground:"177ddc"},{token:"custom-warning",foreground:"d89614"},{token:"custom-debug",foreground:"13a8a8"}],colors:{"activityBar.background":"#E1ECF9","activityBar.foreground":"#A9A9A9","editor.background":"#ffffff","editor.foreground":"#000000","activityBarBadge.background":"#A9A9A9","editor.lineHighlightBackground":"#c2c2c2","editor.selectionBackground":"#e1ecf8"}},M=t(115),B=t(56),S=t(1040),E=t(461),L=t(231),T=t(122),V=t.n(T),D=t(4);y.b.config({paths:{vs:"/admin/vs"}}),y.b.init().then((function(e){e.languages.registerDocumentFormattingEditProvider("powershell",{displayName:"PowerShell",provideDocumentFormattingEdits:function(){var e=Object(c.a)(u.a.mark((function e(n,t,r){var o,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.a.post("/api/v1/editor/format",n.getValue(),{headers:{"content-type":"text/plain"}});case 2:return o=e.sent,i=o.data,e.abrupt("return",[{text:i,range:{startColumn:1,startLineNumber:1,endLineNumber:n.getLineCount(),endColumn:n.getLineMaxColumn(n.getLineCount())}}]);case 5:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}()});var n=["$","-","\\","/",":","."];e.languages.registerCompletionItemProvider("powershell",{triggerCharacters:n,provideCompletionItems:function(){var t=Object(c.a)(u.a.mark((function t(r,o,i){var a,c,l;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(-1===n.findIndex((function(e){return e===i.triggerCharacter}))){t.next=7;break}return t.next=3,V.a.post("/api/v1/editor/complete",{content:r.getValue(),cursorPosition:r.getOffsetAt(o)});case 3:return a=t.sent,c=a.data,l=null===c||void 0===c?void 0:c.map((function(n){return{insertText:n.text,label:n.text,documentation:n.help,kind:e.languages.CompletionItemKind.Property}})),t.abrupt("return",{incomplete:!1,suggestions:l});case 7:return t.abrupt("return",null);case 8:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()})}));var N=s.a.createContext(null);function R(e){var n=e.children,t=e.refetch,r=void 0===t?function(){}:t,o=s.a.useState(!1),a=Object(i.a)(o,2),l=a[0],v=a[1],g=s.a.useState(!1),f=Object(i.a)(g,2),p=f[0],b=f[1],h=Object(m.b)().mutateAsync,j=Object(w.b)().currentTheme,x=Object(M.a)().userData,O=Object(y.c)(),k=Object(L.a)({onSuccess:function(e){return d.b.success("Copied.")}}).copy,C=s.a.useRef(null),B=s.a.useCallback(function(){var e=Object(c.a)(u.a.mark((function e(n,t,o){var i,a,c,l,s,g,f,p,j,x,O,k,y,w,I,A,M;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),v(!0),"/script"===n&&(o.content=null===C||void 0===C||null===(c=C.current)||void 0===c?void 0:c.getValue()),"/endpoint"===n&&(n=null===(l=o)||void 0===l||null===(s=l.resourceInfo)||void 0===s?void 0:s.self,o.scriptBlock=null===C||void 0===C||null===(g=C.current)||void 0===g?void 0:g.getValue()),"/dashboard"===n&&(n=null===(f=o)||void 0===f||null===(p=f.resourceInfo)||void 0===p?void 0:p.self,o.content=null===C||void 0===C||null===(j=C.current)||void 0===j?void 0:j.getValue()),n.startsWith("/role")&&(n=null===(x=o)||void 0===x||null===(O=x.resourceInfo)||void 0===O?void 0:O.self,o.policy=null===C||void 0===C||null===(k=C.current)||void 0===k?void 0:k.getValue()),"/settings"===n&&(n="/settings/authentication/1",o.settings=null===C||void 0===C||null===(y=C.current)||void 0===y?void 0:y.getValue()),n.startsWith("/module")&&(n=null===(w=o)||void 0===w||null===(I=w.resourceInfo)||void 0===I?void 0:I.self,o.content=null===C||void 0===C||null===(A=C.current)||void 0===A?void 0:A.getValue()),"configuration"===(null===(i=o)||void 0===i||null===(a=i.resourceInfo)||void 0===a?void 0:a.schemaName)&&(o=null===C||void 0===C||null===(M=C.current)||void 0===M?void 0:M.getValue({preserveBOM:!0,lineEnding:"\r\n"})),e.next=11,h({key:n,action:t,resource:o},{onError:function(e){b(!1),v(!1),d.b.error(e.message)},onSuccess:function(e,t){b(!1),v(!1),d.b.success("Changes saved!"),m.a.refetchQueries(n),r()}});case 11:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),[h,r]),E=s.a.useCallback((function(e,n,t){C.current=e,n.languages.register({id:"psulog"}),n.languages.setMonarchTokensProvider("psulog",{tokenizer:{root:[[/\[error.*/,"custom-error"],[/\[verbose.*/,"custom-verbose"],[/\[warning.*/,"custom-warning"],[/\[debug.*/,"custom-debug"],[/\[information.*/,"custom-info"]]}});var o=e.getModel();o.onDidChangeContent((function(){var e=o.getVersionId();!function(e,n){var t;return function(){for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];clearTimeout(t),t=setTimeout((function(){return e.apply(void 0,o)}),n)}}(Object(c.a)(u.a.mark((function t(){var r,i,a,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=o.getVersionId(),e===r){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,V.a.post("/api/v1/editor/parse",o.getValue(),{headers:{"content-type":"text/plain"}});case 5:i=t.sent,a=i.data,c=a.map((function(e){return{startColumn:e.token.startColumn,endColumn:e.token.endColumn,startLineNumber:e.token.startLine,endLineNumber:e.token.endLine,severity:S.a.Error,message:e.message}})),n.editor.setModelMarkers(o,"powershell",c);case 9:case"end":return t.stop()}}),t)}))),300)()})),t&&e.addCommand(n.KeyMod.CtrlCmd|n.KeyCode.KEY_S,(function(){var e;return B(null===t||void 0===t||null===(e=t.resourceInfo)||void 0===e?void 0:e.parent,"update",t)})),e.addAction({id:"refresh",label:"Refresh",keybindings:[n.KeyCode.F5],precondition:null,keybindingContext:null,contextMenuGroupId:"navigation",contextMenuOrder:1.5,run:function(e){return r(),null}}),e.addAction({id:"format",label:"Format",keybindings:[n.KeyCode.F8],precondition:null,keybindingContext:null,contextMenuGroupId:"navigation",contextMenuOrder:1.5,run:function(){return e.trigger("anyString","editor.action.formatDocument",null),null}})}),[r,B]);s.a.useEffect((function(){O&&(O.editor.defineTheme("psu-dark",I),O.editor.defineTheme("psu-light",A),O.editor.setTheme("dark"===j?"psu-dark":"psu-light"))}),[j,O]);var T=s.a.useCallback((function(){var e;return k(null===C||void 0===C||null===(e=C.current)||void 0===e?void 0:e.getValue())}),[k]),R=function(){var e;return null===C||void 0===C||null===(e=C.current)||void 0===e?void 0:e.trigger("keyboard","editor.action.fontZoomIn",{})},F=function(){var e;return null===C||void 0===C||null===(e=C.current)||void 0===e?void 0:e.trigger("keyboard","editor.action.fontZoomOut",{})},P=s.a.useMemo((function(){return{isReadOnly:l,setIsReadOnly:v,onSave:B,monaco:O,editor:null===C||void 0===C?void 0:C.current,userData:x,handleEditorDidMount:E,currentTheme:j,onCopy:T,zoomIn:R,zoomOut:F,isSaving:p}}),[j,E,l,O,T,B,x,p]);return Object(D.jsx)(N.Provider,{value:P,children:n})}function F(e){var n,t,r,o=e.children,i=e.resource;return Object(D.jsx)(C.a,{requiredRoles:["Administrator","Operator"],requiredAccessControls:B.a.Edit,accessControls:null===i||void 0===i?void 0:i.accessControls,allowedWithOneWayGitSync:!1,children:Object(D.jsx)(v.a,{title:"Save",children:s.a.cloneElement(o,{type:(null===o||void 0===o||null===(n=o.props)||void 0===n?void 0:n.type)||"text",icon:(null===o||void 0===o||null===(t=o.props)||void 0===t?void 0:t.icon)||Object(D.jsx)(h.a,{}),onClick:Object(b.a)(null===o||void 0===o||null===(r=o.props)||void 0===r?void 0:r.onClick)})})})}function P(e){var n=Object.assign({},e),t=s.a.useContext(N),r=t.currentTheme,i=t.handleEditorDidMount;return Object(D.jsx)(y.a,Object(o.a)({theme:"dark"===r?"psu-dark":"psu-light",language:"powershell",loading:Object(D.jsx)(g.a,{tip:"Loading content..."}),height:"calc((100vh - 256px) - 48px)",onMount:function(e,n){return i(e,n,null)}},n))}function K(e){var n=e.title,t=e.options,i=e.showSave,a=void 0===i||i,u=e.actions,c=e.hideToolbar,d=Object(r.a)(e,["title","options","showSave","actions","hideToolbar"]),m=s.a.useContext(N),h=m.handleEditorDidMount,C=m.currentTheme,y=m.onSave,w=m.onCopy,I=m.zoomIn,A=m.zoomOut,M=m.isSaving,B=Object(E.j)().resource;return Object(D.jsx)(f.a,{bordered:!1,bodyStyle:{padding:0},title:n,extra:!c&&Object(D.jsxs)(l.Fragment,{children:[u,Object(D.jsx)(v.a,{title:"Zoom in",children:Object(D.jsx)(p.a,{type:"text",icon:Object(D.jsx)(j.a,{}),onClick:function(){return I()}})}),Object(D.jsx)(v.a,{title:"Zoom out",children:Object(D.jsx)(p.a,{type:"text",icon:Object(D.jsx)(x.a,{}),onClick:function(){return A()}})}),a&&Object(D.jsx)(F,{resource:B,children:Object(D.jsx)(p.a,{icon:M?Object(D.jsx)(O.a,{}):null,onClick:Object(b.a)((function(){var e;return y(null===B||void 0===B||null===(e=B.resourceInfo)||void 0===e?void 0:e.parent,"update",B)}))})}),Object(D.jsx)(v.a,{title:"Copy",children:Object(D.jsx)(p.a,{type:"text",icon:Object(D.jsx)(k.a,{}),onClick:function(){return w()}})}),Object(D.jsx)(E.b,{children:Object(D.jsx)(p.a,{})})]}),children:Object(D.jsx)(P,Object(o.a)(Object(o.a)({language:"powershell",height:"calc((100vh - 256px) - 48px)",value:(null===B||void 0===B?void 0:B.content)||(null===B||void 0===B?void 0:B.scriptBlock)||(null===B||void 0===B?void 0:B.settings)||(null===d||void 0===d?void 0:d.value),onMount:function(e,n){return h(e,n,B)},theme:"dark"===C?"psu-dark":"psu-light",loading:(null===d||void 0===d?void 0:d.loading)||Object(D.jsx)(g.a,{tip:"Loading content..."})},d),{},{options:Object(o.a)({wordWrap:"on",wrappingIndent:"same",minimap:{enabled:!1},lineHeight:20,lineNumbersMinChars:5,scrollBeyondLastLine:!1,hideCursorInOverviewRuler:!0,overviewRulerLanes:0,overviewRulerBorder:!1},t)}))})}}}]);
//# sourceMappingURL=54.ed30dd6a.chunk.js.map