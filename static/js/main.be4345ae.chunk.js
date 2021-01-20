(this.webpackJsonptrellu=this.webpackJsonptrellu||[]).push([[0],{31:function(n,e,t){},32:function(n,e,t){},33:function(n,e,t){},44:function(n,e,t){"use strict";t.r(e);var r=t(2),a=t(0),c=t.n(a),i=t(8),o=t.n(i),u=(t(31),t(5)),s=t(1),d=t(19),l=t(6),b=t(12),j=t(13),O=t(15),f=t(14),p=t(3),m=(t(32),t(7));t(33);var g=function(){return Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("h1",{children:"Trellu"})})},x=t(4);function v(){var n=Object(p.a)(["\n  background-color: #fff;\n  padding: 5px;\n  border: 0;\n  &:hover{\n    background-color: rgba(190, 190, 190, 0.438);\n  }\n"]);return v=function(){return n},n}function k(){var n=Object(p.a)(["\n  background-color: rgb(255, 255, 255);\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  right: -70px;\n  z-index: 999;\n  visibility: ",";\n"]);return k=function(){return n},n}var h=x.a.div(k(),(function(n){return n.taskId===n.menuToOpen?"visible":"hidden"})),w=x.a.button(v());var T=function(n){var e=n.task,t=n.columnId,a=n.menuToOpen,c=n.validateTask,i=n.deleteElement;return Object(r.jsxs)(h,{taskId:e.id,menuToOpen:a,children:[Object(r.jsx)(w,{onClick:function(){return c(e.id)},children:!1===e.validated?"Validate":"Undo"}),Object(r.jsx)(w,{onClick:function(){return i("task",t,e.id)},children:"Delete"})]})},y=t.p+"static/media/ellipsis-v-solid.33b29c57.svg",I=t.p+"static/media/grip-lines-solid.c2781a6f.svg";function D(){var n=Object(p.a)(["\n  margin-right: 10px\n"]);return D=function(){return n},n}function C(){var n=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  text-decoration: ",";\n  margin-left: 10px;\n  text-align: left\n"]);return C=function(){return n},n}function N(){var n=Object(p.a)(["\n  padding: 4px;\n  border-radius: 5px 5px;\n  cursor: pointer;\n  &:hover{\n    background-color: rgba(170, 170, 170, 0.562);\n  }\n"]);return N=function(){return n},n}function M(){var n=Object(p.a)(["\n  background-color: \n    ",";\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  width: 100%;\n  margin-bottom: 10px;\n  padding: 10px 0;\n  border-radius: 10px 10px;\n  text-align: justify;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n"]);return M=function(){return n},n}var E=x.a.div(M(),(function(n){return n.task.validated?"#aaaaaa":n.isDragging?"lightgreen":"#ffffff"})),S=x.a.img(N()),P=x.a.div(C(),(function(n){return n.task.validated?"line-through":"none"})),L=x.a.img(D());var A=function(n){var e=n.index,t=n.task,a=n.deleteElement,c=n.columnId,i=n.toggleMenu,o=n.validateTask,u=n.menuToOpen;return Object(r.jsx)(m.b,{draggableId:t.id,index:e,children:function(n,e){return Object(r.jsxs)(E,Object(s.a)(Object(s.a)({},n.draggableProps),{},{ref:n.innerRef,isDragging:e.isDragging,"aria-roledescription":"Press space bar to lift the task",task:t,children:[Object(r.jsxs)(P,{validated:t.validated,task:t,children:[Object(r.jsx)(L,Object(s.a)(Object(s.a)({},n.dragHandleProps),{},{alt:"Drag handle",src:I})),t.content]}),Object(r.jsx)(S,{onClick:function(){return i(t.id)},alt:"Menu icon",src:y}),Object(r.jsx)(T,{onTaskValidated:o,columnId:c,task:t,menuToOpen:u,deleteElement:a,validateTask:o})]}))}})};function z(){var n=Object(p.a)(["\n  width: 100%;\n  border-radius: 10px 10px;\n  border: 0;\n  padding: 5px;\n  background-color: rgb(0, 140, 255);\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  box-shadow: ","\n"]);return z=function(){return n},n}function U(){var n=Object(p.a)(["\n  border-radius: 10px 10px;\n  padding: 10px;\n  border: 0;\n  outline: none;\n  resize: none;\n  font-family: 'Arial';\n  margin-bottom: 5px;\n  width: 100%\n"]);return U=function(){return n},n}function F(){var n=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 10px 0;\n  width: 100%\n"]);return F=function(){return n},n}var R=x.a.form(F()),Y=x.a.input(U()),B=x.a.button(z(),(function(n){return n.mouseDown?"inset 1px 1px  3px rgba(0, 0, 0, .5)":""}));var H=function(n){var e=n.registerNewTask,t=n.columnId,c=Object(a.useState)(""),i=Object(l.a)(c,2),o=i[0],u=i[1],s=Object(a.useState)(!1),d=Object(l.a)(s,2),b=d[0],j=d[1],O=function(){j((function(n){return!n}))};return Object(r.jsxs)(R,{className:"form",onSubmit:function(n){return function(n,t,r){n.preventDefault(),""!==t&&(e(t,r),u(t=""))}(n,o,t)},children:[Object(r.jsx)(Y,{value:o,onChange:function(n){return u(n.target.value)},name:"New task",type:"text",rows:2,placeholder:"New task"}),Object(r.jsx)(B,{mouseDown:b,onMouseDown:function(){return O()},onMouseUp:function(){return O()},type:"submit",children:"Add"})]})};function J(){var n=Object(p.a)(["\n  background-color: #fff;\n  padding: 5px;\n  border: 0;\n  &:hover{\n    background-color: rgba(190, 190, 190, 0.438);\n  }\n"]);return J=function(){return n},n}function V(){var n=Object(p.a)(["\n  background-color: rgb(255, 255, 255);\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  right: -70px;\n  z-index: 999;\n  visibility: ",";\n"]);return V=function(){return n},n}var q=x.a.div(V(),(function(n){return n.columnId===n.menuToOpen?"visible":"hidden"})),G=x.a.button(J());var K=function(n){var e=n.columnId,t=n.menuToOpen,a=n.deleteElement;return Object(r.jsx)(q,{columnId:e,menuToOpen:t,children:Object(r.jsx)(G,{onClick:function(){return a("column",e,"")},children:"Delete"})})};function Q(){var n=Object(p.a)(["\n  padding: 8px;\n"]);return Q=function(){return n},n}function W(){var n=Object(p.a)(["\n  background-color: ",";\n  transition: background-color .3s;\n  width: 100%;\n  border-radius: 10px 10px;\n  min-height: 50px;\n"]);return W=function(){return n},n}function X(){var n=Object(p.a)(["\n  padding: 4px;\n  border-radius: 5px 5px;\n  cursor: pointer;\n  &:hover{\n    background-color: rgba(170, 170, 170, 0.562);\n  }\n"]);return X=function(){return n},n}function Z(){var n=Object(p.a)(["\n  background-color: rgba(255, 255, 255, 0.623);\n  border-radius: 10px 10px;\n  margin: 10px;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 20vw;\n  min-width: 20vw;\n"]);return Z=function(){return n},n}function $(){var n=Object(p.a)(["\n  display: flex;\n  align-items: center;\n"]);return $=function(){return n},n}function _(){var n=Object(p.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  width: 100%\n"]);return _=function(){return n},n}var nn=x.a.div(_()),en=x.a.div($()),tn=x.a.div(Z()),rn=x.a.img(X()),an=x.a.div(W(),(function(n){return n.isDraggingOver?"#00000026":"transparent"})),cn=x.a.h3(Q()),on=function(n){Object(O.a)(t,n);var e=Object(f.a)(t);function t(){return Object(b.a)(this,t),e.apply(this,arguments)}return Object(j.a)(t,[{key:"shouldComponentUpdate",value:function(n){return n.tasks!==this.props.tasks}},{key:"render",value:function(){var n=this.props,e=n.tasks,t=n.deleteElement,a=n.columnId,c=n.validateTask,i=n.menuToOpen,o=n.toggleMenu;return e.map((function(n,e){return Object(r.jsx)(A,{task:n,index:e,deleteElement:t,columnId:a,validateTask:c,menuToOpen:i,toggleMenu:o},n.id)}))}}]),t}(c.a.Component);var un=function(n){var e=n.column,t=n.tasks,a=n.index,c=n.registerNewTask,i=n.deleteElement,o=n.toggleMenu,u=n.validateTask,d=n.menuToOpen;return Object(r.jsx)(m.b,{draggableId:e.id,index:a,children:function(n){return Object(r.jsxs)(tn,Object(s.a)(Object(s.a)({},n.draggableProps),{},{ref:n.innerRef,children:[Object(r.jsxs)(nn,Object(s.a)(Object(s.a)({},n.dragHandleProps),{},{children:[Object(r.jsx)(cn,{children:e.title}),Object(r.jsxs)(en,{children:[Object(r.jsx)(rn,{onClick:function(){return o(e.id)},alt:"Logo menu",src:y}),Object(r.jsx)(K,{columnId:e.id,menuToOpen:d,deleteElement:i})]})]})),Object(r.jsx)(H,{registerNewTask:c,columnId:e.id}),Object(r.jsx)(m.c,{droppableId:e.id,type:"task",children:function(n,a){return Object(r.jsxs)(an,Object(s.a)(Object(s.a)({ref:n.innerRef},n.droppableProps),{},{isDraggingOver:a.isDraggingOver,children:[Object(r.jsx)(on,{tasks:t,deleteElement:i,columnId:e.id,validateTask:u,menuToOpen:d,toggleMenu:o}),n.placeholder]}))}})]}))}})};function sn(){var n=Object(p.a)(["\n  width: 100%;\n  border-radius: 10px 10px;\n  border: 0;\n  padding: 5px;\n  background-color: rgb(0, 140, 255);\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  box-shadow: ","\n"]);return sn=function(){return n},n}function dn(){var n=Object(p.a)(["\n  width: 100%;\n  border-radius: 10px 10px;\n  padding: 10px;\n  border: 0;\n  outline: none;\n  resize: none;\n  font-family: 'Arial';\n  margin: 5px 0;\n"]);return dn=function(){return n},n}function ln(){var n=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return ln=function(){return n},n}var bn=x.a.form(ln()),jn=x.a.input(dn()),On=x.a.button(sn(),(function(n){return n.mouseDown?"inset 1px 1px  3px rgba(0, 0, 0, .5)":""}));var fn=function(n){var e=n.registerNewList,t=Object(a.useState)(""),c=Object(l.a)(t,2),i=c[0],o=c[1],u=Object(a.useState)(!1),s=Object(l.a)(u,2),d=s[0],b=s[1],j=function(){b((function(n){return!n}))};return Object(r.jsxs)(bn,{onSubmit:function(n){return function(n,t){n.preventDefault(),""!==t&&(e(t),o(t=""))}(n,i)},children:[Object(r.jsx)(jn,{value:i,onChange:function(n){return o(n.target.value)},name:"NewList",type:"text",placeholder:"List title"}),Object(r.jsx)(On,{className:"validateButton",mouseDown:d,onMouseDown:function(){return j()},onMouseUp:function(){return j()},children:"Create a new list"})]})};function pn(){var n=Object(p.a)(["\n  background-color: rgba(255, 255, 255, 0.623);\n  width: 17vw;\n  margin: 10px;\n  padding: 10px;\n  border-radius: 10px 10px;\n  min-width: 17vw;\n"]);return pn=function(){return n},n}var mn=x.a.div(pn());var gn=function(n){var e=n.registerNewList;return Object(r.jsx)(mn,{children:Object(r.jsx)(fn,{registerNewList:e})})};function xn(){var n=Object(p.a)(["\n  display: flex;\n  align-items: flex-start;\n  margin-top: 50px;\n"]);return xn=function(){return n},n}var vn=x.a.div(xn()),kn=function(n){Object(O.a)(t,n);var e=Object(f.a)(t);function t(){return Object(b.a)(this,t),e.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){var n=this.props,e=n.column,t=n.taskMap,a=n.index,c=n.registerNewTask,i=n.deleteElement,o=n.validateTask,u=n.menuToOpen,s=n.toggleMenu,d=e.tasksIds.map((function(n){return t[n]}));return Object(r.jsx)(un,{column:e,tasks:d,index:a,registerNewTask:c,deleteElement:i,validateTask:o,menuToOpen:u,toggleMenu:s})}}]),t}(c.a.PureComponent);var hn=function(){var n=Object(a.useState)({numberOfTasks:0,numberOfColumns:0,tasks:{},columns:{},columnOrder:[]}),e=Object(l.a)(n,2),t=e[0],c=e[1],i=Object(a.useState)(""),o=Object(l.a)(i,2),b=o[0],j=o[1],O=Object(a.useState)(!1),f=Object(l.a)(O,2),p=f[0],x=f[1],v=function(n){!1===p?(j(n),x((function(n){return!n}))):(j(""),x((function(n){return!n})))},k=function(n){var e=t.columns,r=t.columnOrder,a={id:"column-".concat(t.numberOfColumns+1),title:n,tasksIds:[]},i=[].concat(Object(d.a)(r),[a.id]),o=Object(s.a)(Object(s.a)({},t),{},{numberOfColumns:t.numberOfColumns+1,columns:Object(s.a)(Object(s.a)({},e),{},Object(u.a)({},a.id,Object(s.a)({},a))),columnOrder:i});c((function(n){return Object(s.a)(Object(s.a)({},n),o)}))},h=function(n,e){var r=t.tasks,a=t.columns,i={id:"task-".concat(t.numberOfTasks+1),content:n,validated:!1},o=[].concat(Object(d.a)(a[e].tasksIds),[i.id]),l=Object(s.a)(Object(s.a)({},t),{},{numberOfTasks:t.numberOfTasks+1,tasks:Object(s.a)(Object(s.a)({},r),{},Object(u.a)({},i.id,Object(s.a)({},i))),columns:Object(s.a)(Object(s.a)({},a),{},Object(u.a)({},e,Object(s.a)(Object(s.a)({},a[e]),{},{tasksIds:o})))});c((function(n){return Object(s.a)(Object(s.a)({},n),l)}))},w=function(n){if(console.log(t.tasks[n]),!1===t.tasks[n].validated){var e=Object(s.a)(Object(s.a)({},t.tasks[n]),{},{validated:!0}),r=Object(s.a)(Object(s.a)({},t),{},{tasks:Object(s.a)(Object(s.a)({},t.tasks),{},Object(u.a)({},e.id,Object(s.a)({},e)))});c((function(n){return Object(s.a)(Object(s.a)({},n),r)}))}else{var a=Object(s.a)(Object(s.a)({},t.tasks[n]),{},{validated:!1}),i=Object(s.a)(Object(s.a)({},t),{},{tasks:Object(s.a)(Object(s.a)({},t.tasks),{},Object(u.a)({},a.id,Object(s.a)({},a)))});c((function(n){return Object(s.a)(Object(s.a)({},n),i)}))}v(n)},T=function(n,e,r){if("task"===n){var a=t.tasks;delete a[r];var i=t.columns,o=i[e].tasksIds.indexOf(r);i[e].tasksIds.splice(o,1);var u=Object(s.a)(Object(s.a)({},t),{},{tasks:Object(s.a)({},a),columns:Object(s.a)({},i)});v(r),c((function(n){return Object(s.a)(Object(s.a)({},n),u)}))}else if("column"===n){var d=t.columns;delete d[e];var l=t.columnOrder,b=l.indexOf(e);l.splice(b,1);var j=Object(s.a)(Object(s.a)({},t),{},{columns:Object(s.a)({},d),columnOrder:l});c((function(n){return Object(s.a)(Object(s.a)({},n),j)}))}};return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(g,{}),Object(r.jsx)(m.a,{onDragStart:function(n,e){return function(n,e){e.announce("You have lifted the task in position ".concat(n.source.index+1))}(n,e)},onDragUpdate:function(n,e){return function(n,e){var t=n.destination?"You have moved the task to position ".concat(n.destination.index+1):"You are currently not over a droppable area";e.announce(t)}(n,e)},onDragEnd:function(n,e){return function(n,e){var r=n.destination,a=n.source,i=n.draggableId,o=n.type,d=n.destination?"You have moved the task from position\n      ".concat(n.source.index+1," to ").concat(n.destination.index+1):"The task has been return to its position of ".concat(n.source.index+1);if(e.announce(d),r&&(r.droppableId!==a.droppableId||r.index!==a.index))if("column"!==o){var l=t.columns[a.droppableId],b=t.columns[r.droppableId],j=Array.from(l.tasksIds);if(l!==b){var O,f=Array.from(l.tasksIds);f.splice(a.index,1);var p=Object(s.a)(Object(s.a)({},l),{},{tasksIds:f}),m=Array.from(b.tasksIds);m.splice(r.index,0,i);var g=Object(s.a)(Object(s.a)({},b),{},{tasksIds:m}),x=Object(s.a)(Object(s.a)({},t),{},{columns:Object(s.a)(Object(s.a)({},t.columns),{},(O={},Object(u.a)(O,p.id,p),Object(u.a)(O,g.id,g),O))});c((function(n){return Object(s.a)(Object(s.a)({},n),x)}))}else{j.splice(a.index,1),j.splice(r.index,0,i);var v=Object(s.a)(Object(s.a)({},l),{},{tasksIds:j}),k=Object(s.a)(Object(s.a)({},t),{},{columns:Object(s.a)(Object(s.a)({},t.columns),{},Object(u.a)({},v.id,v))});c((function(n){return Object(s.a)(Object(s.a)({},n),k)}))}}else{var h=Array.from(t.columnOrder);h.splice(a.index,1),h.splice(r.index,0,i);var w=Object(s.a)(Object(s.a)({},t),{},{columnOrder:h});c((function(n){return Object(s.a)(Object(s.a)({},n),w)}))}}(n,e)},children:Object(r.jsx)(m.c,{droppableId:"all-columns",direction:"horizontal",type:"column",children:function(n){return Object(r.jsxs)(vn,Object(s.a)(Object(s.a)({},n.droppableProps),{},{ref:n.innerRef,children:[t.columnOrder.map((function(n,e){var a=t.columns[n];return Object(r.jsx)(kn,{column:a,taskMap:t.tasks,index:e,registerNewTask:h,deleteElement:T,validateTask:w,menuToOpen:b,toggleMenu:v},a.id)})),n.placeholder,Object(r.jsx)(gn,{registerNewList:k})]}))}})})]})},wn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,45)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),r(n),a(n),c(n),i(n)}))};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(hn,{})}),document.getElementById("root")),wn()}},[[44,1,2]]]);
//# sourceMappingURL=main.be4345ae.chunk.js.map