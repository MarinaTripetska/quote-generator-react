(this["webpackJsonpquote-generator-react"]=this["webpackJsonpquote-generator-react"]||[]).push([[0],{15:function(t,e,n){t.exports={btn:"Button_btn__OcVQ2",btn__icon:"Button_btn__icon__IIleN"}},25:function(t,e,n){t.exports={thumb:"QuotePage_thumb__3U3tV",quote:"QuotePage_quote__1Wti2",author:"QuotePage_author__-jb0P"}},72:function(t,e,n){},77:function(t,e,n){},96:function(t,e,n){"use strict";n.r(e);var c,r=n(1),i=n.n(r),o=n(24),a=n.n(o),s=n(19),u=n(50),j=(n(72),n(58)),x=n(31),h=n(13),b=n(54),l=n(14),d=n(3),f=l.a.div(c||(c=Object(h.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 10px;\n  max-width: 600px;\n  width: 100%;\n\n  font-size: 18px;\n  font-weight: 400;\n  text-align: center;\n"]))),O=function(t){return Object(d.jsx)(f,{children:Object(d.jsxs)(b.a,Object(x.a)(Object(x.a)({width:400,height:160,viewBox:"0 0 400 160",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb"},t),{},{children:[Object(d.jsx)("rect",{x:"80",y:"73",rx:"3",ry:"3",width:"254",height:"6"}),Object(d.jsx)("rect",{x:"78",y:"88",rx:"3",ry:"3",width:"254",height:"6"}),Object(d.jsx)("rect",{x:"150",y:"103",rx:"3",ry:"3",width:"118",height:"6"}),Object(d.jsx)("circle",{cx:"210",cy:"27",r:"22"}),Object(d.jsx)("circle",{cx:"181",cy:"151",r:"6"}),Object(d.jsx)("circle",{cx:"211",cy:"151",r:"6"}),Object(d.jsx)("circle",{cx:"241",cy:"151",r:"6"}),Object(d.jsx)("rect",{x:"37",y:"54",rx:"32",ry:"32",width:"15",height:"15"}),Object(d.jsx)("rect",{x:"37",y:"46",rx:"0",ry:"0",width:"4",height:"18"}),Object(d.jsx)("rect",{x:"54",y:"54",rx:"32",ry:"32",width:"15",height:"15"}),Object(d.jsx)("rect",{x:"54",y:"46",rx:"0",ry:"0",width:"4",height:"19"}),Object(d.jsx)("rect",{x:"336",y:"118",rx:"32",ry:"32",width:"15",height:"15"}),Object(d.jsx)("rect",{x:"357",y:"118",rx:"32",ry:"32",width:"15",height:"15"}),Object(d.jsx)("rect",{x:"347",y:"123",rx:"0",ry:"0",width:"4",height:"18"}),Object(d.jsx)("rect",{x:"368",y:"123",rx:"0",ry:"0",width:"4",height:"18"})]}))})},p=(n(77),function(t,e){return t.find((function(t,n){var c;return null!==(c=n===e)&&void 0!==c?c:t}))}),y=n(59),g=n(15),m=n.n(g),v=["name","onClick","children"];function _(t){var e=t.name,n=t.onClick,c=t.children;Object(y.a)(t,v);return Object(d.jsx)("button",{className:m.a.btn,name:e,onClick:n,children:c})}var w,k,C=n(55),q=n(29),B=l.a.div(w||(w=Object(h.a)(["\n  position: absolute;\n  bottom: 35px;\n  left: 50%;\n  transform: translateX(-50%);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  column-gap: 25px;\n  padding: 10px;\n"]))),N=l.a.div(k||(k=Object(h.a)(["\n  margin: 0 auto;\n  padding: 0 15px;\n\n  max-width: 1200px;\n  height: 100%;\n"]))),Q=n(25),P=n.n(Q);function E(t){var e=t.author,n=t.quote,c=t.onButtonClick,r=c.onButtonRefreshClick,i=c.onButtonPrevClick,o=c.onButtonNextClick;return Object(d.jsxs)(N,{children:[Object(d.jsxs)("div",{className:P.a.thumb,children:[Object(d.jsx)("p",{className:P.a.quote,children:n}),Object(d.jsxs)("p",{className:P.a.author,children:[" ",e]})]}),Object(d.jsxs)(B,{children:[Object(d.jsx)(_,{name:"prev",type:"button",onClick:i,children:Object(d.jsx)(q.b,{className:m.a.btn__icon})}),Object(d.jsx)(_,{name:"refresh",type:"button",onClick:r,children:Object(d.jsx)(C.a,{className:m.a.btn__icon})}),Object(d.jsx)(_,{name:"next",type:"button",onClick:o,children:Object(d.jsx)(q.a,{className:m.a.btn__icon})})]})]})}var I=n(30),M=n.n(I),R=n(56),S=n(57),J=n.n(S);function V(){return(V=Object(R.a)(M.a.mark((function t(){var e;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J.a.get("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd59\n61f026264bb6bb3a6c41671b044f1f4/quotes.json");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var z=function(t,e){return Math.floor(Math.random()*(e-t)+t)};var D=function(){var t=Object(s.useQuery)("quotes",(function(){return function(){return V.apply(this,arguments)}()}),{retry:!1,staleTime:36e5}),e=t.data,n=t.isLoading,c=t.isError,i=t.error,o=t.isSuccess,a=Object(r.useState)(null),u=Object(j.a)(a,2),x=u[0],h=u[1];return Object(r.useEffect)((function(){if(e){var t=z(0,e.length-1);h(p(e,t))}}),[e]),n?Object(d.jsx)(O,{}):c?Object(d.jsx)("p",{children:i.message}):o?Object(d.jsx)("main",{children:x&&Object(d.jsx)(E,{author:x.author,quote:x.quote,onButtonClick:{onButtonRefreshClick:function(){var t=z(0,e.length-1);h(p(e,t))},onButtonPrevClick:function(){var t=e.find((function(t){return t.quote===x.quote}));0!==e.indexOf(t)?h(e[e.indexOf(t)-1]):h(e[e.length-1])},onButtonNextClick:function(){var t=e.find((function(t){return t.quote===x.quote}));e.indexOf(t)!==e.length-1?h(e[e.indexOf(t)+1]):h(e[0])}}})}):void 0},L=new s.QueryClient;a.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsxs)(s.QueryClientProvider,{client:L,children:[Object(d.jsx)(D,{}),Object(d.jsx)(u.ReactQueryDevtools,{initialOpen:!1})]})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.3f7db499.chunk.js.map