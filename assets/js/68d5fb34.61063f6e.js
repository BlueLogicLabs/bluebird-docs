"use strict";(self.webpackChunkplanetdocs=self.webpackChunkplanetdocs||[]).push([[742],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),k=o,h=d["".concat(s,".").concat(k)]||d[k]||u[k]||r;return n?i.createElement(h,a(a({ref:t},p),{},{components:n})):i.createElement(h,a({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7926:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var i=n(7462),o=n(3366),r=(n(7294),n(3905)),a=["components"],l={sidebar_position:1},s="Bidirectional links",c={unversionedId:"taking-notes/bidirectional-links",id:"taking-notes/bidirectional-links",title:"Bidirectional links",description:"By pasting a link to another note (either your own or someone else's) you create a bidirectional link",source:"@site/docs/taking-notes/bidirectional-links.md",sourceDirName:"taking-notes",slug:"/taking-notes/bidirectional-links",permalink:"/taking-notes/bidirectional-links",editUrl:"https://github.com/BlueLogicLabs/planet-docs/blob/main/docs/taking-notes/bidirectional-links.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Taking Notes",permalink:"/taking-notes/"},next:{title:"Tags",permalink:"/taking-notes/tags"}},p=[{value:"Creating A Link",id:"creating-a-link",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bidirectional-links"},"Bidirectional links"),(0,r.kt)("p",null,"By pasting a link to another note (either your own or someone else's) you create a bidirectional link\nbetween these two notes. Bidirectional links and ",(0,r.kt)("a",{parentName:"p",href:"/taking-notes/tags"},"tags")," are the two ways to manage connection between notes."),(0,r.kt)("img",{src:"/img/bidirectional-link-2.png",alt:"bidirectional link source note",height:"200px"}),(0,r.kt)("h2",{id:"creating-a-link"},"Creating A Link"),(0,r.kt)("p",null,'To create a link between notes, you first need to copy the URL of the note you wish to link to.  This is achieved by clicking the note menu (the small ellipsis at the bottom right of the note) and choosing the "Copy URL" option.  The URL is now stored on your clipboard.'),(0,r.kt)("img",{src:"/img/note-menu-link-copy.png",alt:"note menu copy option example",height:"300px"}),(0,r.kt)("p",null,"In the note you wish the link to appear in, simply paste the link without markdown syntax (",(0,r.kt)("inlineCode",{parentName:"p"},"https://planet.ink/people/someuser/2020-01-01-xxxxxxxxxxxx"),") as part of the note content.  Make sure and paste the ",(0,r.kt)("strong",{parentName:"p"},"entire URL"),", not just the URL path.  Once you save the note, the two notes will be linked together."),(0,r.kt)("p",null,'So how does this help? Well, if you view the original note you linked to, you\'ll see that it has an additional "backlink". If you click the label, the note will be displayed in a modal window.'))}d.isMDXComponent=!0}}]);