(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{138:function(e,t,a){e.exports=a(267)},143:function(e,t,a){},266:function(e,t,a){},267:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(31),c=a.n(l),r=(a(143),a(144),a(24)),d=a(25),s=a(26),i=a(27),u=a(28),m=a(128),h=a(83),p=a(86),f=a(274),E=a(272),v=a(273),w=function(e){var t=e.todo,a=e.handleDelete,n=e.handleToggle;return o.a.createElement(f.a.Row,{positive:t.completed},o.a.createElement(f.a.Cell,null,o.a.createElement(E.a,{checked:t.completed,onChange:n})),o.a.createElement(f.a.Cell,null,t.title,o.a.createElement(v.a,{color:"red",icon:"trash",floated:"right",compact:!0,size:"small",onClick:a})))},C=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).state={todos:[{title:"Study",completed:!1},{title:"Workout",completed:!1},{title:"Do some house work",completed:!1}],newTodo:""},a.handleToggleAll=function(){var e=Object(p.a)(a.state.todos).slice(0),t=e.every((function(e){return e.completed})),n=e.map((function(e){return Object(h.a)({},e,{completed:!t})}));a.setState({todos:n})},a.handleInputChange=function(e){var t=e.target.value;a.setState({newTodo:t})},a.handleNewTodoKeyDown=function(e){if(!(a.state.todos.length>=10)&&13===e.keyCode){e.preventDefault();var t=a.state,n=t.newTodo,o=t.todos,l=n.trim();l&&a.setState({todos:[].concat(Object(m.a)(o),[{title:l,completed:!1}]),newTodo:""})}},a.handleDelete=function(e){var t=a.state.todos.filter((function(t,a){return a!==e}));a.setState({todos:t})},a.handleClearCompleted=function(){var e=a.state.todos.filter((function(e){return!e.completed}));a.setState({todos:e})},a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"handleTodoClick",value:function(e,t){var a=e.completed,n=Object(p.a)(this.state.todos).slice(0);n[t]=Object(h.a)({},e,{completed:!a}),this.setState({todos:n})}},{key:"render",value:function(){var e=this,t=this.state,a=t.todos,n=(t.newTodo,a.every((function(e){return e.completed})));return o.a.createElement("div",{className:"todo-container"},o.a.createElement("input",{id:"new-todo",className:"new-todo",placeholder:"What needs to be done?",autoFocus:!0,value:this.state.newTodo,onChange:this.handleInputChange,onKeyDown:this.handleNewTodoKeyDown}),o.a.createElement("label",{htmlFor:"new-todo",style:{display:"none"}},"New Todo"),0===a.length?o.a.createElement(f.a,null,o.a.createElement(f.a.Header,null,o.a.createElement(f.a.Row,null,o.a.createElement(f.a.HeaderCell,null,"You have nothing to do!")))):o.a.createElement(f.a,null,o.a.createElement(f.a.Header,null,o.a.createElement(f.a.Row,null,o.a.createElement(f.a.HeaderCell,null,o.a.createElement(E.a,{checked:n,onChange:this.handleToggleAll})))),o.a.createElement(f.a.Body,null,this.state.todos.map((function(t,a){return o.a.createElement(w,{key:a,todo:t,handleToggle:function(){return e.handleTodoClick(t,a)},handleDelete:function(){return e.handleDelete(a)}})}))),o.a.createElement(f.a.Footer,{fullWidth:!0},o.a.createElement(f.a.Row,null,o.a.createElement(f.a.HeaderCell,{colSpan:"2"},o.a.createElement(v.a,{size:"small",onClick:this.handleClearCompleted},"Clear completed tasks"))))))}}]),t}(n.Component),g=(a(266),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"app"},o.a.createElement(C,null))}}]),t}(n.Component));c.a.render(o.a.createElement(g,null),document.getElementById("root"))}},[[138,1,2]]]);
//# sourceMappingURL=main.61e45a81.chunk.js.map