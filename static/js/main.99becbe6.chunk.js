(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,a,t){},102:function(e,a,t){},104:function(e,a,t){},106:function(e,a,t){},108:function(e,a,t){},110:function(e,a,t){},112:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(21),o=t.n(i),r=(t(71),t(19)),c=t(8),s=t(159),u=[{id:1,name:"TODO",limit:5,color:"#A162D8 ",taskIds:[{id:Object(s.a)(),text:"Nap",idColumn:1,user:"CSC428 A1"},{id:Object(s.a)(),text:"More nap",idColumn:1,user:"CSC428 A1"}],first:"What's the situation? Feel free to explain it in as much detail as you'd like.",second:"What part of the situation is most troubling?",third:"Why did you decide to take this action (there're countless ways to reduce stress, why this specific one in this specific case)?"},{id:2,name:"In progress",limit:5,color:"#5A9DF9",taskIds:[{id:Object(s.a)(),text:"Gaming",idColumn:2,user:"CSC369 A1"}],first:"How are you feeling at this very moment, right before starting this activity? What's on your mind?",second:"What kind of state of mind are you hoping to land on after this activity?",third:"Why did you decide to start this activity at this moment?"},{id:3,name:"Done",limit:5,color:"#1387BE",taskIds:[{id:Object(s.a)(),text:"Jogging",idColumn:3,user:"CSC108 A1"}],first:"Re-type the summary of the situation in the following format: Trigger: Thought: Feeling: Behaviour",second:"How did your plan/expectations go? What worked and what didn't?",third:"If you were to explore an alternative activity, how would you do it? Why?"}],d=(t(73),t(33));var m=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=Object(n.useState)(e),t=Object(c.a)(a,2),l=t[0],i=t[1];return[l,function(){i(!l)}]},f=function(e){var a=Object(n.useState)(e),t=Object(c.a)(a,2),l=t[0],i=t[1];return[l,function(e){i(e.target.value)}]},b=(t(75),t(163)),p=t(157),h=function(e){var a=f(e.startText),t=Object(c.a)(a,2),n=t[0],i=t[1],o=f(e.startUser),r=Object(c.a)(o,2),s=r[0],u=r[1];return l.a.createElement("form",{onSubmit:function(a){a.preventDefault(),e.editTask(e.taskId,s,n),e.toggle()},className:"KanbanEditForm"},l.a.createElement(b.a,{m:2,pt:3},l.a.createElement(p.a,{value:n,onChange:i,label:"Task",style:{padding:"10px",width:"100%"}}),l.a.createElement(p.a,{value:s,onChange:u,label:"For:",style:{padding:"10px",width:"100%"}})),l.a.createElement("button",{className:"KanbanEditForm-btn",style:{backgroundColor:"".concat(e.color)}},"Save"))},E=t(164),v=t(165),g=t(167),k=t(166),y=t(168),C=t(169),O=t(86),x=t.n(O),N=t(87),j=t.n(N),I=function(e){var a=m(!1),t=Object(c.a)(a,2),n=t[0],i=t[1];return l.a.createElement(d.b,{draggableId:"".concat(e.task.id),index:e.index},function(a){return l.a.createElement(E.a,Object.assign({},a.draggableProps,a.dragHandleProps,{ref:a.innerRef,sx:{margin:"10px"}}),n?l.a.createElement(h,{color:e.color,editTask:e.editTask,taskId:e.task.id,toggle:i,startUser:e.task.user,startText:e.task.text}):l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a,{title:e.task.user}),l.a.createElement(g.a,null,l.a.createElement(k.a,{variant:"h6",color:"text.primary"},e.task.text)),l.a.createElement(y.a,{disableSpacing:!0},l.a.createElement(C.a,{"aria-label":"Edit Task",onClick:i},l.a.createElement(x.a,null)),l.a.createElement(C.a,{"aria-label":"Delete Task",onClick:function(){return e.removeTask(e.task.id)}},l.a.createElement(j.a,null)))))})},K=(t(100),t(162)),D=function(e){return l.a.createElement("div",{className:"KanbanColumn",style:{backgroundColor:"".concat(e.columnData.color)}},l.a.createElement("div",{className:"KanbanColumn-main"},l.a.createElement("h2",{className:"KanbanColumn-name"},e.columnData.name),l.a.createElement("p",{className:"KanbanColumn-numbers"},e.columnData.taskIds.length," / ",e.columnData.limit,";"),l.a.createElement(d.c,{droppableId:"".concat(e.columnData.id-1)},function(a){return l.a.createElement("div",Object.assign({ref:a.innerRef,className:"KanbanColumns-tasks-container"},a.droppableProps),e.columnData.taskIds.map(function(a,t){return l.a.createElement(I,{key:a.id,id:a.id,task:a,color:e.columnData.color,index:t,removeTask:e.removeTask,editTask:e.editTask})}),a.placeholder)})),1===e.columnData.id&&l.a.createElement(K.a,{variant:"contained",onClick:function(){return e.openModal(e.columnData)},disabled:e.columnData.taskIds.length>=5},"Add Task"))},T=(t(102),t(104),function(e){var a=f(""),t=Object(c.a)(a,2),n=t[0],i=t[1],o=f(""),r=Object(c.a)(o,2),u=r[0],d=r[1],m=f(""),b=Object(c.a)(m,2),h=b[0],E=b[1],v=f(""),g=Object(c.a)(v,2),k=g[0],y=g[1],C=f(""),O=Object(c.a)(C,2),x=O[0],N=O[1],j=e.columnData,I={id:Object(s.a)(),text:n,idColumn:e.modal,user:u};return l.a.createElement("div",{className:"KanbanModal"},l.a.createElement("section",{className:"KanbanModal-content"},l.a.createElement("span",{className:"KanbanModal-close-btn",onClick:e.closeModal}),l.a.createElement("form",{className:"KanbanModal-form",onSubmit:function(a){a.preventDefault(),e.addTask(I)}},l.a.createElement("div",{style:{display:"flex"}},l.a.createElement(p.a,{id:"filled-search",label:"Task:",type:"search",value:n,fullWidth:!0,variant:"standard",onChange:i,style:{padding:6}}),l.a.createElement(p.a,{id:"filled-search",label:"For:",type:"search",value:u,variant:"standard",fullWidth:!0,onChange:d,style:{padding:6}})),l.a.createElement("div",{className:"KanbanModal-input-container"},l.a.createElement(p.a,{id:"standard-multiline-static",helperText:j.first,multiline:!0,label:"Question 1:",rows:3,fullWidth:!0,defaultValue:"Default Value",value:h,onChange:E})),l.a.createElement("div",{className:"KanbanModal-input-container"},l.a.createElement(p.a,{id:"standard-multiline-static",helperText:j.second,multiline:!0,label:"Question 2:",rows:3,fullWidth:!0,defaultValue:"Default Value",value:k,onChange:y})),l.a.createElement("div",{className:"KanbanModal-input-container"},l.a.createElement(p.a,{id:"standard-multiline-static",helperText:j.third,multiline:!0,label:"Question 3:",rows:3,fullWidth:!0,defaultValue:"Default Value",value:x,onChange:N})),l.a.createElement("div",{className:"KanbanModal-footer"},l.a.createElement("button",{className:"KanbanModal-input-submit-btn"},"Submit")))))}),w=(t(106),t(47)),S={color:"white",fontSize:"1.5rem",cursor:"pointer"},M=function(){return l.a.createElement("div",{className:"KanbanSidebar"},l.a.createElement("div",{className:"KanbanSidebar-upperColumn"},l.a.createElement(w.a,{style:S})),l.a.createElement("div",{className:"KanbanSidebar-bottomColumn"},l.a.createElement(w.b,{style:S}),l.a.createElement(w.d,{style:S}),l.a.createElement(w.c,{style:S})))},W=(t(108),function(e){var a=f(""),t=Object(c.a)(a,2),n=t[0],i=t[1],o=f(""),r=Object(c.a)(o,2),s=r[0],u=r[1],d=f(""),m=Object(c.a)(d,2),b=m[0],h=m[1],E=e.columnData;return l.a.createElement("div",{className:"KanbanPopup"},l.a.createElement("section",{className:"KanbanPopup-content"},l.a.createElement("span",{className:"KanbanPopup-close-btn",onClick:e.closePopup}),l.a.createElement("form",{className:"KanbanPopup-form",onSubmit:function(e){e.preventDefault()}},l.a.createElement("div",{className:"KanbanModal-input-container"},l.a.createElement(p.a,{id:"standard-multiline-static",helperText:E.first,multiline:!0,label:"Question 1:",rows:3,defaultValue:"Default Value",value:n,fullWidth:!0,onChange:i})),l.a.createElement("div",{className:"KanbanModal-input-container"},l.a.createElement(p.a,{id:"standard-multiline-static",helperText:E.second,multiline:!0,label:"Question 2:",rows:3,defaultValue:"Default Value",value:s,fullWidth:!0,onChange:u})),l.a.createElement("div",{className:"KanbanModal-input-container"},l.a.createElement(p.a,{id:"standard-multiline-static",helperText:E.third,multiline:!0,label:"Question 3:",rows:3,defaultValue:"Default Value",value:b,fullWidth:!0,onChange:h})),l.a.createElement("div",{className:"KanbanPopup-footer"},l.a.createElement("button",{className:"KanbanPopup-input-submit-btn",onClick:e.closePopup},"Submit")))))}),P=function(){var e=Object(n.useState)(JSON.parse(window.localStorage.getItem("columns"))||u),a=Object(c.a)(e,2),t=a[0],i=a[1],o=Object(n.useState)(!1),s=Object(c.a)(o,2),m=s[0],f=s[1],b=Object(n.useState)(!1),p=Object(c.a)(b,2),h=p[0],E=p[1],v=function(e){console.log(e),E(e)},g=function(e){var a=e.id;f(a)},k=function(e){var a=t.map(function(a){return Object.assign({},a,{taskIds:a.taskIds.filter(function(a){return a.id!==e})})}).filter(function(e){return e.taskIds.length>=0});i(a)},y=function(e,a,n){var l=t.map(function(t){return Object.assign({},t,{taskIds:t.taskIds.map(function(t){return t.id===e?(t.user=a,t.text=n,t):t})})});i(l)};return Object(n.useEffect)(function(){window.localStorage.setItem("columns",JSON.stringify(t))},[t]),l.a.createElement(l.a.Fragment,null,l.a.createElement(M,null),l.a.createElement(d.a,{onDragEnd:function(e){var a=e.destination,n=e.source;if(a)if(a.droppableId!==n.droppableId||a.index!==n.index){var l=t[n.droppableId],o=t[a.droppableId];if(l===o){var s=Array.from(l.taskIds),u=s[n.index];s.splice(n.index,1),s.splice(a.index,0,u);var d=t.map(function(e){return e.id===l.id?(e.taskIds=s,e):e}),m=Object(r.a)(d);i(m)}else{if(o.id>l.id&&v(o.id),!(o.taskIds.length<o.limit))return;var f=Array.from(l.taskIds),b=f.splice(n.index,1),p=Object(c.a)(b,1)[0],h=Array.from(o.taskIds);h.splice(a.index,0,p);var E=t.map(function(e){return e.id===l.id?(e.taskIds=f,e):e.id===o.id?(e.taskIds=h,e):e}),g=Object(r.a)(E);i(g)}}else console.log("index and destination the same");else console.log("no destination")}},l.a.createElement("div",{className:"Kanban"},m&&l.a.createElement(T,{closeModal:function(){f(!1)},addTask:function(e){f(!1);var a=t.map(function(a){return a.id===e.idColumn&&a.taskIds.length<5?(a.taskIds.push(e),a):a});i(a)},columnData:t[m-1],modal:m}),h&&1!==h&&l.a.createElement(W,{closePopup:function(){E(!1)},columnData:t[h-1]}),l.a.createElement("h1",{className:"Kanban-title"},"Stress Management Kanban Board"),l.a.createElement("div",{className:"Kanban-columns-container"},t.map(function(e){return l.a.createElement(D,{columnData:e,key:e.name,openModal:g,openPopup:v,removeTask:k,editTask:y})})))))};t(110);var F=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(P,null))},V=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,156)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,i=a.getLCP,o=a.getTTFB;t(e),n(e),l(e),i(e),o(e)})};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(F,null)),document.getElementById("root")),V()},66:function(e,a,t){e.exports=t(112)},71:function(e,a,t){},73:function(e,a,t){},75:function(e,a,t){}},[[66,3,2]]]);
//# sourceMappingURL=main.99becbe6.chunk.js.map