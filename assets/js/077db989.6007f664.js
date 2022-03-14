"use strict";(self.webpackChunkinterep_docs=self.webpackChunkinterep_docs||[]).push([[647],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8162:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],c={},l="Reddit",u={unversionedId:"technical-reference/reputation/reddit",id:"technical-reference/reputation/reddit",isDocsHomePage:!1,title:"Reddit",description:"Parameters",source:"@site/docs/technical-reference/reputation/reddit.md",sourceDirName:"technical-reference/reputation",slug:"/technical-reference/reputation/reddit",permalink:"/technical-reference/reputation/reddit",editUrl:"https://github.com/interep/docs/edit/main/docs/technical-reference/reputation/reddit.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Github",permalink:"/technical-reference/reputation/github"},next:{title:"Twitter",permalink:"/technical-reference/reputation/twitter"}},p=[{value:"Parameters",id:"parameters",children:[]},{value:"Levels",id:"levels",children:[{value:"Gold",id:"gold",children:[]},{value:"Silver",id:"silver",children:[]},{value:"Bronze",id:"bronze",children:[]}]}],s={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reddit"},"Reddit"),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Premium subscription"),": true if the user has subscribed to a premium plan, false otherwise;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Karma"),": amount of user's karma;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Coins"),": amount of user's coins;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Linked identities"),": number of identities linked to the account (e.g. Twitter, Google).")),(0,a.kt)("h2",{id:"levels"},"Levels"),(0,a.kt)("h3",{id:"gold"},"Gold"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'[\n    {\n        parameter: "premiumSubscription",\n        value: true\n    },\n    {\n        parameter: "karma",\n        value: {\n            min: 10000\n        }\n    },\n    {\n        parameter: "coins",\n        value: {\n            min: 5000\n        }\n    },\n    {\n        parameter: "linkedIdentities",\n        value: {\n            min: 3\n        }\n    }\n]\n')),(0,a.kt)("h3",{id:"silver"},"Silver"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'[\n    {\n        parameter: "karma",\n        value: {\n            min: 5000\n        }\n    },\n    {\n        parameter: "coins",\n        value: {\n            min: 2000\n        }\n    },\n    {\n        parameter: "linkedIdentities",\n        value: {\n            min: 2\n        }\n    }\n]\n')),(0,a.kt)("h3",{id:"bronze"},"Bronze"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'[\n    {\n        parameter: "karma",\n        value: {\n            min: 1000\n        }\n    },\n    {\n        parameter: "coins",\n        value: {\n            min: 500\n        }\n    }\n]\n')),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"configuration-file-srccriteriaredditts"},"Configuration file: ",(0,a.kt)("a",{parentName:"h4",href:"https://github.com/Interep/interep.js/blob/main/packages/reputation/src/criteria/reddit.ts"},"src/criteria/reddit.ts")))}d.isMDXComponent=!0}}]);