(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),s=n(16),i=n.n(s),o=(n(23),n(17)),l=n(3),u=n(5),j=n.n(u),b=function(t){var e=t.title;return Object(a.jsx)("nav",{className:"justify-content-center navbar navbar-expand-lg navbar-dark bg-dark",children:Object(a.jsx)("a",{className:"navbar-brand",href:"/#",children:e})})},d=function(t){var e=t.id,n=t.initialTitle,r=t.initialText,s=t.removeNote,i=t.updateNote,o=Object(c.useState)(n),u=Object(l.a)(o,2),j=u[0],b=u[1],d=Object(c.useState)(r),x=Object(l.a)(d,2),f=x[0],O=x[1],h=Object(c.useState)(!1),m=Object(l.a)(h,2),v=m[0],p=m[1];return Object(a.jsx)("div",{className:"card",children:Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("input",{style:{backgroundColor:"transparent",border:"none",fontSize:"1.25rem",marginBottom:"0.75rem"},spellCheck:!1,disabled:!v,value:j,onChange:function(t){return b(t.target.value)}}),Object(a.jsx)("textarea",{rows:5,style:{backgroundColor:"transparent",border:"none"},spellCheck:!1,disabled:!v,value:f,onChange:function(t){return O(t.target.value)}}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{className:"btn",hidden:v,onClick:function(){return p(!v)},children:Object(a.jsx)("i",{className:"text-secondary fa fa-pencil fa-lg"})}),Object(a.jsx)("button",{className:"btn",hidden:!v,onClick:function(){i(e,j,f),p(!v)},children:Object(a.jsx)("i",{className:"text-secondary fa fa-save fa-lg"})}),Object(a.jsx)("button",{className:"btn",onClick:function(){return s(e)},children:Object(a.jsx)("i",{className:"text-danger fa fa-trash fa-lg"})})]})})},x=function(t){var e=t.notes,n=t.removeNote,c=t.updateNote;return Object(a.jsx)("div",{className:"card-columns",children:e.map((function(t){return Object(a.jsx)(d,{id:t._id,initialTitle:t.title,initialText:t.text,removeNote:n,updateNote:c},t._id)}))})},f=function(t){var e=t.addNote,n=Object(c.useState)(""),r=Object(l.a)(n,2),s=r[0],i=r[1],o=Object(c.useState)(""),u=Object(l.a)(o,2),j=u[0],b=u[1];return Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e({title:s,text:j}),i(""),b("")},children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"title",children:"T\xedtulo"}),Object(a.jsx)("input",{id:"title",className:"form-control",type:"text",value:s,onChange:function(t){return i(t.target.value)}})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"text",children:"Texto"}),Object(a.jsx)("textarea",{id:"text",className:"form-control",value:j,rows:"4",onChange:function(t){return b(t.target.value)}})]}),Object(a.jsx)("input",{className:"btn btn-primary",type:"submit",value:"Guardar"})]})},O=function(){return Object(a.jsxs)("div",{className:"text-center mb-3",children:[Object(a.jsx)("hr",{}),Object(a.jsx)("h4",{className:"text-muted",children:"Hello React"}),Object(a.jsx)("a",{href:"https://github.com/santiagotrini/hello-react",children:Object(a.jsx)("i",{className:"fa fa-github fa-3x text-dark"})})]})},h=function(){var t=Object(c.useState)([]),e=Object(l.a)(t,2),n=e[0],r=e[1];Object(c.useEffect)((function(){j.a.get("/api/notes").then((function(t){r(t.data.notes)}))}),[]);return Object(a.jsxs)("div",{children:[Object(a.jsx)(b,{title:"Notas"}),Object(a.jsxs)("div",{className:"container mt-3",children:[Object(a.jsx)(f,{addNote:function(t){j.a.post("/api/notes",t).then((function(t){var e=[t.data].concat(Object(o.a)(n));r(e)}))}}),Object(a.jsx)("hr",{}),Object(a.jsx)(x,{notes:n,removeNote:function(t){j.a.delete("/api/notes/"+t).then((function(e){var a=n.filter((function(e){return e._id!==t}));r(a)}))},updateNote:function(t,e,a){var c={title:e,text:a};j.a.put("/api/notes/"+t,c).then((function(e){var a=n.map((function(e){return e.id===t?c:e}));r(a)}))}})]}),Object(a.jsx)(O,{})]})},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),a(t),c(t),r(t),s(t)}))};n(41);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root")),m()}},[[42,1,2]]]);
//# sourceMappingURL=main.52168475.chunk.js.map