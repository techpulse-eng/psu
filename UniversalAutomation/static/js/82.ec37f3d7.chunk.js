(this["webpackJsonppowershelluniversal.adminconsole"]=this["webpackJsonppowershelluniversal.adminconsole"]||[]).push([[82],{1397:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return h}));i(0);var r=i(95),n=i(941),a=i(288),o=i(939),c=i(423),s=i(507),l=i(508),d=i(71),u=i.n(d),f=i(444),p=i(4),m=[{title:"Title",dataIndex:"title",key:"title",onFilter:function(e,t){return t.title.startsWith(e)},filterSearch:!0,sorter:function(e,t){return e.title.localeCompare(t.title)}},{title:"Created Time",dataIndex:"createdTime",key:"createdTime",onFilter:function(e,t){return t.createdTime.startsWith(e)},filterSearch:!0,sorter:function(e,t){return e.createdTime.localeCompare(t.createdTime)},render:function(e,t){var i=u()(null===t||void 0===t?void 0:t.createdTime);return Object(p.jsx)(r.a,{title:u()(null===t||void 0===t?void 0:t.createdTime).toString(),children:u()().to(i)})}},{title:"Description",dataIndex:"description",key:"description",onFilter:function(e,t){return t.description.startsWith(e)},filterSearch:!0,sorter:function(e,t){return e.description.localeCompare(t.description)}},{title:"Action",dataIndex:"action",key:"action",render:function(e,t){return Object(p.jsx)(l.a,{resource:t,size:"small",icon:Object(p.jsx)(f.a,{})})}}];function h(){var e=Object(c.a)("/notification",{refetchOnWindowFocus:!1,keepPreviousData:!0}),t=e.data,i=e.isLoading;return Object(p.jsxs)(n.a,{title:"Notifications",subTitle:"Notifications generated by the system.",extra:[Object(p.jsx)(s.a,{danger:!0})],children:[i&&Object(p.jsx)(a.a,{}),!i&&Object(p.jsx)(o.a,{dataSource:t,columns:m,tableLayout:"fixed"})]})}}}]);
//# sourceMappingURL=82.ec37f3d7.chunk.js.map