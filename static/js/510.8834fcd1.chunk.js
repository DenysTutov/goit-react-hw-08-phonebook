"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[510],{2510:function(e,t,n){n.r(t),n.d(t,{default:function(){return xe}});var o=n(4942),r=n(885),a=n(1413);function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=n(2982),c=n(2791);function l(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=l(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}var u=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=l(e))&&(o&&(o+=" "),o+=t);return o},d=["theme","type"],f=["delay","staleId"];function m(e){return"number"===typeof e&&!isNaN(e)}function p(e){return"boolean"===typeof e}function v(e){return"string"===typeof e}function g(e){return"function"===typeof e}function h(e){return v(e)||g(e)?e:null}function y(e){return null!=e}function b(e){return(0,c.isValidElement)(e)||v(e)||g(e)||m(e)}var T={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},C={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function E(e){var t=e.enter,n=e.exit,o=e.appendPosition,r=void 0!==o&&o,a=e.collapse,s=void 0===a||a,l=e.collapseDuration,u=void 0===l?300:l;return function(e){var o=e.children,a=e.position,l=e.preventExitTransition,d=e.done,f=e.nodeRef,m=e.isIn,p=r?t+"--"+a:t,v=r?n+"--"+a:n,g=(0,c.useRef)(0);return(0,c.useLayoutEffect)((function(){var e=f.current,t=p.split(" "),n=function n(o){var r;o.target===f.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===g.current&&"animationcancel"!==o.type&&(r=e.classList).remove.apply(r,(0,i.Z)(t)))};!function(){var o;(o=e.classList).add.apply(o,(0,i.Z)(t)),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)}()}),[]),(0,c.useEffect)((function(){var e=f.current,t=function t(){e.removeEventListener("animationend",t),s?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all "+n+"ms",requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)}))}))}(e,d,u):d()};m||(l?t():(g.current=1,e.className+=" "+v,e.addEventListener("animationend",t)))}),[m]),c.createElement(c.Fragment,null,o)}}function _(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var O={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,(0,i.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(r)}))}},N=function(e){var t=e.theme,n=e.type,o=s(e,d);return c.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-"+n+")"},o))};var x={info:function(e){return c.createElement(N,(0,a.Z)({},e),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return c.createElement(N,(0,a.Z)({},e),c.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return c.createElement(N,(0,a.Z)({},e),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return c.createElement(N,(0,a.Z)({},e),c.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return c.createElement("div",{className:"Toastify__spinner"})}};function I(e){var t=e.theme,n=e.type,o=e.isLoading,r=e.icon,a=null,s={theme:t,type:n};return!1===r||(g(r)?a=r(s):(0,c.isValidElement)(r)?a=(0,c.cloneElement)(r,s):v(r)||m(r)?a=r:o?a=x.spinner():function(e){return e in x}(n)&&(a=x[n](s))),a}function L(e){var t=(0,c.useReducer)((function(e){return e+1}),0),n=(0,r.Z)(t,2)[1],o=(0,c.useState)([]),a=(0,r.Z)(o,2),l=a[0],u=a[1],d=(0,c.useRef)(null),T=(0,c.useRef)(new Map).current,C=function(e){return-1!==l.indexOf(e)},E=(0,c.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:C,getToast:function(e){return T.get(e)}}).current;function N(e){var t=e.containerId;!E.props.limit||t&&E.containerId!==t||(E.count-=E.queue.length,E.queue=[])}function x(e){u((function(t){return y(e)?t.filter((function(t){return t!==e})):[]}))}function L(){var e=E.queue.shift();w(e.toastContent,e.toastProps,e.staleId)}function Z(e,t){var o=t.delay,r=t.staleId,a=s(t,f);if(b(e)&&!function(e){return!d.current||E.props.enableMultiContainer&&e.containerId!==E.props.containerId||T.has(e.toastId)&&null==e.updateId}(a)){var i=a.toastId,l=a.updateId,u=a.data,C=E.props,N=function(){return x(i)},Z=null==l;Z&&E.count++;var k,R,P={toastId:i,updateId:l,data:u,containerId:a.containerId,isLoading:a.isLoading,theme:a.theme||C.theme,icon:null!=a.icon?a.icon:C.icon,isIn:!1,key:a.key||E.toastKey++,type:a.type,closeToast:N,closeButton:a.closeButton,rtl:C.rtl,position:a.position||C.position,transition:a.transition||C.transition,className:h(a.className||C.toastClassName),bodyClassName:h(a.bodyClassName||C.bodyClassName),style:a.style||C.toastStyle,bodyStyle:a.bodyStyle||C.bodyStyle,onClick:a.onClick||C.onClick,pauseOnHover:p(a.pauseOnHover)?a.pauseOnHover:C.pauseOnHover,pauseOnFocusLoss:p(a.pauseOnFocusLoss)?a.pauseOnFocusLoss:C.pauseOnFocusLoss,draggable:p(a.draggable)?a.draggable:C.draggable,draggablePercent:a.draggablePercent||C.draggablePercent,draggableDirection:a.draggableDirection||C.draggableDirection,closeOnClick:p(a.closeOnClick)?a.closeOnClick:C.closeOnClick,progressClassName:h(a.progressClassName||C.progressClassName),progressStyle:a.progressStyle||C.progressStyle,autoClose:!a.isLoading&&(k=a.autoClose,R=C.autoClose,!1===k||m(k)&&k>0?k:R),hideProgressBar:p(a.hideProgressBar)?a.hideProgressBar:C.hideProgressBar,progress:a.progress,role:a.role||C.role,deleteToast:function(){var e=_(T.get(i),"removed");T.delete(i),O.emit(4,e);var t=E.queue.length;if(E.count=y(i)?E.count-1:E.count-E.displayedToast,E.count<0&&(E.count=0),t>0){var o=y(i)?1:E.props.limit;if(1===t||1===o)E.displayedToast++,L();else{var r=o>t?t:o;E.displayedToast=r;for(var a=0;a<r;a++)L()}}else n()}};P.iconOut=I(P),g(a.onOpen)&&(P.onOpen=a.onOpen),g(a.onClose)&&(P.onClose=a.onClose),P.closeButton=C.closeButton,!1===a.closeButton||b(a.closeButton)?P.closeButton=a.closeButton:!0===a.closeButton&&(P.closeButton=!b(C.closeButton)||C.closeButton);var j=e;(0,c.isValidElement)(e)&&!v(e.type)?j=(0,c.cloneElement)(e,{closeToast:N,toastProps:P,data:u}):g(e)&&(j=e({closeToast:N,toastProps:P,data:u})),C.limit&&C.limit>0&&E.count>C.limit&&Z?E.queue.push({toastContent:j,toastProps:P,staleId:r}):m(o)?setTimeout((function(){w(j,P,r)}),o):w(j,P,r)}}function w(e,t,n){var o=t.toastId;n&&T.delete(n);var r={content:e,props:t};T.set(o,r),u((function(e){return[].concat((0,i.Z)(e),[o]).filter((function(e){return e!==n}))})),O.emit(4,_(r,null==r.props.updateId?"added":"updated"))}return(0,c.useEffect)((function(){return E.containerId=e.containerId,O.cancelEmit(3).on(0,Z).on(1,(function(e){return d.current&&x(e)})).on(5,N).emit(2,E),function(){T.clear(),O.emit(3,E)}}),[]),(0,c.useEffect)((function(){E.props=e,E.isToastActive=C,E.displayedToast=l.length})),{getToastToRender:function(t){var n=new Map,o=Array.from(T.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:d,isToastActive:C}}function Z(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function w(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function k(e){var t=(0,c.useState)(!1),n=(0,r.Z)(t,2),o=n[0],a=n[1],s=(0,c.useState)(!1),i=(0,r.Z)(s,2),l=i[0],u=i[1],d=(0,c.useRef)(null),f=(0,c.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,m=(0,c.useRef)(e),p=e.autoClose,v=e.pauseOnHover,h=e.closeToast,y=e.onClick,b=e.closeOnClick;function T(t){if(e.draggable){f.didMove=!1,document.addEventListener("mousemove",O),document.addEventListener("mouseup",N),document.addEventListener("touchmove",O),document.addEventListener("touchend",N);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=Z(t.nativeEvent),f.y=w(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function C(){if(f.boundingRect){var t=f.boundingRect,n=t.top,o=t.bottom,r=t.left,a=t.right;e.pauseOnHover&&f.x>=r&&f.x<=a&&f.y>=n&&f.y<=o?_():E()}}function E(){a(!0)}function _(){a(!1)}function O(t){var n=d.current;f.canDrag&&n&&(f.didMove=!0,o&&_(),f.x=Z(t),f.y=w(t),"x"===e.draggableDirection?f.delta=f.x-f.start:f.delta=f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate"+e.draggableDirection+"("+f.delta+"px)",n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function N(){document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",N),document.removeEventListener("touchmove",O),document.removeEventListener("touchend",N);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return u(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate"+e.draggableDirection+"(0)",t.style.opacity="1"}}(0,c.useEffect)((function(){m.current=e})),(0,c.useEffect)((function(){return d.current&&d.current.addEventListener("d",E,{once:!0}),g(e.onOpen)&&e.onOpen((0,c.isValidElement)(e.children)&&e.children.props),function(){var e=m.current;g(e.onClose)&&e.onClose((0,c.isValidElement)(e.children)&&e.children.props)}}),[]),(0,c.useEffect)((function(){return e.pauseOnFocusLoss&&function(){document.hasFocus()||_();window.addEventListener("focus",E),window.addEventListener("blur",_)}(),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",E),window.removeEventListener("blur",_))}}),[e.pauseOnFocusLoss]);var x={onMouseDown:T,onTouchStart:T,onMouseUp:C,onTouchEnd:C};return p&&v&&(x.onMouseEnter=_,x.onMouseLeave=E),b&&(x.onClick=function(e){y&&y(e),f.canCloseOnClick&&h()}),{playToast:E,pauseToast:_,isRunning:o,preventExitTransition:l,toastRef:d,eventHandlers:x}}function R(e){var t=e.closeToast,n=e.theme,o=e.ariaLabel,r=void 0===o?"close":o;return c.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":r},c.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},c.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function P(e){var t=e.delay,n=e.isRunning,r=e.closeToast,s=e.type,i=e.hide,l=e.className,d=e.style,f=e.controlledProgress,m=e.progress,p=e.rtl,v=e.isIn,h=e.theme,y=(0,a.Z)((0,a.Z)({},d),{},{animationDuration:t+"ms",animationPlayState:n?"running":"paused",opacity:i?0:1});f&&(y.transform="scaleX("+m+")");var b=u("Toastify__progress-bar",f?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+h,"Toastify__progress-bar--"+s,(0,o.Z)({},"Toastify__progress-bar--rtl",p)),T=g(l)?l({rtl:p,type:s,defaultClassName:b}):u(b,l),C=(0,o.Z)({},f&&m>=1?"onTransitionEnd":"onAnimationEnd",f&&m<1?null:function(){v&&r()});return c.createElement("div",(0,a.Z)({role:"progressbar","aria-hidden":i?"true":"false","aria-label":"notification timer",className:T,style:y},C))}P.defaultProps={type:C.DEFAULT,hide:!1};var j=function(e){var t=k(e),n=t.isRunning,r=t.preventExitTransition,s=t.toastRef,i=t.eventHandlers,l=e.closeButton,d=e.children,f=e.autoClose,m=e.onClick,p=e.type,v=e.hideProgressBar,h=e.closeToast,y=e.transition,b=e.position,T=e.className,C=e.style,E=e.bodyClassName,_=e.bodyStyle,O=e.progressClassName,N=e.progressStyle,x=e.updateId,I=e.role,L=e.progress,Z=e.rtl,w=e.toastId,j=e.deleteToast,A=e.isIn,M=e.isLoading,S=e.iconOut,F=e.theme,z=u("Toastify__toast","Toastify__toast-theme--"+F,"Toastify__toast--"+p,(0,o.Z)({},"Toastify__toast--rtl",Z)),B=g(T)?T({rtl:Z,position:b,type:p,defaultClassName:z}):u(z,T),D=!!L,H={closeToast:h,type:p,theme:F},U=null;return!1===l||(U=g(l)?l(H):c.isValidElement(l)?c.cloneElement(l,H):R(H)),c.createElement(y,{isIn:A,done:j,position:b,preventExitTransition:r,nodeRef:s},c.createElement("div",(0,a.Z)((0,a.Z)({id:w,onClick:m,className:B},i),{},{style:C,ref:s}),c.createElement("div",(0,a.Z)((0,a.Z)({},A&&{role:I}),{},{className:g(E)?E({type:p}):u("Toastify__toast-body",E),style:_}),null!=S&&c.createElement("div",{className:u("Toastify__toast-icon",(0,o.Z)({},"Toastify--animate-icon Toastify__zoom-enter",!M))},S),c.createElement("div",null,d)),U,(f||D)&&c.createElement(P,(0,a.Z)((0,a.Z)({},x&&!D?{key:"pb-"+x}:{}),{},{rtl:Z,theme:F,delay:f,isRunning:n,isIn:A,closeToast:h,hide:v,type:p,style:N,className:O,controlledProgress:D,progress:L}))))},A=E({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),M=(E({enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0}),E({enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"}),E({enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"}),(0,c.forwardRef)((function(e,t){var n=L(e),r=n.getToastToRender,s=n.containerRef,i=n.isToastActive,l=e.className,d=e.style,f=e.rtl,m=e.containerId;function p(e){var t=u("Toastify__toast-container","Toastify__toast-container--"+e,(0,o.Z)({},"Toastify__toast-container--rtl",f));return g(l)?l({position:e,rtl:f,defaultClassName:t}):u(t,h(l))}return(0,c.useEffect)((function(){t&&(t.current=s.current)}),[]),c.createElement("div",{ref:s,className:"Toastify",id:m},r((function(e,t){var n=t.length?(0,a.Z)({},d):(0,a.Z)((0,a.Z)({},d),{},{pointerEvents:"none"});return c.createElement("div",{className:p(e),style:n,key:"container-"+e},t.map((function(e,n){var o=e.content,r=e.props;return c.createElement(j,(0,a.Z)((0,a.Z)({},r),{},{isIn:i(r.toastId),style:(0,a.Z)((0,a.Z)({},r.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-"+r.key}),o)})))})))})));M.displayName="ToastContainer",M.defaultProps={position:T.TOP_RIGHT,transition:A,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:R,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var S,F=new Map,z=[];function B(){return Math.random().toString(36).substring(2,9)}function D(e){return e&&(v(e.toastId)||m(e.toastId))?e.toastId:B()}function H(e,t){return F.size>0?O.emit(0,e,t):z.push({content:e,options:t}),t.toastId}function U(e,t){return(0,a.Z)((0,a.Z)({},t),{},{type:t&&t.type||e,toastId:D(t)})}function q(e){return function(t,n){return H(t,U(e,n))}}function V(e,t){return H(e,U(C.DEFAULT,t))}V.loading=function(e,t){return H(e,U(C.DEFAULT,(0,a.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},V.promise=function(e,t,n){var o,r=t.pending,s=t.error,i=t.success;r&&(o=v(r)?V.loading(r,n):V.loading(r.render,(0,a.Z)((0,a.Z)({},n),r)));var c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},l=function(e,t,r){if(null!=t){var s=(0,a.Z)((0,a.Z)((0,a.Z)({type:e},c),n),{},{data:r}),i=v(t)?{render:t}:t;return o?V.update(o,(0,a.Z)((0,a.Z)({},s),i)):V(i.render,(0,a.Z)((0,a.Z)({},s),i)),r}V.dismiss(o)},u=g(e)?e():e;return u.then((function(e){return l("success",i,e)})).catch((function(e){return l("error",s,e)})),u},V.success=q(C.SUCCESS),V.info=q(C.INFO),V.error=q(C.ERROR),V.warning=q(C.WARNING),V.warn=V.warning,V.dark=function(e,t){return H(e,U(C.DEFAULT,(0,a.Z)({theme:"dark"},t)))},V.dismiss=function(e){F.size>0?O.emit(1,e):z=z.filter((function(t){return y(e)&&t.options.toastId!==e}))},V.clearWaitingQueue=function(e){return void 0===e&&(e={}),O.emit(5,e)},V.isActive=function(e){var t=!1;return F.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},V.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=F.get(n||S);return o?o.getToast(e):null}(e,t);if(n){var o=n.props,r=n.content,s=(0,a.Z)((0,a.Z)((0,a.Z)({},o),t),{},{toastId:t.toastId||e,updateId:B()});s.toastId!==e&&(s.staleId=e);var i=s.render||r;delete s.render,H(i,s)}}),0)},V.done=function(e){V.update(e,{progress:1})},V.onChange=function(e){return O.on(4,e),function(){O.off(4,e)}},V.POSITION=T,V.TYPE=C,O.on(2,(function(e){S=e.containerId||e,F.set(S,e),z.forEach((function(e){O.emit(0,e.content,e.options)})),z=[]})).on(3,(function(e){F.delete(e.containerId||e),0===F.size&&O.off(0).off(1).off(5)}));var Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")},Y=function(e){return V.error(e,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})},G=n(9782),W=function(){var e=(0,G.wY)().data,t=(0,G.Tn)(),n=(0,r.Z)(t,2),o=n[0],a=n[1],s=a.isError,i=a.isLoading,l=a.isSuccess,u=(0,c.useState)(""),d=(0,r.Z)(u,2),f=d[0],m=d[1],p=(0,c.useState)(""),v=(0,r.Z)(p,2),g=v[0],h=v[1];(0,c.useEffect)((function(){var e;l&&(e="Contact added",V.success(e,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"}),y())}),[l]),(0,c.useEffect)((function(){s&&Y("Ups! Something was wrong")}),[s]);var y=function(){m(""),h("")};return{name:f,number:g,handleAddContact:function(t){if(t.preventDefault(),e.map((function(e){return e.name})).some((function(e){return e.toLowerCase()===f.toLowerCase()})))return Y("".concat(f," is already in contacts"));var n={id:Q(),name:f.trim(),number:g};o(n)},handleChangeInput:function(e){var t=e.currentTarget,n=t.name,o=t.value;switch(n){case"name":m(o);break;case"number":h(o);break;default:return}},isLoading:i}},J={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},X=c.createContext&&c.createContext(J),K=function(){return K=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},K.apply(this,arguments)},$=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};function ee(e){return e&&e.map((function(e,t){return c.createElement(e.tag,K({key:t},e.attr),ee(e.child))}))}function te(e){return function(t){return c.createElement(ne,K({attr:K({},e.attr)},t),ee(e.child))}}function ne(e){var t=function(t){var n,o=e.attr,r=e.size,a=e.title,s=$(e,["attr","size","title"]),i=r||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),c.createElement("svg",K({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:n,style:K(K({color:e.color||t.color},t.style),e.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),a&&c.createElement("title",null,a),e.children)};return void 0!==X?c.createElement(X.Consumer,null,(function(e){return t(e)})):t(J)}function oe(e){return te({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{opacity:"0.2",fillRule:"evenodd",clipRule:"evenodd",d:"M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",fill:"currentColor"}},{tag:"path",attr:{d:"M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z",fill:"currentColor"}}]})(e)}var re="Spinner_spinner__H2HDD",ae=n(184),se=function(e){var t=e.size;return(0,ae.jsx)(oe,{size:t,className:re})},ie="ContactForm_form__zqkUM",ce="ContactForm_label__eteY1",le="ContactForm_input__dh-Pq",ue="ContactForm_submit_btn__itdRw",de=function(){var e=W(),t=e.name,n=e.number,o=e.handleAddContact,r=e.handleChangeInput,a=e.isLoading;return(0,ae.jsxs)("form",{onSubmit:o,className:ie,children:[(0,ae.jsxs)("label",{className:ce,children:["Name",(0,ae.jsx)("input",{type:"text",name:"name",className:le,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:r,value:t,autoFocus:!0})]}),(0,ae.jsxs)("label",{className:ce,children:["Number",(0,ae.jsx)("input",{type:"tel",name:"number",className:le,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:r,value:n})]}),(0,ae.jsxs)("button",{type:"submit",className:ue,disabled:""===t,children:["Add contact",a&&(0,ae.jsx)(se,{size:20})]})]})},fe=n(5048),me=n(4808),pe="Filter_label__CLSp2",ve="Filter_inputName__+ieaM",ge=function(){var e=(0,fe.I0)(),t=(0,fe.v9)((function(e){return e.filter.value}));return(0,ae.jsxs)("label",{className:pe,children:["Find contacts by name",(0,ae.jsx)("input",{type:"text",name:"filter",className:ve,title:"Enter search name",onChange:function(t){e((0,me.T)(t.currentTarget.value))},value:t})]})},he="ContactItem_item__3J6JV",ye="ContactItem_itemName__UzwZg",be="ContactItem_itemNumber__OenlF",Te="ContactItem_delete_btn__7uAc7",Ce=function(e){var t=e.contact,n=t.id,o=t.name,a=t.number,s=(0,G.Nt)(),i=(0,r.Z)(s,2),c=i[0],l=i[1].isLoading;return(0,ae.jsxs)("li",{className:he,children:[(0,ae.jsxs)("span",{className:ye,children:[o,":"]}),(0,ae.jsx)("span",{className:be,children:a}),(0,ae.jsx)("button",{type:"button",onClick:function(){return c(n)},className:Te,disabled:l,children:l?(0,ae.jsx)(se,{size:20}):"x"})]})},Ee="ContactList_list__lJuMM",_e="ContactList_error__hlnhE",Oe=function(){var e=(0,G.wY)(),t=e.data,n=e.error,o=e.isLoading,r=e.refetch,a=(0,fe.v9)((function(e){return e.filter.value})),s=function(){var e=a.toLowerCase().trim();return null===t||void 0===t?void 0:t.filter((function(t){return t.name.toLowerCase().includes(e)}))}();return(0,c.useEffect)((function(){r()}),[r]),(0,ae.jsxs)(ae.Fragment,{children:[o&&(0,ae.jsx)("div",{className:Ee,children:"Loading..."}),t&&(0,ae.jsx)("ul",{className:Ee,children:0!==s.length?s.map((function(e){return(0,ae.jsx)(Ce,{contact:e},e.id)})):(0,ae.jsx)("li",{className:_e,children:"Not found name"})}),n&&(0,ae.jsx)("p",{children:"Ups, something was wrong! Reload page, please"})]})},Ne=n(7628),xe=function(){return(0,ae.jsx)(ae.Fragment,{children:(0,ae.jsxs)("div",{children:[(0,ae.jsx)("h1",{className:Ne.Z.title,children:"Phonebook"}),(0,ae.jsx)(de,{}),(0,ae.jsx)("h2",{className:Ne.Z.title,children:"Contacts"}),(0,ae.jsxs)("div",{className:Ne.Z.contact_list_container,children:[(0,ae.jsx)(ge,{}),(0,ae.jsx)(Oe,{})]}),(0,ae.jsx)(M,{})]})})}}}]);
//# sourceMappingURL=510.8834fcd1.chunk.js.map