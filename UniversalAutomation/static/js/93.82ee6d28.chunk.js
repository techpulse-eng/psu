(this["webpackJsonppowershelluniversal.adminconsole"]=this["webpackJsonppowershelluniversal.adminconsole"]||[]).push([[93],{1335:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return P}));var i=a(12),n=a(25),l=(a(0),a(919)),o=a(941),d=a(930),s=a(457),r=a(948),c=a(453),u=a(691),j=a(301),b=a(926),h=a(940),m=a(95),O=a(74),v=a(56),f=a(317),p=a(423),x=a(22),g=a(115),C=a(612),k=a(446),I=a(4);function P(){var e=l.a.useForm(),t=Object(n.a)(e,1)[0],a=Object(g.a)(),P=a.licensed,y=a.userData,A=Object(p.a)("/settings"),T=A.data,D=A.isLoading,L=Object(p.a)("/environment").data,w=Object(x.b)({onSuccess:function(){return x.a.invalidateQueries("/settings")}}),E=w.mutate,S=w.isLoading,F=P(v.d.Automation);return Object(I.jsx)(o.a,{title:"General",subTitle:"General configuration settings.",children:Object(I.jsx)(d.a,{children:Object(I.jsx)(d.a.Content,{style:{padding:24},children:Object(I.jsx)(s.b,{size:"large",direction:"vertical",style:{width:"100%"},children:Object(I.jsx)(r.a,{bordered:!1,loading:D,children:Object(I.jsxs)(l.a,{form:t,onFinish:function(e){E(Object(i.a)({key:"/settings",action:"update"},Object(i.a)(Object(i.a)({},T),e)))},name:"main_settings_form",labelCol:{span:8},wrapperCol:{span:16},labelAlign:"left",initialValues:Object(i.a)(Object(i.a)({},T),{},{repositoryPath:null===T||void 0===T?void 0:T.repositoryPath,databasePath:null===T||void 0===T?void 0:T.databasePath,apiEnvironment:(null===T||void 0===T?void 0:T.apiEnvironment)||"Integrated",defaultEnvironment:(null===T||void 0===T?void 0:T.defaultEnvironment)||"Integrated",securityEnvironment:(null===T||void 0===T?void 0:T.securityEnvironment)||"Integrated"}),children:[Object(I.jsxs)(c.a,{tabPosition:"left",children:[Object(I.jsxs)(c.a.TabPane,{tab:"Admin Console",children:[Object(I.jsx)(l.a.Item,{name:"adminConsoleTitle",label:"Admin Console Title",tooltip:"The title to display in the Admin Console title bar.",children:Object(I.jsx)(u.default,{})}),Object(I.jsx)(l.a.Item,{name:"adminConsoleLogo",label:"Admin Console Logo",tooltip:"The logo to display in the Admin Console title bar.",children:Object(I.jsx)(u.default,{})}),Object(I.jsx)(l.a.Item,{name:"defaultPage",label:"Default Page",tooltip:"The page to navigate after you login.",children:Object(I.jsxs)(j.default,{defaultValue:null===T||void 0===T?void 0:T.defaultPage,children:[Object(I.jsx)(j.default.Option,{value:"home",children:"Home"}),Object(I.jsx)(j.default.Option,{value:"apis/endpoints",children:"Endpoints"}),Object(I.jsx)(j.default.Option,{value:"apis/ratelimits",children:"Rate Limits"}),Object(I.jsx)(j.default.Option,{value:"automation/scripts",children:"Scripts"}),Object(I.jsx)(j.default.Option,{value:"automation/jobs",children:"Jobs"}),Object(I.jsx)(j.default.Option,{value:"automation/schedules",children:"Schedules"}),Object(I.jsx)(j.default.Option,{value:"automation/triggers",children:"Triggers"}),Object(I.jsx)(j.default.Option,{value:"dashboards",children:"Dashboards"}),Object(I.jsx)(j.default.Option,{value:"dashboards/frameworks",children:"Frameworks"}),Object(I.jsx)(j.default.Option,{value:"dashboards/modules",children:"Components"}),Object(I.jsx)(j.default.Option,{value:"dashboards/folders",children:"Published Folders"}),Object(I.jsx)(j.default.Option,{value:"dashboards/marketplace",children:"Marketplace"}),Object(I.jsx)(j.default.Option,{value:"platform/variables",children:"Variables"}),Object(I.jsx)(j.default.Option,{disabled:!(null===y||void 0===y?void 0:y.roles.includes("Administrator")),value:"settings",children:"Settings"}),Object(I.jsx)(j.default.Option,{disabled:!(null===y||void 0===y?void 0:y.roles.includes("Administrator")),value:"settings/tags",children:"Tags"}),Object(I.jsx)(j.default.Option,{disabled:!(null===y||void 0===y?void 0:y.roles.includes("Administrator")),value:"settings/environments",children:"Environments"}),Object(I.jsx)(j.default.Option,{disabled:!(null===y||void 0===y?void 0:y.roles.includes("Administrator")),value:"settings/configurations",children:"Configurations"}),Object(I.jsx)(j.default.Option,{disabled:!(null===y||void 0===y?void 0:y.roles.includes("Administrator")),value:"settings/license",children:"License"}),Object(I.jsx)(j.default.Option,{disabled:!(null===y||void 0===y?void 0:y.roles.includes("Administrator")),value:"security/roles",children:"Roles"}),Object(I.jsx)(j.default.Option,{disabled:!(null===y||void 0===y?void 0:y.roles.includes("Administrator")),value:"security/identities",children:"Identities"}),Object(I.jsx)(j.default.Option,{disabled:!(null===y||void 0===y?void 0:y.roles.includes("Administrator")),value:"security/tokens",children:"Tokens"}),Object(I.jsx)(j.default.Option,{disabled:!(null===y||void 0===y?void 0:y.roles.includes("Administrator")),value:"security/authentications",children:"Authentications"})]})}),Object(I.jsx)(l.a.Item,{name:"hideApi",label:"Hide API Features",children:Object(I.jsx)(b.default,{defaultChecked:null===T||void 0===T?void 0:T.hideApi,checkedChildren:"Yes",unCheckedChildren:"No"})}),Object(I.jsx)(l.a.Item,{name:"hideAutomation",label:"Hide Automation Features",children:Object(I.jsx)(b.default,{defaultChecked:null===T||void 0===T?void 0:T.hideAutomation,checkedChildren:"Yes",unCheckedChildren:"No"})}),Object(I.jsx)(l.a.Item,{name:"hideDashboard",label:"Hide User Interface Features",children:Object(I.jsx)(b.default,{defaultChecked:null===T||void 0===T?void 0:T.hideDashboard,checkedChildren:"Yes",unCheckedChildren:"No"})}),Object(I.jsx)(l.a.Item,{name:"hideHomePage",label:"Hide Home Page",children:Object(I.jsx)(b.default,{defaultChecked:null===T||void 0===T?void 0:T.hideHomePage,checkedChildren:"Yes",unCheckedChildren:"No"})}),Object(I.jsx)(l.a.Item,{label:"Dark Theme",children:Object(I.jsx)(f.a,{})})]},"console"),Object(I.jsx)(c.a.TabPane,{tab:"Automation",children:Object(I.jsx)(l.a.Item,{name:"concurrentJobLimit",label:"Concurrent Job Limit",tooltip:"The number of jobs that can run at once.",children:F?Object(I.jsx)(h.default,{defaultValue:null===T||void 0===T?void 0:T.concurrentJobLimit,min:2,max:1e3}):Object(I.jsx)(m.a,{color:"blue",title:"Concurrent Jobs can only be increased when licensed.",children:Object(I.jsx)(h.default,{min:2,max:2,defaultValue:2})})})},"automation"),Object(I.jsxs)(c.a.TabPane,{tab:"Data",children:[Object(I.jsx)(l.a.Item,{name:"repositoryPath",label:"Repository Path",children:Object(I.jsx)(u.default,{disabled:!0})}),Object(I.jsx)(l.a.Item,{name:"databasePath",label:"Database Path",children:Object(I.jsx)(u.default,{disabled:!0})}),Object(I.jsx)(l.a.Item,{name:"scriptBaseFolder",label:"Script Base Folder",tooltip:"The base path to store scripts within the repository.",children:Object(I.jsx)(u.default,{})}),Object(I.jsx)(l.a.Item,{name:"groomDays",label:"Data retention",tooltip:"The number of days to retain data from jobs. The default is 30 days.",children:Object(I.jsx)(h.default,{min:0,max:60})}),Object(I.jsx)(l.a.Item,{name:"groomInterval",label:"Data groom interval",tooltip:"How frequently, in minutes, the data groom job is run.",children:Object(I.jsx)(h.default,{min:1,max:59})})]},"data"),Object(I.jsxs)(c.a.TabPane,{tab:"Diagnostics",children:[Object(I.jsx)(l.a.Item,{name:"logLevel",label:"Log Level",tooltip:"Logging level for PowerShell Universal",children:Object(I.jsxs)(j.default,{defaultValue:null===T||void 0===T?void 0:T.logLevel,children:[Object(I.jsx)(j.default.Option,{value:"Debug",children:"Debug"}),Object(I.jsx)(j.default.Option,{value:"Information",children:"Information"}),Object(I.jsx)(j.default.Option,{value:"Warning",children:"Warning"}),Object(I.jsx)(j.default.Option,{value:"Error",children:"Error"})]})}),Object(I.jsx)(l.a.Item,{name:"microsoftLogLevel",label:"Microsoft Log Level",tooltip:"Logging level for the Microsoft components, like the webserver, of PowerShell Universal.",children:Object(I.jsxs)(j.default,{defaultValue:null===T||void 0===T?void 0:T.microsoftLogLevel,children:[Object(I.jsx)(j.default.Option,{value:"Debug",children:"Debug"}),Object(I.jsx)(j.default.Option,{value:"Information",children:"Information"}),Object(I.jsx)(j.default.Option,{value:"Warning",children:"Warning"}),Object(I.jsx)(j.default.Option,{value:"Error",children:"Error"})]})}),Object(I.jsxs)(s.b,{children:[Object(I.jsx)(O.a,{href:"/api/v1/log",icon:Object(I.jsx)(C.a,{}),children:"Download Logs"}),Object(I.jsx)(O.a,{href:"/hangfire",icon:Object(I.jsx)(k.a,{}),children:"Job Details"})]})]},"diagnostics"),Object(I.jsxs)(c.a.TabPane,{tab:"Environments",children:[Object(I.jsx)(l.a.Item,{name:"apiEnvironment",label:"API Environment",tooltip:"The default environment to use when invoking API endpoints. This overrides the Default Environment.",children:Object(I.jsx)(j.default,{children:null===L||void 0===L?void 0:L.map((function(e){return Object(I.jsx)(j.default.Option,{value:e.name,children:e.name},e.name)}))})}),Object(I.jsx)(l.a.Item,{name:"defaultEnvironment",label:"Default Environment",tooltip:"The default environment to use for all features.",children:Object(I.jsx)(j.default,{children:null===L||void 0===L?void 0:L.map((function(e){return Object(I.jsx)(j.default.Option,{value:e.name,children:e.name},e.name)}))})}),Object(I.jsx)(l.a.Item,{name:"securityEnvironment",label:"Security Environment",tooltip:"By default, authentication and authorization happen within the Universal.Server.exe process. To run these out of process, select an environment to run on",children:Object(I.jsx)(j.default,{children:null===L||void 0===L?void 0:L.map((function(e){return Object(I.jsx)(j.default.Option,{value:e.name,children:e.name},e.name)}))})})]},"environments"),Object(I.jsxs)(c.a.TabPane,{tab:"Platform",children:[Object(I.jsx)(l.a.Item,{name:"disableAutoReload",label:"Disable Auto Reload",tooltip:"Server-wide setting that will disable the auto reload configuration files if they change on disk",children:Object(I.jsx)(b.default,{defaultChecked:null===T||void 0===T?void 0:T.disableAutoReload,checkedChildren:"Yes",unCheckedChildren:"No"})}),Object(I.jsx)(l.a.Item,{name:"disableUpdateCheck",label:"Disable Update Check",tooltip:"Prevents PowerShell Universal from checking for updates.",children:Object(I.jsx)(b.default,{defaultChecked:null===T||void 0===T?void 0:T.disableUpdateCheck,checkedChildren:"Yes",unCheckedChildren:"No"})})]},"platform")]}),Object(I.jsx)(l.a.Item,{children:Object(I.jsx)(O.a,{loading:S,type:"primary",htmlType:"submit",children:"Save Changes"})})]})})})})})})}}}]);
//# sourceMappingURL=93.82ee6d28.chunk.js.map