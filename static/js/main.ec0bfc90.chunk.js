(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,a,t){e.exports=t(61)},38:function(e,a,t){},40:function(e,a,t){},42:function(e,a,t){},47:function(e,a,t){},49:function(e,a,t){},51:function(e,a,t){},55:function(e,a,t){},57:function(e,a,t){},59:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(10),o=t.n(i),s=(t(38),t(8)),r=t(5),c=t(89),u=[{id:1,name:"TODO",limit:5,color:"#A162D8 ",taskIds:[{id:Object(c.a)(),text:"Status component",idColumn:1,user:"Anna"},{id:Object(c.a)(),text:"New slides for presentation",idColumn:1,user:"Anna"}],first:"What's the situation? Feel free to explain it in as much detail as you'd like.",second:"What part of the situation is most troubling?",third:"Why did you decide to take this action (there're countless ways to reduce stress, why this specific one in this specific case)?"},{id:2,name:"In progress",limit:5,color:"#5A9DF9",taskIds:[{id:Object(c.a)(),text:"Blog assets",idColumn:2,user:"David"}],first:"How are you feeling at this very moment, right before starting this activity? What's on your mind?",second:"What kind of state of mind are you hoping to land on after this activity?",third:"Why did you decide to start this activity at this moment?"},{id:3,name:"Done",limit:5,color:"#1387BE",taskIds:[{id:Object(c.a)(),text:"Change css img",idColumn:3,user:"Anna"},{id:Object(c.a)(),text:"Meeting",idColumn:3,user:"Anna"}],first:"Re-type the summary of the situation in the following format: Trigger: Thought: Feeling: Behaviour",second:"How did your plan/expectations go? What worked and what didn't?",third:"If you were to explore an alternative activity, how would you do it? Why?"}],d=(t(40),t(13));var m=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=Object(n.useState)(e),t=Object(r.a)(a,2),l=t[0],i=t[1];return[l,function(){i(!l)}]},b=function(e){var a=Object(n.useState)(e),t=Object(r.a)(a,2),l=t[0],i=t[1];return[l,function(e){i(e.target.value)}]},f=(t(42),function(e){var a=b(e.startText),t=Object(r.a)(a,2),n=t[0],i=t[1],o=b(e.startUser),s=Object(r.a)(o,2),c=s[0],u=s[1];return l.a.createElement("form",{onSubmit:function(a){a.preventDefault(),e.editTask(e.taskId,c,n),e.toggle()},className:"KanbanEditForm"},l.a.createElement("div",{className:"KanbanEditForm-input-container"},l.a.createElement("label",{htmlFor:"task"},"Task: "),l.a.createElement("textarea",{className:"KanbanEditForm-input-textarea",type:"text",cols:"15",rows:"5",value:n,onChange:i,name:"task",id:"task",required:!0})),l.a.createElement("div",{className:"KanbanEditForm-input-container"},l.a.createElement("label",{htmlFor:"user"},"For: "),l.a.createElement("input",{className:"KanbanEditForm-input",type:"text",name:"user",id:"user",value:c,onChange:u,required:!0})),l.a.createElement("button",{className:"KanbanEditForm-btn",style:{backgroundColor:"".concat(e.color)}},"Save"))}),p=function(e){var a=m(!1),t=Object(r.a)(a,2),n=t[0],i=t[1];return l.a.createElement(d.b,{draggableId:"".concat(e.task.id),index:e.index},function(a){return l.a.createElement("div",Object.assign({className:"KanbanTask"},a.draggableProps,a.dragHandleProps,{ref:a.innerRef}),n?l.a.createElement(f,{color:e.color,editTask:e.editTask,taskId:e.task.id,toggle:i,startUser:e.task.user,startText:e.task.text}):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"KanbanTask-assigned"},l.a.createElement("span",{className:"KanbanTask-assigned-img"},e.task.user)),l.a.createElement("div",{className:"KanbanTask-content"},e.task.text),l.a.createElement("div",{className:"KanbanTask-options"},l.a.createElement("button",{className:"KanbanTask-btn-edit",style:{backgroundColor:"".concat(e.color)},onClick:i},"Edit"),l.a.createElement("button",{className:"KanbanTask-btn-delete",style:{backgroundColor:"".concat(e.color)},onClick:function(){return e.removeTask(e.task.id)}},"Remove"))))})},E=(t(47),function(e){return l.a.createElement("div",{className:"KanbanColumn",style:{backgroundColor:"".concat(e.columnData.color)}},l.a.createElement("div",{className:"KanbanColumn-main"},l.a.createElement("h2",{className:"KanbanColumn-name"},e.columnData.name),l.a.createElement("p",{className:"KanbanColumn-numbers"},e.columnData.taskIds.length," / ",e.columnData.limit,";"),l.a.createElement(d.c,{droppableId:"".concat(e.columnData.id-1)},function(a){return l.a.createElement("div",Object.assign({ref:a.innerRef,className:"KanbanColumns-tasks-container"},a.droppableProps),e.columnData.taskIds.map(function(a,t){return l.a.createElement(p,{key:a.id,id:a.id,task:a,color:e.columnData.color,index:t,removeTask:e.removeTask,editTask:e.editTask})}),a.placeholder)})),1===e.columnData.id&&l.a.createElement("div",{className:"KanbanColumn-footer"},l.a.createElement("button",{className:"KanbanColumn-btn-add",onClick:function(){return e.openModal(e.columnData)},disabled:e.columnData.taskIds.length>=5},"Add task")))}),v=(t(49),t(51),t(88)),h=function(e){var a=b(""),t=Object(r.a)(a,2),n=t[0],i=t[1],o=b(""),s=Object(r.a)(o,2),u=s[0],d=s[1],m=b(""),f=Object(r.a)(m,2),p=f[0],E=f[1],h=b(""),k=Object(r.a)(h,2),g=k[0],N=k[1],K=b(""),y=Object(r.a)(K,2),C=y[0],O=y[1],x=e.columnData,j={id:Object(c.a)(),text:n,idColumn:e.modal,user:u};return l.a.createElement("div",{className:"KanbanModal"},l.a.createElement("section",{className:"KanbanModal-content"},l.a.createElement("span",{className:"KanbanModal-close-btn",onClick:e.closeModal}),l.a.createElement("form",{className:"KanbanModal-form",onSubmit:function(a){a.preventDefault(),e.addTask(j)}},l.a.createElement("div",{className:"KanbanModal-input-container"},l.a.createElement(v.a,{id:"filled-search",label:"Task:",type:"search",value:n,onChange:i})),l.a.createElement("div",{className:"KanbanModal-input-container"},l.a.createElement(v.a,{id:"filled-search",label:"For:",type:"search",value:u,onChange:d})),l.a.createElement("div",{className:"KanbanModal-input-container"},l.a.createElement(v.a,{id:"standard-multiline-static",helperText:x.first,multiline:!0,label:"Question 1:",rows:3,defaultValue:"Default Value",value:p,onChange:E})),l.a.createElement("div",{className:"KanbanModal-input-container"},l.a.createElement(v.a,{id:"standard-multiline-static",helperText:x.second,multiline:!0,label:"Question 2:",rows:3,defaultValue:"Default Value",value:g,onChange:N})),l.a.createElement("div",{className:"KanbanModal-input-container"},l.a.createElement(v.a,{id:"standard-multiline-static",helperText:x.third,multiline:!0,label:"Question 3:",rows:3,defaultValue:"Default Value",value:C,onChange:O})),l.a.createElement("button",{className:"KanbanModal-input-submit-btn"},"Submit"))))},k=(t(55),t(15)),g={color:"white",fontSize:"1.5rem",cursor:"pointer"},N=function(){return l.a.createElement("div",{className:"KanbanSidebar"},l.a.createElement("div",{className:"KanbanSidebar-upperColumn"},l.a.createElement(k.a,{style:g})),l.a.createElement("div",{className:"KanbanSidebar-bottomColumn"},l.a.createElement(k.b,{style:g}),l.a.createElement(k.d,{style:g}),l.a.createElement(k.c,{style:g})))},K=(t(57),function(e){var a=b(""),t=Object(r.a)(a,2),n=t[0],i=t[1],o=b(""),s=Object(r.a)(o,2),c=s[0],u=s[1],d=b(""),m=Object(r.a)(d,2),f=m[0],p=m[1],E=e.columnData;return l.a.createElement("div",{className:"KanbanPopup"},l.a.createElement("section",{className:"KanbanPopup-content"},l.a.createElement("span",{className:"KanbanPopup-close-btn",onClick:e.closePopup}),l.a.createElement("form",{className:"KanbanPopup-form",onSubmit:function(e){e.preventDefault()}},l.a.createElement("div",{className:"KanbanModal-input-container"},l.a.createElement(v.a,{id:"standard-multiline-static",helperText:E.first,multiline:!0,label:"Question 1:",rows:3,defaultValue:"Default Value",value:n,onChange:i})),l.a.createElement("div",{className:"KanbanModal-input-container"},l.a.createElement(v.a,{id:"standard-multiline-static",helperText:E.second,multiline:!0,label:"Question 2:",rows:3,defaultValue:"Default Value",value:c,onChange:u})),l.a.createElement("div",{className:"KanbanModal-input-container"},l.a.createElement(v.a,{id:"standard-multiline-static",helperText:E.third,multiline:!0,label:"Question 3:",rows:3,defaultValue:"Default Value",value:f,onChange:p})),l.a.createElement("button",{className:"KanbanPopup-input-submit-btn",onClick:e.closePopup},"Submit"))))}),y=function(){var e=Object(n.useState)(JSON.parse(window.localStorage.getItem("columns"))||u),a=Object(r.a)(e,2),t=a[0],i=a[1],o=Object(n.useState)(!1),c=Object(r.a)(o,2),m=c[0],b=c[1],f=Object(n.useState)(!1),p=Object(r.a)(f,2),v=p[0],k=p[1],g=function(e){console.log(e),k(e)},y=function(e){var a=e.id;b(a)},C=function(e){var a=t.map(function(a){return Object.assign({},a,{taskIds:a.taskIds.filter(function(a){return a.id!==e})})}).filter(function(e){return e.taskIds.length>=0});i(a)},O=function(e,a,n){var l=t.map(function(t){return Object.assign({},t,{taskIds:t.taskIds.map(function(t){return t.id===e?(t.user=a,t.text=n,t):t})})});i(l)};return Object(n.useEffect)(function(){window.localStorage.setItem("columns",JSON.stringify(t))},[t]),l.a.createElement(l.a.Fragment,null,l.a.createElement(N,null),l.a.createElement(d.a,{onDragEnd:function(e){var a=e.destination,n=e.source;if(a)if(a.droppableId!==n.droppableId||a.index!==n.index){var l=t[n.droppableId],o=t[a.droppableId];if(l===o){var c=Array.from(l.taskIds),u=c[n.index];c.splice(n.index,1),c.splice(a.index,0,u);var d=t.map(function(e){return e.id===l.id?(e.taskIds=c,e):e}),m=Object(s.a)(d);i(m)}else{if(o.id>l.id&&g(o.id),!(o.taskIds.length<o.limit))return;var b=Array.from(l.taskIds),f=b.splice(n.index,1),p=Object(r.a)(f,1)[0],E=Array.from(o.taskIds);E.splice(a.index,0,p);var v=t.map(function(e){return e.id===l.id?(e.taskIds=b,e):e.id===o.id?(e.taskIds=E,e):e}),h=Object(s.a)(v);i(h)}}else console.log("index and destination the same");else console.log("no destination")}},l.a.createElement("div",{className:"Kanban"},m&&l.a.createElement(h,{closeModal:function(){b(!1)},addTask:function(e){b(!1);var a=t.map(function(a){return a.id===e.idColumn&&a.taskIds.length<5?(a.taskIds.push(e),a):a});i(a)},columnData:t[m-1],modal:m}),v&&1!==v&&l.a.createElement(K,{closePopup:function(){k(!1)},columnData:t[v-1]}),l.a.createElement("h1",{className:"Kanban-title"},"Kanban"),l.a.createElement("div",{className:"Kanban-columns-container"},t.map(function(e){return l.a.createElement(E,{columnData:e,key:e.name,openModal:y,openPopup:g,removeTask:C,editTask:O})})))))};t(59);var C=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(y,null))},O=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,87)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,i=a.getLCP,o=a.getTTFB;t(e),n(e),l(e),i(e),o(e)})};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null)),document.getElementById("root")),O()}},[[33,3,2]]]);
//# sourceMappingURL=main.ec0bfc90.chunk.js.map