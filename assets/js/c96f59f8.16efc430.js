"use strict";(self.webpackChunkplanetdocs=self.webpackChunkplanetdocs||[]).push([[924],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,h=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2341:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:3},s="Seal",p={unversionedId:"data/seal",id:"data/seal",title:"Seal",description:"This feature needs a Pro plan subscription.",source:"@site/docs/data/seal.md",sourceDirName:"data",slug:"/data/seal",permalink:"/data/seal",editUrl:"https://github.com/BlueLogicLabs/planet-docs/blob/main/docs/data/seal.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Export",permalink:"/data/export"},next:{title:"API",permalink:"/data/api"}},c=[{value:"Verifying proofs",id:"verifying-proofs",children:[],level:2},{value:"How Seal works",id:"how-seal-works",children:[],level:2},{value:"The structure of a proof",id:"the-structure-of-a-proof",children:[],level:2},{value:"Plausible deniability",id:"plausible-deniability",children:[],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"seal"},"Seal"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This feature needs a Pro plan subscription."))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Seal")," is a verifiable timestamp mechanism for ",(0,o.kt)("strong",{parentName:"p"},"cryptographically proving"),' that a note is created before a specific time. The seal proof for a new note is generated in 12 hours after creation, and you can download it through the "Seal" entry in the note menu.'),(0,o.kt)("img",{src:"/img/seal-2.png",alt:"seal ui"}),(0,o.kt)("h2",{id:"verifying-proofs"},"Verifying proofs"),(0,o.kt)("p",null,"Proofs generated by Seal can be verified with the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/BlueLogicLabs/sealcheck"},"sealcheck")," tool."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ ./sealcheck validate ./seal_proof.json\nSealCheck: ./seal_proof.json\nValidation OK. Certificate issued at 2022-06-01 01:12:23 +0000 UTC.\n")),(0,o.kt)("h2",{id:"how-seal-works"},"How Seal works"),(0,o.kt)("p",null,"Seal works by periodically rolling up Planet's event log into a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Merkle_tree"},"Merkle tree")," and submitting the root of the tree to the ",(0,o.kt)("a",{parentName:"p",href:"https://certificate.transparency.dev/"},"Certificate Transparency")," public ledger by requesting a certificate for the domain name ",(0,o.kt)("inlineCode",{parentName:"p"},"[root-hash].production.planet-seal.net"),". The architecture is illustrated below."),(0,o.kt)("img",{src:"/img/seal-1.png",alt:"seal architecture"}),(0,o.kt)("h2",{id:"the-structure-of-a-proof"},"The structure of a proof"),(0,o.kt)("p",null,"The following is an example proof. ",(0,o.kt)("em",{parentName:"p"},"The proof is valid - try checking it using ",(0,o.kt)("inlineCode",{parentName:"em"},"sealcheck"),"!")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "logValue": "{\\"ts\\":1653871071342,\\"data\\":{\\"type\\":\\"create_note\\",\\"user\\":\\"zhy\\",\\"id\\":\\"2022-05-30-7e169a5dfddc\\",\\"origin\\":{\\"type\\":\\"web\\"},\\"note\\":{\\"realTs\\":1653871071342,\\"content\\":\\"https://ubuntustudio.org/ #shortcut\\",\\"private\\":true,\\"forwardLinks\\":[]}}}",\n  "rootHash": "vZBB2DFg8SS0LCu/CkDqPzYYnRXTPPQHvOuhFkYAats=",\n  "domain": "xwiedwbrmdysjnbmfo7quqhkh43brhiv2m6pib545oqrmrqanlnq.production.planet-seal.net",\n  "proof": [\n    "AElz0vb1S8vdJo2QVOryxRaOutuUw3oFprF55UAjvw0S",\n    "AeVdFN83O0QW43DqkHNreLNiZ6CgTvEi6kNtYGn0zxAh",\n    "AD5A9aCfc83IoOc96BIEiQwgE1NQGd/GBdAEpyxjlMkX",\n    "ABsLhSl5zWfscabxEjympsASlerDD3Dsbx8WTU2Grnwi",\n    "AIFRX7NhUcBniuu96XAA/zAACxSVejBEmDkXiNAWP1mZ",\n    "AKuostHnzK0jQWplkXgEFGQ+J0+mzwmOyVRplXQfydmt",\n    "Ac7mgWiVLpN6bNN9GrRRgQKRM5qTKfQcNd1A5CU6fmVY",\n    "Ab5q+HSS7DtMXxGeu9+IBvQ6ZBThOtKHRjS/bo33cxNf",\n    "AIGtmYM9SzsmKhScFllg4zBzK4jOrr7uiLfzud7Q9CPr"\n  ]\n}\n')),(0,o.kt)("p",null,"Field semantics:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"logValue"),": The content of the event log entry."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rootHash"),": Base64-encoded root hash of the Merkle tree."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"domain"),": The domain for which a TLS certificate has been issued and logged to CT. The first segment of the domain is the base32-encoded root hash of the Merkle tree."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"proof"),": Base64-encoded Merkle tree inclusion proof. Each entry is 33-byte long:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Byte 0: 0 if this node is the left child of its parent, 1 otherwise."),(0,o.kt)("li",{parentName:"ul"},"Byte 1-32: The hash value of the sibling node.")))),(0,o.kt)("h2",{id:"plausible-deniability"},"Plausible deniability"),(0,o.kt)("p",null,"We want to ensure that seal proofs are purely voluntary. While a seal proof does prove the timestamp property, a third party shouldn't assume that ",(0,o.kt)("em",{parentName:"p"},"if you have written something, you will be able to present a proof for it"),"."),(0,o.kt)("p",null,"To achieve this, we only provide automatic proof retrieval for the ",(0,o.kt)("strong",{parentName:"p"},"current version")," of a note. Proofs for deleted notes and older versions of existing notes are not accessible."),(0,o.kt)("p",null,"Meanwhile, if there is a reason and you need to request the proof for a historic version, please send us an email at ",(0,o.kt)("a",{parentName:"p",href:"mailto:hello@planet.ink"},"hello@planet.ink"),"."))}d.isMDXComponent=!0}}]);