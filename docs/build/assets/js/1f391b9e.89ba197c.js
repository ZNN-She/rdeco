(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{112:function(e,t,n){"use strict";var a=n(0),c=n.n(a),l=n(99);var r=function(e,t,n){const[c,l]=Object(a.useState)(void 0);Object(a.useEffect)((()=>{function a(){const a=function(){const e=Array.from(document.getElementsByClassName("anchor")),t=e.find((e=>{const{top:t}=e.getBoundingClientRect();return t>=n}));if(t){if(t.getBoundingClientRect().top>=n){const n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(a){let n=0,r=!1;const o=document.getElementsByClassName(e);for(;n<o.length&&!r;){const e=o[n],{href:s}=e,i=decodeURIComponent(s.substring(s.indexOf("#")+1));a.id===i&&(c&&c.classList.remove(t),e.classList.add(t),l(e),r=!0),n+=1}}}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),()=>{document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}))},o=n(57),s=n.n(o);const i="table-of-contents__link";function m({toc:e,isChild:t}){return e.length?c.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map((e=>c.a.createElement("li",{key:e.id},c.a.createElement("a",{href:`#${e.id}`,className:i,dangerouslySetInnerHTML:{__html:e.value}}),c.a.createElement(m,{isChild:!0,toc:e.children}))))):null}t.a=function({toc:e}){return r(i,"table-of-contents__link--active",100),c.a.createElement("div",{className:Object(l.a)(s.a.tableOfContents,"thin-scrollbar")},c.a.createElement(m,{toc:e}))}},78:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(104),r=n(103),o=n(111),s=n(112);t.default=function(e){const{content:t}=e,{frontMatter:n,metadata:a}=t,{title:i,description:m,wrapperClassName:d,hide_table_of_contents:u}=n,{permalink:f}=a;return c.a.createElement(l.a,{title:i,description:m,permalink:f,wrapperClassName:d},c.a.createElement("main",null,c.a.createElement("div",{className:"container container--fluid"},c.a.createElement("div",{className:"margin-vert--lg padding-vert--lg"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col col--8 col--offset-2"},c.a.createElement("div",{className:"container"},c.a.createElement(r.a,{components:o.a},c.a.createElement(t,null)))),!u&&t.toc&&c.a.createElement("div",{className:"col col--2"},c.a.createElement(s.a,{toc:t.toc})))))))}}}]);