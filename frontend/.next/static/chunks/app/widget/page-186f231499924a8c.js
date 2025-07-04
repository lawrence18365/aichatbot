(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11],{450:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>o});var s=a(5155),r=a(2115),l=a(1366),n=a(4416),d=a(9984);function o(){let[e,t]=(0,r.useState)(!1),a=()=>{t(!e),window.parent&&window.parent.postMessage({type:e?"LEADAISY_CHAT_CLOSE":"LEADAISY_CHAT_OPEN"},"*")};return(0,s.jsx)("div",{className:"w-full h-full bg-transparent",children:e?(0,s.jsxs)("div",{className:"w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden",children:[(0,s.jsxs)("div",{className:"bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4 flex justify-between items-center",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"font-bold text-lg",children:"AI Assistant"}),(0,s.jsx)("p",{className:"text-sm text-emerald-100",children:"How can I help?"})]}),(0,s.jsx)("button",{onClick:a,className:"text-white hover:text-emerald-200 transition-colors",children:(0,s.jsx)(n.A,{size:24})})]}),(0,s.jsx)("div",{className:"h-[500px] relative",children:(0,s.jsx)(d.A,{embedded:!0})})]}):(0,s.jsx)("button",{onClick:a,className:"w-20 h-20 bg-emerald-600 text-white rounded-full shadow-xl flex items-center justify-center hover:bg-emerald-500 transition-all duration-200 hover:scale-110","aria-label":"Open chat",children:(0,s.jsx)(l.A,{size:30})})})}},1366:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(9946).A)("message-circle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]])},1743:(e,t,a)=>{Promise.resolve().then(a.bind(a,450))},2486:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(9946).A)("send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]])},4416:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(9946).A)("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},9946:(e,t,a)=>{"use strict";a.d(t,{A:()=>c});var s=a(2115);let r=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,a)=>a?a.toUpperCase():t.toLowerCase()),n=e=>{let t=l(e);return t.charAt(0).toUpperCase()+t.slice(1)},d=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((e,t,a)=>!!e&&""!==e.trim()&&a.indexOf(e)===t).join(" ").trim()};var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=(0,s.forwardRef)((e,t)=>{let{color:a="currentColor",size:r=24,strokeWidth:l=2,absoluteStrokeWidth:n,className:i="",children:c,iconNode:m,...u}=e;return(0,s.createElement)("svg",{ref:t,...o,width:r,height:r,stroke:a,strokeWidth:n?24*Number(l)/Number(r):l,className:d("lucide",i),...u},[...m.map(e=>{let[t,a]=e;return(0,s.createElement)(t,a)}),...Array.isArray(c)?c:[c]])}),c=(e,t)=>{let a=(0,s.forwardRef)((a,l)=>{let{className:o,...c}=a;return(0,s.createElement)(i,{ref:l,iconNode:t,className:d("lucide-".concat(r(n(e))),"lucide-".concat(e),o),...c})});return a.displayName=n(e),a}},9984:(e,t,a)=>{"use strict";a.d(t,{A:()=>i});var s=a(5155),r=a(2115),l=a(2486),n=a(4416),d=a(1366),o=a(1890);function i(e){let{embedded:t=!1}=e,[a,i]=(0,r.useState)(!1),[c,m]=(0,r.useState)([{role:"assistant",content:"Hello! How can I help you today?"}]),[u,x]=(0,r.useState)(""),[h,b]=(0,r.useState)(!1),g=(0,r.useRef)(null),f=()=>{var e;null==(e=g.current)||e.scrollIntoView({behavior:"smooth"})};(0,r.useEffect)(()=>{f()},[c]);let p=async e=>{if(e.preventDefault(),!u.trim()||h)return;let t=[...c,{role:"user",content:u}];m(t),x(""),b(!0);try{let e=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(o.env.NEXT_PUBLIC_INTERNAL_API_KEY)},body:JSON.stringify({messages:t.slice(-10)})});if(!e.ok)throw Error("API Error: ".concat(e.statusText));let a=await e.json(),s={role:"assistant",content:a.response};m(e=>[...e,s])}catch(t){console.error("Failed to send message:",t);let e={role:"assistant",content:"Sorry, I'm having a little trouble right now. Please try again later."};m(t=>[...t,e])}finally{b(!1)}};return t?(0,s.jsxs)("div",{className:"w-full h-full bg-white flex flex-col font-sans",children:[(0,s.jsxs)("div",{className:"flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50",children:[c.map((e,t)=>(0,s.jsx)("div",{className:"flex items-end gap-2 ".concat("user"===e.role?"justify-end":"justify-start"),children:(0,s.jsx)("div",{className:"max-w-xs md:max-w-sm px-4 py-2 rounded-2xl ".concat("user"===e.role?"bg-emerald-600 text-white rounded-br-none":"bg-white text-gray-900 rounded-bl-none shadow-sm border border-gray-100"),children:e.content})},t)),h&&(0,s.jsx)("div",{className:"flex justify-start",children:(0,s.jsx)("div",{className:"bg-white text-gray-900 px-4 py-2 rounded-2xl rounded-bl-none shadow-sm border border-gray-100",children:(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsx)("span",{className:"h-2 w-2 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.3s]"}),(0,s.jsx)("span",{className:"h-2 w-2 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.15s]"}),(0,s.jsx)("span",{className:"h-2 w-2 bg-emerald-500 rounded-full animate-bounce"})]})})}),(0,s.jsx)("div",{ref:g})]}),(0,s.jsx)("form",{onSubmit:p,className:"p-4 bg-white border-t border-gray-200",children:(0,s.jsxs)("div",{className:"flex items-center bg-gray-50 rounded-lg p-1 border border-gray-200",children:[(0,s.jsx)("input",{type:"text",value:u,onChange:e=>x(e.target.value),placeholder:"Type your message...",className:"flex-1 p-2 bg-transparent rounded-lg focus:outline-none text-gray-900 placeholder-gray-500",disabled:h}),(0,s.jsx)("button",{type:"submit",className:"p-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 disabled:bg-gray-400 transition-colors",disabled:h||!u.trim(),children:(0,s.jsx)(l.A,{size:20})})]})})]}):(0,s.jsxs)("div",{className:"font-sans",children:[(0,s.jsx)("div",{className:"fixed bottom-5 right-5 z-50",children:(0,s.jsx)("button",{onClick:()=>i(!a),className:"bg-emerald-600 text-white w-16 h-16 rounded-full shadow-xl flex items-center justify-center hover:bg-emerald-500 transition-transform duration-200 ease-in-out transform hover:scale-110","aria-label":"Toggle chat",children:a?(0,s.jsx)(n.A,{size:30}):(0,s.jsx)(d.A,{size:30})})}),(0,s.jsxs)("div",{className:"fixed bottom-24 right-5 w-[calc(100vw-40px)] max-w-md h-[70vh] max-h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col transition-transform duration-300 ease-in-out origin-bottom-right ".concat(a?"scale-100":"scale-0"),children:[(0,s.jsx)("div",{className:"bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4 rounded-t-2xl flex justify-between items-center",children:(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"font-bold text-lg",children:"AI Assistant"}),(0,s.jsx)("p",{className:"text-sm text-emerald-100",children:"Powered by Leadaisy"})]})}),(0,s.jsxs)("div",{className:"flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50",children:[c.map((e,t)=>(0,s.jsx)("div",{className:"flex items-end gap-2 ".concat("user"===e.role?"justify-end":"justify-start"),children:(0,s.jsx)("div",{className:"max-w-xs md:max-w-sm px-4 py-2 rounded-2xl ".concat("user"===e.role?"bg-emerald-600 text-white rounded-br-none":"bg-white text-gray-900 rounded-bl-none shadow-sm border border-gray-100"),children:e.content})},t)),h&&(0,s.jsx)("div",{className:"flex justify-start",children:(0,s.jsx)("div",{className:"bg-white text-gray-900 px-4 py-2 rounded-2xl rounded-bl-none shadow-sm border border-gray-100",children:(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsx)("span",{className:"h-2 w-2 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.3s]"}),(0,s.jsx)("span",{className:"h-2 w-2 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.15s]"}),(0,s.jsx)("span",{className:"h-2 w-2 bg-emerald-500 rounded-full animate-bounce"})]})})}),(0,s.jsx)("div",{ref:g})]}),(0,s.jsx)("form",{onSubmit:p,className:"p-4 bg-white border-t border-gray-200 rounded-b-2xl",children:(0,s.jsxs)("div",{className:"flex items-center bg-gray-50 rounded-lg p-1 border border-gray-200",children:[(0,s.jsx)("input",{type:"text",value:u,onChange:e=>x(e.target.value),placeholder:"Type your message...",className:"flex-1 p-2 bg-transparent rounded-lg focus:outline-none text-gray-900 placeholder-gray-500",disabled:h}),(0,s.jsx)("button",{type:"submit",className:"p-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 disabled:bg-gray-400 transition-colors",disabled:h||!u.trim(),children:(0,s.jsx)(l.A,{size:20})})]})})]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[441,684,358],()=>t(1743)),_N_E=e.O()}]);