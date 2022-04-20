(()=>{var e={757:(e,r,n)=>{e.exports=n(671)},671:e=>{"use strict";e.exports=require("regenerator-runtime")}},r={};function n(t){var s=r[t];if(void 0!==s)return s.exports;var o=r[t]={exports:{}};return e[t](o,o.exports,n),o.exports}n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{"use strict";function e(e,r,n,t,s,o,u){try{var i=e[o](u),c=i.value}catch(e){return void n(e)}i.done?r(c):Promise.resolve(c).then(t,s)}function r(r){return function(){var n=this,t=arguments;return new Promise((function(s,o){var u=r.apply(n,t);function i(r){e(u,s,o,i,c,"next",r)}function c(r){e(u,s,o,i,c,"throw",r)}i(void 0)}))}}var t=n(757),s=n.n(t);const o=require("react-dom/server");var u=n.n(o);const i=require("express");var c=n.n(i);const a=require("react-router-dom"),l=require("react/jsx-runtime"),d=function(){return(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(a.Link,{to:"/red",children:"Red"})}),(0,l.jsx)("li",{children:(0,l.jsx)(a.Link,{to:"blue",children:"Blue"})}),(0,l.jsx)("li",{children:(0,l.jsx)(a.Link,{to:"/users",children:"Users"})})]})},p=function(){return(0,l.jsx)("div",{className:"Red",children:"Red"})},f=function(){return(0,l.jsx)(p,{})},h=function(){return(0,l.jsx)("div",{className:"Blue",children:"Blue"})},v=function(){return(0,l.jsx)(h,{})},x=function(e){var r=e.users;return r?(0,l.jsx)("div",{children:(0,l.jsx)("ul",{children:r.map((function(e){return(0,l.jsx)("li",{children:(0,l.jsx)(a.Link,{to:"/users/".concat(e.id),children:e.username})},e.id)}))})}):null},j=require("react"),m=require("react-redux");function y(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function g(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function b(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?g(Object(n),!0).forEach((function(r){y(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}const S=require("axios");var O=n.n(S);require("redux-saga/effects");var E="users/GET_USERS_PENDING",w="users/GET_USERS_SUCCESS",P="users/GET_USERS_FAILURE",R="users/GET_USER",_="users/GET_USER_SUCCESS",k="users/GET_USER_FAILURE",q=function(e){return{type:R,payload:e}},U={users:null,user:null,loading:{users:!1,user:!1},error:{users:null,user:null}};var T=(0,j.createContext)(null);const D=T;var C=function(e){var r=e.resolve,n=(0,j.useContext)(T);return n?(n.done||n.promises.push(Promise.resolve(r())),null):null};const G=(0,m.connect)((function(e){return{users:e.users.users}}),{getUsers:function(){return function(){var e=r(s().mark((function e(r){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r({type:E}),e.next=4,O().get("https://jsonplaceholder.typicode.com/users");case 4:n=e.sent,r({type:w,payload:n}),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(0),r((t=e.t0,{type:P,error:!0,payload:t})),e.t0;case 12:case"end":return e.stop()}var t}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}()}})((function(e){var r=e.users,n=e.getUsers;return(0,j.useEffect)((function(){r||n()}),[n,r]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(x,{users:r}),(0,l.jsx)(C,{resolve:n})]})})),L=function(e){var r=e.user,n=r.email,t=r.name,s=r.username;return(0,l.jsxs)("div",{children:[(0,l.jsxs)("h1",{children:[s," (",t,")"]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("b",{children:"e-mail:"})," ",n]})]})},N=function(e){var r=e.id,n=(0,m.useSelector)((function(e){return e.users.user})),t=(0,m.useDispatch)();return(0,j.useEffect)((function(){n&&n.id===parseInt(r,10)||t(q(r))}),[t,r,n]),n?(0,l.jsx)(L,{user:n}):(0,l.jsx)(C,{resolve:function(){return t(q(r))}})},A=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(G,{}),(0,l.jsx)(a.Route,{path:"/users/:id",render:function(e){var r=e.match;return(0,l.jsx)(N,{id:r.params.id})}})]})},F=function(){return(0,l.jsxs)("div",{children:[(0,l.jsx)(d,{}),(0,l.jsx)("hr",{}),(0,l.jsx)(a.Route,{path:"/red",component:f}),(0,l.jsx)(a.Route,{path:"/blue",component:v}),(0,l.jsx)(a.Route,{path:"/users",component:A})]})},I=require("path");var B=n.n(I);const J=require("fs");var M=n.n(J);const Y=require("redux"),$=require("redux-thunk");var z=n.n($);const H=(0,Y.combineReducers)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case E:return b(b({},e),{},{loading:b(b({},e.loading),{},{users:!0})});case w:return b(b({},e),{},{loading:b(b({},e.loading),{},{users:!1}),users:r.payload.data});case P:return b(b({},e),{},{loading:b(b({},e.loading),{},{users:!1}),error:b(b({},e.error),{},{users:r.payload})});case R:return b(b({},e),{},{loading:b(b({},e.loading),{},{user:!0}),error:b(b({},e.error),{},{user:null})});case _:return b(b({},e),{},{loading:b(b({},e.loading),{},{user:!1}),user:r.payload});case k:return b(b({},e),{},{loading:b(b({},e.loading),{},{user:!1}),error:b(b({},e.error),{},{user:r.payload})});default:return e}}});var K=JSON.parse(M().readFileSync(B().resolve("./build/asset-manifest.json"),"utf8")),Q=Object.keys(K.files).filter((function(e){return/chunk\.js$/.exec(e)})).map((function(e){return'<script src="'.concat(K.files[e],'"><\/script>')})).join("");function V(e,r){return'<!DOCTYPE html>\n    <html lang="en">\n    <head>\n        <meta charset="utf-8" />\n        <link rel="shortcut icon" href="/favicon.ico" />\n        <meta\n            name="viewport"\n            content="width=device-width, initial-scale=1, shrink-to-fit=no"\n        />\n        <meta name="theme-color" content="#000000" />\n        <title>React App</title>\n        <link href="'.concat(K["main.css"],'" rel="stylesheet" />\n    </head>\n    <body>\n        <noscript>You need to enable JavaScript to run this app.</noscript>\n        <div id="root">\n            ').concat(e,"\n        </div>\n        ").concat(r,'\n        <script src="').concat(K["runtime-main.js"],'"><\/script>\n        ').concat(Q,'\n        <script src="').concat(K["main.js"],'"><\/script>\n    </body>\n    </html>\n    ')}var W=c()(),X=function(){var e=r(s().mark((function e(r,n,t){var o,i,c,d,p,f,h;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={},i=(0,Y.createStore)(H,(0,Y.applyMiddleware)(z())),c={done:!1,promises:[]},d=(0,l.jsx)(D.Provider,{value:c,children:(0,l.jsx)(m.Provider,{store:i,children:(0,l.jsx)(a.StaticRouter,{location:r.url,context:o,children:(0,l.jsx)(F,{})})})}),u().renderToStaticMarkup(d),e.prev=5,e.next=8,Promise.all(c.promises);case 8:e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(5),e.abrupt("return",n.status(500));case 13:c.done=!0,p=u().renderToString(d),f=JSON.stringify(i.getState()).replace(/</g,"\\u003c"),h="<script>__PRELOADED_STATE__=".concat(f,"<\/script>"),n.send(V(p,h));case 18:case"end":return e.stop()}}),e,null,[[5,10]])})));return function(r,n,t){return e.apply(this,arguments)}}(),Z=c().static(B().resolve("./build"),{index:!1});W.use(Z),W.use(X),W.listen(5001,(function(){console.log("Running on http://localhost:5001")}))})()})();