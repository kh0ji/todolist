(this.webpackJsonpp1=this.webpackJsonpp1||[]).push([[0],{56:function(e,t,a){e.exports=a(67)},67:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),c=a.n(r),o=a(46),i=a(35),u=a(99),m=a(44),s=a.n(m),d=a(101),E=function(e){return l.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},l.a.createElement("li",{style:{width:"100px"}},e.value),l.a.createElement(d.a,{title:"Delete"},l.a.createElement(u.a,{onClick:function(){e.onSelect(e.id)},"aria-label":"delete"},l.a.createElement(s.a,null))))},f=a(45),p=a.n(f),b=a(98),g=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(JSON.parse(localStorage.getItem("Todo"))),m=Object(i.a)(c,2),s=m[0],f=m[1],g=function(e){f((function(t){return t.filter((function(t,a){return a!==e}))})),localStorage.setItem("Todo",JSON.stringify(s))};return localStorage.setItem("Todo",JSON.stringify(s)),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("center",{className:"text-center"},l.a.createElement("br",null),l.a.createElement("h1",null," ToDo List"),l.a.createElement("br",null),l.a.createElement(b.a,{id:"standard-basic",label:"Add a item",onChange:function(e){var t=e.target.value;r(t)},value:a}),l.a.createElement(d.a,{title:"Add Items"},l.a.createElement(u.a,{onClick:function(){""!==a&&(f((function(e){return[].concat(Object(o.a)(e),[a])})),r(""))},color:"primary","aria-label":"add to shopping cart"},l.a.createElement(p.a,null))),l.a.createElement("br",null),l.a.createElement("ol",null,JSON.parse(localStorage.getItem("Todo")).map((function(e,t){return l.a.createElement(E,{key:t,id:t,value:e,onSelect:g})}))))))};a(66);c.a.render(l.a.createElement(g,null),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.f2739d0f.chunk.js.map