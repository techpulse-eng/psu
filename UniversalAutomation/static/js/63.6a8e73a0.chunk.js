(this["webpackJsonppowershelluniversal.adminconsole"]=this["webpackJsonppowershelluniversal.adminconsole"]||[]).push([[63],{1461:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return E}));var o=n(12),a=n(27),i=n(0),r=n.n(i),l=n(925),d=n(954),s=n(70),c=n(944),u=n(452),b=n(961),h=n(449),j=n(693),v=n(272),m=n(933),f=n(953),p=n(92),g=n(48),O=n(315),x=n(415),C=n(22),k=n(111),y=n(604),I=n(440),w=n(416),T=n(996),A=n(3);function D(e){var t=e.content;return Object(A.jsx)(b.a,{title:"Log",bordered:!1,children:Object(A.jsx)(T.b,{readonly:!0,children:Object(A.jsx)(T.a,{value:t,language:"psulog",options:{readOnly:!0}})})})}var P=n(37),L=n(99);function E(){var e=l.a.useForm(),t=Object(a.a)(e,1)[0],n=Object(k.a)(),i=n.licensed,T=n.userData,E=Object(x.a)("/settings"),S=E.data,F=E.isLoading,V=Object(x.a)("/environment").data,B=Object(x.a)("/variable").data,M=Object(C.b)({onSuccess:function(){return C.a.invalidateQueries("/settings")}}),R=M.mutate,N=M.isLoading,U=r.a.useState(""),H=Object(a.a)(U,2),W=H[0],K=H[1],J=i(g.e.Automation);return r.a.useEffect((function(){var e=(new w.a).withUrl(Object(P.s)("/systemloghub")).withAutomaticReconnect().configureLogging(w.b.Debug).build();return e.on("PushEventLog",(function(e){K((function(t){return t+"[".concat(Date.now(),"] - ").concat(e,"\r\n")}))})),e.start().then((function(){return e.send("subscribe","system")})).catch((function(e){return console.log("signalr error",e)})),function(){e.stop()}}),[!0]),Object(A.jsx)(l.a,{form:t,onFinish:function(e){R(Object(o.a)({key:"/settings",action:"update"},Object(o.a)(Object(o.a)({},S),e)))},name:"main_settings_form",labelCol:{span:8},wrapperCol:{span:16},labelAlign:"left",initialValues:Object(o.a)(Object(o.a)({},S),{},{repositoryPath:null===S||void 0===S?void 0:S.repositoryPath,databasePath:null===S||void 0===S?void 0:S.databasePath,apiEnvironment:(null===S||void 0===S?void 0:S.apiEnvironment)||"Integrated",defaultEnvironment:(null===S||void 0===S?void 0:S.defaultEnvironment)||"Integrated",securityEnvironment:(null===S||void 0===S?void 0:S.securityEnvironment)||"Integrated"}),children:Object(A.jsx)(d.a,{title:"General",subTitle:"General configuration settings.",extra:[Object(A.jsx)(l.a.Item,{children:Object(A.jsx)(L.a,{requiredRoles:["Administrator"],allowedWithOneWayGitSync:!1,children:Object(A.jsx)(s.a,{loading:N,type:"primary",htmlType:"submit",children:"Save Changes"})})})],children:Object(A.jsx)(c.a,{children:Object(A.jsx)(c.a.Content,{style:{padding:24},children:Object(A.jsx)(u.b,{size:"large",direction:"vertical",style:{width:"100%"},children:Object(A.jsx)(b.a,{bordered:!1,loading:F,children:Object(A.jsxs)(h.a,{tabPosition:"left",children:[Object(A.jsxs)(h.a.TabPane,{tab:"Admin Console",children:[Object(A.jsx)(l.a.Item,{name:"adminConsoleTitle",label:"Admin Console Title",tooltip:"The title to display in the Admin Console title bar.",children:Object(A.jsx)(j.default,{})}),Object(A.jsx)(l.a.Item,{name:"adminConsoleLogo",label:"Admin Console Logo",tooltip:"The logo to display in the Admin Console title bar.",children:Object(A.jsx)(j.default,{})}),Object(A.jsx)(l.a.Item,{name:"defaultPage",label:"Default Page",tooltip:"The page to navigate after you login.",children:Object(A.jsxs)(v.default,{defaultValue:null===S||void 0===S?void 0:S.defaultPage,children:[Object(A.jsx)(v.default.Option,{value:"home",children:"Home"}),Object(A.jsx)(v.default.Option,{value:"apis/endpoints",children:"Endpoints"}),Object(A.jsx)(v.default.Option,{value:"apis/ratelimits",children:"Rate Limits"}),Object(A.jsx)(v.default.Option,{value:"automation/scripts",children:"Scripts"}),Object(A.jsx)(v.default.Option,{value:"automation/jobs",children:"Jobs"}),Object(A.jsx)(v.default.Option,{value:"automation/schedules",children:"Schedules"}),Object(A.jsx)(v.default.Option,{value:"automation/triggers",children:"Triggers"}),Object(A.jsx)(v.default.Option,{value:"dashboards",children:"Dashboards"}),Object(A.jsx)(v.default.Option,{value:"dashboards/frameworks",children:"Frameworks"}),Object(A.jsx)(v.default.Option,{value:"dashboards/modules",children:"Components"}),Object(A.jsx)(v.default.Option,{value:"dashboards/folders",children:"Published Folders"}),Object(A.jsx)(v.default.Option,{value:"dashboards/marketplace",children:"Marketplace"}),Object(A.jsx)(v.default.Option,{value:"platform/variables",children:"Variables"}),Object(A.jsx)(v.default.Option,{disabled:!(null===T||void 0===T?void 0:T.roles.includes("Administrator")),value:"settings",children:"Settings"}),Object(A.jsx)(v.default.Option,{disabled:!(null===T||void 0===T?void 0:T.roles.includes("Administrator")),value:"settings/tags",children:"Tags"}),Object(A.jsx)(v.default.Option,{disabled:!(null===T||void 0===T?void 0:T.roles.includes("Administrator")),value:"settings/environments",children:"Environments"}),Object(A.jsx)(v.default.Option,{disabled:!(null===T||void 0===T?void 0:T.roles.includes("Administrator")),value:"settings/configurations",children:"Configurations"}),Object(A.jsx)(v.default.Option,{disabled:!(null===T||void 0===T?void 0:T.roles.includes("Administrator")),value:"settings/license",children:"License"}),Object(A.jsx)(v.default.Option,{disabled:!(null===T||void 0===T?void 0:T.roles.includes("Administrator")),value:"security/roles",children:"Roles"}),Object(A.jsx)(v.default.Option,{disabled:!(null===T||void 0===T?void 0:T.roles.includes("Administrator")),value:"security/identities",children:"Identities"}),Object(A.jsx)(v.default.Option,{disabled:!(null===T||void 0===T?void 0:T.roles.includes("Administrator")),value:"security/tokens",children:"Tokens"}),Object(A.jsx)(v.default.Option,{disabled:!(null===T||void 0===T?void 0:T.roles.includes("Administrator")),value:"security/authentications",children:"Authentications"})]})}),Object(A.jsx)(l.a.Item,{name:"hideApi",label:"Hide API Features",children:Object(A.jsx)(m.default,{defaultChecked:null===S||void 0===S?void 0:S.hideApi,checkedChildren:"Yes",unCheckedChildren:"No"})}),Object(A.jsx)(l.a.Item,{name:"hideAutomation",label:"Hide Automation Features",children:Object(A.jsx)(m.default,{defaultChecked:null===S||void 0===S?void 0:S.hideAutomation,checkedChildren:"Yes",unCheckedChildren:"No"})}),Object(A.jsx)(l.a.Item,{name:"hideDashboard",label:"Hide User Interface Features",children:Object(A.jsx)(m.default,{defaultChecked:null===S||void 0===S?void 0:S.hideDashboard,checkedChildren:"Yes",unCheckedChildren:"No"})}),Object(A.jsx)(l.a.Item,{name:"hideHomePage",label:"Hide Home Page",children:Object(A.jsx)(m.default,{defaultChecked:null===S||void 0===S?void 0:S.hideHomePage,checkedChildren:"Yes",unCheckedChildren:"No"})}),Object(A.jsx)(l.a.Item,{name:"hideRunAs",label:"Hide Run As",tooltip:"Hides the Run As drop down for scripts, schedules and dashboards.",children:Object(A.jsx)(m.default,{defaultChecked:null===S||void 0===S?void 0:S.hideRunAs,checkedChildren:"Yes",unCheckedChildren:"No"})}),Object(A.jsx)(l.a.Item,{label:"Dark Theme",children:Object(A.jsx)(O.a,{})}),Object(A.jsx)(l.a.Item,{name:"notificationLevel",label:"Notification Level",tooltip:"The level of notifications to display. For example, selecting Warning will display Warnings and Errors but not Information.",children:Object(A.jsxs)(v.default,{defaultValue:null===S||void 0===S?void 0:S.notificationLevel,children:[Object(A.jsx)(v.default.Option,{value:0,children:"Information"}),Object(A.jsx)(v.default.Option,{value:1,children:"Warning"}),Object(A.jsx)(v.default.Option,{value:2,children:"Error"})]})})]},"console"),Object(A.jsxs)(h.a.TabPane,{tab:"Automation",children:[Object(A.jsx)(l.a.Item,{name:"concurrentJobLimit",label:"Concurrent Job Limit",tooltip:"The number of jobs that can run at once.",children:J?Object(A.jsx)(f.default,{defaultValue:null===S||void 0===S?void 0:S.concurrentJobLimit,min:2,max:1e3}):Object(A.jsx)(p.a,{color:"blue",title:"Concurrent Jobs can only be increased when licensed.",children:Object(A.jsx)(f.default,{min:2,max:2,defaultValue:2})})}),Object(A.jsx)(l.a.Item,{name:"jobHandshakeTimeout",label:"Job Handshake Timeout",tooltip:"The amount of time to wait for an external job process to communicate back to the server",children:Object(A.jsx)(f.default,{defaultValue:null===S||void 0===S?void 0:S.jobHandshakeTimeout})})]},"automation"),Object(A.jsxs)(h.a.TabPane,{tab:"Data",children:[Object(A.jsx)(l.a.Item,{name:"repositoryPath",label:"Repository Path",children:Object(A.jsx)(j.default,{disabled:!0})}),Object(A.jsx)(l.a.Item,{name:"databasePath",label:"Database Path",children:Object(A.jsx)(j.default,{disabled:!0})}),Object(A.jsx)(l.a.Item,{name:"scriptBaseFolder",label:"Script Base Folder",tooltip:"The base path to store scripts within the repository.",children:Object(A.jsx)(j.default,{})}),Object(A.jsx)(l.a.Item,{name:"groomDays",label:"Data retention",tooltip:"The number of days to retain data from jobs. The default is 30 days.",children:Object(A.jsx)(f.default,{min:0,max:60})}),Object(A.jsx)(l.a.Item,{name:"groomInterval",label:"Data groom interval",tooltip:"How frequently, in minutes, the data groom job is run.",children:Object(A.jsx)(f.default,{min:1,max:59})})]},"data"),Object(A.jsxs)(h.a.TabPane,{tab:"Diagnostics",children:[Object(A.jsx)(l.a.Item,{name:"logLevel",label:"Log Level",tooltip:"Logging level for PowerShell Universal",children:Object(A.jsxs)(v.default,{defaultValue:null===S||void 0===S?void 0:S.logLevel,children:[Object(A.jsx)(v.default.Option,{value:"Debug",children:"Debug"}),Object(A.jsx)(v.default.Option,{value:"Information",children:"Information"}),Object(A.jsx)(v.default.Option,{value:"Warning",children:"Warning"}),Object(A.jsx)(v.default.Option,{value:"Error",children:"Error"})]})}),Object(A.jsx)(l.a.Item,{name:"microsoftLogLevel",label:"Microsoft Log Level",tooltip:"Logging level for the Microsoft components, like the webserver, of PowerShell Universal.",children:Object(A.jsxs)(v.default,{defaultValue:null===S||void 0===S?void 0:S.microsoftLogLevel,children:[Object(A.jsx)(v.default.Option,{value:"Debug",children:"Debug"}),Object(A.jsx)(v.default.Option,{value:"Information",children:"Information"}),Object(A.jsx)(v.default.Option,{value:"Warning",children:"Warning"}),Object(A.jsx)(v.default.Option,{value:"Error",children:"Error"})]})}),Object(A.jsxs)(u.b,{children:[Object(A.jsx)(s.a,{href:"/api/v1/log",icon:Object(A.jsx)(y.a,{}),children:"Download Logs"}),Object(A.jsx)(s.a,{href:"/hangfire",icon:Object(A.jsx)(I.a,{}),children:"Job Details"})]}),Object(A.jsx)(D,{content:W})]},"diagnostics"),Object(A.jsxs)(h.a.TabPane,{tab:"Environments",children:[Object(A.jsx)(l.a.Item,{name:"apiEnvironment",label:"API Environment",tooltip:"The default environment to use when invoking API endpoints. This overrides the Default Environment.",children:Object(A.jsx)(v.default,{children:null===V||void 0===V?void 0:V.map((function(e){return Object(A.jsx)(v.default.Option,{value:e.name,children:e.name},e.name)}))})}),Object(A.jsx)(l.a.Item,{name:"defaultEnvironment",label:"Default Environment",tooltip:"The default environment to use for all features.",children:Object(A.jsx)(v.default,{children:null===V||void 0===V?void 0:V.map((function(e){return Object(A.jsx)(v.default.Option,{value:e.name,children:e.name},e.name)}))})}),Object(A.jsx)(l.a.Item,{name:"securityEnvironment",label:"Security Environment",tooltip:"By default, authentication and authorization happen within the Universal.Server.exe process. To run these out of process, select an environment to run on",children:Object(A.jsx)(v.default,{children:null===V||void 0===V?void 0:V.map((function(e){return Object(A.jsx)(v.default.Option,{value:e.name,children:e.name},e.name)}))})})]},"environments"),Object(A.jsxs)(h.a.TabPane,{tab:"Platform",children:[Object(A.jsx)(l.a.Item,{name:"disableAutoReload",label:"Disable Auto Reload",tooltip:"Server-wide setting that will disable the auto reload configuration files if they change on disk",children:Object(A.jsx)(m.default,{defaultChecked:null===S||void 0===S?void 0:S.disableAutoReload,checkedChildren:"Yes",unCheckedChildren:"No"})}),Object(A.jsx)(l.a.Item,{name:"disableUpdateCheck",label:"Disable Update Check",tooltip:"Prevents PowerShell Universal from checking for updates.",children:Object(A.jsx)(m.default,{defaultChecked:null===S||void 0===S?void 0:S.disableUpdateCheck,checkedChildren:"Yes",unCheckedChildren:"No"})}),Object(A.jsx)(l.a.Item,{name:"proxyUri",label:"Proxy URL",tooltip:"The address of the proxy server to use when communicating to external addresses for licensing and the marketplace.",children:Object(A.jsx)(j.default,{defaultValue:null===S||void 0===S?void 0:S.proxyUri})}),Object(A.jsx)(l.a.Item,{name:"proxyCredential",label:"Proxy Credential",tooltip:"The credential to use when communicating with the proxy server.",children:Object(A.jsx)(v.default,{children:null===B||void 0===B?void 0:B.filter((function(e){return"PSCredential"===e.type})).map((function(e){return Object(A.jsx)(v.default.Option,{value:e.name,children:e.name},e.name)}))})}),Object(A.jsx)(l.a.Item,{name:"fallbackLanguageId",label:"Fallback Language ID",tooltip:"The language ID to use when a resource can't be found for the user's language.",children:Object(A.jsx)(j.default,{defaultValue:null===S||void 0===S?void 0:S.fallbackLanguageId})}),Object(A.jsx)(l.a.Item,{name:"splatting",label:"Configuration File Splatting",tooltip:"When enabled, all configure files will be generated using splatting.",children:Object(A.jsx)(m.default,{defaultChecked:null===S||void 0===S?void 0:S.splatting,checkedChildren:"Yes",unCheckedChildren:"No"})})]},"platform")]})})})})})})})}},996:function(e,t,n){"use strict";n.d(t,"b",(function(){return R})),n.d(t,"a",(function(){return U})),n.d(t,"c",(function(){return H}));var o=n(74),a=n(12),i=n(27),r=n(49),l=n.n(r),d=n(84),s=n(0),c=n.n(s),u=n(450),b=n(92),h=n(280),j=n(961),v=n(70),m=n(37),f=n(22),p=n(443),g=n(360),O=n(361),x=n(106),C=n(437),k=n(99),y=n(1038),I=n(128),w={base:"vs-dark",inherit:!0,rules:[{token:"custom-error",foreground:"d32029"},{token:"custom-verbose",foreground:"177ddc"},{token:"custom-warning",foreground:"d89614"},{token:"custom-debug",foreground:"13a8a8"}],colors:{"activityBar.background":"#060606","activityBar.foreground":"#A9A9A9","editor.background":"#060606","editor.foreground":"#ffffff4d","activityBarBadge.background":"#A9A9A9","editor.lineHighlightBackground":"#141414","editor.selectionBackground":"#141414"}},T={base:"vs",inherit:!0,rules:[{token:"custom-error",foreground:"d32029"},{token:"custom-verbose",foreground:"177ddc"},{token:"custom-warning",foreground:"d89614"},{token:"custom-debug",foreground:"13a8a8"}],colors:{"activityBar.background":"#E1ECF9","activityBar.foreground":"#A9A9A9","editor.background":"#ffffff","editor.foreground":"#000000","activityBarBadge.background":"#A9A9A9","editor.lineHighlightBackground":"#c2c2c2","editor.selectionBackground":"#e1ecf8"}},A=n(111),D=n(48),P=n(1043),L=n(454),E=n(225),S=n(117),F=n.n(S),V=[{range:null,label:"Dashboard: Modal",kind:27,documentation:"Creates a new modal.",insertText:'Show-UDModal -Content {\n\tNew-UDTypography "Hello, World"\n}'},{range:null,label:"Dashboard: Chart with Colors",kind:27,documentation:"Creates a chart with colors",insertText:"$Data = Get-Process | Sort-Object -Property CPU -Descending | Select-Object -First 10 \n$Options = @{\n    Type = 'bar'\n    Data = $Data\n    BackgroundColor = 'Red'\n    BorderColor = '#c61d4a'\n    HoverBackgroundColor = 'Blue'\n    HoverBorderColor = '#451dc6'\n    DataProperty = 'CPU'\n    LabelProperty = 'ProcessName'\n}\n\nNew-UDChartJS @Options"},{range:null,label:"Dashboard: Form with validation",kind:27,documentation:"Creates a form with validation",insertText:"New-UDForm -Content {\nNew-UDTextbox -Id 'txtValidateForm'\n} -OnValidate {\n    $FormContent = $EventData\n\n    if ($FormContent.txtValidateForm -eq $null -or $FormContent.txtValidateForm -eq '') {\n        New-UDFormValidationResult -ValidationError \"txtValidateForm is required\"\n    } else {\n        New-UDFormValidationResult -Valid\n    }\n} -OnSubmit {\n    Show-UDToast -Message $Body\n}"}],B=n(3);y.c.config({paths:{vs:Object(m.s)("/admin/vs")}}),y.c.init().then((function(e){e.languages.registerCompletionItemProvider("powershell",{provideCompletionItems:function(){var e=Object(d.a)(l.a.mark((function e(t,n,o){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{incomplete:!1,suggestions:V});case 1:case"end":return e.stop()}}),e)})));return function(t,n,o){return e.apply(this,arguments)}}()}),e.languages.registerDocumentFormattingEditProvider("powershell",{displayName:"PowerShell",provideDocumentFormattingEdits:function(){var e=Object(d.a)(l.a.mark((function e(t,n,o){var a,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.post(Object(m.s)("/api/v1/editor/format"),t.getValue(),{headers:{"content-type":"text/plain"}});case 2:return a=e.sent,i=a.data,e.abrupt("return",[{text:i,range:{startColumn:1,startLineNumber:1,endLineNumber:t.getLineCount(),endColumn:t.getLineMaxColumn(t.getLineCount())}}]);case 5:case"end":return e.stop()}}),e)})));return function(t,n,o){return e.apply(this,arguments)}}()});var t=["$","-","\\","/",":","."],n=function(t){switch(t){case 0:return e.languages.CompletionItemKind.Text;case 2:return e.languages.CompletionItemKind.Method;case 3:return e.languages.CompletionItemKind.Folder;case 4:return e.languages.CompletionItemKind.File;case 5:return e.languages.CompletionItemKind.Property;case 6:return e.languages.CompletionItemKind.Method;case 7:case 9:return e.languages.CompletionItemKind.Property;default:return e.languages.CompletionItemKind.Text}};e.languages.registerCompletionItemProvider("powershell",{triggerCharacters:t,provideCompletionItems:function(){var e=Object(d.a)(l.a.mark((function e(o,a,i){var r,d,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(-1===t.findIndex((function(e){return e===i.triggerCharacter}))){e.next=7;break}return e.next=3,F.a.post(Object(m.s)("/api/v1/editor/complete"),{content:o.getValue(),cursorPosition:o.getOffsetAt(a)});case 3:return r=e.sent,d=r.data,s=null===d||void 0===d?void 0:d.map((function(e){return 3===e.type||4===e.type?{insertText:e.label,label:e.label,documentation:e.help,kind:n(e.type)}:{insertText:e.text,label:e.text,documentation:e.help,kind:n(e.type)}})),e.abrupt("return",{incomplete:!1,suggestions:s});case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),e)})));return function(t,n,o){return e.apply(this,arguments)}}()})}));var M=c.a.createContext(null);function R(e){var t=e.children,n=e.refetch,o=void 0===n?function(){}:n,a=e.readonly,r=void 0!==a&&a,s=c.a.useState(r),b=Object(i.a)(s,2),h=b[0],j=b[1],v=c.a.useState(!1),p=Object(i.a)(v,2),g=p[0],O=p[1],x=Object(f.b)().mutateAsync,C=Object(I.b)().currentTheme,k=Object(A.a)().userData,D=Object(y.d)(),L=Object(E.a)({onSuccess:function(e){return u.b.success("Copied.")}}).copy,S=c.a.useRef(null),V=c.a.useCallback(function(){var e=Object(d.a)(l.a.mark((function e(t,n,a){var i,r,d,s,c,b,h,v,m,p,g,C;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),j(!0),"/script"===t&&(a.content=null===S||void 0===S||null===(r=S.current)||void 0===r?void 0:r.getValue()),"/endpoint"===t&&(t=null===a||void 0===a||null===(d=a.resourceInfo)||void 0===d?void 0:d.self,a.scriptBlock=null===S||void 0===S||null===(s=S.current)||void 0===s?void 0:s.getValue()),"/dashboard"===t&&(t=null===a||void 0===a||null===(c=a.resourceInfo)||void 0===c?void 0:c.self,a.content=null===S||void 0===S||null===(b=S.current)||void 0===b?void 0:b.getValue()),t.startsWith("/role")&&(t=null===a||void 0===a||null===(h=a.resourceInfo)||void 0===h?void 0:h.self,a.policy=null===S||void 0===S||null===(v=S.current)||void 0===v?void 0:v.getValue()),"/settings"===t&&(t="/settings/authentication/1",a.settings=null===S||void 0===S||null===(m=S.current)||void 0===m?void 0:m.getValue()),t.startsWith("/module")&&(t=null===a||void 0===a||null===(p=a.resourceInfo)||void 0===p?void 0:p.self,a.content=null===S||void 0===S||null===(g=S.current)||void 0===g?void 0:g.getValue()),"configuration"===(null===a||void 0===a||null===(i=a.resourceInfo)||void 0===i?void 0:i.schemaName)&&(a.content=null===S||void 0===S||null===(C=S.current)||void 0===C?void 0:C.getValue({preserveBOM:!0,lineEnding:"\r\n"})),e.next=11,x({key:t,action:n,resource:a},{onError:function(e){O(!1),j(!1),u.b.error(e.message)},onSuccess:function(e,n){O(!1),j(!1),u.b.success("Changes saved!"),f.a.refetchQueries(t),o()}});case 11:case"end":return e.stop()}}),e)})));return function(t,n,o){return e.apply(this,arguments)}}(),[x,o]),R=c.a.useCallback((function(e,t,n){S.current=e,t.languages.register({id:"psulog"}),t.languages.setMonarchTokensProvider("psulog",{tokenizer:{root:[[/\[error.*/,"custom-error"],[/\[verbose.*/,"custom-verbose"],[/\[warning.*/,"custom-warning"],[/\[debug.*/,"custom-debug"],[/\[information.*/,"custom-info"]]}});var a=e.getModel();r||a.onDidChangeContent((function(){var e=a.getVersionId();!function(e,t){var n;return function(){for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];clearTimeout(n),n=setTimeout((function(){return e.apply(void 0,a)}),t)}}(Object(d.a)(l.a.mark((function n(){var o,i,r,d;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o=a.getVersionId(),e===o){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,F.a.post(Object(m.s)("/api/v1/editor/parse"),a.getValue(),{headers:{"content-type":"text/plain"}});case 5:i=n.sent,r=i.data,d=r.map((function(e){return{startColumn:e.token.startColumn,endColumn:e.token.endColumn,startLineNumber:e.token.startLine,endLineNumber:e.token.endLine,severity:P.a.Error,message:e.message}})),t.editor.setModelMarkers(a,"powershell",d);case 9:case"end":return n.stop()}}),n)}))),300)()})),n&&e.addCommand(t.KeyMod.CtrlCmd|t.KeyCode.KEY_S,(function(){var e;return V(null===n||void 0===n||null===(e=n.resourceInfo)||void 0===e?void 0:e.parent,"update",n)})),e.addAction({id:"refresh",label:"Refresh",keybindings:[t.KeyCode.F5],precondition:null,keybindingContext:null,contextMenuGroupId:"navigation",contextMenuOrder:1.5,run:function(e){return o(),null}}),e.addAction({id:"format",label:"Format",keybindings:[t.KeyCode.F8],precondition:null,keybindingContext:null,contextMenuGroupId:"navigation",contextMenuOrder:1.5,run:function(){return e.trigger("anyString","editor.action.formatDocument",null),null}})}),[o,V,r]);c.a.useEffect((function(){D&&(D.editor.defineTheme("psu-dark",w),D.editor.defineTheme("psu-light",T),D.editor.setTheme("dark"===C?"psu-dark":"psu-light"))}),[C,D]);var N=c.a.useCallback((function(){var e;return L(null===S||void 0===S||null===(e=S.current)||void 0===e?void 0:e.getValue())}),[L]),U=function(){var e;return null===S||void 0===S||null===(e=S.current)||void 0===e?void 0:e.trigger("keyboard","editor.action.fontZoomIn",{})},H=function(){var e;return null===S||void 0===S||null===(e=S.current)||void 0===e?void 0:e.trigger("keyboard","editor.action.fontZoomOut",{})},W=c.a.useMemo((function(){return{isReadOnly:h,setIsReadOnly:j,onSave:V,monaco:D,editor:null===S||void 0===S?void 0:S.current,userData:k,handleEditorDidMount:R,currentTheme:C,onCopy:N,zoomIn:U,zoomOut:H,isSaving:g}}),[C,R,h,D,N,V,k,g]);return Object(B.jsx)(M.Provider,{value:W,children:t})}function N(e){var t,n,o,a=e.children,i=e.resource;return Object(B.jsx)(k.a,{requiredRoles:["Administrator","Operator"],requiredAccessControls:D.b.Edit,accessControls:null===i||void 0===i?void 0:i.accessControls,allowedWithOneWayGitSync:!1,children:Object(B.jsx)(b.a,{title:"Save",children:c.a.cloneElement(a,{type:(null===a||void 0===a||null===(t=a.props)||void 0===t?void 0:t.type)||"text",icon:(null===a||void 0===a||null===(n=a.props)||void 0===n?void 0:n.icon)||Object(B.jsx)(p.a,{}),onClick:Object(m.a)(null===a||void 0===a||null===(o=a.props)||void 0===o?void 0:o.onClick)})})})}function U(e){var t=Object.assign({},e),n=c.a.useContext(M),o=n.currentTheme,i=n.handleEditorDidMount;return Object(B.jsx)(y.b,Object(a.a)({theme:"dark"===o?"psu-dark":"psu-light",language:"powershell",loading:Object(B.jsx)(h.a,{tip:"Loading content..."}),height:"calc((100vh - 256px) - 48px)",onMount:function(e,t){return i(e,t,null)}},t))}function H(e){var t=e.title,n=e.options,i=e.showSave,r=void 0===i||i,l=e.actions,d=e.hideToolbar,u=Object(o.a)(e,["title","options","showSave","actions","hideToolbar"]),f=c.a.useContext(M),p=f.handleEditorDidMount,k=f.currentTheme,y=f.onSave,I=f.onCopy,w=f.zoomIn,T=f.zoomOut,A=f.isSaving,D=Object(L.j)(),P=null===D||void 0===D?void 0:D.resource;return Object(B.jsx)(j.a,{bordered:!1,bodyStyle:{padding:0},title:t,extra:!d&&Object(B.jsxs)(s.Fragment,{children:[l,Object(B.jsx)(b.a,{title:"Zoom in",children:Object(B.jsx)(v.a,{type:"text",icon:Object(B.jsx)(g.a,{}),onClick:function(){return w()}})}),Object(B.jsx)(b.a,{title:"Zoom out",children:Object(B.jsx)(v.a,{type:"text",icon:Object(B.jsx)(O.a,{}),onClick:function(){return T()}})}),r&&Object(B.jsx)(N,{resource:P,children:Object(B.jsx)(v.a,{icon:A?Object(B.jsx)(x.a,{}):null,onClick:Object(m.a)((function(){var e;return y(null===P||void 0===P||null===(e=P.resourceInfo)||void 0===e?void 0:e.parent,"update",P)}))})}),Object(B.jsx)(b.a,{title:"Copy",children:Object(B.jsx)(v.a,{type:"text",icon:Object(B.jsx)(C.a,{}),onClick:function(){return I()}})}),Object(B.jsx)(L.b,{children:Object(B.jsx)(v.a,{})})]}),children:Object(B.jsx)(U,Object(a.a)(Object(a.a)({language:"powershell",height:"calc((100vh - 256px) - 48px)",value:(null===P||void 0===P?void 0:P.content)||(null===P||void 0===P?void 0:P.scriptBlock)||(null===P||void 0===P?void 0:P.settings)||(null===u||void 0===u?void 0:u.value),onMount:function(e,t){return p(e,t,P)},theme:"dark"===k?"psu-dark":"psu-light",loading:(null===u||void 0===u?void 0:u.loading)||Object(B.jsx)(h.a,{tip:"Loading content..."})},u),{},{options:Object(a.a)({wordWrap:"on",wrappingIndent:"same",minimap:{enabled:!1},lineHeight:20,lineNumbersMinChars:5,scrollBeyondLastLine:!1,hideCursorInOverviewRuler:!0,overviewRulerLanes:0,overviewRulerBorder:!1},n)}))})}}}]);
//# sourceMappingURL=63.6a8e73a0.chunk.js.map