(this["webpackJsonpally-assignment"]=this["webpackJsonpally-assignment"]||[]).push([[0],{59:function(e,t,c){},60:function(e,t,c){},62:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},72:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(8),i=c.n(r),s=(c(59),c(60),c(42)),a=c.n(s),l=c(45),j=c(13),o=c(98),d=c(43),b=c(30),u=c.n(b),O=c(33),x=c.n(O),f=c(34),h=c.n(f),m=(c(62),c(2)),v=Object(m.jsxs)("svg",{height:"100%",width:"5rem",className:"key-result-marker",children:[Object(m.jsx)("line",{x1:"1.87rem",y1:"0",x2:"1.87rem",y2:"100%",className:"marker"}),Object(m.jsx)("line",{x1:"1.87rem",y1:"47%",x2:"2.75rem",y2:"47%",className:"marker"})]}),p=function(e){var t=e.okr,c=e.index,n=e.selectOKR,r=97+c%26,i=Math.floor(c/26),s="".concat(i>0?i:"").concat(String.fromCharCode(r));return Object(m.jsxs)("div",{className:"okr-item",children:[Object(m.jsxs)("div",{className:"key-result title-wrap",children:[Object(m.jsx)(u.a,{fontSize:"small",color:"disabled"}),"\u2003",Object(m.jsxs)("span",{className:"okr-title",title:t.title,onClick:function(){return n(t)},children:[s,".\xa0\xa0",t.title]})]}),v]})};p.defaultProps={index:0,selectOKR:function(){}};var g=p,k=(c(69),Object(m.jsx)("svg",{height:"35%",className:"objective-expansion-marker",children:Object(m.jsx)("line",{x1:"1.87rem",y1:"0",x2:"1.87rem",y2:"100%",className:"marker"})})),y=function(e){var t=e.okr,c=e.keyResults,r=e.index,i=e.selectOKR,s=Object(n.useState)(!0),a=Object(j.a)(s,2),l=a[0],o=a[1],b=function(e){i(Object(d.a)(Object(d.a)({},e),{},{parentObjective:t.title}))},O=c&&c.map((function(e,t){return Object(m.jsx)(g,{index:t,okr:e,selectOKR:b},e.id)}));return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"objective okr-item title-wrap",children:[!l&&Object(m.jsx)(x.a,{fontSize:"small",className:"objective-arrow","data-testid":"expand-icon",onClick:function(){return o(!0)}}),l&&Object(m.jsx)(h.a,{fontSize:"small","data-testid":"colapse-icon",className:"objective-arrow",onClick:function(){return o(!1)}}),Object(m.jsx)(u.a,{fontSize:"small",color:"disabled"}),"\u2003",Object(m.jsxs)("span",{className:"okr-title",title:t.title,onClick:function(){return i(t)},children:[r,".\xa0\xa0",t.title]}),l&&c&&k]}),l&&O]})};y.defaultProps={keyResults:[],index:0,selectOKR:function(){}};var S=y,N=(c(70),{margin:"5px",padding:"5px",border:"1px solid lightgray",borderRadius:"3px",display:"inline-block",cursor:"pointer"}),C=function(e){var t=e.category,c=e.selected,n=e.toggleFilter;return Object(m.jsx)("label",{style:N,onClick:function(){return n(t)},className:c?"filter-selected":"",children:t})};C.defaultProps={selected:!1,toggleFilter:function(){}};var w=C,F=function(e){var t=e.filters,c=e.selectedFilters,r=e.toggleFilter,i=Object(n.useState)(!0),s=Object(j.a)(i,2),a=s[0],l=s[1];return Object(m.jsxs)(m.Fragment,{children:[!a&&Object(m.jsx)(x.a,{fontSize:"small",className:"filter-arrow","data-testid":"filter-expand-icon",onClick:function(){return l(!0)}}),a&&Object(m.jsx)(h.a,{fontSize:"small","data-testid":"filter-colapse-icon",className:"filter-arrow",onClick:function(){return l(!1)}}),Object(m.jsx)("h4",{id:"filters-title",onClick:function(){return l(!a)},children:"Filters"}),Object(m.jsx)("br",{}),a&&t.map((function(e){return Object(m.jsx)(w,{category:e,toggleFilter:r,selected:c.has(e)},e)}))]})};F.defaultProps={selectedFilters:new Set,toggleFilter:function(){}};var R=F,z=c(99),K=c(101),_=c(96),A=c(97),P=c(100),E=function(e){var t=e.okr,c=e.onClose;return Object(m.jsxs)(z.a,{open:!0,onClose:c,"aria-labelledby":"customized-dialog-title",children:[Object(m.jsx)(K.a,{id:"customized-dialog-title",onClose:c,children:t.parentObjective?"Key Result":"Objective"}),Object(m.jsxs)(_.a,{dividers:!0,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"Title"})," : ",Object(m.jsx)("i",{children:t.title})]}),t.parentObjective&&Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"Objective"})," : ",Object(m.jsx)("i",{children:t.parentObjective})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"Category"})," : ",Object(m.jsx)("i",{children:t.category})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"Metric Name"})," : ",Object(m.jsx)("i",{children:t.metric_name})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"Metric Start"})," : ",Object(m.jsx)("i",{children:t.metric_start})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"Metric End"})," : ",Object(m.jsx)("i",{children:t.metric_end})]})]}),Object(m.jsx)(A.a,{children:Object(m.jsx)(P.a,{onClick:c,children:"Close"})})]})};E.defaultProps={onClose:function(){}};var M=E,J=function(e){var t={},c=new Set;return e.forEach((function(e){c.add(e.category);var n=""===e.parent_objective_id?"objectives":e.parent_objective_id;n in t||(t[n]=[]),t[n].push(e)})),[t,Array.from(c)]},B=function(){var e=Object(n.useState)({objectives:[]}),t=Object(j.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)([]),s=Object(j.a)(i,2),d=s[0],b=s[1],u=Object(n.useState)(new Set),O=Object(j.a)(u,2),x=O[0],f=O[1],h=Object(n.useState)(),v=Object(j.a)(h,2),p=v[0],g=v[1],k=Object(n.useState)(!1),y=Object(j.a)(k,2),N=y[0],C=y[1],w=Object(n.useState)(),F=Object(j.a)(w,2),z=F[0],K=F[1],_=function(){var e=Object(l.a)(a.a.mark((function e(){var t,c,n,i,s,l,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C(!0),e.next=4,fetch("https://okrcentral.github.io/sample-okrs/db.json");case 4:return t=e.sent,e.next=7,t.json();case 7:c=e.sent,n=c.data,i=J(n),s=Object(j.a)(i,2),l=s[0],o=s[1],r(l),b(o),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),K(e.t0.message);case 17:return e.prev=17,C(!1),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[0,14,17,20]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){_()}),[]);return Object(m.jsxs)("section",{children:[Object(m.jsx)("h3",{children:"Objectives & Key Results"}),N&&Object(m.jsx)(o.a,{}),d.length>0&&Object(m.jsx)(R,{filters:d,toggleFilter:function(e){var t=new Set(x);t.has(e)?t.delete(e):t.add(e),f(t)},selectedFilters:x}),c.objectives&&function(){var e=c.objectives;return x.size>0&&(e=e.filter((function(e){return x.has(e.category)}))),e.map((function(e,t){return Object(m.jsx)(S,{keyResults:c[e.id],okr:e,index:t+1,selectOKR:g},e.id)}))}(),z&&Object(m.jsxs)("i",{children:["No data - ",z]}),p&&Object(m.jsx)(M,{okr:p,onClose:function(){return g()}})]})};var I=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("header",{className:"App-header",children:Object(m.jsx)("h2",{children:"Ally.io Assignment"})}),Object(m.jsx)(B,{})]})};i.a.render(Object(m.jsx)(I,{}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.89b6902e.chunk.js.map