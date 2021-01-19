(this.webpackJsonptrellu=this.webpackJsonptrellu||[]).push([[0],{31:function(n,e,t){},32:function(n,e,t){},33:function(n,e,t){},44:function(n,e,t){"use strict";t.r(e);var r=t(2),a=t(0),c=t.n(a),i=t(8),o=t.n(i),u=(t(31),t(6)),s=t(1),d=t(19),l=t(5),b=t(12),j=t(13),f=t(15),O=t(14),p=t(3),g=(t(32),t(7));t(33);var x=function(){return Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("h1",{children:"Trellu"})})},m=t(4);function v(){var n=Object(p.a)(["\n  background-color: #fff;\n  padding: 5px;\n  border: 0;\n  &:hover{\n    background-color: rgba(190, 190, 190, 0.438);\n  }\n"]);return v=function(){return n},n}function h(){var n=Object(p.a)(["\n  background-color: rgb(255, 255, 255);\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  right: -70px;\n  z-index: 999;\n  visibility: ",";\n"]);return h=function(){return n},n}var k=m.a.div(h(),(function(n){return n.taskId===n.menuToOpen?"visible":"hidden"})),w=m.a.button(v());var I=function(n){var e=n.taskId,t=n.columnId,a=n.menuToOpen,c=n.onTaskValidated,i=n.deleteElement;return Object(r.jsxs)(k,{taskId:e,menuToOpen:a,children:[Object(r.jsx)(w,{onClick:function(){return c(e)},children:"Valider"}),Object(r.jsx)(w,{onClick:function(){return i("task",t,e)},children:"Supprimer"})]})},y=t.p+"static/media/ellipsis-v-solid.33b29c57.svg",T=t.p+"static/media/grip-lines-solid.c2781a6f.svg";function D(){var n=Object(p.a)(["\n  margin-right: 8px\n"]);return D=function(){return n},n}function N(){var n=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  text-decoration: ",";\n  margin: 0 10px\n"]);return N=function(){return n},n}function C(){var n=Object(p.a)(["\n  padding: 4px;\n  border-radius: 5px 5px;\n  cursor: pointer;\n  &:hover{\n    background-color: rgba(170, 170, 170, 0.562);\n  }\n"]);return C=function(){return n},n}function M(){var n=Object(p.a)(["\n  background-color: \n    ",";\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  width: 100%;\n  margin-bottom: 10px;\n  padding: 10px 0;\n  border-radius: 10px 10px;\n  text-align: justify;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n"]);return M=function(){return n},n}var S=m.a.div(M(),(function(n){return n.validated?"#aaaaaa":n.isDragging?"lightgreen":"#ffffff"})),E=m.a.img(C()),L=m.a.div(N(),(function(n){return n.validated?"line-through":"none"})),P=m.a.img(D());var A=function(n){var e=n.index,t=n.task,c=n.deleteElement,i=n.columnId,o=n.toggleMenu,u=n.menuToOpen,d=Object(a.useState)(!1),b=Object(l.a)(d,2),j=b[0],f=b[1],O=function(n){f((function(n){return!n})),o(n)};return Object(r.jsx)(g.b,{draggableId:t.id,index:e,children:function(n,e){return Object(r.jsxs)(S,Object(s.a)(Object(s.a)({},n.draggableProps),{},{ref:n.innerRef,isDragging:e.isDragging,"aria-roledescription":"Press space bar to lift the task",validated:j,children:[Object(r.jsxs)(L,{validated:j,children:[Object(r.jsx)(P,Object(s.a)(Object(s.a)({},n.dragHandleProps),{},{alt:"Drag handle",src:T})),t.content]}),Object(r.jsx)(E,{onClick:function(){return o(t.id)},alt:"Logo menu",src:y}),Object(r.jsx)(I,{onTaskValidated:O,columnId:i,taskId:t.id,menuToOpen:u,deleteElement:c})]}))}})};function z(){var n=Object(p.a)(["\n  width: 100%;\n  border-radius: 10px 10px;\n  border: 0;\n  padding: 5px;\n  background-color: rgb(0, 140, 255);\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  box-shadow: ","\n"]);return z=function(){return n},n}function B(){var n=Object(p.a)(["\n  border-radius: 10px 10px;\n  padding: 10px;\n  border: 0;\n  outline: none;\n  resize: none;\n  font-family: 'Arial';\n  margin-bottom: 5px;\n  width: 100%\n"]);return B=function(){return n},n}function F(){var n=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 10px 0;\n  width: 100%\n"]);return F=function(){return n},n}var R=m.a.form(F()),U=m.a.textarea(B()),Y=m.a.button(z(),(function(n){return n.mouseDown?"inset 1px 1px  3px rgba(0, 0, 0, .5)":""}));var V=function(n){var e=n.registerNewTask,t=n.columnId,c=Object(a.useState)(""),i=Object(l.a)(c,2),o=i[0],u=i[1],s=Object(a.useState)(!1),d=Object(l.a)(s,2),b=d[0],j=d[1],f=function(){j((function(n){return!n}))};return Object(r.jsxs)(R,{className:"form",onSubmit:function(n){return function(n,t,r){n.preventDefault(),""!==t&&(e(t,r),u(t=""))}(n,o,t)},children:[Object(r.jsx)(U,{value:o,onChange:function(n){return u(n.target.value)},name:"New task",type:"text",rows:2,placeholder:"Nouvelle t\xe2che"}),Object(r.jsx)(Y,{className:"validateButton",mouseDown:b,onMouseDown:function(){return f()},onMouseUp:function(){return f()},children:"Ajouter"})]})};function H(){var n=Object(p.a)(["\n  background-color: #fff;\n  padding: 5px;\n  border: 0;\n  &:hover{\n    background-color: rgba(190, 190, 190, 0.438);\n  }\n"]);return H=function(){return n},n}function J(){var n=Object(p.a)(["\n  background-color: rgb(255, 255, 255);\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  right: -70px;\n  z-index: 999;\n  visibility: ",";\n"]);return J=function(){return n},n}var q=m.a.div(J(),(function(n){return n.columnId===n.menuToOpen?"visible":"hidden"})),G=m.a.button(H());var K=function(n){var e=n.columnId,t=n.menuToOpen,a=n.deleteElement;return Object(r.jsx)(q,{columnId:e,menuToOpen:t,children:Object(r.jsx)(G,{onClick:function(){return a("column",e,"")},children:"Supprimer"})})};function Q(){var n=Object(p.a)(["\n  padding: 8px;\n"]);return Q=function(){return n},n}function W(){var n=Object(p.a)(["\n  background-color: ",";\n  transition: background-color .3s;\n  width: 100%;\n  border-radius: 10px 10px;\n  min-height: 10px;\n"]);return W=function(){return n},n}function X(){var n=Object(p.a)(["\n  padding: 4px;\n  border-radius: 5px 5px;\n  cursor: pointer;\n  &:hover{\n    background-color: rgba(170, 170, 170, 0.562);\n  }\n"]);return X=function(){return n},n}function Z(){var n=Object(p.a)(["\n  background-color: rgba(255, 255, 255, 0.623);\n  border-radius: 10px 10px;\n  margin: 10px;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-height: 90vh;\n  width: 20vw;\n"]);return Z=function(){return n},n}function $(){var n=Object(p.a)(["\n  display: flex;\n  align-items: center;\n"]);return $=function(){return n},n}function _(){var n=Object(p.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  width: 100%\n"]);return _=function(){return n},n}var nn=m.a.div(_()),en=m.a.div($()),tn=m.a.div(Z()),rn=m.a.img(X()),an=m.a.div(W(),(function(n){return n.isDraggingOver?"#00000026":"transparent"})),cn=m.a.h3(Q()),on=function(n){Object(f.a)(t,n);var e=Object(O.a)(t);function t(){return Object(b.a)(this,t),e.apply(this,arguments)}return Object(j.a)(t,[{key:"shouldComponentUpdate",value:function(n){return n.tasks!==this.props.tasks}},{key:"render",value:function(){var n=this.props,e=n.tasks,t=n.deleteElement,a=n.columnId,c=n.toggleMenu,i=n.menuToOpen;return e.map((function(n,e){return Object(r.jsx)(A,{task:n,index:e,deleteElement:t,columnId:a,toggleMenu:c,menuToOpen:i},n.id)}))}}]),t}(c.a.Component);var un=function(n){var e=n.column,t=n.tasks,a=n.index,c=n.registerNewTask,i=n.deleteElement,o=n.toggleMenu,u=n.menuToOpen;return Object(r.jsx)(g.b,{draggableId:e.id,index:a,children:function(n){return Object(r.jsxs)(tn,Object(s.a)(Object(s.a)({},n.draggableProps),{},{ref:n.innerRef,children:[Object(r.jsxs)(nn,Object(s.a)(Object(s.a)({},n.dragHandleProps),{},{children:[Object(r.jsx)(cn,{children:e.title}),Object(r.jsxs)(en,{children:[Object(r.jsx)(rn,{onClick:function(){return o(e.id)},alt:"Logo menu",src:y}),Object(r.jsx)(K,{columnId:e.id,menuToOpen:u,deleteElement:i})]})]})),Object(r.jsx)(V,{registerNewTask:c,columnId:e.id}),Object(r.jsx)(g.c,{droppableId:e.id,type:"task",children:function(n,a){return Object(r.jsxs)(an,Object(s.a)(Object(s.a)({ref:n.innerRef},n.droppableProps),{},{isDraggingOver:a.isDraggingOver,children:[Object(r.jsx)(on,{tasks:t,deleteElement:i,columnId:e.id,toggleMenu:o,menuToOpen:u}),n.placeholder]}))}})]}))}})};function sn(){var n=Object(p.a)(["\n  width: 100%;\n  border-radius: 10px 10px;\n  border: 0;\n  padding: 5px;\n  background-color: rgb(0, 140, 255);\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  box-shadow: ","\n"]);return sn=function(){return n},n}function dn(){var n=Object(p.a)(["\n  width: 100%;\n  border-radius: 10px 10px;\n  padding: 10px;\n  border: 0;\n  outline: none;\n  resize: none;\n  font-family: 'Arial';\n  margin: 5px 0;\n"]);return dn=function(){return n},n}function ln(){var n=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return ln=function(){return n},n}var bn=m.a.form(ln()),jn=m.a.input(dn()),fn=m.a.button(sn(),(function(n){return n.mouseDown?"inset 1px 1px  3px rgba(0, 0, 0, .5)":""}));var On=function(n){var e=n.registerNewList,t=Object(a.useState)(""),c=Object(l.a)(t,2),i=c[0],o=c[1],u=Object(a.useState)(!1),s=Object(l.a)(u,2),d=s[0],b=s[1],j=function(){b((function(n){return!n}))};return Object(r.jsxs)(bn,{onSubmit:function(n){return function(n,t){n.preventDefault(),""!==t&&(e(t),o(t=""))}(n,i)},children:[Object(r.jsx)(jn,{value:i,onChange:function(n){return o(n.target.value)},name:"NewList",type:"text",placeholder:"Titre de la liste"}),Object(r.jsx)(fn,{className:"validateButton",mouseDown:d,onMouseDown:function(){return j()},onMouseUp:function(){return j()},children:"Ajouter une liste"})]})};function pn(){var n=Object(p.a)(["\n  background-color: rgba(255, 255, 255, 0.623);\n  width: 17vw;\n  margin: 10px;\n  padding: 10px;\n  border-radius: 10px 10px;\n"]);return pn=function(){return n},n}var gn=m.a.div(pn());var xn=function(n){var e=n.registerNewList;return Object(r.jsx)(gn,{children:Object(r.jsx)(On,{registerNewList:e})})};function mn(){var n=Object(p.a)(["\n  display: flex;\n  align-items: flex-start;\n"]);return mn=function(){return n},n}var vn=m.a.div(mn()),hn=function(n){Object(f.a)(t,n);var e=Object(O.a)(t);function t(){return Object(b.a)(this,t),e.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){var n=this.props,e=n.column,t=n.taskMap,a=n.index,c=n.registerNewTask,i=n.deleteElement,o=n.toggleMenu,u=n.menuToOpen,s=e.tasksIds.map((function(n){return t[n]}));return Object(r.jsx)(un,{column:e,tasks:s,index:a,registerNewTask:c,deleteElement:i,toggleMenu:o,menuToOpen:u})}}]),t}(c.a.PureComponent);var kn=function(){var n=Object(a.useState)({tasks:{},columns:{},columnOrder:[]}),e=Object(l.a)(n,2),t=e[0],c=e[1],i=Object(a.useState)(""),o=Object(l.a)(i,2),b=o[0],j=o[1],f=Object(a.useState)(!1),O=Object(l.a)(f,2),p=O[0],m=O[1],v=function(n){!1===p?(j(n),m((function(n){return!n}))):(j(""),m((function(n){return!n})))},h=function(n){var e=t.columns,r=t.columnOrder,a={id:"column-".concat(r.length+1),title:n,tasksIds:[]},i=[].concat(Object(d.a)(r),[a.id]),o=Object(s.a)(Object(s.a)({},t),{},{columns:Object(s.a)(Object(s.a)({},e),{},Object(u.a)({},a.id,Object(s.a)({},a))),columnOrder:i});c((function(n){return Object(s.a)(Object(s.a)({},n),o)}))},k=function(n,e){var r=t.tasks,a=t.columns,i={id:"task-".concat(Object.keys(r).length+1),content:n},o=[].concat(Object(d.a)(a[e].tasksIds),[i.id]),l=Object(s.a)(Object(s.a)({},t),{},{tasks:Object(s.a)(Object(s.a)({},r),{},Object(u.a)({},i.id,{id:i.id,content:i.content})),columns:Object(s.a)(Object(s.a)({},a),{},Object(u.a)({},e,Object(s.a)(Object(s.a)({},a[e]),{},{tasksIds:o})))});c((function(n){return Object(s.a)(Object(s.a)({},n),l)}))},w=function(n,e,r){if("task"===n){var a=t.tasks;delete a[r];var i=t.columns,o=i[e].tasksIds.indexOf(r);i[e].tasksIds.splice(o,1);var u=Object(s.a)(Object(s.a)({},t),{},{tasks:Object(s.a)({},a),columns:Object(s.a)({},i)});c((function(n){return Object(s.a)(Object(s.a)({},n),u)}))}else if("column"===n){var d=t.columns;delete d[e];var l=t.columnOrder;delete l[e];var b=Object(s.a)(Object(s.a)({},t),{},{columns:{newColumnList:d},newColumnOrder:l});c((function(n){return Object(s.a)(Object(s.a)({},n),b)}))}};return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(x,{}),Object(r.jsx)(g.a,{onDragStart:function(n,e){return function(n,e){e.announce("You have lifted the task in position ".concat(n.source.index+1))}(n,e)},onDragUpdate:function(n,e){return function(n,e){var t=n.destination?"You have moved the task to position ".concat(n.destination.index+1):"You are currently not over a droppable area";e.announce(t)}(n,e)},onDragEnd:function(n,e){return function(n,e){var r=n.destination,a=n.source,i=n.draggableId,o=n.type,d=n.destination?"You have moved the task from position\n      ".concat(n.source.index+1," to ").concat(n.destination.index+1):"The task has been return to its position of ".concat(n.source.index+1);if(e.announce(d),r&&(r.droppableId!==a.droppableId||r.index!==a.index))if("column"!==o){var l=t.columns[a.droppableId],b=t.columns[r.droppableId],j=Array.from(l.tasksIds);if(l!==b){var f,O=Array.from(l.tasksIds);O.splice(a.index,1);var p=Object(s.a)(Object(s.a)({},l),{},{tasksIds:O}),g=Array.from(b.tasksIds);g.splice(r.index,0,i);var x=Object(s.a)(Object(s.a)({},b),{},{tasksIds:g}),m=Object(s.a)(Object(s.a)({},t),{},{columns:Object(s.a)(Object(s.a)({},t.columns),{},(f={},Object(u.a)(f,p.id,p),Object(u.a)(f,x.id,x),f))});c((function(n){return Object(s.a)(Object(s.a)({},n),m)}))}else{j.splice(a.index,1),j.splice(r.index,0,i);var v=Object(s.a)(Object(s.a)({},l),{},{tasksIds:j}),h=Object(s.a)(Object(s.a)({},t),{},{columns:Object(s.a)(Object(s.a)({},t.columns),{},Object(u.a)({},v.id,v))});c((function(n){return Object(s.a)(Object(s.a)({},n),h)}))}}else{var k=Array.from(t.columnOrder);k.splice(a.index,1),k.splice(r.index,0,i);var w=Object(s.a)(Object(s.a)({},t),{},{columnOrder:k});c((function(n){return Object(s.a)(Object(s.a)({},n),w)}))}}(n,e)},children:Object(r.jsx)(g.c,{droppableId:"all-columns",direction:"horizontal",type:"column",children:function(n){return Object(r.jsxs)(vn,Object(s.a)(Object(s.a)({},n.droppableProps),{},{ref:n.innerRef,children:[t.columnOrder.map((function(n,e){var a=t.columns[n];return Object(r.jsx)(hn,{column:a,taskMap:t.tasks,index:e,registerNewTask:k,deleteElement:w,toggleMenu:v,menuToOpen:b},a.id)})),n.placeholder,Object(r.jsx)(xn,{registerNewList:h})]}))}})})]})},wn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,45)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),r(n),a(n),c(n),i(n)}))};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(kn,{})}),document.getElementById("root")),wn()}},[[44,1,2]]]);
//# sourceMappingURL=main.dfe0ddc7.chunk.js.map