(this["webpackJsonppowershelluniversal.adminconsole"]=this["webpackJsonppowershelluniversal.adminconsole"]||[]).push([[54,132],{1004:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r}));n(0);var i=n(36),o=n(696),l=n(3);function r(e){var t=e.text,n=e.to;return Object(l.jsx)(o.a,{color:"blue",children:Object(l.jsx)(i.b,{style:{color:"inherit"},to:n,children:t})})}},1400:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var i=n(27),o=n(0),l=n(453),r=n(415),s=n(1124),c=n(37),a=n(1004),d=n(696),u=n(92),j=n(452),v=n(414),b=n(933),f=n(1226),p=n(1227),x=n(36),O=n(338),h=n(594),g=n(3),m=n(1228);function y(){var e,t,n=Object(o.useState)(null),y=Object(i.a)(n,2),k=y[0],I=y[1],w=Object(o.useState)(!0),S=Object(i.a)(w,2),C=S[0],T=S[1],D=Object(x.c)(),J=Object(i.a)(D,1)[0],P=Object(r.a)("/job?tag=".concat((null===k||void 0===k?void 0:k.name)?k.name:"").concat(J.get("state")?"&status="+J.get("state"):""),{refetchOnWindowFocus:!1,keepPreviousData:!0}),z=P.data,F=P.isFetching,A=P.isLoading,B=Object(r.a)("/tag"),L=B.data,E=B.isLoading,M=[{title:"Id",key:"id",dataIndex:"id",align:"left",responsive:["xl"],render:function(e,t){return Object(g.jsx)(a.default,{text:e,to:"".concat(t.id)})}},{title:"Script",key:"script",dataIndex:"script",align:"left",responsive:["md"],render:function(e,t){return Object(g.jsx)(f.a,{job:t})}},{title:"Status",key:"status",dataIndex:"status",align:"center",responsive:["md"],render:function(e,t){return 3===(null===t||void 0===t?void 0:t.status)?Object(g.jsx)(u.a,{title:(null===t||void 0===t?void 0:t.output)||(null===t||void 0===t?void 0:t.statusDescription),color:"red",children:Object(c.p)(null===t||void 0===t?void 0:t.status)}):Object(g.jsx)(u.a,{title:(null===t||void 0===t?void 0:t.output)||(null===t||void 0===t?void 0:t.statusDescription),children:Object(c.p)(null===t||void 0===t?void 0:t.status)})}},{key:"tags",title:"Tags",dataIndex:"tags",editable:!1,render:function(e,t){return function(e){return E||null===(null===e||void 0===e?void 0:e.tags)?Object(g.jsx)(g.Fragment,{}):e.tags.split("|").map((function(e){var t=null===L||void 0===L?void 0:L.find((function(t){return t.name===e}));return Object(g.jsx)(d.a,{color:null===t||void 0===t?void 0:t.color,style:{cursor:"pointer"},onClick:function(){I(t)},children:null===t||void 0===t?void 0:t.name},null===t||void 0===t?void 0:t.name)}))}(t)},responsive:["xl"]},{title:"Description",key:"datetime",align:"right",responsive:["xl"],render:function(e,t){return Object(c.e)(t)}},{title:"Execution Time",key:"datetime",align:"left",responsive:["md"],render:function(e,t){return Object(g.jsx)(s.a,{job:t,relativeTime:C})}},{title:"Process Information",key:"processInfo",align:"right",responsive:["xl"],render:function(e,t){return Object(g.jsxs)(j.b,{children:[0!==(null===t||void 0===t?void 0:t.processId)&&Object(g.jsxs)(u.a,{title:"Process ID",children:[Object(g.jsx)(O.a,{})," ",Object(g.jsx)(v.a.Text,{type:"secondary",style:{fontSize:12},children:null===t||void 0===t?void 0:t.processId})]}),0!==(null===t||void 0===t?void 0:t.memoryBytes)&&Object(g.jsxs)(u.a,{title:"Average Memory Usage",children:[Object(g.jsx)(h.a,{})," ",Object(g.jsx)(v.a.Text,{type:"secondary",style:{fontSize:12},children:m(null===t||void 0===t?void 0:t.memoryBytes).format("0.00 b")})]})]})}},{key:"actions",width:"min-content",render:function(e,t){return Object(g.jsxs)(j.b,{children:[Object(g.jsx)(a.default,{text:"View Job",to:"".concat(t.id)}),",",Object(g.jsx)(p.a,{job:t})]})}}];return Object(g.jsx)(l.default,{title:"Jobs",data:null===z||void 0===z||null===(e=z.page)||void 0===e?void 0:e.reverse(),columns:M,loading:A||F,actions:[k&&Object(g.jsx)(d.a,{color:k.color,closable:!0,onClose:function(){I(null)},children:k.name}),Object(g.jsx)(b.default,{onChange:function(e){return T(e)},checked:C,checkedChildren:"Relative Time",unCheckedChildren:"Absolute Time"})],pagination:{hideOnSinglePage:!0,showSizeChanger:!1,total:null===z||void 0===z||null===(t=z.page)||void 0===t?void 0:t.length}})}}}]);
//# sourceMappingURL=54.92c7bc4e.chunk.js.map